import './globals.css'

export const metadata = {
  title: 'AI Resume Builder',
  description: 'Build professional resumes with AI assistance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
