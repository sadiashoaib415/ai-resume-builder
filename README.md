# AI Resume Builder

A modern, AI-powered resume and cover letter builder built with Next.js, React, and Tailwind CSS. Generate professional, ATS-friendly resumes in seconds using GPT-4.

## 🚀 Features

- **AI-Powered Content Generation**: Uses GPT-4 to create professional resume summaries, bullet points, skills, and cover letters
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **ATS-Optimized**: Content designed to pass Applicant Tracking Systems
- **Fast & Easy**: Complete resume generation in under 5 minutes
- **Professional Templates**: Clean, modern resume formats

## 📋 Prerequisites

- Node.js 24.x or higher
- npm 10.x or higher
- OpenAI API Key (for GPT-4)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sadiashoaib415/ai-resume-builder.git
   cd ai-resume-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

   **How to get your OpenAI API Key:**
   1. Go to https://platform.openai.com/
   2. Sign up or log in
   3. Navigate to API Keys section
   4. Create a new API key
   5. Copy the key and paste it in your `.env.local` file

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ai-resume-builder/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.js      # GPT-4 API endpoint
│   ├── builder/
│   │   ├── interactive/
│   │   │   └── page.jsx      # Interactive form page
│   │   └── page.jsx          # Builder overview page
│   ├── result/
│   │   └── page.jsx          # Results display page
│   ├── layout.jsx            # Root layout
│   ├── page.jsx              # Home page
│   └── globals.css           # Global styles
├── public/
│   └── images/               # Image assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── package.json              # Dependencies and scripts
```

## 🎯 How to Use

1. **Start Building**
   - Click "Get Started" on the home page
   - Navigate to the interactive builder

2. **Fill Out the Form**
   - Enter your full name
   - Specify your desired job title
   - Select your experience level
   - Describe your past experience (required, min 50 characters)
   - Optionally add a target job description for better AI matching

3. **Generate Your Resume**
   - Click "Generate My Resume"
   - Wait 10-15 seconds for AI processing
   - View your professional resume and cover letter

4. **Copy or Download**
   - Use the "Copy All" button to copy everything to clipboard
   - Print or save as PDF from your browser

## 🔧 Configuration

### Using GPT-4

The application uses GPT-4 by default. To change the model, edit `app/api/generate/route.js`:

```javascript
model: 'gpt-4',  // Change to 'gpt-3.5-turbo' for faster/cheaper option
```

### Adding Images

Images are loaded from Unsplash CDN. To use your own images:

1. Place images in `public/images/` directory
2. Update image paths in components:
   ```jsx
   <Image src="/images/your-image.jpg" alt="Description" />
   ```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

**Quick Deploy:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project" and import your repository
4. Add environment variable: `OPENAI_API_KEY` = your API key
5. Click "Deploy"

**Detailed Guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete step-by-step instructions.

### Environment Variables for Vercel

In Vercel Dashboard → Settings → Environment Variables, add:
- **Name:** `OPENAI_API_KEY`
- **Value:** Your OpenAI API key
- **Environment:** Production, Preview, Development (select all)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sadiashoaib415/ai-resume-builder)

*Note: You'll still need to add the `OPENAI_API_KEY` environment variable after deployment.*

## 📝 API Endpoint

### POST `/api/generate`

Generates resume content using GPT-4.

**Request Body:**
```json
{
  "name": "John Doe",
  "jobTitle": "Software Engineer",
  "expLevel": "senior",
  "experience": "7+ years of experience...",
  "jobDesc": "Optional job description..."
}
```

**Response:**
```json
{
  "summary": "Professional summary...",
  "bullets": ["Achievement 1", "Achievement 2", ...],
  "skills": {
    "technical": ["JavaScript", "React", ...],
    "soft": ["Leadership", "Communication", ...]
  },
  "coverLetter": "Full cover letter text..."
}
```

## 🐛 Troubleshooting

### "API key not configured" Error

- Make sure you've created a `.env.local` file
- Add `OPENAI_API_KEY=your_key_here`
- Restart the development server

### Images Not Loading

- Check your internet connection (images load from Unsplash CDN)
- Verify `next.config.js` includes `images.unsplash.com` in domains

### Build Errors on Vercel

- Ensure Node.js version is 24.x in `package.json`
- Check that all dependencies are in `dependencies` (not `devDependencies`)
- Verify `OPENAI_API_KEY` is set in Vercel environment variables

## 📄 License

MIT License - feel free to use this project for your own purposes!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js, React, Tailwind CSS, and OpenAI GPT-4

