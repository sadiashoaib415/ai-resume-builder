# AI Resume Builder

A Next.js application for creating AI-powered resumes.

## Deployment on Vercel

### 1. Connect Repository
- Import your GitHub repository: `sadiashoaib415/ai-resume-builder`
- Vercel will automatically detect Next.js

### 2. Environment Variables
Add this environment variable in Vercel dashboard (Project Settings → Environment Variables):
```
OPENAI_API_KEY=sk-your-actual-openai-api-key-here
```

**Important:** Get your API key from https://platform.openai.com/api-keys

### 3. Build Settings
Vercel should automatically detect:
- Build Command: `npm run build`
- Output Directory: `.next`
- Node.js Version: 18.x or later

### 4. Deploy
Click "Deploy" and wait for the build to complete.

## Local Development

```bash
npm install
npm run dev
```

## API Endpoints

- `GET /` - Home page
- `GET /builder` - Resume builder form
- `POST /api/generate` - Generate AI content

## Tech Stack

- Next.js 14
- Tailwind CSS
- OpenAI API
