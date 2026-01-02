<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const projectsRef = ref(null)
const activeProject = ref(null)

const projects = [
    {
        id: 'weatherApp',
        title: "CloudChaser",
        subtitle: "Weather Forecasting App",
        status: "Live",
        icon: "☁️",
        color: "cyan",
        description: "A sleek web application that provides accurate and up-to-date weather forecasts using OpenWeatherMap API. This was my first app that I developed using HTML, CSS, and JavaScript and deployed using github pages.",
        tech: ["OpenWeatherMap API", "CSS", "HTML", "JavaScript"],
        features: [
            "Current weather data for any location. The user can either enter the location of their choice or allow the app to access their geolocation.",
            "5-day weather forecasts",
            "Responsive design for mobile and desktop",
            "Backgrounds that changes every 5 seconds"
        ],
        links: {
            website: "https://tiicoder28.github.io/weatherApp/"
        }
    },
  {
    id: 'radai',
    title: 'RadAI',
    subtitle: 'Medical Assistant',
    status: 'In Testing',
    icon: '🏥',
    color: 'cyan',
    description: 'AI-powered medical assistant chatbot that processes user symptoms and provides medical guidance through WhatsApp. I developed this application while at Kion Consulting for a client.',
    tech: ['WhatsApp Graph API', 'OpenAI API', 'Python', 'FastAPI'],
    features: [
      'Symptom analysis and medical guidance',
      'Natural language processing for health queries',
      'WhatsApp integration for accessibility',
      'Real-time AI-powered responses',
      'Provides potential diagnoses based on the image and additional context given by doctor',
      'Powered by OpenAI GPT-Models and created using the OpenAI Agents SDK',
      'Has patient management features for doctors to keep track of their patients'
    ],
    links: {
      github: 'https://github.com/tiisetsok28/RadAI'
    }
  },
  {
    id: 'tutoring',
    title: 'Thuto',
    subtitle: 'School Tutoring Assistant',
    status: 'Live',
    icon: '📚',
    color: 'purple',
    description: 'Assisted in developing the backend(AI tutors, chat sessions, user management, etc) for the in-house tutoring assistant for assignment help and study tips, built with intelligent AI responses.',
    tech: ['Vue.js', 'Flask', 'OpenAI API', 'WhatsApp API'],
    features: [
      'Assignment help and explanations',
      'Study tips and learning strategies',
      'Multi-platform access (Web + WhatsApp)',
      'Personalized tutoring experience'
    ],
    links: {
      website: 'http://thuto.kion.co.za/',
    //   whatsapp: 'tel:0642996105'
    }
  },
  {
    id: "tutoring",
    title: "Smart Varsity Assistant",
    subtitle: "University Tutor Chatbot",
    status: "In Testing",
    icon: "📚",
    color: "purple",
    description: "AI-powered chatbot that assists university students with assignment help, study tips, and academic guidance through a web interface.",
    tech: ["Vue.js", "Flask", "OpenAI API", "OpenAI Assistants API(about to be depricated)"],
    features: [
      "Assignment help and explanations",
      "Study tips and learning strategies",
      "Personalized tutoring experience",
      "Web-based access for convenience",
      "Can create different sessions for different modules",
      "Specialises in C++, Calculus, Linear Algebra, Introduction to Programming, Data Structures and Algorithms, etc",
      "I've been using it in my first year to assist me with assignements that I had"
    ],
    links: {
        github: "https://github.com/TiiCoder28/Smart-Varsity-Assistant" 
    }
  },

  {
    id: 'email-scheduler',
    title: 'Email Scheduler',
    subtitle: 'Meeting Automation',
    status: 'Completed',
    icon: '📧',
    color: 'green',
    description: 'Assisted in developing an intelligent scheduling app that automates meeting invites and checks participant availability using AI agents.',
    tech: ['Microsoft Graph API', 'OpenAI Agents SDK', 'Python', 'FastAPI'],
    features: [
      'Automated meeting scheduling',
      'Participant availability checking',
      'AI-powered agent orchestration',
      'Microsoft Graph API integration'
    ],
    links: {}
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    subtitle: 'Showcase Website',
    status: 'Live',
    icon: 'img:/Chatbot_Logo.png',
    color: 'purple',
    description: 'My personal portfolio website built with Vue.js and Vite, showcasing my projects, skills, and experience as a web and AI developer.',
    tech: ['Vue.js', 'Vite', 'GSAP', 'Three.js'],
    features: [
        'Implemented three.js components in the space journey and on certain sections',
        'Implemented GSAP scroll-triggered animations for a dynamic user experience',
        'Implemented backend for chatbot intergration using FastAPI and deployed on Render.com',
        'Frontend deployed on Vercel for optimal performance',
      'Interactive project showcase',
      'Smooth animations with GSAP',
      '3D space journey experience using Three.js'
    ],
    links: {
      github: 'https://github.com/TiiCoder28/Tiisetso_Khumalo_Portfolio'
    }
  }
]

const setActiveProject = (id) => {
  activeProject.value = activeProject.value === id ? null : id
}

onMounted(() => {
  // Animate project cards
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
    cyan: {
      border: 'border-cyan-500/30 hover:border-cyan-400/60',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400',
      shadow: 'hover:shadow-cyan-500/20',
      glow: 'from-cyan-500/20 to-transparent'
    },
    purple: {
      border: 'border-purple-500/30 hover:border-purple-400/60',
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      shadow: 'hover:shadow-purple-500/20',
      glow: 'from-purple-500/20 to-transparent'
    },
    green: {
      border: 'border-green-500/30 hover:border-green-400/60',
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      shadow: 'hover:shadow-green-500/20',
      glow: 'from-green-500/20 to-transparent'
    }
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
  <section
    ref="sectionRef"
    id="projects"
    class="relative min-h-screen w-full py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
  >
    <!-- Animated background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6">
          <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <span class="text-purple-400 text-sm tracking-widest uppercase">Featured Work</span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          <span class="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto rounded-full text-center"></div>
        <p class="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Some of the projects I have worked on recently, showcasing my skills in web development, AI integration, and automation.
        </p>
      </div>

      <!-- Projects Grid -->
      <div ref="projectsRef" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-card group relative"
        >
          <!-- Card -->
          <div 
            class="relative h-full p-6 bg-slate-800/60 backdrop-blur-sm rounded-2xl border transition-all duration-500 cursor-pointer hover:shadow-xl hover:-translate-y-2"
            :class="[getColorClasses(project.color).border, getColorClasses(project.color).shadow]"
            @click="setActiveProject(project.id)"
          >
            <!-- Glow effect on hover -->
            <div 
              class="absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              :class="getColorClasses(project.color).glow"
            ></div>

            <!-- Header -->
            <div class="relative flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <!-- Icon: supports both emoji and images (prefix with 'img:') -->
                <template v-if="project.icon.startsWith('img:')">
                  <img 
                    :src="project.icon.replace('img:', '')" 
                    :alt="project.title"
                    class="w-10 h-10 rounded-lg object-cover"
                  />
                </template>
                <span v-else class="text-4xl">{{ project.icon }}</span>
                <div>
                  <h3 class="text-xl font-bold text-white group-hover:text-white transition-colors">
                    {{ project.title }}
                  </h3>
                  <p class="text-sm" :class="getColorClasses(project.color).text">
                    {{ project.subtitle }}
                  </p>
                </div>
              </div>
              <span 
                class="px-2 py-1 text-xs rounded-full border"
                :class="getStatusColor(project.status)"
              >
                {{ project.status }}
              </span>
            </div>

            <!-- Description -->
            <p class="relative text-gray-400 text-sm md:text-base mb-4 line-clamp-4">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="relative flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.tech" 
                :key="tech"
                class="px-2 py-1 text-xs rounded-md bg-slate-700/50 text-gray-300 border border-slate-600/50"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Expand indicator -->
            <div class="relative flex items-center justify-between text-sm">
              <span :class="getColorClasses(project.color).text">View details</span>
              <svg 
                class="w-5 h-5 transition-transform duration-300"
                :class="[getColorClasses(project.color).text, activeProject === project.id ? 'rotate-180' : '']"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <!-- Expanded Content -->
            <div 
              class="relative overflow-hidden transition-all duration-500"
              :class="activeProject === project.id ? 'max-h-96 mt-4 pt-4 border-t border-slate-700/50' : 'max-h-0'"
            >
              <h4 class="text-sm font-semibold text-white mb-3">Key Features</h4>
              <ul class="space-y-2 mb-4">
                <li 
                  v-for="feature in project.features" 
                  :key="feature"
                  class="flex items-start gap-2 text-sm text-gray-400"
                >
                  <span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" :class="getColorClasses(project.color).text.replace('text-', 'bg-')"></span>
                  {{ feature }}
                </li>
              </ul>

              <!-- Links -->
              <div v-if="Object.keys(project.links).length > 0" class="flex flex-wrap gap-3">
                <a 
                  v-if="project.links.website"
                  :href="project.links.website"
                  target="_blank"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 text-white text-sm hover:bg-slate-600/50 transition-colors"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Website
                </a>
                <a 
                  v-if="project.links.whatsapp"
                  :href="project.links.whatsapp"
                  target="_blank"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 text-green-400 text-sm hover:bg-green-500/30 transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <a 
                  v-if="project.links.github"
                  :href="project.links.github"
                  target="_blank"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/50 text-gray-300 text-sm hover:bg-gray-600/50 transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a
                v-if="project.links.in-development"
                :href="project.links.in-development"
                target="_blank"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-400 text-sm hover:bg-yellow-500/30 transition-colors"
              >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                In Development
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 text-center">
        <p class="text-gray-400 mb-6">Interested in collaborating or have a project in mind?</p>
        <a 
          href="#contact"
          class="inline-flex items-center gap-3 px-8 py-4  rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1"
        >
          <span>Let's Build Something Amazing</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
