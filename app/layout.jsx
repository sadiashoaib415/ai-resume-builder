export const metadata = {
  title: 'AI Resume Builder - Create Professional Resumes with AI',
  description: 'Build ATS-friendly resumes and cover letters instantly with AI-powered content generation. Free to use, professional results guaranteed.',
  keywords: 'resume builder, AI resume, cover letter generator, ATS-friendly resume, professional resume',
  authors: [{ name: 'AI Resume Builder' }],
  openGraph: {
    title: 'AI Resume Builder - Professional Resumes in Seconds',
    description: 'Create ATS-friendly resumes and cover letters with AI assistance. Free, fast, and professional.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Resume Builder',
    description: 'Create professional resumes with AI in seconds',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📄</text></svg>" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
