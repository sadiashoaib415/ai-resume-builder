import { useRouter } from 'next/navigation'

export function Features() {
  const router = useRouter()

  const features = [
    {
      title: 'AI-Powered Content',
      description: 'Get intelligent suggestions for your resume content, keywords, and formatting.',
      icon: '🤖',
    },
    {
      title: 'Modern Templates',
      description: 'Choose from professionally designed templates that stand out to employers.',
      icon: '🎨',
    },
    {
      title: 'ATS-Optimized',
      description: 'Ensure your resume passes Applicant Tracking Systems with our optimization tools.',
      icon: '⚡',
    },
    {
      title: 'Real-time Preview',
      description: 'See changes instantly with our live preview feature as you build your resume.',
      icon: '👁️',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features designed to help you create the perfect resume
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => router.push('/builder')}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
              <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-10 transition-opacity rounded-xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => router.push('/builder')}
            className="bg-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
          >
            Start Building Your Resume →
          </button>
        </div>
      </div>
    </section>
  )
}
