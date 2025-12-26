<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Starfield from '@/components/space/Starfield.vue'
import BlackHole from '@/components/space/BlackHole.vue'
import Wormhole from '@/components/space/Wormhole.vue'

gsap.registerPlugin(ScrollTrigger)

const containerRef = ref(null)
const journeyProgress = ref(0)
const currentPhase = ref('stars') // 'stars', 'approach', 'blackhole', 'wormhole', 'emergence'

const phases = {
  stars: { start: 0, end: 0.15 },
  approach: { start: 0.15, end: 0.35 },
  blackhole: { start: 0.35, end: 0.55 },
  wormhole: { start: 0.55, end: 0.85 },
  emergence: { start: 0.85, end: 1 }
}

// Computed visibility for each component
const showStars = computed(() => journeyProgress.value < phases.blackhole.end)
const showBlackHole = computed(() => 
  journeyProgress.value >= phases.approach.start && 
  journeyProgress.value < phases.wormhole.start
)
const showWormhole = computed(() => 
  journeyProgress.value >= phases.blackhole.end && 
  journeyProgress.value < phases.emergence.end
)
const showEmergenceStars = computed(() => journeyProgress.value >= phases.emergence.start)

// Black hole scale based on approach
const blackHoleScale = computed(() => {
  if (journeyProgress.value < phases.approach.start) return 0.1
  if (journeyProgress.value > phases.blackhole.end) return 10
  
  const approachProgress = (journeyProgress.value - phases.approach.start) / 
    (phases.blackhole.end - phases.approach.start)
  return 0.1 + approachProgress * 5
})

// Wormhole progress (0-1 within wormhole phase)
const wormholeProgress = computed(() => {
  if (journeyProgress.value < phases.wormhole.start) return 0
  if (journeyProgress.value > phases.wormhole.end) return 1
  
  return (journeyProgress.value - phases.wormhole.start) / 
    (phases.wormhole.end - phases.wormhole.start)
})

// Opacity transitions
const starsOpacity = computed(() => {
  if (journeyProgress.value < phases.approach.end) return 1
  return 1 - ((journeyProgress.value - phases.approach.end) / (phases.blackhole.end - phases.approach.end))
})

const blackHoleOpacity = computed(() => {
  if (journeyProgress.value < phases.approach.start) return 0
  if (journeyProgress.value < phases.approach.end) {
    return (journeyProgress.value - phases.approach.start) / (phases.approach.end - phases.approach.start)
  }
  if (journeyProgress.value > phases.blackhole.start) {
    return 1 - ((journeyProgress.value - phases.blackhole.start) / (phases.wormhole.start - phases.blackhole.start))
  }
  return 1
})

const wormholeOpacity = computed(() => {
  if (journeyProgress.value < phases.blackhole.end) return 0
  if (journeyProgress.value < phases.wormhole.start) {
    return (journeyProgress.value - phases.blackhole.end) / (phases.wormhole.start - phases.blackhole.end)
  }
  if (journeyProgress.value > phases.wormhole.end) {
    return 1 - ((journeyProgress.value - phases.wormhole.end) / (phases.emergence.end - phases.wormhole.end))
  }
  return 1
})

const emergenceOpacity = computed(() => {
  if (journeyProgress.value < phases.emergence.start) return 0
  return (journeyProgress.value - phases.emergence.start) / (phases.emergence.end - phases.emergence.start)
})

// Update current phase
const updatePhase = () => {
  const progress = journeyProgress.value
  for (const [phase, range] of Object.entries(phases)) {
    if (progress >= range.start && progress < range.end) {
      currentPhase.value = phase
      break
    }
  }
}

onMounted(() => {
  // Set up scroll-driven animation
  ScrollTrigger.create({
    trigger: containerRef.value,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    onUpdate: (self) => {
      journeyProgress.value = self.progress
      updatePhase()
    }
  })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

defineExpose({ journeyProgress, currentPhase })
</script>

<template>
  <div 
    ref="containerRef" 
    class="relative"
    style="height: 500vh;"
  >
    <!-- Fixed viewport for the space journey -->
    <div class="fixed inset-0 w-full h-screen overflow-hidden bg-black">
      <!-- Phase indicator (debug - can remove later) -->
      <div class="absolute top-4 left-4 z-50 text-white font-mono text-sm bg-black/50 px-3 py-2 rounded">
        <div>Phase: {{ currentPhase }}</div>
        <div>Progress: {{ (journeyProgress * 100).toFixed(1) }}%</div>
      </div>

      <!-- Starfield Layer -->
      <Transition name="fade">
        <div 
          v-if="showStars" 
          class="absolute inset-0"
          :style="{ opacity: starsOpacity }"
        >
          <Starfield :star-count="8000" :depth="1500" />
        </div>
      </Transition>

      <!-- Black Hole Layer -->
      <Transition name="fade">
        <div 
          v-if="showBlackHole" 
          class="absolute inset-0"
          :style="{ 
            opacity: blackHoleOpacity,
            transform: `scale(${blackHoleScale})`
          }"
        >
          <BlackHole 
            :size="5" 
            :intensity="1 + journeyProgress * 2"
            :distortion-strength="journeyProgress * 2"
          />
        </div>
      </Transition>

      <!-- Wormhole Layer -->
      <Transition name="fade">
        <div 
          v-if="showWormhole" 
          class="absolute inset-0"
          :style="{ opacity: wormholeOpacity }"
        >
          <Wormhole 
            :progress="wormholeProgress" 
            :active="showWormhole"
            :speed="2"
          />
        </div>
      </Transition>

      <!-- Emergence - New Galaxy -->
      <Transition name="fade">
        <div 
          v-if="showEmergenceStars" 
          class="absolute inset-0"
          :style="{ opacity: emergenceOpacity }"
        >
          <Starfield 
            :star-count="10000" 
            :depth="2000"
          />
          <!-- New galaxy glow -->
          <div class="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent"></div>
        </div>
      </Transition>

      <!-- Vignette overlay -->
      <div 
        class="absolute inset-0 pointer-events-none"
        :style="{
          background: `radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,${0.3 + journeyProgress * 0.5}) 100%)`
        }"
      ></div>

      <!-- Flash effect at singularity -->
      <div 
        v-if="journeyProgress > 0.52 && journeyProgress < 0.58"
        class="absolute inset-0 bg-white pointer-events-none"
        :style="{
          opacity: Math.sin((journeyProgress - 0.52) / 0.06 * Math.PI) * 0.8
        }"
      ></div>
    </div>

    <!-- Scroll content markers (invisible, just for scroll length) -->
    <div class="relative z-10 pointer-events-none">
      <div class="h-screen flex items-center justify-center">
        <span class="text-white/0">Phase 1: Stars</span>
      </div>
      <div class="h-screen flex items-center justify-center">
        <span class="text-white/0">Phase 2: Approach</span>
      </div>
      <div class="h-screen flex items-center justify-center">
        <span class="text-white/0">Phase 3: Black Hole</span>
      </div>
      <div class="h-screen flex items-center justify-center">
        <span class="text-white/0">Phase 4: Wormhole</span>
      </div>
      <div class="h-screen flex items-center justify-center">
        <span class="text-white/0">Phase 5: Emergence</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bg-gradient-radial {
  background: radial-gradient(ellipse at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%);
}
</style>
