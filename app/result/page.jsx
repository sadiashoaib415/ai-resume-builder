'use client'

export default function Result() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Resume Results</h1>
        <p className="text-gray-600 text-center mb-4">
          This is a placeholder page. AI-generated content will appear here.
        </p>
        <a
          href="/builder"
          className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Back to Builder
        </a>
      </div>
    </div>
  )
}
