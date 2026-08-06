<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const projectsRef = ref(null)
const activeProject = ref(null)
const showContactModal = ref(false)

const contactInfo = {
  email: 'tiisoh1998@gmail.com',
  phone: '0678017642',
  linkedin: 'https://www.linkedin.com/in/tiisetso-khumalo-605725236/',
  github: 'https://github.com/TiiCoder28'
}

const toggleContactModal = () => {
  showContactModal.value = !showContactModal.value
}

const projects = [
  {
    id: 'betbetter',
    title: 'BetBetter',
    subtitle: 'AI Football Analytics Platform',
    status: 'Live',
    icon: '⚽',
    color: 'cyan',
    description: 'An AI-powered football analytics and odds-tracking platform designed to produce transparent, reviewable predictions while keeping numerical decisions deterministic and auditable.',
    tech: ['Python', 'FastAPI', 'Vue.js', 'PostgreSQL', 'OpenAI Agents SDK', 'AWS EC2', 'GitHub Actions', 'Vercel'],
    features: [
      'Created to combine football, data analysis and responsible AI product design',
      'Uses deterministic Python services for probabilities, fair odds, expected value, confidence and risk calculations',
      'Implements a nine-agent workflow for fixture, analytics, odds, probability, policy, explanation, safety and final-review validation',
      'Includes a human approval gate before predictions are published',
      'Reduced operating costs by selecting lower-cost data providers and disabling unsupported services behind feature flags',
      'Uses a split deployment: Vue frontend on Vercel and FastAPI, PostgreSQL and scheduled workflows on AWS EC2',
      'CI/CD validates backend tests, migrations, frontend tests, builds and dependency audits',
      'AWS deployment uses GitHub OIDC, S3 release artefacts and Systems Manager rather than long-lived cloud credentials'
    ],
    links: {
      website: 'https://bet-better-rho.vercel.app/',
      github: 'https://github.com/TiiCoder28/BetBetter'
    }
  },
  {
    id: 'spendsharp',
    title: 'SpendSharp',
    subtitle: 'AI Budgeting Companion',
    status: 'Live',
    icon: '💸',
    color: 'green',
    description: 'A personal-finance application I built to improve my own spending habits, then expanded into a product that helps users track transactions, understand patterns and receive practical guidance.',
    tech: ['AI Agents', 'JavaScript', 'Backend APIs', 'Supabase', 'Vercel', 'Render'],
    features: [
      'Created from a real need to understand and improve everyday spending behaviour',
      'Includes an AI spending agent that analyses transaction history and provides budgeting guidance',
      'Structures transactions, categories and budget data so recommendations are based on consistent records',
      'Uses Vercel, Render and Supabase to keep infrastructure affordable and independently maintainable',
      'Prioritises clear, supportive guidance instead of judgemental financial messaging',
      'Continues to evolve through real usage, bug fixing and improvements to reliability and recommendations'
    ],
    links: {
      website: 'https://spend-sharp.vercel.app/',
      github: 'https://github.com/TiiCoder28/SpendSharp'
    }
  },
  {
    id: 'contentforge',
    title: 'ContentForge',
    subtitle: 'Affordable AI Content Workspace',
    status: 'In Testing',
    icon: '✍️',
    color: 'purple',
    description: 'An AI-assisted content platform for students, teachers and small businesses that need to generate or transform content affordably while retaining full control of the final result.',
    tech: ['TypeScript', 'React', 'Express', 'Gemini API', 'Firebase', 'DOCX', 'PDF', 'PPTX'],
    features: [
      'Created to make useful AI content tools more affordable for students, teachers and smaller organisations',
      'Supports both generating new content and transforming material users already have',
      'Keeps all generated output editable so users can restructure, rewrite and refine it',
      'Supports document-focused workflows and exports including DOCX, PDF and presentations',
      'Uses a TypeScript, React, Express, Gemini and Firebase architecture',
      'Remains under active development with ongoing improvements to backend structure, editing and export reliability'
    ],
    links: {
      github: 'https://github.com/TiiCoder28/Content-Forge2',
      'in-development': 'https://github.com/TiiCoder28/Content-Forge2'
    }
  },
  {
    id: 'confidential-client-platform',
    title: 'Confidential Workforce Health Platform',
    subtitle: 'Client Product Consulting & Delivery',
    status: 'In Testing',
    icon: '🛡️',
    color: 'cyan',
    description: 'An NDA-protected client engagement involving the assessment, modernisation and phased improvement of a workforce medical-compliance application.',
    tech: ['Product Discovery', 'Workflow Design', 'Security Review', 'Role-Based Access', 'Client Consulting', 'Milestone Delivery'],
    features: [
      'Reviewed the existing application and identified ten major product, workflow and security gaps',
      'Translated findings into a six-phase implementation roadmap estimated at eight to ten weeks',
      'Recommended stronger role-based access control, protected routes and site-level data filtering',
      'Improved approval, waitlist, transfer, audit and clinic workflow foundations through milestone-based delivery',
      'Advised the client on separate development and testing environments, safe test data, version control, rollback and CI/CD',
      'Recommended a gradual migration strategy to reduce operational risk and avoid unnecessary redevelopment costs',
      'Continue to consult with the client, provide technical expertise and convert evolving requirements into practical implementation decisions',
      'Client identity, source code, screenshots and detailed business logic are excluded to honour the NDA'
    ],
    links: {}
  },
  {
    id: 'portfolio',
    title: 'Engineering Portfolio & Build Log',
    subtitle: 'Interactive Portfolio and Technical Journal',
    status: 'Live',
    icon: 'img:/Chatbot_Logo.png',
    color: 'purple',
    description: 'A space-inspired portfolio combining my love for web development, AI and astronomy, while also serving as a public worklog and technical blog for my projects.',
    tech: ['Vue.js', 'Vite', 'Three.js', 'GSAP', 'FastAPI', 'Sanity', 'Supabase', 'OpenAI'],
    features: [
      'Uses Three.js and GSAP to create an interactive space-inspired experience',
      'Includes a FastAPI-powered AI assistant that helps visitors explore my work conversationally',
      'Uses Sanity to manage projects and Build Log posts instead of hard-coding every update',
      'Documents what I am building, why design decisions were made, what failed and how each system improved',
      'Uses Supabase pgvector for retrieval while retaining FAISS as a resilience fallback',
      'Doubles as a portfolio and engineering blog that demonstrates product thinking and technical communication'
    ],
    links: {
      website: 'https://tiisetso-khumalo-portfolio.vercel.app/',
      github: 'https://github.com/TiiCoder28/Tiisetso_Khumalo_Portfolio'
    }
  }
]

const setActiveProject = (id) => {
  activeProject.value = activeProject.value === id ? null : id
}

onMounted(() => {
  gsap.fromTo(
    '.project-card',
    { opacity: 0, y: 60, rotateX: -10 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: projectsRef.value,
        start: 'top 85%'
      }
    }
  )
})

const getColorClasses = (color) => {
  const colors = {
    cyan: { border: 'border-cyan-500/30 hover:border-cyan-400/60', bg: 'bg-cyan-500/10', text: 'text-cyan-400', shadow: 'hover:shadow-cyan-500/20', glow: 'from-cyan-500/20 to-transparent' },
    purple: { border: 'border-purple-500/30 hover:border-purple-400/60', bg: 'bg-purple-500/10', text: 'text-purple-400', shadow: 'hover:shadow-purple-500/20', glow: 'from-purple-500/20 to-transparent' },
    green: { border: 'border-green-500/30 hover:border-green-400/60', bg: 'bg-green-500/10', text: 'text-green-400', shadow: 'hover:shadow-green-500/20', glow: 'from-green-500/20 to-transparent' }
  }
  return colors[color] || colors.cyan
}

const getStatusColor = (status) => {
  switch (status) {
    case 'Live': return 'bg-green-500/20 text-green-400 border-green-500/30'
    case 'In Testing': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    case 'Completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }
}
</script>

<template>
  <section ref="sectionRef" id="projects" class="relative min-h-screen w-full py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6">
          <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <span class="text-purple-400 text-sm tracking-widest uppercase">Featured Work</span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          <span class="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto rounded-full text-center"></div>
        <p class="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">Some of the projects I have worked on recently, showcasing my skills in web development, AI integration, and automation.</p>
      </div>

      <div ref="projectsRef" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.id" class="project-card group relative">
          <div class="relative h-full p-6 bg-slate-800/60 backdrop-blur-sm rounded-2xl border transition-all duration-500 cursor-pointer hover:shadow-xl hover:-translate-y-2" :class="[getColorClasses(project.color).border, getColorClasses(project.color).shadow]" @click="setActiveProject(project.id)">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" :class="getColorClasses(project.color).glow"></div>
            <div class="relative flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <template v-if="project.icon.startsWith('img:')"><img :src="project.icon.replace('img:', '')" :alt="project.title" class="w-10 h-10 rounded-lg object-cover" /></template>
                <span v-else class="text-4xl">{{ project.icon }}</span>
                <div><h3 class="text-xl font-bold text-white group-hover:text-white transition-colors">{{ project.title }}</h3><p class="text-sm" :class="getColorClasses(project.color).text">{{ project.subtitle }}</p></div>
              </div>
              <span class="px-2 py-1 text-xs rounded-full border" :class="getStatusColor(project.status)">{{ project.status }}</span>
            </div>
            <p class="relative text-gray-400 text-sm md:text-base mb-4 line-clamp-4">{{ project.description }}</p>
            <div class="relative flex flex-wrap gap-2 mb-4"><span v-for="tech in project.tech" :key="tech" class="px-2 py-1 text-xs rounded-md bg-slate-700/50 text-gray-300 border border-slate-600/50">{{ tech }}</span></div>
            <div class="relative flex items-center justify-between text-sm"><span :class="getColorClasses(project.color).text">View details</span><svg class="w-5 h-5 transition-transform duration-300" :class="[getColorClasses(project.color).text, activeProject === project.id ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></div>
            <div class="relative overflow-hidden transition-all duration-500" :class="activeProject === project.id ? 'max-h-[900px] mt-4 pt-4 border-t border-slate-700/50' : 'max-h-0'">
              <h4 class="text-sm font-semibold text-white mb-3">Key Features</h4>
              <ul class="space-y-2 mb-4"><li v-for="feature in project.features" :key="feature" class="flex items-start gap-2 text-sm text-gray-400"><span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" :class="getColorClasses(project.color).text.replace('text-', 'bg-')"></span>{{ feature }}</li></ul>
              <div v-if="Object.keys(project.links).length > 0" class="flex flex-wrap gap-3">
                <a v-if="project.links.website" :href="project.links.website" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 text-white text-sm hover:bg-slate-600/50 transition-colors" @click.stop><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>Website</a>
                <a v-if="project.links.github" :href="project.links.github" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/50 text-gray-300 text-sm hover:bg-gray-600/50 transition-colors" @click.stop><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>GitHub</a>
                <a v-if="project.links['in-development']" :href="project.links['in-development']" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-400 text-sm hover:bg-yellow-500/30 transition-colors" @click.stop><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>In Development</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-gray-400 mb-6">Interested in hiring me, collaborating or have a project in mind?</p>
        <button @click="toggleContactModal" class="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105"><span>Let's Build Something Amazing</span><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></button>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showContactModal" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="toggleContactModal">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div class="relative w-full max-w-md bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl shadow-purple-500/20 overflow-hidden">
            <div class="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-6 border-b border-slate-700/50"><div class="flex items-center justify-between"><div><h3 class="text-2xl font-bold text-white mb-1">Let's Connect!</h3><p class="text-gray-400 text-sm">I'd love to hear from you</p></div><button @click="toggleContactModal" class="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-red-500/30 flex items-center justify-center text-gray-400 hover:text-white transition-all"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></button></div></div>
            <div class="p-6 space-y-4">
              <a :href="`mailto:${contactInfo.email}`" class="group flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"><div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"><svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div><div><p class="text-xs text-gray-500 uppercase tracking-wider">Email</p><p class="text-white group-hover:text-cyan-400 transition-colors">{{ contactInfo.email }}</p></div></a>
              <a :href="`tel:${contactInfo.phone}`" class="group flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"><div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"><svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div><div><p class="text-xs text-gray-500 uppercase tracking-wider">Phone</p><p class="text-white group-hover:text-green-400 transition-colors">{{ contactInfo.phone }}</p></div></a>
              <a :href="contactInfo.linkedin" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"><div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"><svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></div><div><p class="text-xs text-gray-500 uppercase tracking-wider">LinkedIn</p><p class="text-white group-hover:text-blue-400 transition-colors">Tiisetso Khumalo</p></div></a>
              <a :href="contactInfo.github" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"><div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"><svg class="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg></div><div><p class="text-xs text-gray-500 uppercase tracking-wider">GitHub</p><p class="text-white group-hover:text-purple-400 transition-colors">TiiCoder28</p></div></a>
            </div>
            <div class="px-6 pb-6"><p class="text-center text-gray-500 text-sm">Looking forward to connecting with you!</p></div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.line-clamp-4 { display: -webkit-box; -webkit-line-clamp: 4; line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
.modal-enter-active, .modal-leave-active { transition: all 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .relative, .modal-leave-to .relative { transform: scale(0.9) translateY(20px); }
.modal-enter-to .relative, .modal-leave-from .relative { transform: scale(1) translateY(0); }
</style>
