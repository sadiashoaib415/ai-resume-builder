# 🚀 Vercel Deployment Guide

Complete guide to deploy your AI Resume Builder to Vercel.

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Vercel account (free tier works)
- ✅ OpenAI API Key
- ✅ Project pushed to GitHub

## 🔧 Step-by-Step Deployment

### Step 1: Push to GitHub

Make sure your code is pushed to GitHub:

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 2: Sign Up / Login to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub" to connect your GitHub account

### Step 3: Import Your Project

1. Click "Add New..." → "Project"
2. Import your `ai-resume-builder` repository
3. Vercel will auto-detect Next.js

### Step 4: Configure Project Settings

Vercel should auto-detect these settings:
- **Framework Preset:** Next.js
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

### Step 5: Add Environment Variables

**CRITICAL:** Add your OpenAI API Key:

1. In the project settings, go to **"Environment Variables"**
2. Click **"Add New"**
3. Add:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (starts with `sk-`)
   - **Environment:** Select all (Production, Preview, Development)
4. Click **"Save"**

### Step 6: Deploy!

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Your app will be live at `https://your-project-name.vercel.app`

## ✅ Post-Deployment Checklist

- [ ] Test the home page loads correctly
- [ ] Test the builder form
- [ ] Test API generation (make sure OPENAI_API_KEY is set)
- [ ] Test the result page displays correctly
- [ ] Check that images load from Unsplash

## 🔍 Troubleshooting

### Build Fails: "Cannot find module"

**Solution:** Make sure all dependencies are in `dependencies` (not `devDependencies`)

### API Returns "API key not configured"

**Solution:** 
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Verify `OPENAI_API_KEY` is added
3. Make sure it's enabled for "Production"
4. Redeploy the project

### Images Not Loading

**Solution:** 
- Check `next.config.js` includes `images.unsplash.com`
- Verify internet connection (images load from CDN)

### "Node.js Version" Error

**Solution:** 
- Your `package.json` already specifies Node.js 24.x
- Vercel should auto-detect this
- If issues persist, check Vercel project settings → General → Node.js Version

## 🌐 Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-30 minutes)

## 📊 Monitoring

- **Analytics:** Vercel provides built-in analytics
- **Logs:** Check deployment logs in Vercel Dashboard
- **Performance:** Monitor in Vercel Dashboard → Analytics

## 🔄 Updating Your Deployment

Every time you push to GitHub:

1. Vercel automatically detects changes
2. Creates a new deployment
3. Runs build and tests
4. Deploys if successful

**Manual Deploy:**
- Go to Vercel Dashboard → Deployments
- Click "Redeploy" if needed

## 💰 Vercel Pricing

- **Free Tier:** Perfect for this project
  - Unlimited deployments
  - 100GB bandwidth/month
  - Automatic HTTPS
  - Custom domains

## 🎯 Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | ✅ Yes | Your OpenAI API key for GPT-4 |

## 📝 Notes

- Vercel automatically handles:
  - SSL certificates
  - CDN distribution
  - Serverless functions (API routes)
  - Automatic deployments from GitHub

- Your API route (`/api/generate`) runs as a serverless function
- No server management needed!

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Check deployment logs in Vercel Dashboard

---

**Your app is now live! 🎉**

Share your deployed URL: `https://your-project-name.vercel.app`


