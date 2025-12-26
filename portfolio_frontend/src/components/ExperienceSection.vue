<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const timelineRef = ref(null)

const experiences = [
  {
    title: 'AI Developer & Full-Stack Engineer',
    company: 'Kion Consulting',
    period: 'Feb 2025 – Present',
    type: 'current',
    icon: '🤖',
    highlights: [
      'Built and deployed multiple AI-powered applications using OpenAI API, LangChain, and Agents SDK',
      'Implemented vector-based search and retrieval using FAISS and an in-house developed vectorstore',
      'Fine-tuned language models using OpenAI Fine-Tuning API with custom datasets',
      'Integrated chatbots and AI assistants into web applications using Vue.js, Python, and RESTful APIs',
      'Developed AI functionalities like text embedding, image & audio analysis using Whisper API'
    ]
  },
  {
    title: 'Developer Trainee',
    company: 'GirlCode',
    period: 'Sept 2024 – Sept 2025',
    type: 'training',
    icon: '👩‍💻',
    badge: 'SETA NQF Level 5 – Systems Development',
    highlights: [
      'Completed comprehensive system development program with practical full-stack training',
      'Built and maintained robust applications using FastAPI, Flask, and Vue.js + Vite',
      'Gained foundational experience in SDLC, database design, REST API development, and deployment'
    ]
  }
]

onMounted(() => {
  // Animate timeline items
  gsap.fromTo(
    '.timeline-item',
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      stagger: 0.3,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: timelineRef.value,
        start: 'top 80%'
      }
    }
  )

  // Animate the timeline line
  gsap.fromTo(
    '.timeline-line',
    { scaleY: 0 },
    {
      scaleY: 1,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: timelineRef.value,
        start: 'top 80%'
      }
    }
  )
})
</script>

<template>
  <section
    ref="sectionRef"
    id="experience"
    class="relative min-h-screen w-full py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
  >
    <!-- Background grid effect -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="i in 20" :key="i" 
        class="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }"
      ></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
          <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span class="text-cyan-400 text-sm tracking-widest uppercase">Career Path</span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <!-- Timeline -->
      <div ref="timelineRef" class="relative">
        <!-- Timeline Line -->
        <div class="timeline-line absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 transform md:-translate-x-1/2 origin-top"></div>

        <!-- Timeline Items -->
        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="timeline-item relative"
            :class="index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'"
          >
            <!-- Timeline Node -->
            <div 
              class="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 z-10"
              :class="exp.type === 'current' ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-purple-500 border-purple-500 shadow-lg shadow-purple-500/50'"
            >
              <div class="absolute inset-0 rounded-full animate-ping opacity-30"
                :class="exp.type === 'current' ? 'bg-cyan-400' : 'bg-purple-500'"
              ></div>
            </div>

            <!-- Content Card -->
            <div 
              class="ml-8 md:ml-0 p-6 md:p-8 bg-slate-800/60 backdrop-blur-sm rounded-2xl border w-full md:w-[95%] transition-all duration-300 hover:shadow-xl group"
              :class="[
                index % 2 === 0 ? 'md:mr-4' : 'md:ml-4',
                exp.type === 'current' ? 'border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-cyan-500/20' : 'border-purple-500/30 hover:border-purple-400/60 hover:shadow-purple-500/20'
              ]"
            >
              <!-- Header -->
              <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div class="flex items-center gap-3 mb-2">
                    <span class="text-3xl">{{ exp.icon }}</span>
                    <h3 class="text-xl md:text-2xl font-bold text-white">{{ exp.title }}</h3>
                  </div>
                  <p class="text-lg md:text-xl" :class="exp.type === 'current' ? 'text-cyan-400' : 'text-purple-400'">
                    {{ exp.company }}
                  </p>
                </div>
                <div class="flex flex-col items-end gap-2">
                  <span class="px-3 py-1 text-sm rounded-full bg-slate-700/50 text-gray-300 border border-gray-600/30">
                    {{ exp.period }}
                  </span>
                  <span 
                    v-if="exp.type === 'current'"
                    class="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30"
                  >
                    ● Current
                  </span>
                </div>
              </div>

              <!-- Badge -->
              <div v-if="exp.badge" class="mb-4">
                <span class="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  {{ exp.badge }}
                </span>
              </div>

              <!-- Highlights -->
              <ul class="space-y-3">
                <li 
                  v-for="(highlight, hIndex) in exp.highlights" 
                  :key="hIndex"
                  class="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors"
                >
                  <span class="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" :class="exp.type === 'current' ? 'bg-cyan-400' : 'bg-purple-400'"></span>
                  <span class="text-base md:text-lg">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-item {
  width: 100%;
}

@media (min-width: 768px) {
  .timeline-item:nth-child(odd) {
    padding-right: 52%;
    display: flex;
    justify-content: flex-end;
  }
  
  .timeline-item:nth-child(even) {
    padding-left: 52%;
    display: flex;
    justify-content: flex-start;
  }
}
</style>
