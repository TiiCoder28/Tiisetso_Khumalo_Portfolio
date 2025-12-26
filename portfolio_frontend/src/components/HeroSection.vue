<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import Starfield from './space/Starfield.vue'

const heroRef = ref(null)
const nameRef = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)
const linksRef = ref(null)
const scanLineRef = ref(null)

onMounted(() => {
  // GSAP Timeline for entrance animations
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // Animate scan line
  gsap.to(scanLineRef.value, {
    y: '100vh',
    duration: 2,
    repeat: -1,
    ease: 'none',
    opacity: 0.3
  })

  // Main content animations
  tl.fromTo(
    nameRef.value,
    { opacity: 0, y: 50, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 1.2 }
  )
    .fromTo(
      titleRef.value,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(
      subtitleRef.value,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(
      linksRef.value?.children || [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
      '-=0.3'
    )

  // Floating animation for decorative elements
  gsap.to('.float-element', {
    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    stagger: 0.3
  })

  // Glitch effect on name (occasional)
  const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 5 })
  glitchTimeline
    .to(nameRef.value, { skewX: 5, duration: 0.1 })
    .to(nameRef.value, { skewX: -3, duration: 0.1 })
    .to(nameRef.value, { skewX: 0, duration: 0.1 })
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
  >
    <!-- Starfield Background -->
    <div class="absolute inset-0 w-full h-full">
      <Starfield :star-count="3000" :depth="800" />
    </div>

    <!-- Animated Background Grid -->
    <div class="absolute inset-0 w-full h-full grid-background opacity-30"></div>

    <!-- Scan Line Effect -->
    <div
      ref="scanLineRef"
      class="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none z-10"
      style="top: -10px"
    ></div>

    <!-- Floating Decorative Elements -->
    <div class="absolute top-20 left-10 float-element">
      <div class="w-20 h-20 border border-cyan-500/30 rotate-45 animate-pulse"></div>
    </div>
    <div class="absolute top-40 right-20 float-element">
      <div class="w-16 h-16 border-2 border-purple-500/40 rounded-full"></div>
    </div>
    <div class="absolute bottom-32 left-20 float-element">
      <div class="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm"></div>
    </div>
    <div class="absolute bottom-20 right-32 float-element">
      <svg class="w-24 h-24 text-cyan-500/20" viewBox="0 0 100 100">
        <polygon points="50,5 95,75 5,75" fill="none" stroke="currentColor" stroke-width="1" />
      </svg>
    </div>

    <!-- Corner Decorations -->
    <div class="absolute top-0 left-0 w-32 h-32">
      <div class="absolute top-4 left-4 w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
      <div class="absolute top-4 left-4 w-[2px] h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
    </div>
    <div class="absolute top-0 right-0 w-32 h-32">
      <div class="absolute top-4 right-4 w-16 h-[2px] bg-gradient-to-l from-purple-400 to-transparent"></div>
      <div class="absolute top-4 right-4 w-[2px] h-16 bg-gradient-to-b from-purple-400 to-transparent"></div>
    </div>
    <div class="absolute bottom-0 left-0 w-32 h-32">
      <div class="absolute bottom-4 left-4 w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
      <div class="absolute bottom-4 left-4 w-[2px] h-16 bg-gradient-to-t from-cyan-400 to-transparent"></div>
    </div>
    <div class="absolute bottom-0 right-0 w-32 h-32">
      <div class="absolute bottom-4 right-4 w-16 h-[2px] bg-gradient-to-l from-purple-400 to-transparent"></div>
      <div class="absolute bottom-4 right-4 w-[2px] h-16 bg-gradient-to-t from-purple-400 to-transparent"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
      <!-- Status Indicator -->
      <div class="flex items-center justify-center gap-2 mb-6">
        <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span class="text-xs text-cyan-400/80 tracking-[0.3em] uppercase font-medium">
          System Online • Johannesburg, South Africa
        </span>
      </div>

      <!-- Name -->
      <h1
        ref="nameRef"
        class="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider"
      >
        <span class="relative inline-block">
          <span class="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            TIISETSO
          </span>
          <span class="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent blur-lg opacity-50">
            TIISETSO
          </span>
        </span>
        <br />
        <span class="relative inline-block mt-2">
          <span class="relative z-10 text-white">
            KHUMALO
          </span>
          <span class="absolute inset-0 text-cyan-400 blur-md opacity-30">
            KHUMALO
          </span>
        </span>
      </h1>

      <!-- Title -->
      <div ref="titleRef" class="mb-4">
        <div class="inline-flex items-center gap-4 px-6 py-5 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm">
          <div class="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
          <h2 class="text-xl md:text-2xl lg:text-3xl font-light tracking-wide">
            <span class="text-cyan-400">Web </span>
            <span class="text-gray-400 mx-2">& </span>
            <span class="text-purple-400">AI Developer</span>
            <span class="text-gray-500 mx-3"> | </span>
            <span class="text-blue-400">AI Engineer</span>
          </h2>
          <div class="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-400"></div>
        </div>
      </div>

      <!-- Subtitle / Tagline -->
      <p
        ref="subtitleRef"
        class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 py-4 leading-relaxed"
      >
        Building intelligent systems that bridge
        <span class="text-cyan-400">cutting-edge AI</span> with
        <span class="text-purple-400">real-world impact</span>
      </p>

      <!-- Links & Contact -->
      <div ref="linksRef" class="flex flex-wrap items-center justify-center gap-4">
        <!-- GitHub -->
        <a
          href="https://github.com/TiiCoder28"
          target="_blank"
          class="group flex items-center gap-2 px-5 py-3 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
        >
          <svg class="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span class="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/tiisetso-khumalo-605725236/"
          target="_blank"
          class="group flex items-center gap-2 px-5 py-3 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
        >
          <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span class="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
        </a>

        <!-- Email -->
        <a
          href="mailto:tiisoh1998@gmail.com"
          class="group flex items-center gap-2 px-5 py-3 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
        >
          <svg class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span class="text-gray-300 group-hover:text-white transition-colors">Email</span>
        </a>

        <!-- Download CV Button -->
        <button
          class="group relative flex items-center gap-2 px-6 py-3 rounded-lg overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute inset-[1px] bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-colors"></div>
          <svg class="relative z-10 w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <span class="relative z-10 text-white font-medium">Download CV</span>
        </button>
      </div>

      <!-- Scroll Indicator -->
      <!-- <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-end gap-2">
        <span class="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <div class="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div class="w-1 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </div> -->
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e1a] pointer-events-none"></div>
  </section>
</template>

<style scoped>
/* Animated Grid Background */
.grid-background {
  background-image:
    linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

/* Glowing text effect */
.glow-text {
  text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
}
</style>
