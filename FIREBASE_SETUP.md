# Firebase Setup Guide for Amidost Website

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `amidost-website`
4. Disable Google Analytics (optional)
5. Click "Create project"

## Step 2: Register Web App

1. In your Firebase project, click the web icon (`</>`)
2. Register app nickname: `Amidost Website`
3. Check "Also set up Firebase Hosting" (optional)
4. Click "Register app"
5. **IMPORTANT:** Copy the Firebase configuration object

It will look like this:
```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "amidost-website.firebaseapp.com",
  projectId: "amidost-website",
  storageBucket: "amidost-website.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Step 3: Enable Firestore

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode"
4. Select location closest to your users (e.g., `africa-south1` for South Africa or `europe-west1` for Europe)
5. Click "Enable"

## Step 4: Configure Firestore Security Rules

1. Go to Firestore > Rules
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Contact form submissions
    match /contactSubmissions/{document=**} {
      // Anyone can submit (create)
      allow create: if true;

      // Only authenticated admins can read/update/delete
      allow read, update, delete: if request.auth != null &&
                                     request.auth.token.email == "info@amidost.com";
    }
  }
}
```

3. Click "Publish"

## Step 5: Set Up Environment Variables

1. Create `.env` file in your project root:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_CONTACT_EMAIL=info@amidost.com
```

2. Replace the placeholder values with your actual Firebase config

## Step 6: Email Notifications (Optional)

To receive email notifications when someone submits the contact form, you have 3 options:

### Option A: Firebase Extensions (Easiest)

1. In Firebase Console, go to "Extensions"
2. Install "Trigger Email" extension
3. Configure with your SMTP settings or SendGrid/Mailgun API
4. Set up a Firestore trigger on `contactSubmissions` collection

### Option B: Firebase Functions with Nodemailer

This requires upgrading to Blaze (pay-as-you-go) plan.

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize functions:
```bash
firebase init functions
```

4. Create the email function:

**functions/index.js**
```javascript
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');

admin.initializeApp();

// Configure your email service
const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'smtp.office365.com' for Outlook
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password' // Use app-specific password
  }
});

exports.sendContactEmail = functions.firestore
  .document('contactSubmissions/{docId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();

    const mailOptions = {
      from: 'noreply@amidost.com',
      to: 'info@amidost.com',
      subject: `New Contact Form: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <hr>
        <p><small>Submitted at: ${data.timestamp?.toDate()}</small></p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');

      // Mark as sent
      await snap.ref.update({ emailSent: true });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });
```

5. Deploy functions:
```bash
firebase deploy --only functions
```

### Option C: Formspree (No Firebase Functions Needed)

If you prefer a simpler approach without Firebase Functions:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint
4. Update `ContactPage.jsx`:

```jsx
// Replace the Firebase submit with:
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Step 7: View Contact Form Submissions

To view submissions in Firestore:

1. Go to Firebase Console > Firestore Database
2. Navigate to `contactSubmissions` collection
3. View all submissions with timestamps

## Step 8: Set Up Admin Dashboard (Optional)

Create a simple admin page to view submissions:

**src/pages/AdminPage.jsx**
```jsx
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

// Fetch and display submissions
// Add authentication with Firebase Auth
```

## Recommended: Set Up Budget Alerts

If using Firebase Functions:

1. Go to Google Cloud Console
2. Set up billing alerts
3. Set budget to $5-10/month (should be more than enough for low traffic)

## Testing

1. Submit a test form on your contact page
2. Check Firestore to see if document was created
3. If email notifications are set up, check your inbox
4. Verify timestamp and all fields are saved correctly

## Monitoring

- Firebase Console > Usage tab: Monitor reads/writes
- Firestore > Usage: Check document counts
- Functions > Logs: View function execution logs (if using functions)

## Security Checklist

- ✅ Firestore rules prevent unauthorized access
- ✅ Environment variables not committed to git
- ✅ API key restricted to your domain (optional but recommended)
- ✅ Rate limiting on contact form (consider adding)

## Cost Estimation

**Free Tier Limits:**
- Firestore: 50,000 reads/day, 20,000 writes/day
- Functions: 2M invocations/month (Blaze plan)
- Hosting: 10GB storage, 360MB/day bandwidth

For a typical company website with ~100 contact forms/month:
- **Cost: $0/month** (well within free tier)

If using Firebase Functions for emails:
- **Cost: ~$0.10-0.50/month** (very minimal)

## Troubleshooting

### "Permission denied" error
- Check Firestore security rules
- Verify Firebase is initialized correctly
- Check if .env variables are loaded

### Emails not sending
- Verify SMTP credentials
- Check Firebase Functions logs
- Ensure Blaze plan is active
- Use app-specific passwords for Gmail

### Form not submitting
- Check browser console for errors
- Verify Firebase config in .env
- Check network tab in DevTools

## Support

For Firebase-specific issues:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/firebase)
- Firebase Support (Blaze plan only)
