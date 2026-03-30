import {useMemo, useState} from 'react'
import {nanoid} from 'nanoid'
import {Box, Button, Card, Flex, Heading, Select, Stack, Text, TextArea, TextInput} from '@sanity/ui'
import {useClient} from 'sanity'

const apiUrl = import.meta.env.SANITY_STUDIO_PORTFOLIO_API_URL

type DraftResponse = {
  title: string
  excerpt: string
  status: string
  tags: string[]
  skills: string[]
  body: Array<
    | {type: 'heading'; style: 'h2' | 'h3'; text: string}
    | {type: 'paragraph'; text: string}
    | {type: 'bulletList'; items: string[]}
  >
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 96)

const createSpan = (text: string) => ({
  _key: nanoid(10),
  _type: 'span',
  marks: [],
  text,
})

const createBlock = (text: string, style = 'normal') => ({
  _key: nanoid(10),
  _type: 'block',
  style,
  markDefs: [],
  children: [createSpan(text)],
})

const createListBlock = (text: string) => ({
  _key: nanoid(10),
  _type: 'block',
  style: 'normal',
  listItem: 'bullet' as const,
  level: 1,
  markDefs: [],
  children: [createSpan(text)],
})

const toPortableText = (body: DraftResponse['body']) => {
  return body.flatMap((item) => {
    if (item.type === 'heading') {
      return [createBlock(item.text, item.style)]
    }

    if (item.type === 'paragraph') {
      return [createBlock(item.text)]
    }

    if (item.type === 'bulletList') {
      return item.items.filter(Boolean).map((entry) => createListBlock(entry))
    }

    return []
  })
}

export function AiDraftPostTool() {
  const client = useClient({apiVersion: '2026-03-23'})
  const [notes, setNotes] = useState('')
  const [titleHint, setTitleHint] = useState('')
  const [status, setStatus] = useState('in-progress')
  const [githubUrl, setGithubUrl] = useState('')
  const [demoUrl, setDemoUrl] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<DraftResponse | null>(null)
  const [createdId, setCreatedId] = useState('')

  const canGenerate = useMemo(() => notes.trim().length > 20, [notes])

  const generateDraft = async () => {
    if (!canGenerate || isGenerating) {
      return
    }

    setIsGenerating(true)
    setCreatedId('')

    try {
      const response = await fetch(`${apiUrl}/draft-post`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          notes,
          title_hint: titleHint,
          status,
          github_url: githubUrl,
          demo_url: demoUrl,
        }),
      })

      if (!response.ok) {
        throw new Error('Draft generation failed')
      }

      const data: DraftResponse = await response.json()
      setResult(data)
    } catch (error) {
      console.error(error)
      window.alert('AI draft generation failed. Check the backend API and try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const createDraftInSanity = async () => {
    if (!result) {
      return
    }

    setIsGenerating(true)

    try {
      const [skills, tags] = await Promise.all([
        client.fetch(
          '*[_type == "skill" && name in $names]{_id, name}',
          {names: result.skills || []},
        ),
        client.fetch(
          '*[_type == "tag" && title in $titles]{_id, title}',
          {titles: result.tags || []},
        ),
      ])

      const draftId = `drafts.${nanoid(18)}`
      await client.create({
        _id: draftId,
        _type: 'post',
        title: result.title,
        slug: {_type: 'slug', current: slugify(result.title)},
        excerpt: result.excerpt,
        status: result.status,
        body: toPortableText(result.body || []),
        projectLinks: {
          github: githubUrl || undefined,
          demo: demoUrl || undefined,
        },
        skillsLearned: skills.map((skill: {_id: string}) => ({_type: 'reference', _ref: skill._id})),
        tags: tags.map((tag: {_id: string}) => ({_type: 'reference', _ref: tag._id})),
      })

      setCreatedId(draftId)
    } catch (error) {
      console.error(error)
      window.alert('Creating the Sanity draft failed. Check your generated content and try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Box padding={4}>
      <Stack space={5}>
        <Box>
          <Heading size={2}>AI Draft Post Generator</Heading>
          <Text muted size={2}>
            Describe what you built or learned, then create a structured draft post in Sanity for review.
          </Text>
        </Box>

        <Card padding={4} radius={3} shadow={1} tone="transparent" border>
          <Stack space={4}>
            <Text size={2} weight="semibold">Rough Notes</Text>
            <TextArea
              rows={10}
              value={notes}
              onChange={(event) => setNotes(event.currentTarget.value)}
              placeholder="Describe the project, problem, stack, decisions, lessons learned, links, and current progress."
            />

            <Flex gap={3} wrap="wrap">
              <Box flex={1}>
                <Text size={1}>Title Hint</Text>
                <TextInput value={titleHint} onChange={(event) => setTitleHint(event.currentTarget.value)} />
              </Box>

              <Box width={180}>
                <Text size={1}>Status</Text>
                <Select value={status} onChange={(event) => setStatus(event.currentTarget.value)}>
                  <option value="planned">Planned</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="retrospective">Retrospective</option>
                </Select>
              </Box>
            </Flex>

            <Flex gap={3} wrap="wrap">
              <Box flex={1}>
                <Text size={1}>GitHub URL</Text>
                <TextInput value={githubUrl} onChange={(event) => setGithubUrl(event.currentTarget.value)} />
              </Box>

              <Box flex={1}>
                <Text size={1}>Demo URL</Text>
                <TextInput value={demoUrl} onChange={(event) => setDemoUrl(event.currentTarget.value)} />
              </Box>
            </Flex>

            <Flex gap={3}>
              <Button
                text={isGenerating ? 'Generating...' : 'Generate Draft'}
                tone="primary"
                onClick={generateDraft}
                disabled={!canGenerate || isGenerating}
              />
              {result ? (
                <Button
                  text={isGenerating ? 'Creating...' : 'Create Draft in Sanity'}
                  mode="ghost"
                  onClick={createDraftInSanity}
                  disabled={isGenerating}
                />
              ) : null}
            </Flex>
          </Stack>
        </Card>

        {result ? (
          <Card padding={4} radius={3} shadow={1} tone="transparent" border>
            <Stack space={4}>
              <Heading size={1}>Generated Draft Preview</Heading>
              <Box>
                <Text weight="semibold">{result.title}</Text>
                <Text muted size={2}>{result.excerpt}</Text>
              </Box>

              <Box>
                <Text size={1} weight="semibold">Suggested Skills</Text>
                <Text size={2}>{(result.skills || []).join(', ') || 'None suggested'}</Text>
              </Box>

              <Box>
                <Text size={1} weight="semibold">Suggested Tags</Text>
                <Text size={2}>{(result.tags || []).join(', ') || 'None suggested'}</Text>
              </Box>

              <Box>
                <Text size={1} weight="semibold">Body Outline</Text>
                <Stack space={3} marginTop={3}>
                  {(result.body || []).map((item, index) => (
                    <Card key={`${item.type}-${index}`} padding={3} radius={2} tone="transparent" border>
                      {'text' in item ? <Text size={2}>{item.text}</Text> : <Text size={2}>{item.items.join(' • ')}</Text>}
                    </Card>
                  ))}
                </Stack>
              </Box>

              {createdId ? (
                <Card padding={3} radius={2} tone="positive">
                  <Text size={2}>Draft created successfully. Open the Posts list to continue editing and publish when ready.</Text>
                </Card>
              ) : null}
            </Stack>
          </Card>
        ) : null}
      </Stack>
    </Box>
  )
}