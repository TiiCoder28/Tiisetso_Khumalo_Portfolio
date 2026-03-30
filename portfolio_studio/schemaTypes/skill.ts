import {defineField, defineType} from 'sanity'

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'AI', value: 'ai'},
          {title: 'Machine Learning', value: 'ml'},
          {title: 'IoT', value: 'iot'},
          {title: 'Agentic AI', value: 'agentic-ai'},
          {title: 'Computer Engineering', value: 'computer-engineering'},
          {title: 'Web', value: 'web'},
        ],
      },
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          {title: 'Learning', value: 'learning'},
          {title: 'Working', value: 'working'},
          {title: 'Strong', value: 'strong'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})