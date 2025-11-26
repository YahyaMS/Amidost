# Amidost Global Ventures Website

Official website for Amidost Global Ventures Ltd - Elevating Women's Health Through Media & Technology

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Firebase account
- Vercel account (already set up)

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing one
   - Enable Firestore Database
   - Go to Project Settings > General > Your apps > Add web app
   - Copy the Firebase configuration

3. **Configure environment variables**
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your Firebase credentials
```

4. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser

## 📁 Project Structure

```
amidost-website/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── shared/
│   │       ├── Button.jsx
│   │       ├── SectionHeading.jsx
│   │       └── FeatureCard.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── MediaPage.jsx
│   │   ├── ProductsPage.jsx
│   │   └── ContactPage.jsx
│   ├── config/
│   │   └── firebase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── vercel.json
```

## 🔧 Firebase Setup

### 1. Firestore Database

Create a collection called `contactSubmissions` with the following structure:

```javascript
{
  firstName: string,
  lastName: string,
  email: string,
  subject: string,
  message: string,
  timestamp: timestamp,
  status: string (new/read/replied)
}
```

### 2. Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactSubmissions/{document=**} {
      allow read: if request.auth != null; // Only authenticated users can read
      allow create: if true; // Anyone can submit contact form
      allow update, delete: if request.auth != null; // Only authenticated users can update/delete
    }
  }
}
```

### 3. Email Notifications (Optional - Firebase Functions)

To send email notifications when forms are submitted:

1. Upgrade to Firebase Blaze (pay-as-you-go) plan
2. Install Firebase CLI: `npm install -g firebase-tools`
3. Initialize functions: `firebase init functions`
4. Deploy the email function (code provided separately)

**Alternative (Simple):** Set up Firestore triggers in Firebase Console to forward to your email via a third-party service like SendGrid or Mailgun.

## 🌐 Deployment to Vercel

### First Deployment

1. **Connect to Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

2. **Set Environment Variables in Vercel Dashboard**
   - Go to your project settings on Vercel
   - Add all VITE_* variables from your .env file
   - Redeploy

### Subsequent Deployments

```bash
# Production deployment
vercel --prod

# Or just push to main branch (if GitHub connected)
git push origin main
```

## 📧 Email Notification Setup (Simple Method)

Since you want contact form submissions to go to `info@amidost.com`, here's a simple setup:

### Option 1: Formspree Integration (Easiest)

Replace Firebase in `ContactPage.jsx` with Formspree:

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Get your form ID from [Formspree.io](https://formspree.io) (free tier: 50 submissions/month)

### Option 2: EmailJS (Recommended)

```bash
npm install @emailjs/browser
```

Setup at [EmailJS.com](https://www.emailjs.com/) and update ContactPage.jsx

### Option 3: Firebase + Nodemailer Function

See `/functions/sendEmail.js` (requires Firebase Blaze plan)

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme

### Content
- Update YouTube links in `MediaPage.jsx`
- Add real video IDs
- Update company information

### Images
Replace placeholder images with your own:
- Hero images
- Team photos
- Product screenshots

## 📱 Features

- ✅ Fully responsive design
- ✅ React Router for navigation
- ✅ Firebase Firestore for contact forms
- ✅ Tailwind CSS for styling
- ✅ SEO optimized
- ✅ Fast loading with Vite
- ✅ Real YouTube integration
- ✅ Coming soon badges for products in development

## 🔐 Environment Variables

Required variables in `.env`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_CONTACT_EMAIL=info@amidost.com
```

## 📊 Analytics

To add Google Analytics:

```bash
npm install react-ga4
```

Add to `App.jsx`:
```javascript
import ReactGA from 'react-ga4';
ReactGA.initialize('G-XXXXXXXXXX');
```

## 🐛 Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Firebase not working
- Check environment variables are set correctly
- Verify Firebase project is active
- Check Firestore rules

### Routing not working on Vercel
- Make sure `vercel.json` is properly configured (already included)

## 📝 License

Copyright © 2025 Amidost Global Ventures Ltd. All rights reserved.

## 🤝 Support

For issues or questions:
- Email: info@amidost.com
- Phone: 0803 063 8864
