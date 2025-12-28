<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref(null)
let scene, camera, renderer, animationId
let gridMesh, planetMesh, glowMesh

const props = defineProps({
  gridSize: {
    type: Number,
    default: 40
  },
  gridDivisions: {
    type: Number,
    default: 40
  },
  warpStrength: {
    type: Number,
    default: 3
  },
  planetSize: {
    type: Number,
    default: 2
  }
})

// Create the warped spacetime grid
const createSpacetimeGrid = () => {
  const geometry = new THREE.PlaneGeometry(
    props.gridSize, 
    props.gridSize, 
    props.gridDivisions, 
    props.gridDivisions
  )
  
  // Store original positions for animation
  const originalPositions = geometry.attributes.position.array.slice()
  geometry.userData.originalPositions = originalPositions
  
  // Custom shader for the grid with glow effect
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uWarpCenter: { value: new THREE.Vector2(0, 0) },
      uWarpStrength: { value: props.warpStrength },
      uGridColor: { value: new THREE.Color(0x00ffff) },
      uGlowColor: { value: new THREE.Color(0x8b5cf6) }
    },
    vertexShader: `
      uniform float uTime;
      uniform vec2 uWarpCenter;
      uniform float uWarpStrength;
      
      varying vec2 vUv;
      varying float vWarp;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        
        // Calculate distance from warp center
        vec2 pos2D = position.xy - uWarpCenter;
        float dist = length(pos2D);
        
        // Gravitational well effect - inverse square-ish falloff
        float warpFactor = uWarpStrength / (dist * dist + 1.0);
        
        // Create the dip in spacetime
        vec3 warped = position;
        warped.z = -warpFactor * 2.0;
        
        // Add subtle ripples
        warped.z += sin(dist * 2.0 - uTime * 0.5) * 0.1 * warpFactor;
        
        vWarp = warpFactor;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(warped, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uGridColor;
      uniform vec3 uGlowColor;
      
      varying vec2 vUv;
      varying float vWarp;
      varying vec3 vPosition;
      
      void main() {
        // Create grid pattern
        vec2 grid = abs(fract(vPosition.xy * 0.5) - 0.5);
        float line = min(grid.x, grid.y);
        float gridPattern = 1.0 - smoothstep(0.0, 0.05, line);
        
        // Color based on warp intensity
        vec3 color = mix(uGridColor, uGlowColor, vWarp * 0.5);
        
        // Increase brightness near warp center
        float glow = vWarp * 2.0;
        color += uGlowColor * glow * 0.3;
        
        // Fade edges
        float edgeFade = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x) *
                         smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.9, vUv.y);
        
        float alpha = gridPattern * (0.3 + glow * 0.2) * edgeFade;
        
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false
  })
  
  gridMesh = new THREE.Mesh(geometry, material)
  gridMesh.rotation.x = -Math.PI * 0.6 // Tilt to show the warp
  gridMesh.position.y = -3
  scene.add(gridMesh)
}

// Create the massive object causing the warp
const createPlanet = () => {
  // Main planet sphere
  const geometry = new THREE.SphereGeometry(props.planetSize, 64, 64)
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 }
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
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vec3 viewDir = normalize(cameraPosition - vPosition);
        float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
        
        // Dark core with bright rim
        vec3 coreColor = vec3(0.05, 0.05, 0.15);
        vec3 rimColor = vec3(0.3, 0.6, 1.0);
        vec3 glowColor = vec3(0.5, 0.2, 1.0);
        
        vec3 color = mix(coreColor, rimColor, fresnel);
        color += glowColor * fresnel * 0.5;
        
        // Subtle surface pattern
        float pattern = sin(vPosition.x * 10.0 + uTime * 0.2) * 
                       sin(vPosition.y * 10.0 + uTime * 0.3) * 
                       sin(vPosition.z * 10.0 + uTime * 0.1);
        color += vec3(0.0, 0.1, 0.2) * pattern * 0.1;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `
  })
  
  planetMesh = new THREE.Mesh(geometry, material)
  planetMesh.position.set(0, -1, 0)
  scene.add(planetMesh)
  
  // Glow around the planet
  const glowGeometry = new THREE.SphereGeometry(props.planetSize * 1.5, 32, 32)
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0x8b5cf6) }
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uColor;
      varying vec3 vNormal;
      
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        vec3 color = uColor * intensity;
        float pulse = sin(uTime * 2.0) * 0.1 + 0.9;
        gl_FragColor = vec4(color * pulse, intensity * 0.5);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    depthWrite: false
  })
  
  glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)
  glowMesh.position.set(0, -1, 0)
  scene.add(glowMesh)
}

// Create ambient particles (dust/stars)
const createParticles = () => {
  const particleCount = 200
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  
  const material = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x00ffff,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  })
  
  const particles = new THREE.Points(geometry, material)
  scene.add(particles)
}

const init = () => {
  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(
    60,
    containerRef.value.clientWidth / containerRef.value.clientHeight,
    0.1,
    100
  )
  camera.position.set(0, 6, 12)
  camera.lookAt(0, -2, 0)
  
  renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true 
  })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)
  
  createSpacetimeGrid()
  createPlanet()
  createParticles()
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  
  const time = performance.now() * 0.001
  
  // Update shader uniforms
  if (gridMesh) {
    gridMesh.material.uniforms.uTime.value = time
  }
  
  if (planetMesh) {
    planetMesh.material.uniforms.uTime.value = time
    planetMesh.rotation.y = time * 0.1
  }
  
  if (glowMesh) {
    glowMesh.material.uniforms.uTime.value = time
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
  
  // Dispose geometries and materials
  if (gridMesh) {
    gridMesh.geometry.dispose()
    gridMesh.material.dispose()
  }
  if (planetMesh) {
    planetMesh.geometry.dispose()
    planetMesh.material.dispose()
  }
  if (glowMesh) {
    glowMesh.geometry.dispose()
    glowMesh.material.dispose()
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
})
</script>

<template>
  <div ref="containerRef" class="absolute inset-0 w-full h-full"></div>
</template>
