# AI Resume Builder

A clean, modern web application for creating professional resumes and cover letters with AI assistance.

## Features

- 🤖 AI-powered resume and cover letter generation
- 📱 Responsive design with Tailwind CSS
- ✨ Form validation and error handling
- 💾 Local storage for data persistence
- 📋 Copy to clipboard functionality
- 🎨 Clean, professional UI

## Quick Start

1. **Set OpenAI API Key:**
   ```bash
   # Create .env.local file with:
   OPENAI_API_KEY=your_api_key_here
   ```

2. **Start the development server:**
   ```bash
   node node_modules/next/index.js dev
   ```

3. **Open your browser:**
   ```
   http://localhost:3000
   ```

## Usage

1. **Home Page** - Overview of features
2. **Builder Page** - Fill out your information:
   - Full Name (required)
   - Job Title (required)
   - Experience Level (required)
   - Past Experience (required)
   - Job Description (optional)
3. **Result Page** - View AI-generated content:
   - Professional Summary
   - Key Achievements (bullet points)
   - Technical & Soft Skills
   - Complete Cover Letter

## API Endpoint

**POST** `/api/generate`

Request body:
```json
{
  "name": "John Doe",
  "jobTitle": "Software Engineer",
  "expLevel": "mid",
  "experience": "Your experience details...",
  "jobDesc": "Optional job description"
}
```

Response:
```json
{
  "summary": "Professional summary...",
  "bullets": ["Achievement 1", "Achievement 2", ...],
  "skills": {
    "technical": ["React", "Node.js", ...],
    "soft": ["Communication", "Leadership", ...]
  },
  "coverLetter": "Complete cover letter text..."
}
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-4 API
- **Language**: JavaScript (ES6+)
- **Storage**: Browser localStorage

## Project Structure

```
├── app/
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Home page
│   ├── builder/
│   │   └── page.jsx        # Resume builder form
│   ├── result/
│   │   └── page.jsx        # Results display
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.jsx            # Home hero section
│   └── Features.jsx        # Home features
└── package.json
```
