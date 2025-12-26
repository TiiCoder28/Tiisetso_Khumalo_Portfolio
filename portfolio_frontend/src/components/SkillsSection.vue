<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const skillsGridRef = ref(null)

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: '🧠',
    color: 'cyan',
    skills: [
      { name: 'LLM Integration (OpenAI)', level: 90 },
      { name: 'RAG Systems', level: 85 },
      { name: 'Prompt Engineering', level: 95 },
      { name: 'Fine-tuning & Evaluation', level: 80 },
      { name: 'Agentic Workflows', level: 85 }
    ]
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    color: 'purple',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'FastAPI', level: 88 },
      { name: 'Flask / Django', level: 75 },
      { name: 'RESTful API Design', level: 85 },
      { name: 'Database Architecture', level: 80 }
    ]
  },
  {
    title: 'Frontend Development',
    icon: '🎨',
    color: 'blue',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'Vue.js', level: 82 },
      { name: 'HTML/CSS', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Responsive Design', level: 80 }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: 'green',
    skills: [
      { name: 'AWS EC2', level: 78 },
      { name: 'Linux Administration', level: 75 },
      { name: 'Nginx', level: 72 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'CI/CD Pipelines', level: 70 }
    ]
  }
]

const certifications = [
  {
    title: 'Azure AI Engineer Associate',
    code: 'AI-102',
    icon: '🎖️',
    issuer: 'Microsoft',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    title: 'Security, Compliance & Identity',
    code: 'SC-900',
    icon: '🛡️',
    issuer: 'Microsoft',
    color: 'from-purple-400 to-pink-500'
  }
]

onMounted(() => {
  // Animate skill cards on scroll
  gsap.fromTo(
    '.skill-card',
    { opacity: 0, y: 60, rotateX: -15 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: skillsGridRef.value,
        start: 'top 80%'
      }
    }
  )

  // Animate progress bars
  gsap.fromTo(
    '.skill-progress',
    { width: '0%' },
    {
      width: (i, el) => el.dataset.level + '%',
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.05,
      scrollTrigger: {
        trigger: skillsGridRef.value,
        start: 'top 70%'
      }
    }
  )

  // Animate certifications
  gsap.fromTo(
    '.cert-card',
    { opacity: 0, scale: 0.8, rotateY: -20 },
    {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.certifications-container',
        start: 'top 85%'
      }
    }
  )
})

const getColorClasses = (color) => {
  const colors = {
    cyan: {
      border: 'border-cyan-500/30 hover:border-cyan-400/60',
      bg: 'from-cyan-500/10 to-cyan-500/5',
      text: 'text-cyan-400',
      progress: 'from-cyan-400 to-cyan-600',
      glow: 'shadow-cyan-500/20'
    },
    purple: {
      border: 'border-purple-500/30 hover:border-purple-400/60',
      bg: 'from-purple-500/10 to-purple-500/5',
      text: 'text-purple-400',
      progress: 'from-purple-400 to-purple-600',
      glow: 'shadow-purple-500/20'
    },
    blue: {
      border: 'border-blue-500/30 hover:border-blue-400/60',
      bg: 'from-blue-500/10 to-blue-500/5',
      text: 'text-blue-400',
      progress: 'from-blue-400 to-blue-600',
      glow: 'shadow-blue-500/20'
    },
    green: {
      border: 'border-green-500/30 hover:border-green-400/60',
      bg: 'from-green-500/10 to-green-500/5',
      text: 'text-green-400',
      progress: 'from-green-400 to-green-600',
      glow: 'shadow-green-500/20'
    }
  }
  return colors[color] || colors.cyan
}
</script>

<template>
  <section
    ref="sectionRef"
    id="skills"
    class="relative min-h-screen w-full py-20 px-4 md:px-8 overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
    
    <!-- Animated particles background -->
    <div class="absolute inset-0">
      <div class="absolute top-1/3 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div class="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style="animation-delay: 2s;"></div>
    </div>

    <!-- Hexagon pattern -->
    <div class="absolute inset-0 opacity-5" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2228%22 height=%2249%22 viewBox=%220 0 28 49%22><g fill-rule=%22evenodd%22><g fill=%22%2300ffff%22 fill-rule=%22nonzero%22><path d=%22M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z%22/></g></g></svg>');"></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6">
          <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <span class="text-purple-400 text-sm tracking-widest uppercase">Technical Arsenal</span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
      </div>

      <!-- Skills Grid -->
      <div ref="skillsGridRef" class="grid md:grid-cols-2 gap-6 mb-16">
        <div
          v-for="(category, index) in skillCategories"
          :key="index"
          class="skill-card group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:shadow-xl"
          :class="[getColorClasses(category.color).border, getColorClasses(category.color).glow]"
        >
          <!-- Card background gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-br rounded-2xl opacity-50"
            :class="getColorClasses(category.color).bg"
          ></div>

          <!-- Card Content -->
          <div class="relative">
            <!-- Header -->
            <div class="flex items-center gap-3 mb-6">
              <span class="text-3xl">{{ category.icon }}</span>
              <h3 class="text-xl font-bold text-white">{{ category.title }}</h3>
            </div>

            <!-- Skills List -->
            <div class="space-y-4">
              <div
                v-for="(skill, skillIndex) in category.skills"
                :key="skillIndex"
                class="group/skill"
              >
                <div class="flex justify-between items-center mb-1">
                  <span class="text-gray-300 text-sm">{{ skill.name }}</span>
                  <span
                    class="text-xs font-mono"
                    :class="getColorClasses(category.color).text"
                  >
                    {{ skill.level }}%
                  </span>
                </div>
                <div class="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div
                    class="skill-progress h-full bg-gradient-to-r rounded-full transition-all duration-300"
                    :class="getColorClasses(category.color).progress"
                    :data-level="skill.level"
                    :style="{ width: '0%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Corner decorations -->
          <div class="absolute top-0 left-0 w-8 h-8 opacity-50">
            <div class="absolute top-2 left-2 w-4 h-[1px]" :class="`bg-${category.color}-400`"></div>
            <div class="absolute top-2 left-2 w-[1px] h-4" :class="`bg-${category.color}-400`"></div>
          </div>
          <div class="absolute bottom-0 right-0 w-8 h-8 opacity-50">
            <div class="absolute bottom-2 right-2 w-4 h-[1px]" :class="`bg-${category.color}-400`"></div>
            <div class="absolute bottom-2 right-2 w-[1px] h-4" :class="`bg-${category.color}-400`"></div>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="certifications-container">
        <div class="text-center mb-8">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">
            <span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              🏆 Certifications
            </span>
          </h3>
        </div>

        <div class="flex flex-wrap justify-center gap-6">
          <div
            v-for="(cert, index) in certifications"
            :key="index"
            class="cert-card group relative w-full md:w-auto md:min-w-[320px] p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
          >
            <!-- Shine effect on hover -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>

            <div class="relative flex items-center gap-4">
              <div class="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center text-3xl"
                :class="cert.color"
              >
                {{ cert.icon }}
              </div>
              <div>
                <div class="text-xs text-gray-400 uppercase tracking-wider mb-1">{{ cert.issuer }}</div>
                <h4 class="text-white font-semibold">{{ cert.title }}</h4>
                <div class="text-cyan-400 text-sm font-mono mt-1">{{ cert.code }}</div>
              </div>
            </div>

            <!-- Verified badge -->
            <div class="absolute top-3 right-3">
              <div class="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-full">
                <svg class="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-green-400 text-xs">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Stack Icons -->
      <div class="mt-16 text-center">
        <p class="text-gray-400 text-sm uppercase tracking-widest mb-6">Technologies I Work With</p>
        <div class="flex flex-wrap justify-center gap-4">
          <div
            v-for="tech in ['Python', 'Vue.js', 'FastAPI', 'PostgreSQL', 'AWS', 'OpenAI', 'LangChain', 'Docker']"
            :key="tech"
            class="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 text-gray-300 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
          >
            {{ tech }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-card {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.skill-card:hover {
  transform: translateY(-5px);
}

.cert-card {
  transform-style: preserve-3d;
}
</style>
