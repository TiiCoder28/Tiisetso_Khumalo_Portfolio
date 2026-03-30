import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {generateLinkedInSummaryAction} from './actions/generateLinkedInSummaryAction'
import {AiDraftPostTool} from './tools/AiDraftPostTool'

export default defineConfig({
  name: 'default',
  title: 'Portfolio_studio',

  projectId: 'dyns95pw',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  tools: (previousTools) => [
    ...previousTools,
    {
      name: 'ai-draft-post',
      title: 'AI Draft Post',
      component: AiDraftPostTool,
    },
  ],

  document: {
    actions: (previousActions, context) => {
      if (context.schemaType === 'post') {
        return [generateLinkedInSummaryAction, ...previousActions]
      }

      return previousActions
    },
  },

  schema: {
    types: schemaTypes,
  },
})
