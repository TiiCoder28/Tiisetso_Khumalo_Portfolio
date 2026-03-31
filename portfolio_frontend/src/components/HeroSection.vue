<script setup>
import { ref, onMounted } from 'vue'
import profileImage from '/dist/assets/TiisetsoKhumalo.jpg'
import { gsap } from 'gsap'
import Starfield from './space/Starfield.vue'

const heroRef = ref(null)
const introRef = ref(null)
const ctaPanelRef = ref(null)
const imagePanelRef = ref(null)
const linksRef = ref(null)
const scanLineRef = ref(null)

const pathToCV = '/dist/documents/Tiisetso_Khumalo_CV.pdf'

const viewCV = (path) => {
  window.open(path, '_blank')
}

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
    introRef.value,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1 }
  )
    .fromTo(
      ctaPanelRef.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(
      imagePanelRef.value,
      { opacity: 0, x: 50, scale: 0.96 },
      { opacity: 1, x: 0, scale: 1, duration: 1 },
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

  gsap.to('.hero-orbit', {
    rotate: 360,
    transformOrigin: 'center center',
    duration: 18,
    repeat: -1,
    ease: 'none',
  })
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen w-full overflow-hidden"
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

    <div class="relative z-20 mx-auto flex min-h-screen max-w-[1440px] items-center px-6 pb-16 pt-28 sm:px-10 lg:px-16">
      <div class="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(480px,1.05fr)] xl:gap-20">
        <div>
          <div ref="introRef" class="max-w-3xl">
            <div class="mb-12 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/65 px-4 py-2 backdrop-blur-md">
              <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Johannesburg, South Africa</span>
            </div>

            <p class="mb-4 mt-12 pt-4 text-sm font-semibold uppercase tracking-[0.38em] text-cyan-300/70">AI Developer • Engineer • Builder</p>

            <h1 class="font-orbitron text-5xl font-bold tracking-[0.08em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              <span class="bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500 bg-clip-text text-transparent">Tiisetso</span>
              <br>
              <span class="text-white">Khumalo</span>
            </h1>

            <div class="mt-6 inline-flex flex-wrap items-center gap-4 rounded-full border border-cyan-500/25 bg-slate-950/55 px-5 py-4 backdrop-blur-sm">
              <div class="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-purple-500"></div>
              <h2 class="text-lg font-light tracking-wide text-slate-100 sm:text-2xl lg:text-[1.7rem]">
                <span class="text-purple-300">AI Developer</span>
                <span class="mx-3 text-slate-600">|</span>
                <span class="text-sky-300">AI Engineer</span>
              </h2>
              <div class="h-6 w-1 rounded-full bg-gradient-to-b from-purple-500 to-cyan-300"></div>
            </div>

            <p class="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Building intelligent systems that bridge
              <span class="text-cyan-300"> cutting-edge AI </span>
              with
              <span class="text-purple-300"> real-world impact</span>, while documenting the projects, decisions, and lessons that shape my growth.
            </p>
          </div>

          <div ref="ctaPanelRef" class="mt-10 rounded-[2rem] border border-cyan-400/18 bg-slate-950/65 p-6 shadow-[0_0_60px_rgba(0,240,255,0.08)] backdrop-blur-md">
            <div class="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div class="max-w-2xl">
                <p class="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/70">Build Log</p>
                <h3 class="text-2xl font-semibold leading-tight text-white sm:text-3xl">Follow my journey through shipped work, project writeups, technical notes, and skill growth.</h3>
                <p class="mt-3 text-sm leading-7 text-slate-300 sm:text-base">A clear view into how I learn, what I build, and how I’m deepening my work across AI, ML, IoT, and engineering.</p>
              </div>

              <div class="flex w-full max-w-[280px] flex-col gap-3">
                <a
                  href="/blog"
                  class="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold"
                >
                  <span class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-90 transition-opacity group-hover:opacity-100"></span>
                  <span class="absolute inset-[1px] rounded-full bg-slate-900 transition-colors group-hover:bg-slate-800"></span>
                  <span class="relative z-10 text-white">Explore Build Log</span>
                </a>
                <button
                  v-on:click="viewCV(pathToCV)"
                  class="group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold"
                >
                  <span class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-90 transition-opacity group-hover:opacity-100"></span>
                  <span class="absolute inset-[1px] rounded-full bg-slate-900 transition-colors group-hover:bg-slate-800"></span>
                  <span class="relative z-10 text-white">Download CV</span>
                </button>
              </div>
            </div>
          </div>

          <div ref="linksRef" class="mt-8 flex flex-wrap items-center align-middle gap-4">
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

          </div>
        </div>

        <div ref="imagePanelRef" class="relative mx-auto w-full max-w-[620px]">
          <div class="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle,_rgba(0,240,255,0.18),_transparent_60%)] blur-3xl"></div>
          <div class="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/18"></div>
          <div class="hero-orbit absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-400/20"></div>

          <div class="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-slate-950/75 p-5 shadow-[0_0_90px_rgba(0,240,255,0.08)] backdrop-blur-md">
            <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,240,255,0.08),transparent_35%,rgba(168,85,247,0.08))]"></div>

            <div class="relative rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-5">
              <div class="absolute left-6 top-6 z-20 rounded-full border border-cyan-400/30 bg-slate-950/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-200">Building in public</div>

              <div class="relative mx-auto mt-12 flex h-[440px] w-[320px] items-center justify-center rounded-[2rem] border border-cyan-300/35 bg-[radial-gradient(circle_at_top,_rgba(0,240,255,0.18),_rgba(15,23,42,0.96)_55%)] p-3 shadow-[0_0_60px_rgba(0,240,255,0.15)] sm:h-[520px] sm:w-[380px]">
                <div class="absolute inset-0 rounded-[2rem] border-2 border-transparent bg-[linear-gradient(135deg,rgba(0,240,255,0.6),rgba(168,85,247,0.55))] opacity-70 blur-sm"></div>
                <img
                  :src="profileImage"
                  alt="Portrait of Tiisetso Khumalo"
                  class="relative z-10 h-full w-full rounded-[1.6rem] object-cover object-center"
                >
              </div>

              <div class="relative mt-6 grid gap-3 sm:grid-cols-3">
                <div class="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 text-center">
                  <p class="text-[11px] uppercase tracking-[0.28em] text-cyan-300/70">Focus</p>
                  <p class="mt-2 text-sm font-semibold text-white">AI Systems</p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 text-center">
                  <p class="text-[11px] uppercase tracking-[0.28em] text-cyan-300/70">Now Learning</p>
                  <p class="mt-2 text-sm font-semibold text-white">ML, IoT</p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 text-center">
                  <p class="text-[11px] uppercase tracking-[0.28em] text-cyan-300/70">Approach</p>
                  <p class="mt-2 text-sm font-semibold text-white">Build + Reflect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
