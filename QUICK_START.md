# ⚡ Quick Start Guide - Amidost Website

Get your website running in 10 minutes!

## 📦 Step 1: Install Dependencies

Open terminal in this directory and run:

```bash
npm install
```

Wait for installation to complete (~2 minutes).

## 🔥 Step 2: Set Up Firebase

### Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name it: `amidost-website`
4. Click through the wizard (disable Analytics for faster setup)

### Get Firebase Config

1. In Firebase Console, click ⚙️ (Settings) > Project settings
2. Scroll down to "Your apps"
3. Click the web icon `</>`
4. Register app as "Amidost Website"
5. **Copy the config object**

### Enable Firestore

1. In Firebase Console, click "Firestore Database" in left menu
2. Click "Create database"
3. Choose "Start in production mode"
4. Select location: `africa-south1` or closest to you
5. Click "Enable"

### Update Security Rules

1. Go to Firestore > Rules
2. Paste this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactSubmissions/{document=**} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

3. Click "Publish"

## 🔐 Step 3: Configure Environment Variables

1. **Copy the example file:**
```bash
cp .env.example .env
```

2. **Edit `.env` file** and paste your Firebase config:

```env
VITE_FIREBASE_API_KEY=AIzaSyC...
VITE_FIREBASE_AUTH_DOMAIN=amidost-website.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=amidost-website
VITE_FIREBASE_STORAGE_BUCKET=amidost-website.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
VITE_CONTACT_EMAIL=info@amidost.com
```

## 🚀 Step 4: Run Development Server

```bash
npm run dev
```

Open your browser to: http://localhost:5173

## ✅ Step 5: Test the Site

1. **Navigate through all pages:**
   - Home → About → Media → Products → Contact

2. **Test the contact form:**
   - Fill out the form
   - Submit
   - Check Firebase Console > Firestore to see the submission

3. **Test mobile view:**
   - Resize browser window
   - Check mobile menu works

## 📤 Step 6: Deploy to Vercel

### Option A: Quick Deploy (Vercel CLI)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Option B: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/amidost-website.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repo
   - Add environment variables (copy from .env)
   - Click "Deploy"

3. **Configure Custom Domain:**
   - In Vercel project settings > Domains
   - Add `amidost.com`
   - Follow DNS instructions

## 🎨 Customization Quick Wins

### Update YouTube Video

In `src/pages/MediaPage.jsx`:

```jsx
// Line 23 - Replace with your actual video ID
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

### Change Hero Image

In `src/pages/HomePage.jsx`:

```jsx
// Line 14-16 - Replace with your own image
<img src="YOUR_IMAGE_URL" alt="Women's Health" />
```

### Update Contact Info

In `src/pages/ContactPage.jsx`:

```jsx
// Line 58-60 - Update address
// Line 68-70 - Update email
// Line 78-80 - Update phone
```

## 📧 Email Notifications (Optional)

To receive emails when someone submits the contact form:

### Simple Method: Formspree

1. Sign up at [Formspree.io](https://formspree.io) (free)
2. Create a form
3. Get your form endpoint
4. Update `ContactPage.jsx`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // ... rest of code
};
```

## 🔍 SEO Setup (After Deployment)

1. **Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: `amidost.com`
   - Verify ownership
   - Submit sitemap: `https://amidost.com/sitemap.xml`

2. **Google Analytics** (Optional)
   - Create account at [analytics.google.com](https://analytics.google.com)
   - Get tracking ID
   - Add to your site

## 🐛 Common Issues

### "Module not found" error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Firebase permission denied
- Check Firestore security rules
- Make sure rules allow `create: if true`

### Build fails
```bash
npm run build
# Fix any errors shown
```

### Contact form not working
- Check Firebase config in .env
- Verify Firestore is enabled
- Check browser console for errors

## 📱 Mobile Testing

Test on real devices:
1. Run `npm run dev`
2. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. On phone, visit: `http://YOUR_IP:5173`

## ✨ You're Done!

Your website should now be:
- ✅ Running locally
- ✅ Connected to Firebase
- ✅ Ready for deployment
- ✅ Mobile responsive
- ✅ SEO optimized

## 🆘 Need Help?

Check these files for detailed guides:
- `README.md` - Full documentation
- `FIREBASE_SETUP.md` - Detailed Firebase guide
- `DEPLOYMENT_GUIDE.md` - Complete deployment instructions

## 🚦 Next Steps

1. **Content:**
   - [ ] Replace placeholder images
   - [ ] Add real YouTube videos
   - [ ] Update team photos

2. **Features:**
   - [ ] Set up email notifications
   - [ ] Add Google Analytics
   - [ ] Create blog section (future)

3. **Marketing:**
   - [ ] Submit to search engines
   - [ ] Share on social media
   - [ ] Link from YouTube channel

**Your website is ready! Deploy and go live! 🎉**
