import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are a professional resume and cover letter writer. Make content concise, modern, ATS-friendly, and impactful. Focus on quantifiable achievements and relevant skills. Keep language professional but engaging.`

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, jobTitle, expLevel, experience, jobDesc } = body

    // Basic validation
    if (!jobTitle || !experience || !name || !expLevel) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured. Please add OPENAI_API_KEY to your environment variables.' },
        { status: 500 }
      )
    }

    // Create the prompt for GPT-4
    const userPrompt = `Generate a professional resume and cover letter for:
- Name: ${name}
- Job Title: ${jobTitle}
- Experience Level: ${expLevel}
- Past Experience: ${experience}
${jobDesc ? `- Target Job Description: ${jobDesc}` : ''}

Please provide:
1. A professional summary (3-4 sentences)
2. 6-10 ATS-friendly bullet points highlighting key achievements
3. Technical skills and soft skills (extract from experience)
4. A professional cover letter (3-4 paragraphs)

Return the response as JSON with this exact structure:
{
  "summary": "professional summary text",
  "bullets": ["bullet point 1", "bullet point 2", ...],
  "skills": {
    "technical": ["skill1", "skill2", ...],
    "soft": ["skill1", "skill2", ...]
  },
  "coverLetter": "full cover letter text"
}`

    // Call OpenAI GPT-4 API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('OpenAI API error:', errorData)
      return NextResponse.json(
        { error: `OpenAI API error: ${errorData.error?.message || 'Failed to generate content'}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    const aiResponse = data.choices[0]?.message?.content

    if (!aiResponse) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 }
      )
    }

    // Try to parse JSON from the response
    let parsedResponse
    try {
      // Extract JSON from markdown code blocks if present
      const jsonMatch = aiResponse.match(/```json\s*([\s\S]*?)\s*```/) || aiResponse.match(/```\s*([\s\S]*?)\s*```/)
      const jsonString = jsonMatch ? jsonMatch[1] : aiResponse
      parsedResponse = JSON.parse(jsonString)
    } catch (parseError) {
      // If parsing fails, create a structured response from the text
      console.warn('Failed to parse JSON, creating structured response')
      const lines = aiResponse.split('\n').filter(line => line.trim())
      
      parsedResponse = {
        summary: lines.find(line => line.toLowerCase().includes('summary')) || 
                 `Professional ${jobTitle} with ${expLevel} level experience. ${experience.substring(0, 150)}...`,
        bullets: lines.filter(line => line.trim().startsWith('•') || line.trim().startsWith('-')).slice(0, 10)
          .map(b => b.replace(/^[•\-\d.]+\s*/, '').trim())
          .filter(b => b.length > 0),
        skills: {
          technical: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
          soft: ['Communication', 'Leadership', 'Problem Solving', 'Team Collaboration']
        },
        coverLetter: aiResponse.includes('Dear') ? aiResponse : 
                    `Dear Hiring Manager,\n\nI am writing to express my interest in the ${jobTitle} position...\n\nBest regards,\n${name}`
      }
    }

    // Ensure we have valid data structure
    if (!parsedResponse.bullets || parsedResponse.bullets.length === 0) {
      parsedResponse.bullets = [
        `Demonstrated expertise in ${jobTitle} role with comprehensive experience`,
        `Successfully managed projects and delivered measurable results`,
        `Collaborated with cross-functional teams to achieve objectives`,
        `Implemented best practices and improved processes`,
        `Developed skills in relevant technologies and methodologies`
      ]
    }

    return NextResponse.json(parsedResponse)

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: `Internal server error: ${error.message}` },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'API is working' })
}
