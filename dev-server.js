#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Next.js development server...');
console.log('📁 Serving from:', process.cwd());
console.log('🌐 Server running at: http://localhost:3000');
console.log('📝 Note: This is a basic development server for demonstration');

const server = http.createServer((req, res) => {
  const url = req.url;

  // Serve static files
  if (url === '/' || url === '/index.html') {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Resume Builder</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <section class="px-4 py-20 mx-auto max-w-7xl">
        <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Build Your Perfect <span class="text-primary-600">Resume</span>
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Create professional, ATS-friendly resumes in minutes with AI-powered suggestions and modern templates.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <button class="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
                    Get Started
                </button>
                <button class="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600 transition-colors">
                    Learn more →
                </button>
            </div>
        </div>
    </section>

    <section class="py-20 bg-white">
        <div class="px-4 mx-auto max-w-7xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Everything you need to succeed
                </h2>
                <p class="mt-4 text-lg text-gray-600">
                    Powerful features designed to help you create the perfect resume
                </p>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div class="relative p-6 bg-gray-50 rounded-xl">
                    <div class="text-3xl mb-4">🤖</div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">AI-Powered Content</h3>
                    <p class="text-gray-600 text-sm">Get intelligent suggestions for your resume content, keywords, and formatting.</p>
                </div>
                <div class="relative p-6 bg-gray-50 rounded-xl">
                    <div class="text-3xl mb-4">🎨</div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Modern Templates</h3>
                    <p class="text-gray-600 text-sm">Choose from professionally designed templates that stand out to employers.</p>
                </div>
                <div class="relative p-6 bg-gray-50 rounded-xl">
                    <div class="text-3xl mb-4">⚡</div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">ATS-Optimized</h3>
                    <p class="text-gray-600 text-sm">Ensure your resume passes Applicant Tracking Systems with our optimization tools.</p>
                </div>
                <div class="relative p-6 bg-gray-50 rounded-xl">
                    <div class="text-3xl mb-4">👁️</div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Real-time Preview</h3>
                    <p class="text-gray-600 text-sm">See changes instantly with our live preview feature as you build your resume.</p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (url === '/globals.css') {
    const css = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  body {
    @apply bg-white text-gray-900;
  }
}`;

    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(css);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('✅ Development server is running!');
  console.log('💡 This is a basic server for demonstration purposes.');
  console.log('🔧 For full Next.js functionality, please install Node.js and npm properly.');
});

process.on('SIGINT', () => {
  console.log('\n👋 Shutting down development server...');
  server.close();
  process.exit(0);
});
