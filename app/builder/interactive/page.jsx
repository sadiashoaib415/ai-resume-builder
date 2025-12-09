'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function InteractiveBuilder() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    experienceLevel: '',
    pastExperience: '',
    jobDescription: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required'
    }

    if (!formData.experienceLevel) {
      newErrors.experienceLevel = 'Please select your experience level'
    }

    if (!formData.pastExperience.trim()) {
      newErrors.pastExperience = 'Please describe your past experience'
    } else if (formData.pastExperience.trim().length < 50) {
      newErrors.pastExperience = 'Please provide at least 50 characters describing your experience'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      // Scroll to first error
      const firstError = Object.keys(errors)[0]
      if (firstError) {
        document.getElementById(firstError)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setIsSubmitting(true)

    try {
      // Save to localStorage
      localStorage.setItem('resumeData', JSON.stringify(formData))

      // Redirect to result page (which will generate AI content)
      router.push('/result')
    } catch (error) {
      console.error('Error saving form data:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              ← Home
            </Link>
            <Link href="/builder" className="text-white/80 hover:text-white transition-colors">
              Overview
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Progress Header */}
          <div className="glassmorphism p-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Build Your Resume</h1>
              <span className="text-sm text-white/60">Step 1 of 1</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-full"></div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="glassmorphism p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 text-lg">👤</span>
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="md:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                    Full Name <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`glass-input w-full ${errors.name ? 'border-pink-400/50 focus:ring-pink-500/50' : ''}`}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-pink-300 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Job Title */}
                <div className="md:col-span-2">
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-white/90 mb-2">
                    Desired Job Title <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className={`glass-input w-full ${errors.jobTitle ? 'border-pink-400/50 focus:ring-pink-500/50' : ''}`}
                    placeholder="e.g., Software Engineer, Product Manager, Data Scientist"
                    disabled={isSubmitting}
                  />
                  {errors.jobTitle && (
                    <p className="mt-2 text-sm text-pink-300 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.jobTitle}
                    </p>
                  )}
                </div>

                {/* Experience Level */}
                <div className="md:col-span-2">
                  <label htmlFor="experienceLevel" className="block text-sm font-medium text-white/90 mb-2">
                    Experience Level <span className="text-pink-400">*</span>
                  </label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    className={`glass-input w-full ${errors.experienceLevel ? 'border-pink-400/50 focus:ring-pink-500/50' : ''}`}
                    disabled={isSubmitting}
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" style={{ backgroundColor: '#1e1b4b', color: '#fff' }}>Select your experience level</option>
                    <option value="entry" style={{ backgroundColor: '#1e1b4b', color: '#fff' }}>Entry Level (0-2 years)</option>
                    <option value="mid" style={{ backgroundColor: '#1e1b4b', color: '#fff' }}>Mid Level (3-5 years)</option>
                    <option value="senior" style={{ backgroundColor: '#1e1b4b', color: '#fff' }}>Senior Level (6+ years)</option>
                  </select>
                  {errors.experienceLevel && (
                    <p className="mt-2 text-sm text-pink-300 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.experienceLevel}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="glassmorphism p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center mr-3 text-lg">💼</span>
                Professional Experience
              </h2>

              <div className="space-y-6">
                {/* Past Experience */}
                <div>
                  <label htmlFor="pastExperience" className="block text-sm font-medium text-white/90 mb-2">
                    Describe Your Experience <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    id="pastExperience"
                    name="pastExperience"
                    value={formData.pastExperience}
                    onChange={handleInputChange}
                    rows={8}
                    className={`glass-input w-full resize-vertical ${errors.pastExperience ? 'border-pink-400/50 focus:ring-pink-500/50' : ''}`}
                    placeholder="Describe your professional experience, skills, achievements, and responsibilities. Include specific technologies, projects, and results. The more detail you provide, the better your AI-generated resume will be."
                    disabled={isSubmitting}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      {errors.pastExperience && (
                        <p className="text-sm text-pink-300 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {errors.pastExperience}
                        </p>
                      )}
                    </div>
                    <div className="text-sm text-white/60">
                      {formData.pastExperience.length} characters
                    </div>
                  </div>
                </div>

                {/* Job Description */}
                <div>
                  <label htmlFor="jobDescription" className="block text-sm font-medium text-white/90 mb-2">
                    Target Job Description
                    <span className="text-white/60 text-xs ml-1">(optional but recommended)</span>
                  </label>
                  <textarea
                    id="jobDescription"
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleInputChange}
                    rows={6}
                    className="glass-input w-full resize-vertical"
                    placeholder="Paste the job description you're applying for. This helps our AI tailor your resume to match the specific requirements and keywords."
                    disabled={isSubmitting}
                  />
                  <div className="text-right mt-1">
                    <span className="text-sm text-white/60">
                      {formData.jobDescription.length} characters
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="glassmorphism p-8 sm:p-10">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Ready to Generate Your Resume?</h3>
                <p className="text-white/80 mb-6">
                  Our AI will create a professional resume and cover letter based on your information.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gradient-button disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating Your Resume...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      🚀 Generate My Resume
                    </span>
                  )}
                </button>

                <p className="text-sm text-white/60 mt-4">
                  This will take about 10-15 seconds to process your information.
                </p>
              </div>
            </div>
          </form>
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
