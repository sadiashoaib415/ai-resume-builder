import Link from 'next/link'

export const metadata = {
  title: 'Resume Builder - Create Your Professional Resume',
  description: 'Build your resume with AI assistance. Fill out your information and get a professionally crafted resume in minutes.',
}

export default function Builder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              AI Resume Builder
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Build Your Professional Resume
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Answer a few questions and let AI create your perfect resume
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fill Information</h3>
                <p className="text-gray-600 text-sm">Provide your experience, skills, and job preferences</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Generation</h3>
                <p className="text-gray-600 text-sm">Our AI creates professional content tailored to you</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Get Results</h3>
                <p className="text-gray-600 text-sm">Download your polished resume and cover letter</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6 opacity-90">
                Create your professional resume in just a few minutes
              </p>
              <Link
                href="/builder/interactive"
                className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                🚀 Start Building Now
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✨ AI-Powered Content</h3>
              <p className="text-gray-600">Get professionally written resume summaries, bullet points, and cover letters tailored to your experience.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 ATS Optimization</h3>
              <p className="text-gray-600">Content optimized to pass Applicant Tracking Systems and impress recruiters.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⚡ Instant Results</h3>
              <p className="text-gray-600">Get your complete resume package in under 5 minutes with our streamlined process.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💼 Professional Templates</h3>
              <p className="text-gray-600">Modern, clean resume formats that stand out to hiring managers.</p>
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
