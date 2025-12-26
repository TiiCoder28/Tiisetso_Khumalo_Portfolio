<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import LoadingScreen from '@/components/LoadingScreen.vue'

const isLoading = ref(true)
const showContent = ref(false)

const handleLoadingComplete = () => {
  isLoading.value = false
  // Small delay before showing content for smooth transition
  setTimeout(() => {
    showContent.value = true
  }, 300)
}

// Auto-complete loading if it takes too long
onMounted(() => {
  setTimeout(() => {
    if (isLoading.value) {
      handleLoadingComplete()
    }
  }, 5000)
})
</script>

<template>
  <div class="app-container min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
    <!-- Loading Screen -->
    <Transition name="loading-fade">
      <LoadingScreen 
        v-if="isLoading" 
        :duration="3000"
        @complete="handleLoadingComplete" 
      />
    </Transition>
    
    <!-- Main Content -->
    <Transition name="content-fade">
      <RouterView v-if="showContent" />
    </Transition>
  </div>
</template>

<style>
/* Global futuristic styles */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

:root {
  --primary-cyan: #00f0ff;
  --primary-blue: #0066ff;
  --primary-purple: #8b5cf6;
  --dark-bg: #0a0e1a;
  --darker-bg: #050810;
  --glow-cyan: 0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3);
  --glow-purple: 0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3);
}

body {
  font-family: 'Rajdhani', sans-serif;
  background-color: var(--dark-bg);
  margin: 0;
  padding: 0;
}

.font-orbitron {
  font-family: 'Orbitron', sans-serif;
}

/* Loading transition */
.loading-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.loading-fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

/* Content transition */
.content-fade-enter-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.content-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--darker-bg);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--primary-cyan), var(--primary-purple));
  border-radius: 4px;
}
</style>
