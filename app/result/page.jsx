'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Result() {
  const router = useRouter()
  const [resumeData, setResumeData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)

  useEffect(() => {
    // Get data from localStorage
    const data = localStorage.getItem('resumeData')
    if (data) {
      const parsedData = JSON.parse(data)
      setResumeData(parsedData)

      // If no AI content, generate it
      if (!parsedData.aiGenerated) {
        generateResume(parsedData)
      } else {
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }, [])

  const generateResume = async (data) => {
    setGenerating(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          jobTitle: data.jobTitle,
          expLevel: data.experienceLevel,
          experience: data.pastExperience,
          jobDesc: data.jobDescription || ''
        })
      })

      const result = await response.json()

      if (response.ok) {
        const updatedData = { ...data, aiGenerated: result }
        setResumeData(updatedData)
        localStorage.setItem('resumeData', JSON.stringify(updatedData))
      } else {
        console.error('Generation failed:', result.error)
      }
    } catch (error) {
      console.error('API call failed:', error)
    }
    setGenerating(false)
    setLoading(false)
  }

  const copyToClipboard = async () => {
    if (!resumeData?.aiGenerated) return

    const ai = resumeData.aiGenerated
    const content = `
RESUME FOR: ${resumeData.name}
POSITION: ${resumeData.jobTitle}
EXPERIENCE LEVEL: ${resumeData.experienceLevel}

PROFESSIONAL SUMMARY:
${ai.summary}

KEY ACHIEVEMENTS:
${ai.bullets.map(bullet => '• ' + bullet).join('\n')}

TECHNICAL SKILLS:
${ai.skills.technical.join(', ')}

SOFT SKILLS:
${ai.skills.soft.join(', ')}

COVER LETTER:
${ai.coverLetter}
`

    try {
      await navigator.clipboard.writeText(content)
      alert('Content copied to clipboard!')
    } catch (error) {
      console.error('Failed to copy:', error)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = content
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('Content copied to clipboard!')
    }
  }

  if (loading || generating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            {generating ? 'Generating your AI-powered resume...' : 'Loading...'}
          </p>
        </div>
      </div>
    )
  }

  if (!resumeData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">No Resume Data Found</h1>
          <p className="text-gray-600 mb-6">Please fill out the builder form first.</p>
          <button
            onClick={() => router.push('/builder')}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Go to Builder
          </button>
        </div>
      </div>
    )
  }

  const getExperienceLevelLabel = (level) => {
    const labels = {
      entry: 'Entry Level (0-2 years)',
      mid: 'Mid Level (3-5 years)',
      senior: 'Senior Level (6+ years)'
    }
    return labels[level] || level
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Your AI-Generated Resume
          </h1>
          <p className="text-gray-600">
            Professional content crafted specifically for your career goals
          </p>
        </div>

        {/* Resume Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
            <h2 className="text-3xl font-bold mb-2">{resumeData.name}</h2>
            <p className="text-xl opacity-90">{resumeData.jobTitle}</p>
            <p className="text-sm opacity-75 mt-2">
              Experience Level: {getExperienceLevelLabel(resumeData.experienceLevel)}
            </p>
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-8">
            {/* AI-Generated Summary */}
            {resumeData.aiGenerated && (
              <>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      📝
                    </span>
                    Professional Summary
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                      {resumeData.aiGenerated.summary}
                    </p>
                  </div>
                </div>

                {/* AI-Generated Bullet Points */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      🎯
                    </span>
                    Key Achievements
                  </h3>
                  <div className="bg-green-50 rounded-lg p-6">
                    <ul className="text-gray-700 space-y-2">
                      {resumeData.aiGenerated.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* AI-Generated Skills */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      🛠️
                    </span>
                    Skills
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-indigo-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-indigo-800 mb-3">
                        Technical Skills
                      </h4>
                      <p className="text-indigo-700">
                        {resumeData.aiGenerated.skills.technical.join(', ')}
                      </p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-pink-800 mb-3">
                        Soft Skills
                      </h4>
                      <p className="text-pink-700">
                        {resumeData.aiGenerated.skills.soft.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI-Generated Cover Letter */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      📧
                    </span>
                    Cover Letter
                  </h3>
                  <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                    <div className="prose prose-sm max-w-none">
                      <div className="text-red-800 whitespace-pre-wrap leading-relaxed">
                        {resumeData.aiGenerated.coverLetter}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {!resumeData.aiGenerated && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🤖</div>
                <p className="text-gray-600">AI content generation failed. Please try again.</p>
                <button
                  onClick={() => generateResume(resumeData)}
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Retry Generation
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {resumeData.aiGenerated && (
            <button
              onClick={copyToClipboard}
              className="bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
            >
              📋 Copy All Content
            </button>
          )}
          <button
            onClick={() => router.push('/builder')}
            className="bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            Edit Resume
          </button>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
