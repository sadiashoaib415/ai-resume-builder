import Link from 'next/link'

export const metadata = {
  title: 'AI Resume Builder - Create Professional Resumes with AI',
  description: 'Build ATS-friendly resumes and cover letters instantly with AI-powered content generation. Free to use, professional results.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition-colors">
            AI Resume Builder
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/builder" className="text-white/80 hover:text-white transition-colors">
              Builder
            </Link>
            <Link
              href="/builder/interactive"
              className="gradient-button text-sm py-2 px-6"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glassmorphism p-10 sm:p-12 lg:p-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Resume,
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Supercharged by AI</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 mb-10 leading-relaxed">
              Create professional, ATS-friendly resumes in seconds with AI-driven content generation. Seamlessly integrated, infinitely scalable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/builder/interactive"
                className="gradient-button inline-flex items-center justify-center"
              >
                Get Started →
              </Link>
              <Link
                href="#features"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose AI Resume Builder?
            </h2>
            <p className="text-xl text-white/80">
              Professional results in minutes, not hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glassmorphism p-8 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Content</h3>
              <p className="text-white/70">Generate professional resume content and cover letters tailored to your experience</p>
            </div>

            <div className="glassmorphism p-8 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-white/70">Create complete resumes in under 5 minutes with our streamlined process</p>
            </div>

            <div className="glassmorphism p-8 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">ATS-Optimized</h3>
              <p className="text-white/70">Content designed to pass Applicant Tracking Systems and impress recruiters</p>
            </div>

            <div className="glassmorphism p-8 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3">Professional Templates</h3>
              <p className="text-white/70">Clean, modern resume formats that stand out to hiring managers</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/builder/interactive"
              className="gradient-button inline-flex items-center"
            >
              Start Building Your Resume →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">AI Resume Builder</h3>
          <p className="text-white/60 mb-4">Create professional resumes with AI assistance</p>
          <p className="text-sm text-white/40">© 2024 AI Resume Builder. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  )
}
