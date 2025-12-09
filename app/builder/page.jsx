import Link from 'next/link'

export const metadata = {
  title: 'Resume Builder - Create Your Professional Resume',
  description: 'Build your resume with AI assistance. Fill out your information and get a professionally crafted resume in minutes.',
}

export default function Builder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors">
            AI Resume Builder
          </Link>
          <Link
            href="/"
            className="text-white/80 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 glassmorphism p-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Build Your Professional Resume
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Answer a few questions and let AI create your perfect resume
            </p>
          </div>

          {/* Instructions */}
          <div className="glassmorphism p-8 sm:p-10 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Fill Information</h3>
                <p className="text-white/70 text-sm">Provide your experience, skills, and job preferences</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-pink-400/30">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="font-semibold text-white mb-2">AI Generation</h3>
                <p className="text-white/70 text-sm">Our AI creates professional content tailored to you</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                  <span className="text-3xl">📄</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Get Results</h3>
                <p className="text-white/70 text-sm">Download your polished resume and cover letter</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="glassmorphism p-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6 text-white/80">
                Create your professional resume in just a few minutes
              </p>
              <Link
                href="/builder/interactive"
                className="gradient-button inline-flex items-center"
              >
                🚀 Start Building Now
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glassmorphism p-6 hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-semibold text-white mb-3">✨ AI-Powered Content</h3>
              <p className="text-white/70">Get professionally written resume summaries, bullet points, and cover letters tailored to your experience.</p>
            </div>

            <div className="glassmorphism p-6 hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-semibold text-white mb-3">🎯 ATS Optimization</h3>
              <p className="text-white/70">Content optimized to pass Applicant Tracking Systems and impress recruiters.</p>
            </div>

            <div className="glassmorphism p-6 hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-semibold text-white mb-3">⚡ Instant Results</h3>
              <p className="text-white/70">Get your complete resume package in under 5 minutes with our streamlined process.</p>
            </div>

            <div className="glassmorphism p-6 hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-semibold text-white mb-3">💼 Professional Templates</h3>
              <p className="text-white/70">Modern, clean resume formats that stand out to hiring managers.</p>
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
