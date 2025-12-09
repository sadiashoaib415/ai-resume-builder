'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

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
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
        <div className="text-center glassmorphism p-12">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-white/20 border-t-purple-400 mb-6"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Generating Your Resume...</h2>
          <p className="text-white/80">Our AI is crafting your professional resume and cover letter</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center glassmorphism p-10">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-white mb-4">Error Generating Resume</h2>
          <p className="text-white/80 mb-6">{error}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/builder/interactive"
              className="gradient-button"
            >
              ← Try Again
            </Link>
            <Link
              href="/"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors">
            AI Resume Builder
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={copyToClipboard}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm"
            >
              📋 Copy All
            </button>
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/builder/interactive" className="text-white/80 hover:text-white transition-colors">
              Builder
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 glassmorphism p-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Your AI-Generated Resume
            </h1>
            <p className="text-xl text-white/80">
              Professional content crafted specifically for your career goals
            </p>
          </div>

          {/* Resume Preview */}
          <div className="glassmorphism overflow-hidden mb-8">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
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
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 text-lg">📝</span>
                  Professional Summary
                </h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-white/90 text-lg leading-relaxed">
                    {resumeData.summary}
                  </p>
                </div>
              </section>

              {/* Key Achievements */}
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center mr-4 text-lg">🎯</span>
                  Key Achievements
                </h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <ul className="text-white/90 space-y-3 text-lg leading-relaxed">
                    {resumeData.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-pink-400 mr-3 text-xl">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Skills */}
              <section>
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 text-lg">🛠️</span>
                  Skills & Expertise
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-4 text-lg">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.technical.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm font-medium border border-purple-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-4 text-lg">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.soft.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-sm font-medium border border-pink-400/30"
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
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center mr-4 text-lg">📧</span>
                  Cover Letter
                </h3>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="prose prose-lg max-w-none">
                    <div className="text-white/90 whitespace-pre-wrap leading-relaxed">
                      {resumeData.coverLetter}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="glassmorphism p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Another?</h2>
              <p className="text-xl mb-6 text-white/80">
                Build more personalized resumes with AI assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/builder/interactive"
                  className="gradient-button"
                >
                  🏗️ Build Another Resume
                </Link>
                <Link
                  href="/"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative px-4 py-8 mt-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">© 2024 AI Resume Builder. Create professional resumes with AI assistance.</p>
        </div>
      </footer>
    </div>
  )
}
