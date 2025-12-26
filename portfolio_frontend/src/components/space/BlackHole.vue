<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'

const containerRef = ref(null)
let scene, camera, renderer, blackHole, accretionDisk, animationId
let composer, renderPass, effectPass

const props = defineProps({
  size: {
    type: Number,
    default: 5
  },
  intensity: {
    type: Number,
    default: 1
  },
  distortionStrength: {
    type: Number,
    default: 0.0
  }
})

const emit = defineEmits(['ready'])

// Create the black hole event horizon
const createEventHorizon = () => {
  const geometry = new THREE.SphereGeometry(props.size, 64, 64)
  
  // Custom shader for the event horizon
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uIntensity: { value: props.intensity }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uIntensity;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        // Rim lighting effect (light bending around the edge)
        vec3 viewDirection = normalize(cameraPosition - vPosition);
        float rimLight = 1.0 - max(dot(viewDirection, vNormal), 0.0);
        rimLight = pow(rimLight, 3.0) * uIntensity;
        
        // Deep black center with subtle blue rim
        vec3 rimColor = vec3(0.2, 0.5, 1.0) * rimLight * 0.3;
        vec3 coreColor = vec3(0.0, 0.0, 0.0);
        
        gl_FragColor = vec4(coreColor + rimColor, 1.0);
      }
    `,
    side: THREE.FrontSide
  })
  
  blackHole = new THREE.Mesh(geometry, material)
  scene.add(blackHole)
}

// Create the accretion disk (spinning matter around black hole)
const createAccretionDisk = () => {
  const innerRadius = props.size * 1.5
  const outerRadius = props.size * 4
  const geometry = new THREE.RingGeometry(innerRadius, outerRadius, 128, 64)
  
  // Custom shader for swirling, glowing accretion disk
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uInnerRadius: { value: innerRadius },
      uOuterRadius: { value: outerRadius }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uInnerRadius;
      uniform float uOuterRadius;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      // Noise function for turbulence
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      
      void main() {
        float dist = length(vPosition.xy);
        float normalizedDist = (dist - uInnerRadius) / (uOuterRadius - uInnerRadius);
        
        // Angle for spiral effect
        float angle = atan(vPosition.y, vPosition.x);
        
        // Spiral arms with time-based rotation
        float spiral = sin(angle * 3.0 - uTime * 2.0 + normalizedDist * 10.0) * 0.5 + 0.5;
        float spiral2 = sin(angle * 5.0 + uTime * 1.5 - normalizedDist * 15.0) * 0.5 + 0.5;
        
        // Add noise for turbulence
        float n = noise(vPosition.xy * 0.5 + uTime * 0.1);
        
        // Color gradient from hot inner (white/blue) to cooler outer (orange/red)
        vec3 innerColor = vec3(1.0, 0.9, 0.8); // Hot white
        vec3 midColor = vec3(1.0, 0.6, 0.2);   // Orange
        vec3 outerColor = vec3(0.8, 0.2, 0.1); // Red
        
        vec3 color;
        if (normalizedDist < 0.3) {
          color = mix(innerColor, midColor, normalizedDist / 0.3);
        } else {
          color = mix(midColor, outerColor, (normalizedDist - 0.3) / 0.7);
        }
        
        // Apply spiral pattern
        float pattern = mix(spiral, spiral2, 0.5) * (0.7 + n * 0.3);
        
        // Intensity falls off at edges
        float edgeFade = smoothstep(0.0, 0.1, normalizedDist) * smoothstep(1.0, 0.8, normalizedDist);
        
        // Doppler effect (brighter on approaching side)
        float doppler = 1.0 + sin(angle + uTime) * 0.3;
        
        float alpha = pattern * edgeFade * doppler;
        
        gl_FragColor = vec4(color * (1.0 + pattern * 0.5), alpha * 0.9);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    depthWrite: false
  })
  
  accretionDisk = new THREE.Mesh(geometry, material)
  accretionDisk.rotation.x = Math.PI * 0.4 // Tilt the disk
  scene.add(accretionDisk)
  
  // Add glow ring
  const glowGeometry = new THREE.RingGeometry(innerRadius * 0.9, outerRadius * 1.2, 64, 1)
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(1.0, 0.5, 0.2) }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColor;
      varying vec2 vUv;
      
      void main() {
        float dist = abs(vUv.y - 0.5) * 2.0;
        float glow = exp(-dist * 3.0) * 0.5;
        gl_FragColor = vec4(uColor, glow * 0.3);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    depthWrite: false
  })
  
  const glowRing = new THREE.Mesh(glowGeometry, glowMaterial)
  glowRing.rotation.x = Math.PI * 0.4
  scene.add(glowRing)
}

// Create gravitational lensing effect (light bending)
const createLensingEffect = () => {
  // This creates a distortion sphere around the black hole
  const geometry = new THREE.SphereGeometry(props.size * 3, 32, 32)
  
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uDistortion: { value: props.distortionStrength }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uDistortion;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      
      void main() {
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        float rim = 1.0 - abs(dot(viewDir, vNormal));
        rim = pow(rim, 2.0);
        
        // Subtle lensing visualization
        float lens = rim * uDistortion * 0.1;
        
        gl_FragColor = vec4(vec3(0.3, 0.6, 1.0) * lens, lens * 0.2);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    depthWrite: false
  })
  
  const lensSphere = new THREE.Mesh(geometry, material)
  scene.add(lensSphere)
}

const init = () => {
  // Scene
  scene = new THREE.Scene()
  
  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    containerRef.value.clientWidth / containerRef.value.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 30
  
  // Renderer
  renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true,
    powerPreference: 'high-performance'
  })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)
  
  createEventHorizon()
  createAccretionDisk()
  createLensingEffect()
  
  emit('ready', { scene, camera, renderer, blackHole, accretionDisk })
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  
  const time = performance.now() * 0.001
  
  // Update uniforms
  if (blackHole) {
    blackHole.material.uniforms.uTime.value = time
    blackHole.rotation.y += 0.001
  }
  
  if (accretionDisk) {
    accretionDisk.material.uniforms.uTime.value = time
  }
  
  // Update all materials with time
  scene.traverse((child) => {
    if (child.material && child.material.uniforms && child.material.uniforms.uTime) {
      child.material.uniforms.uTime.value = time
    }
  })
  
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
  
  if (renderer) {
    renderer.dispose()
    containerRef.value?.removeChild(renderer.domElement)
  }
})

// Watch for distortion changes (for scroll-based effects)
watch(() => props.distortionStrength, (newVal) => {
  scene?.traverse((child) => {
    if (child.material?.uniforms?.uDistortion) {
      child.material.uniforms.uDistortion.value = newVal
    }
  })
})

defineExpose({ scene, camera, renderer, blackHole, accretionDisk })
</script>

<template>
  <div ref="containerRef" class="absolute inset-0 w-full h-full"></div>
</template>
