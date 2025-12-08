'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Builder() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    experienceLevel: '',
    pastExperience: '',
    jobDescription: ''
  })

  const [errors, setErrors] = useState({})

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
      newErrors.name = 'Name is required'
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required'
    }

    if (!formData.experienceLevel) {
      newErrors.experienceLevel = 'Please select an experience level'
    }

    if (!formData.pastExperience.trim()) {
      newErrors.pastExperience = 'Past experience is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Save to localStorage
    localStorage.setItem('resumeData', JSON.stringify(formData))

    // Navigate to result page
    router.push('/result')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Build Your Resume
            </h1>
            <p className="text-gray-600">
              Fill in your details and let AI help you create the perfect resume
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                Job Title *
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.jobTitle ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="e.g., Software Engineer, Product Manager"
              />
              {errors.jobTitle && (
                <p className="mt-1 text-sm text-red-600">{errors.jobTitle}</p>
              )}
            </div>

            {/* Experience Level */}
            <div>
              <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-2">
                Experience Level *
              </label>
              <select
                id="experienceLevel"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.experienceLevel ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select your experience level</option>
                <option value="entry">Entry Level (0-2 years)</option>
                <option value="mid">Mid Level (3-5 years)</option>
                <option value="senior">Senior Level (6+ years)</option>
              </select>
              {errors.experienceLevel && (
                <p className="mt-1 text-sm text-red-600">{errors.experienceLevel}</p>
              )}
            </div>

            {/* Past Experience */}
            <div>
              <label htmlFor="pastExperience" className="block text-sm font-medium text-gray-700 mb-2">
                Past Experience *
              </label>
              <textarea
                id="pastExperience"
                name="pastExperience"
                value={formData.pastExperience}
                onChange={handleInputChange}
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
                  errors.pastExperience ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Describe your previous work experience, skills, achievements, and responsibilities..."
              />
              {errors.pastExperience && (
                <p className="mt-1 text-sm text-red-600">{errors.pastExperience}</p>
              )}
            </div>

            {/* Job Description */}
            <div>
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Target Job Description
                <span className="text-gray-500 text-xs ml-1">(optional)</span>
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                placeholder="Paste the job description you're applying for to get more tailored suggestions..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Generate Resume
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/')}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
