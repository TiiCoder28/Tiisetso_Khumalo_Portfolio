<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'

const containerRef = ref(null)
let scene, camera, renderer, wormhole, animationId
let tunnelMesh, innerGlow

const props = defineProps({
  progress: {
    type: Number,
    default: 0 // 0 = entrance, 1 = exit
  },
  speed: {
    type: Number,
    default: 1
  },
  active: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['ready', 'complete'])

// Create the wormhole tunnel
const createWormholeTunnel = () => {
  // Create a curved path for the tunnel
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 50),
    new THREE.Vector3(0, 0, 25),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, -25),
    new THREE.Vector3(0, 0, -50),
    new THREE.Vector3(0, 0, -100),
    new THREE.Vector3(0, 0, -200)
  ])
  
  // Tunnel geometry
  const tubeGeometry = new THREE.TubeGeometry(curve, 200, 15, 32, false)
  
  // Wormhole shader material
  const tunnelMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uColorA: { value: new THREE.Color(0x00ffff) }, // Cyan
      uColorB: { value: new THREE.Color(0xff00ff) }, // Magenta
      uColorC: { value: new THREE.Color(0xffaa00) }  // Orange
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPosition;
      varying vec3 vNormal;
      
      void main() {
        vUv = uv;
        vPosition = position;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uProgress;
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform vec3 uColorC;
      
      varying vec2 vUv;
      varying vec3 vPosition;
      varying vec3 vNormal;
      
      // Simplex noise
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      
      float noise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        
        i = mod289(i);
        vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        
        vec4 norm = inversesqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }
      
      void main() {
        // Flowing energy streams
        float n1 = noise(vec3(vUv * 10.0, uTime * 0.5));
        float n2 = noise(vec3(vUv * 20.0, uTime * 0.3 + 100.0));
        
        // Spiral pattern
        float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
        float spiral = sin(angle * 8.0 + vUv.x * 30.0 - uTime * 3.0) * 0.5 + 0.5;
        
        // Radial energy waves
        float wave = sin(vUv.x * 50.0 - uTime * 5.0) * 0.5 + 0.5;
        
        // Color mixing based on position
        vec3 color = mix(uColorA, uColorB, vUv.x + n1 * 0.3);
        color = mix(color, uColorC, spiral * 0.5);
        
        // Intensity
        float intensity = (wave * 0.5 + spiral * 0.3 + n2 * 0.2);
        intensity *= smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x);
        
        // Edge glow
        float edgeGlow = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
        
        gl_FragColor = vec4(color * intensity * 1.5, intensity * 0.8 + edgeGlow * 0.3);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    depthWrite: false
  })
  
  tunnelMesh = new THREE.Mesh(tubeGeometry, tunnelMaterial)
  scene.add(tunnelMesh)
  
  // Inner glow/energy core
  const innerGeometry = new THREE.TubeGeometry(curve, 200, 2, 16, false)
  const innerMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 }
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
      varying vec2 vUv;
      
      void main() {
        float pulse = sin(vUv.x * 100.0 - uTime * 10.0) * 0.5 + 0.5;
        vec3 color = vec3(1.0, 1.0, 1.0);
        float alpha = pulse * 0.5 * smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x);
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })
  
  innerGlow = new THREE.Mesh(innerGeometry, innerMaterial)
  scene.add(innerGlow)
  
  // Particle streams through the tunnel
  createTunnelParticles(curve)
}

// Particles flowing through the wormhole
const createTunnelParticles = (curve) => {
  const particleCount = 1000
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  const velocities = new Float32Array(particleCount)
  
  for (let i = 0; i < particleCount; i++) {
    const t = Math.random()
    const point = curve.getPointAt(t)
    const offset = new THREE.Vector3(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      0
    )
    
    positions[i * 3] = point.x + offset.x
    positions[i * 3 + 1] = point.y + offset.y
    positions[i * 3 + 2] = point.z
    
    velocities[i] = Math.random() * 0.5 + 0.5
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
      varying float vVelocity;
      
      void main() {
        vVelocity = velocity;
        
        vec3 pos = position;
        pos.z = mod(pos.z + uTime * velocity * 50.0, 250.0) - 50.0;
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 3.0 * uPixelRatio * (100.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying float vVelocity;
      
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        
        float alpha = 1.0 - dist * 2.0;
        vec3 color = mix(vec3(0.0, 1.0, 1.0), vec3(1.0, 0.5, 1.0), vVelocity);
        
        gl_FragColor = vec4(color, alpha * 0.8);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })
  
  const particles = new THREE.Points(geometry, material)
  scene.add(particles)
}

const init = () => {
  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(
    90,
    containerRef.value.clientWidth / containerRef.value.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 50
  
  renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true,
    powerPreference: 'high-performance'
  })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)
  
  createWormholeTunnel()
  
  emit('ready', { scene, camera, renderer })
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  
  const time = performance.now() * 0.001
  
  // Update all shader uniforms
  scene.traverse((child) => {
    if (child.material?.uniforms?.uTime) {
      child.material.uniforms.uTime.value = time
    }
    if (child.material?.uniforms?.uProgress) {
      child.material.uniforms.uProgress.value = props.progress
    }
  })
  
  // Move camera through tunnel based on progress
  if (props.active) {
    camera.position.z = 50 - props.progress * 250
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
  
  // Dispose wormhole mesh
  if (wormhole) {
    wormhole.geometry?.dispose()
    wormhole.material?.dispose()
  }
  
  // Dispose all scene children
  scene?.traverse((child) => {
    if (child.geometry) child.geometry.dispose()
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach(m => m.dispose())
      } else {
        child.material.dispose()
      }
    }
  })
  
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

watch(() => props.progress, (newVal) => {
  if (newVal >= 1) {
    emit('complete')
  }
})

defineExpose({ scene, camera, renderer })
</script>

<template>
  <div ref="containerRef" class="absolute inset-0 w-full h-full"></div>
</template>
