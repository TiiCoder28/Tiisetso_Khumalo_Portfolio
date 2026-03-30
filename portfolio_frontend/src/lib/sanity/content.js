import {sanityClient} from './client'

const postListQuery = `*[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  body,
  status,
  featured,
  publishedAt,
  heroImage,
  "tags": tags[]->title,
  "skillsLearned": skillsLearned[]->name,
  "relatedProject": relatedProject->{
    title,
    "slug": slug.current,
    status
  }
}`

const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  excerpt,
  status,
  featured,
  publishedAt,
  heroImage,
  coverVideoUrl,
  body,
  gallery[]{
    _key,
    alt,
    caption,
    asset
  },
  attachments[]{
    _key,
    title,
    description,
    asset->{
      url,
      originalFilename
    }
  },
  projectLinks,
  linkedinSummary,
  "tags": tags[]->{
    title,
    "slug": slug.current
  },
  "skillsLearned": skillsLearned[]->{
    name,
    category,
    level
  },
  "relatedProject": relatedProject->{
    title,
    summary,
    status,
    githubUrl,
    demoUrl,
    techStack,
    "slug": slug.current
  }
}`

export const getPosts = async () => sanityClient.fetch(postListQuery)

export const getPostBySlug = async (slug) => sanityClient.fetch(postBySlugQuery, {slug})

export const portableTextToPlainText = (blocks = []) => {
  return blocks
    .map((block) => {
      if (block._type === 'block') {
        return (block.children || []).map((child) => child.text).join('')
      }

      if (block._type === 'codeSnippet') {
        return [block.filename, block.code].filter(Boolean).join('\n')
      }

      return ''
    })
    .filter(Boolean)
    .join('\n\n')
    .trim()
}

export const getPostPreview = (post) => {
  const bodyPreview = portableTextToPlainText(post?.body || [])

  if (bodyPreview) {
    return bodyPreview.slice(0, 260)
  }

  return post?.excerpt || ''
}