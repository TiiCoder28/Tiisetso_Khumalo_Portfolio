import {createClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'dyns95pw'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2026-03-23'
const useCdn = (import.meta.env.VITE_SANITY_USE_CDN || 'true') === 'true'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
})

const imageBuilder = createImageUrlBuilder(sanityClient)

export const urlFor = (source) => imageBuilder.image(source)