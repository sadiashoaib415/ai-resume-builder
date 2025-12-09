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
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    // Simple response for testing
    const mockResponse = {
      summary: `Professional ${jobTitle} with ${expLevel} level experience in ${experience.substring(0, 50)}...`,
      bullets: [
        `• Demonstrated expertise in ${jobTitle} role with comprehensive experience`,
        `• Successfully managed projects and delivered results`,
        `• Collaborated with cross-functional teams to achieve objectives`,
        `• Implemented best practices and improved processes`,
        `• Developed skills in relevant technologies and methodologies`
      ],
      skills: {
        technical: ["JavaScript", "React", "Node.js", "Python"],
        soft: ["Communication", "Leadership", "Problem Solving", "Team Collaboration"]
      },
      coverLetter: `Dear Hiring Manager,

I am writing to express my interest in the ${jobTitle} position. With my ${expLevel} level experience, I am confident in my ability to contribute to your team.

${experience.substring(0, 200)}...

I would welcome the opportunity to discuss how my background and skills align with your needs.

Best regards,
${name}`
    }

    return NextResponse.json(mockResponse)

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: 'API is working' })
}
