export const metadata = {
  title: 'AI Resume Builder',
  description: 'Create professional, ATS-friendly resumes with AI assistance',
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
