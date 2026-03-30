import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().min(5).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Card Summary',
      type: 'text',
      rows: 3,
      description: 'Short summary used on blog cards and the post header.',
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'status',
      title: 'Progress Status',
      type: 'string',
      initialValue: 'in-progress',
      options: {
        list: [
          {title: 'Planned', value: 'planned'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Completed', value: 'completed'},
          {title: 'Retrospective', value: 'retrospective'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alt Text', type: 'string'}),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'coverVideoUrl',
      title: 'Cover Video URL',
      type: 'url',
      description: 'Optional hosted video URL for the post hero area.',
    }),
    defineField({
      name: 'attachments',
      title: 'Attachments',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'file',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'tag'}],
        }),
      ],
    }),
    defineField({
      name: 'skillsLearned',
      title: 'Skills Learned',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'skill'}],
        }),
      ],
    }),
    defineField({
      name: 'relatedProject',
      title: 'Related Project',
      type: 'reference',
      to: [{type: 'project'}],
    }),
    defineField({
      name: 'projectLinks',
      title: 'Project Links',
      type: 'object',
      fields: [
        defineField({name: 'github', title: 'GitHub URL', type: 'url'}),
        defineField({name: 'demo', title: 'Demo URL', type: 'url'}),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Full Post Content',
      type: 'array',
      description: 'Write the full post here. This is the main article content rendered on the blog post page.',
      validation: (rule) => rule.required().min(1),
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({type: 'image', options: {hotspot: true}}),
        defineArrayMember({
          type: 'object',
          name: 'codeSnippet',
          title: 'Code Snippet',
          fields: [
            defineField({name: 'filename', title: 'Filename', type: 'string'}),
            defineField({name: 'language', title: 'Language', type: 'string'}),
            defineField({name: 'code', title: 'Code', type: 'text', rows: 12}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'linkedinSummary',
      title: 'LinkedIn Summary',
      type: 'text',
      rows: 5,
      description: 'Generated summary you can copy into LinkedIn. Use the Generate LinkedIn Summary action in the document header.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
      media: 'heroImage',
    },
  },
})