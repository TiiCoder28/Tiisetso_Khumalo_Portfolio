<script setup>
import { ref } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SpaceJourney from '@/components/space/SpaceJourney.vue'

// Toggle between normal view and space journey experience
const useSpaceJourney = ref(false)

const toggleSpaceJourney = () => {
  useSpaceJourney.value = !useSpaceJourney.value
}
</script>

<template>
  <main class="w-full">
    <!-- Futuristic Toggle Switch - Fixed Position -->
    <div class="fixed top-6 right-6 z-50 flex items-center gap-3">
      <span class="text-xs text-cyan-400/70 uppercase tracking-wider hidden sm:block">
        {{ useSpaceJourney ? 'Exit Journey' : 'Space Journey' }}
      </span>
      
      <!-- Toggle Switch -->
      <button
        @click="toggleSpaceJourney"
        class="relative w-16 h-8 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 group"
        :class="useSpaceJourney 
          ? 'bg-gradient-to-r from-purple-600 to-cyan-500 shadow-lg shadow-cyan-500/30' 
          : 'bg-slate-800 border border-slate-600 hover:border-cyan-500/50'"
        :aria-label="useSpaceJourney ? 'Exit space journey' : 'Enter space journey'"
      >
        <!-- Toggle Knob -->
        <div
          class="absolute top-1 w-6 h-6 rounded-full transition-all duration-500 flex items-center justify-center"
          :class="useSpaceJourney 
            ? 'left-9 bg-white shadow-lg shadow-cyan-400/50' 
            : 'left-1 bg-slate-600 group-hover:bg-slate-500'"
        >
          <!-- Icon inside knob -->
          <svg 
            v-if="useSpaceJourney"
            class="w-4 h-4 text-purple-600" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
            <circle cx="10" cy="10" r="3" fill="currentColor"/>
          </svg>
          <svg 
            v-else
            class="w-4 h-4 text-slate-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
          </svg>
        </div>
        
        <!-- Glow effect when active -->
        <div 
          v-if="useSpaceJourney"
          class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 blur-md opacity-50 -z-10"
        ></div>
      </button>
    </div>

    <!-- Space Journey Experience (scroll-driven black hole travel) -->
    <Transition name="journey-fade" mode="out-in">
      <template v-if="useSpaceJourney">
        <SpaceJourney :key="'journey'" @exitJourney="toggleSpaceJourney" />
      </template>
      
      <!-- Standard Portfolio Sections -->
      <div v-else :key="'standard'">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </Transition>
  </main>
</template>

<style scoped>
.journey-fade-enter-active,
.journey-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.journey-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.journey-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>