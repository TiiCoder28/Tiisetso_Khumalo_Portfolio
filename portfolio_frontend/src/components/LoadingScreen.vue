<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { gsap } from 'gsap'

const containerRef = ref(null)
const loadingProgress = ref(0)
const isComplete = ref(false)

let scene, camera, renderer, animationId
let blackHole, accretionDisk, particles

const emit = defineEmits(['complete'])

const props = defineProps({
  duration: {
    type: Number,
    default: 3000 // milliseconds
  }
})

const createBlackHole = () => {
  // Event horizon
  const geometry = new THREE.SphereGeometry(2, 64, 64)
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
        float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
        rim = pow(rim, 4.0);
        
        vec3 rimColor = vec3(0.0, 0.8, 1.0) * rim * 0.5;
        
        gl_FragColor = vec4(rimColor, 1.0);
      }
    `
  })
  
  blackHole = new THREE.Mesh(geometry, material)
  scene.add(blackHole)
}

const createAccretionDisk = () => {
  const geometry = new THREE.RingGeometry(3, 8, 128, 32)
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uProgress: { value: 0 }
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
      uniform float uProgress;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        float dist = length(vPosition.xy);
        float normalizedDist = (dist - 3.0) / 5.0;
        
        float angle = atan(vPosition.y, vPosition.x);
        float spiral = sin(angle * 4.0 - uTime * 3.0 + normalizedDist * 8.0) * 0.5 + 0.5;
        
        // Color gradient
        vec3 innerColor = vec3(1.0, 0.9, 0.8);
        vec3 outerColor = vec3(1.0, 0.3, 0.1);
        vec3 color = mix(innerColor, outerColor, normalizedDist);
        
        // Loading progress effect - disk fills as it loads
        float progressAngle = uProgress * 3.14159 * 2.0 - 3.14159;
        float angleMask = smoothstep(progressAngle - 0.5, progressAngle, angle);
        
        float alpha = spiral * smoothstep(0.0, 0.1, normalizedDist) * smoothstep(1.0, 0.8, normalizedDist);
        alpha *= 0.8;
        
        gl_FragColor = vec4(color * (1.0 + spiral * 0.5), alpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    depthWrite: false
  })
  
  accretionDisk = new THREE.Mesh(geometry, material)
  accretionDisk.rotation.x = Math.PI * 0.35
  scene.add(accretionDisk)
}

const createParticles = () => {
  const particleCount = 500
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  const velocities = new Float32Array(particleCount)
  
  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = 10 + Math.random() * 20
    
    positions[i * 3] = Math.cos(angle) * radius
    positions[i * 3 + 1] = (Math.random() - 0.5) * 5
    positions[i * 3 + 2] = Math.sin(angle) * radius
    
    velocities[i] = 0.5 + Math.random() * 1.5
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 1))
  
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
    },
    vertexShader: `
      attribute float velocity;
      uniform float uTime;
      uniform float uPixelRatio;
      varying float vAlpha;
      
      void main() {
        vec3 pos = position;
        
        // Spiral inward
        float angle = atan(pos.z, pos.x);
        float dist = length(pos.xz);
        float newDist = max(2.0, dist - uTime * velocity * 2.0);
        float newAngle = angle + uTime * velocity * 0.5;
        
        pos.x = cos(newAngle) * newDist;
        pos.z = sin(newAngle) * newDist;
        pos.y *= (newDist / dist);
        
        vAlpha = smoothstep(2.0, 5.0, newDist);
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 2.0 * uPixelRatio * (50.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying float vAlpha;
      
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        
        vec3 color = vec3(1.0, 0.6, 0.3);
        float alpha = (1.0 - dist * 2.0) * vAlpha;
        
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })
  
  particles = new THREE.Points(geometry, material)
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
  camera.position.z = 15
  camera.position.y = 5
  camera.lookAt(0, 0, 0)
  
  renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true 
  })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)
  
  createBlackHole()
  createAccretionDisk()
  createParticles()
  
  // Animate loading progress
  gsap.to(loadingProgress, {
    value: 1,
    duration: props.duration / 1000,
    ease: 'power2.inOut',
    onComplete: () => {
      isComplete.value = true
      
      // Zoom into black hole
      gsap.to(camera.position, {
        z: 0,
        y: 0,
        duration: 1,
        ease: 'power2.in',
        onComplete: () => {
          emit('complete')
        }
      })
    }
  })
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  
  const time = performance.now() * 0.001
  
  if (blackHole) {
    blackHole.material.uniforms.uTime.value = time
    blackHole.rotation.y += 0.005
  }
  
  if (accretionDisk) {
    accretionDisk.material.uniforms.uTime.value = time
    accretionDisk.material.uniforms.uProgress.value = loadingProgress.value
  }
  
  if (particles) {
    particles.material.uniforms.uTime.value = time * 0.3
  }
  
  // Subtle camera movement
  camera.position.x = Math.sin(time * 0.2) * 0.5
  camera.lookAt(0, 0, 0)
  
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
  
  // Dispose all geometries and materials
  if (blackHole) {
    blackHole.geometry.dispose()
    blackHole.material.dispose()
  }
  if (accretionDisk) {
    accretionDisk.geometry.dispose()
    accretionDisk.material.dispose()
  }
  if (particles) {
    particles.geometry.dispose()
    particles.material.dispose()
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
  <div class="fixed inset-0 z-50 bg-black flex items-center justify-center">
    <!-- Three.js Canvas -->
    <div ref="containerRef" class="absolute inset-0"></div>
    
    <!-- Loading UI Overlay -->
    <div class="relative z-10 text-center">
      <!-- Title -->
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-8 tracking-wider">
        <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          ENTERING INTO TIISETSO'S UNIVERSE
        </span>
      </h1>
      
      <!-- Progress Ring -->
      <!--div class="relative w-32 h-32 mx-auto mb-8">
        <svg class="w-full h-full transform -rotate-90" -->
          <!-- Background ring -->
          <!-- <circle
            cx="64"
            cy="64"
            r="58"
            stroke="rgba(0, 255, 255, 0.2)"
            stroke-width="4"
            fill="none"
          /> -->
          <!-- Progress ring -->
          <!-- <circle
            cx="64"
            cy="64"
            r="58"
            stroke="url(#gradient)"
            stroke-width="4"
            fill="none"
            stroke-linecap="round"
            :stroke-dasharray="364"
            :stroke-dashoffset="364 - (364 * loadingProgress)"
            class="transition-all duration-100"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00ffff" />
              <stop offset="50%" stop-color="#8b5cf6" />
              <stop offset="100%" stop-color="#ff00ff" />
            </linearGradient>
          </defs>
        </svg> -->
        
        <!-- Percentage -->
        <!-- <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-2xl font-mono text-cyan-400">
            {{ Math.round(loadingProgress * 100) }}%
          </span>
        </div> -->
      <!-- </div> -->
      
      <!-- Loading text -->
      <p class="text-cyan-400/80 text-sm tracking-widest uppercase animate-pulse">
        {{ isComplete ? 'Initializing...' : 'Loading Portfolio' }}
      </p>
      
      <!-- Decorative lines -->
      <div class="flex justify-center gap-2 mt-6">
        <div 
          v-for="i in 5" 
          :key="i"
          class="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-300"
          :style="{
            width: loadingProgress > (i - 1) * 0.2 ? '24px' : '8px',
            opacity: loadingProgress > (i - 1) * 0.2 ? 1 : 0.3
          }"
        ></div>
      </div>
    </div>
  </div>
</template>
