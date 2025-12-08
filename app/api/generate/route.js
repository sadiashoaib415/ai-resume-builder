import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are a professional resume and cover letter writer. Make content concise, modern, ATS-friendly, and impactful. Focus on quantifiable achievements and relevant skills. Keep language professional but engaging.`

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json()
    const { name, jobTitle, expLevel, experience, jobDesc } = body

    // Input validation
    if (!jobTitle || !experience) {
      return NextResponse.json(
        { error: 'Missing required fields: jobTitle and experience are required' },
        { status: 400 }
      )
    }

    if (!name || !expLevel) {
      return NextResponse.json(
        { error: 'Missing required fields: name and expLevel are required' },
        { status: 400 }
      )
    }

    // Validate experience level
    const validExpLevels = ['entry', 'mid', 'senior']
    if (!validExpLevels.includes(expLevel)) {
      return NextResponse.json(
        { error: 'Invalid expLevel. Must be one of: entry, mid, senior' },
        { status: 400 }
      )
    }

    // Check for OpenAI API key
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured. Please set OPENAI_API_KEY environment variable.' },
        { status: 500 }
      )
    }

    // Create the comprehensive prompt
    const userPrompt = `Generate professional resume content for the following:

CANDIDATE INFO:
- Name: ${name}
- Job Title: ${jobTitle}
- Experience Level: ${expLevel} (${expLevel === 'entry' ? '0-2 years' : expLevel === 'mid' ? '3-5 years' : '6+ years'})
- Past Experience: ${experience}
${jobDesc ? `- Target Job Description: ${jobDesc}` : ''}

Please generate:

1. RESUME SUMMARY: Write a 3-4 line professional summary that highlights key strengths and career goals. Make it compelling and tailored to the job title.

2. BULLET POINTS: Create 6-10 ATS-friendly bullet points from the candidate's experience. Each bullet should start with a strong action verb, include quantifiable achievements where possible, and be optimized for ATS systems.

3. SKILLS: List technical skills and soft skills separately. Technical skills should be relevant to the job title. Include 8-12 skills total, formatted as comma-separated lists.

4. COVER LETTER: Write a professional cover letter (250-350 words) addressed to a hiring manager. Include introduction, body highlighting relevant experience, and conclusion. Make it personalized and compelling.

Format your response as JSON with these exact keys:
{
  "summary": "the summary text",
  "bullets": ["bullet 1", "bullet 2", ...],
  "skills": {
    "technical": ["skill1", "skill2", ...],
    "soft": ["skill1", "skill2", ...]
  },
  "coverLetter": "the full cover letter text"
}`

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Using a cost-effective model
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('OpenAI API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to generate content. Please try again.' },
        { status: 500 }
      )
    }

    const data = await response.json()
    const generatedContent = data.choices[0]?.message?.content

    if (!generatedContent) {
      return NextResponse.json(
        { error: 'No content generated. Please try again.' },
        { status: 500 }
      )
    }

    // Parse the JSON response from OpenAI
    let parsedContent
    try {
      parsedContent = JSON.parse(generatedContent)
    } catch (parseError) {
      console.error('Failed to parse OpenAI response:', generatedContent)
      return NextResponse.json(
        { error: 'Failed to process generated content. Please try again.' },
        { status: 500 }
      )
    }

    // Validate the response structure
    if (!parsedContent.summary || !parsedContent.bullets || !parsedContent.skills || !parsedContent.coverLetter) {
      return NextResponse.json(
        { error: 'Incomplete content generated. Please try again.' },
        { status: 500 }
      )
    }

    // Return the generated content
    return NextResponse.json({
      summary: parsedContent.summary,
      bullets: parsedContent.bullets,
      skills: parsedContent.skills,
      coverLetter: parsedContent.coverLetter
    })

  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST.' },
    { status: 405 }
  )
}
