import {useState} from 'react'
import {useClient} from 'sanity'
import type {DocumentActionComponent} from 'sanity'

const apiUrl = import.meta.env.SANITY_STUDIO_PORTFOLIO_API_URL

export const generateLinkedInSummaryAction: DocumentActionComponent = (props) => {
  const [isGenerating, setIsGenerating] = useState(false)
  const client = useClient({apiVersion: '2026-03-23'})

  const sourceDocument = props.draft || props.published
  const targetId = sourceDocument?._id
  const title = typeof sourceDocument?.title === 'string' ? sourceDocument.title : ''
  const excerpt = typeof sourceDocument?.excerpt === 'string' ? sourceDocument.excerpt : ''

  if (!sourceDocument || props.schemaType !== 'post') {
    return null
  }

  return {
    label: isGenerating ? 'Generating Summary...' : 'Generate LinkedIn Summary',
    disabled: isGenerating || !title || !excerpt,
    title: 'Generate and save a LinkedIn summary from the title and excerpt',
    onHandle: async () => {
      if (!targetId) {
        window.alert('Save the post draft before generating a summary.')
        props.onComplete()
        return
      }

      setIsGenerating(true)

      try {
        const response = await fetch(`${apiUrl}/linkedin-summary`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            excerpt,
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to generate summary')
        }

        const data = await response.json()
        await client.patch(targetId).set({linkedinSummary: data.summary}).commit()
      } catch (error) {
        console.error(error)
        window.alert('Summary generation failed. Check the backend API and try again.')
      } finally {
        setIsGenerating(false)
        props.onComplete()
      }
    },
  }
}