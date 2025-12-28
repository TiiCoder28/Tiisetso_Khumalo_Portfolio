<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref(null)
let scene, camera, renderer, stars, animationId

const props = defineProps({
  starCount: {
    type: Number,
    default: 5000
  },
  speed: {
    type: Number,
    default: 0.5
  },
  depth: {
    type: Number,
    default: 1000
  }
})

const emit = defineEmits(['ready'])

const createStars = () => {
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(props.starCount * 3)
  const colors = new Float32Array(props.starCount * 3)
  const sizes = new Float32Array(props.starCount)

  for (let i = 0; i < props.starCount; i++) {
    const i3 = i * 3
    
    // Random position in a sphere
    const radius = Math.random() * props.depth + 100
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos((Math.random() * 2) - 1)
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = radius * Math.cos(phi)
    
    // Random star colors (white, blue-white, yellow, orange)
    const colorChoice = Math.random()
    if (colorChoice < 0.6) {
      // White/blue-white stars
      colors[i3] = 0.8 + Math.random() * 0.2
      colors[i3 + 1] = 0.8 + Math.random() * 0.2
      colors[i3 + 2] = 1.0
    } else if (colorChoice < 0.8) {
      // Yellow stars
      colors[i3] = 1.0
      colors[i3 + 1] = 0.9 + Math.random() * 0.1
      colors[i3 + 2] = 0.6 + Math.random() * 0.2
    } else {
      // Orange/red stars
      colors[i3] = 1.0
      colors[i3 + 1] = 0.5 + Math.random() * 0.3
      colors[i3 + 2] = 0.3 + Math.random() * 0.2
    }
    
    // Random sizes
    sizes[i] = Math.random() * 2 + 0.5
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  // Custom shader material for twinkling stars
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
    },
    vertexShader: `
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      varying float vSize;
      uniform float uTime;
      uniform float uPixelRatio;
      
      void main() {
        vColor = color;
        vSize = size;
        
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        
        // Twinkle effect
        float twinkle = sin(uTime * 2.0 + position.x * 0.01 + position.y * 0.01) * 0.5 + 0.5;
        
        gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z) * (0.5 + twinkle * 0.5);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vSize;
      
      void main() {
        // Circular star shape with glow
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        
        float intensity = 1.0 - (dist * 2.0);
        intensity = pow(intensity, 1.5);
        
        // Add glow
        float glow = exp(-dist * 4.0) * 0.5;
        
        gl_FragColor = vec4(vColor * (intensity + glow), intensity + glow);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })

  stars = new THREE.Points(geometry, material)
  scene.add(stars)
}

const init = () => {
  // Scene
  scene = new THREE.Scene()
  
  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    containerRef.value.clientWidth / containerRef.value.clientHeight,
    0.1,
    2000
  )
  camera.position.z = 0
  
  // Renderer
  renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true,
    powerPreference: 'high-performance'
  })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)
  
  createStars()
  
  emit('ready', { scene, camera, renderer })
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  
  // Update time uniform for twinkling
  if (stars) {
    stars.material.uniforms.uTime.value += 0.01
    stars.rotation.y += 0.0001
    stars.rotation.x += 0.00005
  }
  
  renderer.render(scene, camera)
}

const handleResize = () => {
  if (!containerRef.value) return
  
  camera.aspect = containerRef.value.clientWidth / containerRef.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
}

onMounted(() => {
  init()
  animate()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', handleResize)
  
  // Dispose geometry and materials
  if (stars) {
    stars.geometry.dispose()
    stars.material.dispose()
  }
  
  if (renderer) {
    const domElement = renderer.domElement
    renderer.dispose()
    renderer.forceContextLoss()
    renderer.domElement = null
    if (domElement && containerRef.value?.contains(domElement)) {
      containerRef.value.removeChild(domElement)
    }
  }
  
  scene = null
  camera = null
  renderer = null
  stars = null
})

// Expose for parent component control
defineExpose({ scene, camera, renderer, stars })
</script>

<template>
  <div ref="containerRef" class="absolute inset-0 w-full h-full"></div>
</template>
