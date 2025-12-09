import Link from 'next/link'

export const metadata = {
  title: 'Resume Results - Your AI-Generated Resume',
  description: 'View your professionally crafted resume and cover letter generated with AI assistance.',
}

export default function Result() {
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
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/builder" className="text-gray-600 hover:text-gray-900 transition-colors">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your AI-Generated Resume
            </h1>
            <p className="text-xl text-gray-600">
              Professional content crafted specifically for your career goals
            </p>
          </div>

          {/* Sample Resume Preview */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">John Doe</h2>
              <p className="text-xl opacity-90">Senior Software Engineer</p>
              <p className="text-sm opacity-75 mt-2">Experience Level: Senior Level (6+ years)</p>
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
                    Innovative Senior Software Engineer with 7+ years of experience in full-stack development,
                    specializing in React, Node.js, and cloud technologies. Proven track record of leading
                    development teams and delivering scalable solutions that drive business growth.
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
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">•</span>
                      <span>Led development of a SaaS platform serving 50K+ users, improving performance by 40%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">•</span>
                      <span>Mentored 5 junior developers and established coding standards across the organization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">•</span>
                      <span>Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">•</span>
                      <span>Architected microservices infrastructure handling 1M+ daily requests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">•</span>
                      <span>Collaborated with cross-functional teams to deliver projects on time and within budget</span>
                    </li>
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
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">AWS</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Docker</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                    </div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-6">
                    <h4 className="font-semibold text-pink-800 mb-4 text-lg">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Leadership</span>
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Communication</span>
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Problem Solving</span>
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Team Collaboration</span>
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Mentoring</span>
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Project Management</span>
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
                    <div className="text-red-800 whitespace-pre-wrap leading-relaxed">
                      Dear Hiring Manager,

                      I am writing to express my strong interest in the Senior Software Engineer position.
                      With over 7 years of experience in full-stack development and a proven track record
                      of leading high-impact projects, I am excited about the opportunity to contribute
                      to your innovative team.

                      In my previous roles, I have successfully led the development of scalable web
                      applications serving thousands of users, implemented cutting-edge technologies,
                      and mentored development teams to achieve excellence. My expertise in React,
                      Node.js, and cloud technologies aligns perfectly with the requirements of this position.

                      I am particularly drawn to your company's mission and the opportunity to work on
                      challenging projects that push the boundaries of technology. I am confident that
                      my technical skills, leadership experience, and passion for innovation would make
                      me a valuable addition to your team.

                      I would welcome the opportunity to discuss how my background and experience align
                      with your needs. Thank you for considering my application.

                      Best regards,
                      John Doe
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own?</h2>
              <p className="text-xl mb-6 opacity-90">
                Build a personalized resume with AI assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/builder"
                  className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  🏗️ Build My Resume
                </Link>
                <Link
                  href="/builder/interactive"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center"
                >
                  🚀 Create Your Own
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
