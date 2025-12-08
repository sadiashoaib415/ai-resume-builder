import { useRouter } from 'next/navigation'

export function Hero() {
  const router = useRouter()

  return (
    <section className="px-4 py-20 mx-auto max-w-7xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Build Your Perfect
          <span className="text-primary-600"> Resume</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Create professional, ATS-friendly resumes in minutes with AI-powered suggestions and modern templates.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => router.push('/builder')}
            className="btn-primary"
          >
            Get Started
          </button>
          <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600 transition-colors">
            Learn more <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
