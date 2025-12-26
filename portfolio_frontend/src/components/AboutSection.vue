<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SpacetimeWarp from './space/SpacetimeWarp.vue'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const terminalRef = ref(null)
const highlightsRef = ref(null)

const highlights = [
  { value: '1+', label: 'Years Experience', icon: '⚡' },
  { value: '2', label: 'Microsoft Certs', icon: '🎖️' },
  { value: '3+', label: 'AI Projects', icon: '🤖' },
  { value: '10+', label: 'Junior Devs Trained in Python and Prompt engineering', icon: '👥' }
]

const terminalLines = [
  { prefix: '$', text: 'whoami', delay: 0 },
  { prefix: '>', text: 'Tiisetso Khumalo', delay: 0.5, isOutput: true },
  { prefix: '$', text: 'cat professional_summary.txt', delay: 1 },
  { prefix: '>', text: 'Innovative Web and AI Developer with expertise in', delay: 1.5, isOutput: true },
  { prefix: '>', text: 'LLMs, RAG systems, and AI-driven workflows.', delay: 2, isOutput: true },
  { prefix: '>', text: 'Building production-ready AI applications', delay: 2.5, isOutput: true },
  { prefix: '>', text: 'across all sectors.', delay: 3, isOutput: true },
  { prefix: '$', text: 'echo $STATUS', delay: 3.5 },
  { prefix: '>', text: '🟢 Available for opportunities', delay: 4, isOutput: true, highlight: true }
]

const visibleLines = ref([])

onMounted(() => {
  // Animate terminal lines appearing
  terminalLines.forEach((line, index) => {
    gsap.delayedCall(line.delay, () => {
      visibleLines.value.push(line)
    })
  })

  // Scroll-triggered animations
  gsap.fromTo(
    sectionRef.value,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1
      }
    }
  )

  // Animate highlight cards
  gsap.fromTo(
    '.highlight-card',
    { opacity: 0, y: 50, scale: 0.9 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: highlightsRef.value,
        start: 'top 85%'
      }
    }
  )
})
</script>

<template>
  <section
    ref="sectionRef"
    id="about"
    class="relative min-h-screen w-full pt-16 pb-32 px-4 md:px-8 overflow-hidden"
  >
    <!-- Spacetime Warp Background - positioned lower to be visible -->
    <div class="absolute inset-x-0 bottom-0 w-full h-[70%]">
      <SpacetimeWarp :warp-strength="5" :planet-size="2" />
    </div>

    <!-- Dark overlay for readability - lighter at bottom to show planet -->
    <div class="absolute items-center inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto justify-center flex flex-col items-center">
      <!-- Section Header -->
      <div class="text-center items-center mb-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
          <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span class="text-cyan-400 text-sm tracking-widest uppercase">System Profile</span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text items-center justify-center text-transparent">
            About Me
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <!-- Main Content - Stacked vertically -->
      <div class="flex flex-col gap-8 w-full max-w-5xl mx-auto">
        
        <!-- Terminal Card - Full Width at Top -->
        <div
          ref="terminalRef"
          class="relative group w-full"
        >
          <!-- Terminal Window -->
          <div class="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 overflow-hidden shadow-2xl shadow-cyan-500/10">
            <!-- Terminal Header -->
            <div class="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-cyan-500/20">
              <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span class="ml-4 text-cyan-400/60 text-sm font-mono">tiisetso@portfolio:~</span>
            </div>
            
            <!-- Terminal Content -->
            <div class="p-6 md:p-8 font-mono text-base md:text-lg lg:text-xl">
              <div
                v-for="(line, index) in visibleLines"
                :key="index"
                class="mb-2 md:mb-3 flex items-start gap-3"
                :class="{ 'text-cyan-400': !line.isOutput, 'text-gray-300': line.isOutput && !line.highlight, 'text-green-400': line.highlight }"
              >
                <span class="text-purple-400 select-none">{{ line.prefix }}</span>
                <span :class="{ 'typing-effect': !line.isOutput }">{{ line.text }}</span>
              </div>
              <!-- Blinking cursor -->
              <div class="flex items-center gap-2 text-cyan-400">
                <span class="text-purple-400">$</span>
                <span class="w-2 h-5 bg-cyan-400 animate-pulse"></span>
              </div>
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 border border-cyan-500/20 rounded-lg rotate-12 -z-10"></div>
          <div class="absolute -bottom-4 -left-4 w-32 h-32 border border-purple-500/20 rounded-full -z-10"></div>
        </div>

        <!-- Stats Row - 4 Cards Side by Side -->
        <div ref="highlightsRef" class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="(item, index) in highlights"
            :key="index"
            class="highlight-card group relative p-4 md:p-6 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
          >
            <!-- Hover glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300"></div>
            
            <div class="relative text-center">
              <span class="text-2xl md:text-3xl mb-2 block">{{ item.icon }}</span>
              <div class="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                {{ item.value }}
              </div>
              <div class="text-gray-400 text-xs md:text-sm uppercase tracking-wider leading-tight">
                {{ item.label }}
              </div>
            </div>

            <!-- Corner accent -->
            <div class="absolute top-0 right-0 w-6 h-6">
              <div class="absolute top-1.5 right-1.5 w-3 h-[1px] bg-cyan-400/50"></div>
              <div class="absolute top-1.5 right-1.5 w-[1px] h-3 bg-cyan-400/50"></div>
            </div>
          </div>
        </div>

        <!-- Quick Facts - Full Width at Bottom -->
        <div class="p-6 md:p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl border border-purple-500/20">
          <h3 class="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-3">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Quick Facts
          </h3>
          <div class="grid md:grid-cols-2 gap-3 text-gray-300 text-base md:text-lg">
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></span>
              Based in Johannesburg, South Africa
            </div>
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></span>
              BSc Mathematics & Computer Science (UNISA) - In progress
            </div>
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></span>
              Azure AI Engineer Associate Certified
            </div>
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></span>
              Specializing in AI, RAG systems & LLM integrations
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.typing-effect {
  overflow: hidden;
  animation: typing 0.5s steps(20, end);
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}
</style>
