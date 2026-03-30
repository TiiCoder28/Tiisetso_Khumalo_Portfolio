<script setup>
import {computed, onMounted, ref} from 'vue'
import {RouterLink} from 'vue-router'

import {getPostPreview, getPosts} from '@/lib/sanity/content'
import {urlFor} from '@/lib/sanity/client'

const posts = ref([])
const loading = ref(true)
const error = ref('')

const featuredPost = computed(() => posts.value.find((post) => post.featured) || posts.value[0] || null)
const remainingPosts = computed(() => posts.value.filter((post) => post._id !== featuredPost.value?._id))

const formatDate = (value) => {
  if (!value) {
    return 'Draft'
  }

  return new Intl.DateTimeFormat('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))
}

const heroImageUrl = (image, width = 1200) => {
  if (!image) {
    return ''
  }

  return urlFor(image).width(width).height(Math.round(width * 0.6)).fit('crop').url()
}

const loadPosts = async () => {
  loading.value = true
  error.value = ''

  try {
    posts.value = await getPosts()
  } catch (loadError) {
    console.error(loadError)
    error.value = 'Unable to load blog posts right now.'
  } finally {
    loading.value = false
  }
}

onMounted(loadPosts)
</script>

<template>
  <main class="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,240,255,0.18),_transparent_30%),linear-gradient(180deg,_#050810_0%,_#091120_100%)] px-6 py-24 text-white sm:px-10 lg:px-16">
    <section class="mx-auto max-w-6xl">
      <div class="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p class="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300/70">Build Log</p>
          <h1 class="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">Projects, experiments, and lessons learned as I grow deeper into AI engineering.</h1>
        </div>

        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 self-start rounded-full border border-cyan-400/30 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/60 hover:bg-slate-800/80"
        >
          Back to Portfolio
        </RouterLink>
      </div>

      <div v-if="loading" class="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8 text-cyan-200/80">
        Loading posts...
      </div>

      <div v-else-if="error" class="rounded-3xl border border-red-400/30 bg-red-500/10 p-8 text-red-100">
        {{ error }}
      </div>

      <div v-else-if="!posts.length" class="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8 text-cyan-100/80">
        No posts published yet. Create your first post in Sanity Studio to populate this page.
      </div>

      <div v-else class="space-y-12">
        <RouterLink
          v-if="featuredPost"
          :to="`/blog/${featuredPost.slug}`"
          class="group grid overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-slate-950/70 shadow-[0_0_80px_rgba(0,240,255,0.08)] lg:grid-cols-[1.3fr_1fr]"
        >
          <div class="relative min-h-[320px] overflow-hidden">
            <img
              v-if="featuredPost.heroImage"
              :src="heroImageUrl(featuredPost.heroImage, 1500)"
              :alt="featuredPost.title"
              class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            >
            <div class="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/35 to-cyan-500/10"></div>
          </div>

          <div class="flex flex-col justify-between gap-6 p-8 lg:p-10">
            <div>
              <div class="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                <span>Featured</span>
                <span>{{ formatDate(featuredPost.publishedAt) }}</span>
                <span>{{ featuredPost.status }}</span>
              </div>
              <h2 class="mb-4 text-3xl font-bold text-white transition group-hover:text-cyan-200">{{ featuredPost.title }}</h2>
              <p class="max-w-xl text-base leading-7 text-slate-300">{{ getPostPreview(featuredPost) }}</p>
            </div>

            <div class="space-y-4">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in featuredPost.tags || []"
                  :key="tag"
                  class="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-100"
                >
                  {{ tag }}
                </span>
              </div>

              <span class="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                Read entry
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </RouterLink>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <RouterLink
            v-for="post in remainingPosts"
            :key="post._id"
            :to="`/blog/${post.slug}`"
            class="group overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/70 transition hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_50px_rgba(0,240,255,0.08)]"
          >
            <div class="relative h-56 overflow-hidden bg-slate-900">
              <img
                v-if="post.heroImage"
                :src="heroImageUrl(post.heroImage, 900)"
                :alt="post.title"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>

            <div class="space-y-4 p-6">
              <div class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-slate-400">
                <span>{{ formatDate(post.publishedAt) }}</span>
                <span>{{ post.status }}</span>
              </div>

              <div>
                <h3 class="mb-3 text-xl font-bold text-white transition group-hover:text-cyan-200">{{ post.title }}</h3>
                <p class="text-sm leading-6 text-slate-300">{{ getPostPreview(post) }}</p>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in post.tags || []"
                  :key="tag"
                  class="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>