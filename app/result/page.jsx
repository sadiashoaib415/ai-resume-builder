'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Result() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState(null)
  const [resumeData, setResumeData] = useState(null)

  useEffect(() => {
    // Get form data from localStorage
    const savedData = localStorage.getItem('resumeData')
    if (!savedData) {
      router.push('/builder/interactive')
      return
    }

    const parsedData = JSON.parse(savedData)
    setFormData(parsedData)

    // Call the API to generate resume
    const generateResume = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: parsedData.name,
            jobTitle: parsedData.jobTitle,
            expLevel: parsedData.experienceLevel,
            experience: parsedData.pastExperience,
            jobDesc: parsedData.jobDescription || ''
          })
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to generate resume')
        }

        const data = await response.json()
        setResumeData(data)
      } catch (err) {
        console.error('Error generating resume:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    generateResume()
  }, [router])

  const copyToClipboard = async () => {
    if (!resumeData || !formData) return

    const text = `
${formData.name}
${formData.jobTitle}
${formData.experienceLevel}

PROFESSIONAL SUMMARY
${resumeData.summary}

KEY ACHIEVEMENTS
${resumeData.bullets.map(b => `• ${b}`).join('\n')}

TECHNICAL SKILLS
${resumeData.skills.technical.join(', ')}

SOFT SKILLS
${resumeData.skills.soft.join(', ')}

COVER LETTER
${resumeData.coverLetter}
    `.trim()

    try {
      await navigator.clipboard.writeText(text)
      alert('✅ Copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy:', err)
      alert('❌ Failed to copy. Please select and copy manually.')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop"
              alt="Loading"
              fill
              className="rounded-full object-cover animate-pulse"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Generating Your Resume...</h2>
          <p className="text-gray-600">Our AI is crafting your professional resume and cover letter</p>
          <div className="mt-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-xl shadow-lg p-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Generating Resume</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/builder/interactive"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200"
            >
              ← Try Again
            </Link>
            <Link
              href="/"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (!resumeData || !formData) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              AI Resume Builder
            </Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={copyToClipboard}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 text-sm"
              >
                📋 Copy All
              </button>
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/builder/interactive" className="text-gray-600 hover:text-gray-900 transition-colors">
                Builder
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                alt="Resume"
                fill
                className="rounded-full object-cover shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your AI-Generated Resume
            </h1>
            <p className="text-xl text-gray-600">
              Professional content crafted specifically for your career goals
            </p>
          </div>

          {/* Resume Preview */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">{formData.name}</h2>
              <p className="text-xl opacity-90">{formData.jobTitle}</p>
              <p className="text-sm opacity-75 mt-2">
                Experience Level: {formData.experienceLevel.charAt(0).toUpperCase() + formData.experienceLevel.slice(1)} Level
              </p>
            </div>

            {/* Content Sections */}
            <div className="p-8 space-y-8">
              {/* Professional Summary */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">📝</span>
                  Professional Summary
                </h3>
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {resumeData.summary}
                  </p>
                </div>
              </section>

              {/* Key Achievements */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">🎯</span>
                  Key Achievements
                </h3>
                <div className="bg-green-50 rounded-lg p-6">
                  <ul className="text-gray-700 space-y-3 text-lg leading-relaxed">
                    {resumeData.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-3 text-xl">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Skills */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">🛠️</span>
                  Skills & Expertise
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <h4 className="font-semibold text-indigo-800 mb-4 text-lg">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.technical.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-6">
                    <h4 className="font-semibold text-pink-800 mb-4 text-lg">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.soft.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Cover Letter */}
              <section>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">📧</span>
                  Cover Letter
                </h3>
                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <div className="prose prose-lg max-w-none">
                    <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                      {resumeData.coverLetter}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Another?</h2>
              <p className="text-xl mb-6 opacity-90">
                Build more personalized resumes with AI assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/builder/interactive"
                  className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  🏗️ Build Another Resume
                </Link>
                <Link
                  href="/"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 AI Resume Builder. Create professional resumes with AI assistance.</p>
        </div>
      </footer>
    </div>
  )
}
