<script setup>
import {computed, onMounted, ref, watch} from 'vue'
import {RouterLink, useRoute} from 'vue-router'

import {getPostBySlug} from '@/lib/sanity/content'
import {urlFor} from '@/lib/sanity/client'

const route = useRoute()

const post = ref(null)
const loading = ref(true)
const error = ref('')
const selectedImage = ref(null)

const hasImageAsset = (image) => Boolean(image?.asset?._ref || image?.asset?._id)

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

const imageUrl = (image, width = 1600, height = 900) => {
  if (!hasImageAsset(image)) {
    return ''
  }

  return urlFor(image).width(width).height(height).fit('crop').url()
}

const galleryImages = computed(() => (post.value?.gallery || []).filter(hasImageAsset))
const hasSidebarContent = computed(() => Boolean(
  galleryImages.value.length
  || post.value?.relatedProject
  || post.value?.projectLinks?.github
  || post.value?.projectLinks?.demo
  || post.value?.skillsLearned?.length
))

const isDirectVideoUrl = (url) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(url || '')

const toEmbedUrl = (url) => {
  if (!url) {
    return ''
  }

  if (url.includes('youtube.com/watch')) {
    const videoId = new URL(url).searchParams.get('v')
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
  }

  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0]
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
  }

  if (url.includes('vimeo.com/')) {
    const videoId = url.split('vimeo.com/')[1]?.split('?')[0]
    return videoId ? `https://player.vimeo.com/video/${videoId}` : url
  }

  return url
}

const contentSections = computed(() => {
  const body = post.value?.body || []
  const sections = []
  let listBuffer = null

  const flushListBuffer = () => {
    if (listBuffer) {
      sections.push(listBuffer)
      listBuffer = null
    }
  }

  for (const block of body) {
    if (block?._type === 'block' && block.listItem) {
      const itemText = (block.children || []).map((child) => child.text || '').join('')
      if (!itemText.trim()) {
        continue
      }

      if (!listBuffer || listBuffer.listType !== block.listItem) {
        flushListBuffer()
        listBuffer = {
          type: 'list',
          listType: block.listItem,
          items: [],
        }
      }

      listBuffer.items.push(itemText)
      continue
    }

    flushListBuffer()

    if (block?._type === 'block') {
      const text = (block.children || []).map((child) => child.text || '').join('')
      if (!text.trim()) {
        continue
      }

      sections.push({
        type: 'block',
        style: block.style || 'normal',
        text,
      })
      continue
    }

    if (block?._type === 'image' && hasImageAsset(block)) {
      sections.push({
        type: 'image',
        image: block,
      })
      continue
    }

    if (block?._type === 'codeSnippet') {
      sections.push({
        type: 'codeSnippet',
        filename: block.filename,
        language: block.language,
        code: block.code,
      })
    }
  }

  flushListBuffer()
  return sections
})

const openImage = (image) => {
  selectedImage.value = image
}

const closeImage = () => {
  selectedImage.value = null
}

const loadPost = async () => {
  loading.value = true
  error.value = ''

  try {
    post.value = await getPostBySlug(route.params.slug)

    if (!post.value) {
      error.value = 'This post could not be found.'
    }
  } catch (loadError) {
    console.error(loadError)
    error.value = 'Unable to load this post right now.'
  } finally {
    loading.value = false
  }
}

onMounted(loadPost)

watch(() => route.params.slug, loadPost)
</script>

<template>
  <main class="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,240,255,0.15),_transparent_30%),linear-gradient(180deg,_#04070e_0%,_#091120_100%)] px-4 py-14 text-white sm:px-8 sm:py-16 lg:px-16">
    <section class="mx-auto max-w-7xl">
      <RouterLink
        to="/blog"
        class="mb-10 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-slate-800/80"
      >
        <span aria-hidden="true">←</span>
        Back to Build Log
      </RouterLink>

      <div v-if="loading" class="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8 text-cyan-200/80">
        Loading post...
      </div>

      <div v-else-if="error" class="rounded-3xl border border-red-400/30 bg-red-500/10 p-8 text-red-100">
        {{ error }}
      </div>

      <article v-else-if="post" class="space-y-8 lg:space-y-10">
        <header class="space-y-6">
          <div class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-cyan-300/70">
            <span>{{ formatDate(post.publishedAt) }}</span>
            <span>{{ post.status }}</span>
            <span v-if="post.relatedProject">{{ post.relatedProject.title }}</span>
          </div>

          <div class="space-y-4">
            <h1 class="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">{{ post.title }}</h1>
            <p class="max-w-3xl text-lg leading-8 text-slate-300">{{ post.excerpt }}</p>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags || []"
              :key="tag.slug || tag.title"
              class="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-100"
            >
              {{ tag.title }}
            </span>
          </div>
        </header>

        <div v-if="hasImageAsset(post.heroImage)" class="overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-slate-950/70">
          <img :src="imageUrl(post.heroImage, 1600, 920)" :alt="post.title" class="h-auto w-full object-cover">
        </div>

        <section v-if="post.coverVideoUrl" class="overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-slate-950/70">
          <div v-if="isDirectVideoUrl(post.coverVideoUrl)" class="aspect-video">
            <video :src="post.coverVideoUrl" controls class="h-full w-full"></video>
          </div>
          <div v-else class="aspect-video">
            <iframe
              :src="toEmbedUrl(post.coverVideoUrl)"
              class="h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
              title="Post video"
            ></iframe>
          </div>
        </section>

        <div :class="hasSidebarContent ? 'grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:items-start xl:gap-10' : 'grid gap-8'">
          <div :class="hasSidebarContent ? 'min-w-0 rounded-[2rem] border border-slate-800 bg-slate-950/60 p-5 sm:p-8 lg:p-10' : 'min-w-0 rounded-[2rem] border border-slate-800 bg-slate-950/60 p-5 sm:p-8 lg:p-10 lg:max-w-4xl'">
            <section v-if="contentSections.length" class="space-y-7 sm:space-y-8">
              <template v-for="(section, index) in contentSections" :key="`${section.type}-${index}`">
                <h2 v-if="section.type === 'block' && section.style === 'h2'" class="text-3xl font-bold text-white">
                  {{ section.text }}
                </h2>

                <h3 v-else-if="section.type === 'block' && section.style === 'h3'" class="text-2xl font-semibold text-cyan-100">
                  {{ section.text }}
                </h3>

                <blockquote v-else-if="section.type === 'block' && section.style === 'blockquote'" class="border-l-4 border-cyan-400/40 pl-5 text-xl italic text-slate-200">
                  {{ section.text }}
                </blockquote>

                <p v-else-if="section.type === 'block'" class="text-lg leading-8 text-slate-200 sm:text-[1.05rem]">
                  {{ section.text }}
                </p>

                <ul v-else-if="section.type === 'list' && section.listType === 'bullet'" class="list-disc space-y-3 pl-6 text-lg text-slate-200">
                  <li v-for="item in section.items" :key="item">{{ item }}</li>
                </ul>

                <ol v-else-if="section.type === 'list' && section.listType === 'number'" class="list-decimal space-y-3 pl-6 text-lg text-slate-200">
                  <li v-for="item in section.items" :key="item">{{ item }}</li>
                </ol>

                <figure v-else-if="section.type === 'image'" class="overflow-hidden rounded-[1.75rem] border border-cyan-500/20 bg-slate-950/60">
                  <button type="button" class="block w-full" @click="openImage(section.image)">
                    <img
                      :src="imageUrl(section.image, 1400, 850)"
                      :alt="section.image.alt || post.title || 'Post image'"
                      class="h-auto w-full object-cover transition duration-300 hover:scale-[1.01]"
                    >
                  </button>
                </figure>

                <div v-else-if="section.type === 'codeSnippet'" class="overflow-hidden rounded-[1.5rem] border border-slate-700 bg-slate-950">
                  <div class="border-b border-slate-800 bg-slate-900/80 px-4 py-3 text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                    {{ section.filename || section.language || 'Code Snippet' }}
                  </div>
                  <pre class="overflow-x-auto p-4 text-sm leading-7 text-slate-200"><code>{{ section.code || '' }}</code></pre>
                </div>
              </template>
            </section>

            <section v-else class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-slate-300">
              No post content has been added yet.
            </section>

            <section v-if="post.attachments?.length" class="mt-14 space-y-4 border-t border-slate-800/80 pt-10">
              <h2 class="text-2xl font-bold text-white">Attachments</h2>
              <div class="grid gap-4 lg:grid-cols-2">
                <a
                  v-for="file in post.attachments"
                  :key="file._key"
                  :href="file.asset?.url"
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-500/40 hover:bg-slate-900"
                >
                  <p class="font-semibold text-white">{{ file.title || file.asset?.originalFilename || 'Attachment' }}</p>
                  <p v-if="file.description" class="mt-1 text-sm text-slate-300">{{ file.description }}</p>
                </a>
              </div>
            </section>
          </div>

          <aside v-if="hasSidebarContent" class="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <section v-if="galleryImages.length" class="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-5 sm:p-6">
              <div class="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p class="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Gallery</p>
                  <p class="mt-2 text-sm leading-6 text-slate-400">Supporting visuals, screenshots, and progress snapshots from this build.</p>
                </div>
                <span class="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300">{{ galleryImages.length }}</span>
              </div>

              <div class="-mx-2 flex snap-x gap-4 overflow-x-auto px-2 pb-2 lg:mx-0 lg:grid lg:grid-cols-1 lg:overflow-visible lg:px-0 lg:pb-0">
                <figure
                  v-for="image in galleryImages"
                  :key="image._key"
                  class="min-w-[84%] snap-center overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-950/80 sm:min-w-[360px] md:min-w-[420px] lg:min-w-0"
                >
                  <button type="button" class="block w-full" @click="openImage(image)">
                    <img :src="imageUrl(image, 900, 560)" :alt="image.alt || post.title" class="h-56 w-full object-cover transition duration-300 hover:scale-[1.02] lg:h-52 xl:h-56">
                  </button>
                  <figcaption v-if="image.caption" class="px-4 py-3 text-sm text-slate-300">{{ image.caption }}</figcaption>
                </figure>
              </div>
            </section>

            <section v-if="post.relatedProject || post.projectLinks?.github || post.projectLinks?.demo" class="rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-6">
              <p class="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-300/70">Project Context</p>

              <div v-if="post.relatedProject" class="space-y-2">
                <h3 class="text-xl font-semibold text-white">{{ post.relatedProject.title }}</h3>
                <p class="text-sm text-slate-300">{{ post.relatedProject.summary }}</p>
              </div>

              <div class="mt-5 flex flex-wrap gap-3">
                <a
                  v-if="post.projectLinks?.github || post.relatedProject?.githubUrl"
                  :href="post.projectLinks?.github || post.relatedProject?.githubUrl"
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-slate-900"
                >
                  GitHub
                </a>
                <a
                  v-if="post.projectLinks?.demo || post.relatedProject?.demoUrl"
                  :href="post.projectLinks?.demo || post.relatedProject?.demoUrl"
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-slate-900"
                >
                  Demo
                </a>
              </div>
            </section>

            <section v-if="post.skillsLearned?.length" class="rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-6">
              <p class="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-300/70">Skills Learned</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in post.skillsLearned"
                  :key="skill.name"
                  class="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-200"
                >
                  {{ skill.name }}
                </span>
              </div>
            </section>
          </aside>
        </div>
      </article>
    </section>

    <div
      v-if="selectedImage"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-6 backdrop-blur-sm"
      @click.self="closeImage"
    >
      <div class="max-h-full max-w-6xl overflow-auto rounded-[2rem] border border-cyan-400/20 bg-slate-950 p-4 shadow-[0_0_70px_rgba(0,240,255,0.12)]">
        <div class="mb-4 flex justify-end">
          <button
            type="button"
            class="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-white"
            @click="closeImage"
          >
            Close
          </button>
        </div>

        <img
          :src="imageUrl(selectedImage, 1800, 1200)"
          :alt="selectedImage.alt || post?.title || 'Gallery image'"
          class="h-auto max-h-[75vh] w-auto max-w-full rounded-[1.5rem] object-contain"
        >

        <p v-if="selectedImage.caption" class="mt-4 text-sm text-slate-300">
          {{ selectedImage.caption }}
        </p>
      </div>
    </div>
  </main>
</template>