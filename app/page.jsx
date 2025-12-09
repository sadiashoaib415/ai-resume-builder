import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'AI Resume Builder - Create Professional Resumes with AI',
  description: 'Build ATS-friendly resumes and cover letters instantly with AI-powered content generation. Free to use, professional results.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="px-4 py-20 mx-auto max-w-7xl">
        <div className="text-center">
          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=800&fit=crop"
                alt="Professional Resume Builder"
                fill
                className="rounded-full object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered Resume &
            <span className="text-blue-600"> Cover Letter</span> Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create professional, ATS-friendly resumes in seconds with AI-driven content generation and modern templates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/builder"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200"
            >
              🚀 Get Started Free
            </Link>
            <a
              href="#features"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200"
            >
              Learn More ↓
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AI Resume Builder?
            </h2>
            <p className="text-xl text-gray-600">
              Professional results in minutes, not hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Content</h3>
              <p className="text-gray-600">Generate professional resume content and cover letters tailored to your experience</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Create complete resumes in under 5 minutes with our streamlined process</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">ATS-Optimized</h3>
              <p className="text-gray-600">Content designed to pass Applicant Tracking Systems and impress recruiters</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
              <p className="text-gray-600">Clean, modern resume formats that stand out to hiring managers</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/builder"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-200"
            >
              Start Building Your Resume →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h3 className="text-2xl font-bold mb-4">AI Resume Builder</h3>
          <p className="text-gray-400 mb-4">Create professional resumes with AI assistance</p>
          <p className="text-sm text-gray-500">© 2024 AI Resume Builder. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  )
}
