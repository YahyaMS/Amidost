# 🔒 Admin Security Guide

## Single Admin Email Access

Your admin dashboard is now secured to only allow access from **ONE specific email address**.

---

## 🔐 How It Works

### **Two-Layer Security:**

1. **Frontend Check (AdminDashboard.jsx)**
   - Checks if logged-in user's email matches the admin email
   - Shows "Access Denied" screen if not the admin
   - Prevents unauthorized users from seeing the dashboard

2. **Backend Check (Firestore Rules)**
   - Validates every database operation
   - Only allows `info@amidost.com` to create/edit/delete articles
   - Protects your data even if someone bypasses the frontend

---

## ⚙️ Configuration

### **Change Admin Email:**

**File:** `src/pages/AdminDashboard.jsx`

Line 10:
```javascript
const ADMIN_EMAIL = 'info@amidost.com';  // Change this to your email
```

**File:** `FIRESTORE_RULES.txt` (then paste in Firebase Console)

Line 7:
```javascript
return request.auth != null && request.auth.token.email == 'info@amidost.com';
```

**Important:** Change BOTH files to match!

---

## 🔥 Update Firestore Security Rules

### **Step-by-Step:**

1. **Open Firebase Console**
   - Go to: [https://console.firebase.google.com](https://console.firebase.google.com)
   - Select your project

2. **Navigate to Firestore Rules**
   - Click "**Firestore Database**" (left menu)
   - Click "**Rules**" tab

3. **Copy the New Rules**
   - Open `FIRESTORE_RULES.txt` in your project
   - Copy ALL the content

4. **Paste and Publish**
   - Replace everything in the Firebase rules editor
   - **IMPORTANT:** Change `info@amidost.com` to YOUR admin email if different
   - Click "**Publish**"

### **The Rules:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Helper function to check if user is admin
    function isAdmin() {
      // Replace with your actual admin email
      return request.auth != null && request.auth.token.email == 'info@amidost.com';
    }

    // Contact form submissions
    match /contactSubmissions/{document=**} {
      allow create: if true;
      allow read, update, delete: if isAdmin();
    }

    // Blog articles
    match /articles/{articleId} {
      allow read: if true;
      allow create, update, delete: if isAdmin();
    }
  }
}
```

---

## 🛡️ Security Features

### **What's Protected:**

✅ **Only YOUR email** can access admin dashboard
✅ **Only YOUR email** can create/edit/delete articles
✅ **Only YOUR email** can view contact form submissions
✅ **Public users** can still read blog articles
✅ **Unauthorized users** see "Access Denied" screen

### **What Happens If Someone Else Tries:**

1. **Creates a Firebase account** → Can login ✓
2. **Tries to access /admin** → Sees "Access Denied" ✗
3. **Tries to save an article** → Firestore blocks it ✗
4. **Tries to delete an article** → Firestore blocks it ✗
5. **Views public blog** → Works normally ✓

---

## 🔑 Admin Account Setup

### **Create Your Admin Account:**

1. **Firebase Console** → **Authentication** → **Users**
2. Click "**Add user**"
3. Enter:
   - **Email**: `info@amidost.com` (or your chosen admin email)
   - **Password**: Strong password (12+ characters)
4. Click "**Add user**"
5. **Save your password securely!**

### **Important:**
- Use a **strong, unique password**
- Enable **2FA** if available (Settings → Security)
- **Don't share** credentials with anyone
- **Don't create** additional admin users unless necessary

---

## 🧪 Testing Security

### **Test 1: Admin Login**
1. Visit `/admin`
2. Login with admin email
3. Should see dashboard ✓

### **Test 2: Non-Admin Login**
1. Create another user in Firebase Auth (different email)
2. Try logging in with that email
3. Should see "Access Denied" screen ✓

### **Test 3: Database Protection**
1. Login as non-admin user
2. Try creating article (won't even see the form)
3. Check browser console - should show permission error ✓

---

## 🚨 What If Someone Gets Your Password?

If your admin account is compromised:

### **Immediate Actions:**

1. **Reset Password**
   - Firebase Console → Authentication → Users
   - Find your user → Click "⋮" → Reset password

2. **Review Recent Changes**
   - Firestore → articles collection
   - Check for unauthorized articles

3. **Check Auth Activity**
   - Firebase Console → Authentication
   - Review sign-in methods and activity

4. **Enable 2FA** (if not already)
   - Adds extra security layer

---

## 📊 Monitoring Admin Access

### **Check Who's Logged In:**

Firebase Console → **Authentication** → **Users**
- See all registered users
- See last sign-in time
- Delete unauthorized users

### **Check Database Changes:**

Firestore → **articles** collection
- See all articles and who created them
- Check timestamps
- Review modifications

---

## 🔄 Changing Admin Email

If you want to change the admin email:

### **Step 1: Update Code**

`src/pages/AdminDashboard.jsx` (Line 10):
```javascript
const ADMIN_EMAIL = 'newemail@example.com';
```

### **Step 2: Update Firestore Rules**

Firebase Console → Firestore → Rules:
```javascript
return request.auth != null && request.auth.token.email == 'newemail@example.com';
```

### **Step 3: Create New Firebase User**

Firebase Console → Authentication → Add user with new email

### **Step 4: Deploy**
```bash
git add .
git commit -m "Update admin email"
git push origin main
```

---

## ⚠️ Common Mistakes to Avoid

❌ **Don't** use weak passwords (must be 12+ characters)
❌ **Don't** share admin credentials via email/chat
❌ **Don't** create multiple admin accounts unnecessarily
❌ **Don't** commit passwords to Git
❌ **Don't** forget to update BOTH code and Firestore rules

✅ **Do** use password manager for storing credentials
✅ **Do** enable 2FA when available
✅ **Do** regularly review Firebase users
✅ **Do** keep admin email private

---

## 🆘 Troubleshooting

### **"Access Denied" even with correct email**

**Check:**
1. Email in `AdminDashboard.jsx` matches your account
2. Email in Firestore rules matches your account
3. You're logged in with the correct account (check navbar)
4. No typos in email addresses
5. Rules are published in Firebase

### **"Permission denied" when saving articles**

**Fix:**
1. Verify Firestore rules are updated
2. Check you're logged in as admin
3. Look at browser console for specific error
4. Ensure email matches exactly (case-sensitive)

### **Can't login at all**

**Fix:**
1. Verify user exists in Firebase Auth
2. Check email/password are correct
3. Try password reset in Firebase Console
4. Clear browser cache and cookies

---

## 📝 Best Practices

### **Security Checklist:**

- [ ] Strong admin password (12+ characters, mixed case, numbers, symbols)
- [ ] Admin email is private (not publicly shared)
- [ ] Firestore rules updated and published
- [ ] Code updated with correct admin email
- [ ] Tested login with admin account
- [ ] Tested "Access Denied" with different account
- [ ] No sensitive data in Git repository
- [ ] Regular review of Firebase users

---

## 🎯 Summary

**Your admin dashboard is now secured with:**

✅ **Single email access** - Only one account can manage content
✅ **Frontend protection** - Unauthorized users see "Access Denied"
✅ **Backend protection** - Firestore rules block unauthorized operations
✅ **Clear error messages** - Users know why they can't access

**Admin Email:** `info@amidost.com` (change in code if needed)

**Access:** `/admin` → Login → Manage articles

**Safe and secure!** 🔒

---

## 📞 Need Help?

If you have security concerns:
1. Check this guide first
2. Review Firebase Console logs
3. Test in incognito mode
4. Check Firestore rules are published

**Your blog is now secure and ready to use!** 🎉
