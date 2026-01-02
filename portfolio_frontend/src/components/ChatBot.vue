<script setup>
import { ref, nextTick, watch } from 'vue'

// State
const isOpen = ref(false)
const isExpanded = ref(false)
const mode = ref('professional') // 'professional' or 'tutorial'
const message = ref('')
const messages = ref([])
const isLoading = ref(false)
const chatContainerRef = ref(null)
const showInfo = ref(false)
// API endpoint
const API_URL = 'https://tiisetso-khumalo-portfolio.onrender.com'

// Toggle chat window
const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value && messages.value.length === 0) {
    // Add welcome message
    addBotMessage(getWelcomeMessage())
  }
}

// Toggle expanded/compact mode
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

//Toggle information bubble
const toggleInfo = () => {
  showInfo.value = !showInfo.value
}   

// Get welcome message based on mode
const getWelcomeMessage = () => {
  if (mode.value === 'professional') {
    return "👋 Hi there! I'm Tii's AI Assistant. Ask me anything about Tiisetso's professional experience, skills, projects, or qualifications!"
  } else {
    return "🚀 Welcome to the Space Tutorial! I can explain how the BlackHole, Starfield, Wormhole, and other Three.js effects were created. What would you like to learn?"
  }
}

// Add bot message
const addBotMessage = (text, sources = []) => {
  messages.value.push({
    id: Date.now(),
    role: 'bot',
    content: text,
    sources: sources,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  })
  scrollToBottom()
}

// Add user message
const addUserMessage = (text) => {
  messages.value.push({
    id: Date.now(),
    role: 'user',
    content: text,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  })
  scrollToBottom()
}

// Scroll to bottom of chat
const scrollToBottom = async () => {
  await nextTick()
  if (chatContainerRef.value) {
    chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight
  }
}

// Send message to API
const sendMessage = async () => {
  if (!message.value.trim() || isLoading.value) return

  const userMessage = message.value.trim()
  message.value = ''
  addUserMessage(userMessage)

  isLoading.value = true

  try {
    // Build conversation history (last 6 messages)
    const history = messages.value.slice(-6).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content
    }))

    const response = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        mode: mode.value,
        history: history
      })
    })

    if (!response.ok) {
      throw new Error('Failed to get response')
    }

    const data = await response.json()
    addBotMessage(data.answer, data.sources || [])

  } catch (error) {
    console.error('Chat error:', error)
    addBotMessage("Oops! I'm having trouble connecting. Please make sure the backend server is running.")
  } finally {
    isLoading.value = false
  }
}

// Switch mode
const switchMode = (newMode) => {
  if (mode.value !== newMode) {
    mode.value = newMode
    messages.value = []
    addBotMessage(getWelcomeMessage())
  }
}

// Handle Enter key
const handleKeyPress = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}

// Quick questions
const quickQuestions = {
  professional: [
    "What are Tiisetso's main skills?",
    "Tell me about her work experience",
    "What projects has she worked on?"
  ],
  tutorial: [
    "How does the BlackHole effect work?",
    "Explain the Starfield animation",
    "How is the Wormhole created?"
  ]
}

const askQuickQuestion = (question) => {
  message.value = question
  sendMessage()
}
</script>

<template>
  <!-- Chat Bubble Button -->
  <button
    v-if="!isOpen"
    @click="toggleChat"
    class="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full 
           bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
           shadow-lg shadow-purple-500/50 
           flex items-center justify-center
           hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/50 
           transition-all duration-300 group"
    aria-label="Open chat"
  >
    <img src="/Chatbot_Logo.png" alt="Chat" class="w-10 h-10 rounded-full object-cover group-hover:animate-bounce" />
    <!-- Pulse ring -->
    <span class="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping"></span>
  </button>

  <!-- Chat Window -->
  <Transition name="chat">
    <div
      v-if="isOpen"
      :class="[
        'fixed z-50 flex flex-col bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl shadow-purple-500/20 overflow-hidden transition-all duration-300',
        isExpanded 
          ? 'bottom-4 right-4 left-4 top-4 md:left-auto md:top-auto md:bottom-6 md:right-6 md:w-[600px] md:h-[700px]' 
          : 'bottom-6 right-6 w-[380px] h-[550px]'
      ]"
    >
      <!-- Header -->
      <div class="bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900 p-4 border-b border-cyan-500/20">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-0.5">
              <img src="/Chatbot_Logo.png" alt="Tii's AI" class="w-full h-full rounded-full object-cover" />
            </div>
            <div>
              <h3 class="text-white font-bold text-sm">Tii's AI Assistant</h3>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span class="text-green-400 text-xs">Online</span>
                <!-- Info toggle button -->
                <button
                  @click="toggleInfo"
                  class="w-5 h-5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all text-xs font-bold"
                  :class="{ 'bg-cyan-500/40 ring-1 ring-cyan-400': showInfo }"
                  title="About this chatbot"
                >
                  ?
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <!-- Expand/Collapse button -->
            <button
              @click="toggleExpand"
              class="w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              :title="isExpanded ? 'Collapse' : 'Expand'"
            >
              <svg v-if="!isExpanded" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
              </svg>
            </button>
            <!-- Close button -->
            <button
              @click="toggleChat"
              class="w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-red-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Info Bubble (collapsible) -->
        <Transition name="slide">
          <div v-if="showInfo" class="mb-3 p-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20">
            <div class="flex items-start gap-2">
              <span class="text-lg">💡</span>
              <p class="text-gray-300 text-xs leading-relaxed">
                This chatbot is a <span class="text-cyan-400 font-medium">specialized AI assistant</span> that answers questions about my professional career and gives insights on how this website was created — from the space journey to the different components. 
                <span class="text-purple-400">FAISS</span> is used for vector search and <span class="text-purple-400">OpenAI</span> for responses. Feel free to interact! 😊
              </p>
            </div>
          </div>
        </Transition>

        <!-- Title -->
        <div class="text-center mb-3">
          <p class="text-cyan-300 text-xs leading-relaxed">
            Get to know more about <span class="font-bold text-white">Tiisetso Khumalo</span> 🎉😊
            <br>
            <span class="text-purple-300">Learn about the space journey & Three.js magic! 🚀✨</span>
          </p>
        </div>

        <!-- Mode Toggle -->
        <div class="flex gap-2">
          <button
            @click="switchMode('professional')"
            :class="[
              'flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all duration-300 flex items-center justify-center gap-2',
              mode === 'professional'
                ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-slate-700/50 text-gray-400 hover:text-white hover:bg-slate-600/50'
            ]"
          >
            <span>Professional</span>
          </button>
          <button
            @click="switchMode('tutorial')"
            :class="[
              'flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all duration-300 flex items-center justify-center gap-2',
              mode === 'tutorial'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                : 'bg-slate-700/50 text-gray-400 hover:text-white hover:bg-slate-600/50'
            ]"
          >
            <span>Space Tutorial</span>
          </button>
        </div>
      </div>

      <!-- Messages Container -->
      <div
        ref="chatContainerRef"
        class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent"
      >
        <!-- Messages -->
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="[
            'flex',
            msg.role === 'user' ? 'justify-end' : 'justify-start'
          ]"
        >
          <div
            :class="[
              'max-w-[85%] rounded-2xl px-4 py-3 text-sm',
              msg.role === 'user'
                ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-br-md'
                : 'bg-slate-800/80 text-gray-200 rounded-bl-md border border-slate-700/50'
            ]"
          >
            <!-- Bot avatar for bot messages -->
            <div v-if="msg.role === 'bot'" class="flex items-start gap-2 mb-1">
              <img src="/Chatbot_Logo.png" alt="Bot" class="w-5 h-5 rounded-full object-cover" />
              <span class="text-xs text-gray-500">{{ msg.timestamp }}</span>
            </div>
            
            <!-- Message content -->
            <p class="whitespace-pre-wrap leading-relaxed">{{ msg.content }}</p>
            
            <!-- Sources (for bot messages) -->
            <div v-if="msg.role === 'bot' && msg.sources && msg.sources.length > 0" class="mt-2 pt-2 border-t border-slate-600/50">
              <p class="text-xs text-gray-500 mb-1">Sources:</p>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="(source, idx) in [...new Set(msg.sources)]"
                  :key="idx"
                  class="text-xs px-2 py-0.5 rounded-full bg-slate-700/50 text-cyan-400"
                >
                  {{ source }}
                </span>
              </div>
            </div>

            <!-- Timestamp for user messages -->
            <div v-if="msg.role === 'user'" class="text-right mt-1">
              <span class="text-xs text-cyan-200/70">{{ msg.timestamp }}</span>
            </div>
          </div>
        </div>

        <!-- Loading indicator -->
        <div v-if="isLoading" class="flex justify-start">
          <div class="bg-slate-800/80 rounded-2xl rounded-bl-md px-4 py-3 border border-slate-700/50">
            <div class="flex items-center gap-2">
              <span class="text-lg">{{ mode === 'professional' ? '💼' : '🚀' }}</span>
              <div class="flex gap-1">
                <span class="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
                <span class="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
                <span class="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Questions -->
      <div v-if="messages.length <= 1" class="px-4 pb-2">
        <p class="text-xs text-gray-500 mb-2">💡 Quick questions:</p>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(question, idx) in quickQuestions[mode]"
            :key="idx"
            @click="askQuickQuestion(question)"
            class="text-xs px-3 py-1.5 rounded-full bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white transition-colors border border-slate-600/30"
          >
            {{ question }}
          </button>
        </div>
      </div>

      <!-- Input Area -->
      <div class="p-4 border-t border-cyan-500/20 bg-slate-800/50">
        <div class="flex gap-2">
          <input
            v-model="message"
            @keypress="handleKeyPress"
            :placeholder="mode === 'professional' ? 'Ask about Tiisetso...' : 'Ask about Three.js effects...'"
            :disabled="isLoading"
            class="flex-1 bg-slate-700/50 border border-slate-600/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all disabled:opacity-50"
          />
          <button
            @click="sendMessage"
            :disabled="!message.trim() || isLoading"
            class="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Chat transition */
.chat-enter-active,
.chat-leave-active {
  transition: all 0.3s ease;
}

.chat-enter-from,
.chat-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

/* Custom scrollbar */
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #475569;
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}

/* Slide transition for info bubble */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 100px;
}
</style>

