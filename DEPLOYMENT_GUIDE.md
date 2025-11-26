# Deployment Guide - Amidost Global Website

## 🚀 Deploy to Vercel (Recommended)

You mentioned you already own `amidost.com` on Vercel. Here's how to deploy:

### Method 1: Vercel CLI (Quick Deploy)

1. **Install dependencies**
```bash
npm install
```

2. **Build locally to test**
```bash
npm run build
```

3. **Install Vercel CLI**
```bash
npm install -g vercel
```

4. **Login to Vercel**
```bash
vercel login
```

5. **Deploy**
```bash
# First deployment (preview)
vercel

# Production deployment
vercel --prod
```

### Method 2: GitHub + Vercel (Recommended for Continuous Deployment)

1. **Initialize Git** (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Amidost Global website"
```

2. **Create GitHub Repository**
   - Go to [GitHub](https://github.com/new)
   - Create new repository: `amidost-website`
   - Don't initialize with README (you already have files)

3. **Push to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/amidost-website.git
git branch -M main
git push -u origin main
```

4. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

5. **Configure Environment Variables**
   - In Vercel project settings
   - Go to "Environment Variables"
   - Add each variable from your `.env` file:
     - `VITE_FIREBASE_API_KEY`
     - `VITE_FIREBASE_AUTH_DOMAIN`
     - `VITE_FIREBASE_PROJECT_ID`
     - `VITE_FIREBASE_STORAGE_BUCKET`
     - `VITE_FIREBASE_MESSAGING_SENDER_ID`
     - `VITE_FIREBASE_APP_ID`
     - `VITE_CONTACT_EMAIL`

6. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `amidost.com`

### Method 3: Vercel for Git (Automatic Deployments)

Once connected to GitHub:

```bash
# Any push to main branch will auto-deploy
git add .
git commit -m "Update homepage content"
git push origin main
```

Vercel will automatically:
- Build your project
- Run tests
- Deploy to production
- Update amidost.com

## ⚙️ Vercel Configuration

The `vercel.json` file is already configured with:
- SPA routing (all routes go to index.html)
- Security headers
- SEO-friendly URLs

## 🔧 Build Configuration

Vercel settings (already configured in package.json):

```json
{
  "scripts": {
    "dev": "vite",           // Local development
    "build": "vite build",    // Production build
    "preview": "vite preview" // Preview production build locally
  }
}
```

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Firebase project is set up
- [ ] Firestore database is created
- [ ] Environment variables are added to Vercel
- [ ] YouTube channel link is correct
- [ ] Contact email (info@amidost.com) is set up
- [ ] All placeholder images are replaced (optional)
- [ ] Test contact form locally
- [ ] Test all page navigation
- [ ] Build succeeds locally (`npm run build`)

## 🌐 Custom Domain Setup

Since you own `amidost.com`:

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Domains"
   - Your domain should already be connected
   - If not, click "Add Domain" and enter `amidost.com`

2. **DNS Configuration**
   - Vercel will provide DNS records
   - Update your domain registrar settings
   - Wait for propagation (5-30 minutes)

3. **SSL Certificate**
   - Vercel automatically provisions SSL
   - Your site will be `https://amidost.com`

## 🔍 SEO Setup

After deployment:

1. **Google Search Console**
   - Verify ownership of amidost.com
   - Submit sitemap: `https://amidost.com/sitemap.xml`
   - Monitor indexing

2. **Google Analytics** (Optional)
```bash
npm install react-ga4
```

Add to `src/App.jsx`:
```javascript
import ReactGA from 'react-ga4';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-XXXXXXXXXX'); // Your GA4 ID
  }, []);
  // ...
}
```

3. **Create Sitemap**

Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://amidost.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://amidost.com/about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://amidost.com/media</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://amidost.com/products</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://amidost.com/contact</loc>
    <priority>0.7</priority>
  </url>
</urlset>
```

4. **Create robots.txt**

Create `public/robots.txt`:
```txt
User-agent: *
Allow: /

Sitemap: https://amidost.com/sitemap.xml
```

## 📊 Monitor Your Deployment

### Vercel Analytics (Free)

1. Enable in Vercel Dashboard
2. Go to your project > Analytics
3. View real-time metrics

### Performance Monitoring

```bash
# Install Vercel Speed Insights
npm install @vercel/speed-insights
```

Add to `src/main.jsx`:
```javascript
import { SpeedInsights } from '@vercel/speed-insights/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>
)
```

## 🐛 Troubleshooting

### Build Fails on Vercel

```bash
# Test build locally first
npm run build

# Check for errors
# Fix any issues
# Commit and push again
```

### Environment Variables Not Working

1. Make sure variable names start with `VITE_`
2. Redeploy after adding env vars
3. Check Vercel logs for errors

### 404 on Page Refresh

- Make sure `vercel.json` exists with SPA rewrites (already included)
- If issue persists, check Vercel settings > Rewrites

### Firebase Not Working on Production

1. Add `amidost.com` to Firebase authorized domains:
   - Firebase Console > Authentication > Settings
   - Authorized domains > Add domain

2. Update Firestore security rules if needed

## 📈 Post-Deployment Tasks

### Week 1
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics
- [ ] Test contact form in production
- [ ] Monitor Vercel analytics
- [ ] Check mobile responsiveness

### Month 1
- [ ] Analyze user behavior
- [ ] Optimize images for performance
- [ ] Add blog/news section (optional)
- [ ] Launch app (when ready)
- [ ] Publish first book

## 🔄 Updating the Site

### Quick Updates
```bash
# Make changes to your code
# ...

# Commit and push
git add .
git commit -m "Update: Add new blog post"
git push origin main

# Vercel auto-deploys in 1-2 minutes
```

### Rolling Back
```bash
# In Vercel Dashboard
# Go to Deployments
# Find previous working deployment
# Click "Promote to Production"
```

## 💰 Cost Breakdown

**Vercel** (Hobby tier - FREE)
- Unlimited deployments
- 100GB bandwidth
- Custom domain
- SSL certificate
- Cost: **$0/month**

**Firebase** (Spark plan - FREE)
- 50K reads/day
- 20K writes/day
- 1GB storage
- Cost: **$0/month** (for your traffic level)

**Domain** (amidost.com)
- Already owned
- Renewal: ~$12/year

**Total Monthly Cost: $0**
**Total Annual Cost: ~$12** (domain renewal only)

## 🎯 Next Steps

1. Run `npm install` to install all dependencies
2. Set up Firebase (see FIREBASE_SETUP.md)
3. Create `.env` file with your Firebase credentials
4. Test locally with `npm run dev`
5. Build with `npm run build`
6. Deploy with `vercel --prod`

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Firebase Docs: https://firebase.google.com/docs
- React Router: https://reactrouter.com
- Tailwind CSS: https://tailwindcss.com

---

**Ready to deploy?** Run these commands:

```bash
npm install
npm run build
vercel --prod
```

Your website will be live at https://amidost.com in minutes! 🎉
