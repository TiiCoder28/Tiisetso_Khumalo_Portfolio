<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
</script>

<template>
  <main class="w-full">
    <div class="fixed top-6 left-6 z-50">
      <RouterLink
        to="/blog"
        class="inline-flex items-center gap-3 rounded-full border border-cyan-300/40 bg-slate-950/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100 shadow-[0_0_30px_rgba(0,240,255,0.18)] transition hover:border-cyan-200/70 hover:bg-slate-900"
      >
        <span class="h-2 w-2 rounded-full bg-cyan-300 animate-pulse"></span>
        Build Log / Journey
      </RouterLink>
    </div>

    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
  </main>
</template>