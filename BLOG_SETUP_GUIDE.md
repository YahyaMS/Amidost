# 📝 Blog System Setup Guide

Complete guide to set up and use your blog management system.

## ✨ Features Added

✅ **Public Blog**
- Article listing page with category filters
- Individual article pages with SEO
- Related articles suggestions
- Social sharing
- Responsive design

✅ **Admin Dashboard**
- Secure login with Firebase Auth
- Create, edit, delete articles
- Rich HTML editor
- Draft/Published status
- Category management
- SEO fields (slug, excerpt, tags)

---

## 🔥 Firebase Setup (Required)

### Step 1: Enable Firebase Authentication

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click "Authentication" in left menu
4. Click "Get Started"
5. Click "Sign-in method" tab
6. Enable "Email/Password"
7. Click "Enable" and "Save"

### Step 2: Create Admin User

1. Still in Authentication
2. Click "Users" tab
3. Click "Add user"
4. Enter email: `info@amidost.com` (or your preferred admin email)
5. Enter a strong password (save it securely!)
6. Click "Add user"

### Step 3: Update Firestore Security Rules

1. Go to Firestore Database
2. Click "Rules" tab
3. Replace with these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Contact form submissions
    match /contactSubmissions/{document=**} {
      allow create: if true;  // Anyone can submit
      allow read, update, delete: if request.auth != null;  // Only authenticated users
    }

    // Blog articles
    match /articles/{articleId} {
      // Anyone can read published articles
      allow read: if true;

      // Only authenticated users can create/update/delete
      allow create, update, delete: if request.auth != null;
    }
  }
}
```

4. Click "Publish"

### Step 4: Test the Admin Login

1. Run your dev server: `npm run dev`
2. Visit: `http://localhost:5173/admin`
3. Login with the credentials you created in Step 2
4. You should see the admin dashboard!

---

## 📊 Blog Data Structure

Each article in Firestore has this structure:

```javascript
{
  title: "Article Title",
  slug: "article-url-slug",
  excerpt: "Brief summary for cards and SEO",
  content: "<p>Full HTML content...</p>",
  category: "Metabolic Health",  // or Pregnancy, Gynecology, Wellness, Nutrition
  author: "Dr. Amidost",
  authorBio: "Consultant Obstetrician and Gynaecologist",
  featuredImage: "https://example.com/image.jpg",
  tags: ["health", "wellness"],
  readTime: 5,  // minutes
  status: "published",  // or "draft"
  createdAt: Timestamp,
  updatedAt: Timestamp,
  publishedAt: Timestamp
}
```

---

## ✍️ How to Create Your First Article

### Method 1: Using the Admin Dashboard (Recommended)

1. **Login**
   - Visit `/admin`
   - Enter your credentials

2. **Create New Article**
   - Click "New Article" button
   - Fill in the form:
     - **Title**: Main heading
     - **Slug**: URL-friendly version (auto-generated)
     - **Excerpt**: 1-2 sentence summary
     - **Content**: Full article in HTML (see formatting below)
     - **Category**: Select from dropdown
     - **Author**: Your name or "Dr. Amidost"
     - **Featured Image**: URL to cover image
     - **Tags**: Comma-separated keywords
     - **Read Time**: Estimated minutes
     - **Status**: "draft" or "published"

3. **Preview**
   - Click the eye icon to preview in new tab

4. **Publish**
   - Change status to "published"
   - Click "Save Article"

### Content Formatting (HTML)

Use HTML to format your articles:

```html
<h2>Main Section Heading</h2>
<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>

<h3>Subsection</h3>
<p>Another paragraph with a <a href="https://example.com">link</a>.</p>

<ul>
  <li>Bullet point 1</li>
  <li>Bullet point 2</li>
  <li>Bullet point 3</li>
</ul>

<ol>
  <li>Numbered item 1</li>
  <li>Numbered item 2</li>
</ol>

<blockquote>
  <p>This is a quote or important callout.</p>
</blockquote>

<img src="https://example.com/image.jpg" alt="Description" />
```

---

## 🖼️ Getting Featured Images

### Free Stock Photo Sites:
- [Unsplash](https://unsplash.com) - High-quality free photos
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images

### How to Use:
1. Find an image related to your article
2. Right-click and copy image address
3. Paste URL into "Featured Image" field

---

## 📍 URL Structure

Your blog uses these URLs:

- **Blog listing**: `https://amidost.com/blog`
- **Individual article**: `https://amidost.com/blog/article-slug`
- **Admin dashboard**: `https://amidost.com/admin`

---

## 🎨 Categories

Pre-configured categories:
- **Metabolic Health** - Insulin, PCOS, hormones
- **Pregnancy** - Conception to postpartum
- **Gynecology** - Women's reproductive health
- **Wellness** - General health topics
- **Nutrition** - Diet and nutrition advice

You can add more categories by editing `BlogPage.jsx` and `AdminDashboard.jsx`.

---

## 🔐 Security Best Practices

### Protect Your Admin Account

1. **Use a strong password**
   - At least 12 characters
   - Mix of letters, numbers, symbols

2. **Don't share credentials**
   - Keep login details private
   - Don't commit passwords to Git

3. **Limit admin users**
   - Only create admin accounts for trusted team members

4. **Monitor activity**
   - Check Firebase Console > Authentication > Users
   - Review article changes regularly

---

## 📝 Sample Article Topics

Ideas for your first articles:

### Metabolic Health
- "5 Signs of Insulin Resistance in Women"
- "How PCOS Affects Fertility"
- "Understanding Your Metabolic Health"

### Pregnancy
- "Week-by-Week Pregnancy Guide"
- "Nutrition During Pregnancy"
- "Preparing for Labor and Delivery"

### Gynecology
- "Understanding Your Menstrual Cycle"
- "When to See a Gynecologist"
- "Menopause: What to Expect"

---

## 🚀 Publishing Workflow

### Recommended Process:

1. **Draft**
   - Write article in admin dashboard
   - Save as "draft"
   - Preview to check formatting

2. **Review**
   - Check spelling and grammar
   - Verify all links work
   - Ensure images display correctly

3. **SEO**
   - Add clear, descriptive title
   - Write compelling excerpt
   - Add relevant tags
   - Use descriptive slug

4. **Publish**
   - Change status to "published"
   - Save article
   - Share on social media!

---

## 📊 Managing Articles

### Edit an Article
1. Login to `/admin`
2. Find article in list
3. Click pencil icon
4. Make changes
5. Click "Update Article"

### Delete an Article
1. Login to `/admin`
2. Find article in list
3. Click trash icon
4. Confirm deletion

### Unpublish an Article
1. Edit the article
2. Change status to "draft"
3. Save

---

## 🎯 SEO Tips

### Good Article Titles
✅ "5 Early Signs of PCOS in Young Women"
❌ "PCOS Info"

### Good Slugs
✅ `early-signs-of-pcos`
❌ `article1` or `pcos info 2024`

### Good Excerpts
✅ "PCOS affects 1 in 10 women. Learn the early warning signs and when to seek medical advice."
❌ "This article talks about PCOS."

### Tags
- Use 3-5 relevant tags
- Keep them consistent
- Examples: "pcos", "hormones", "fertility"

---

## 📱 Mobile-Friendly

Your blog is fully responsive:
- ✅ Looks great on phones
- ✅ Easy to read on tablets
- ✅ Desktop optimized

---

## 🔗 Sharing Articles

Each article has a share button that works on:
- WhatsApp
- Facebook
- Twitter
- Email
- Copy link

---

## 📈 Growing Your Blog

### Week 1
- [ ] Write and publish 3 articles
- [ ] Share on YouTube community
- [ ] Link from your videos

### Month 1
- [ ] Publish 2-3 articles per week
- [ ] Build categories evenly
- [ ] Respond to comments (via contact form)

### Ongoing
- [ ] Update old articles with new info
- [ ] Cross-link related articles
- [ ] Monitor popular topics

---

## 🆘 Troubleshooting

### "Can't login to admin"
- Check email/password are correct
- Verify user exists in Firebase Console > Authentication
- Clear browser cache and try again

### "Articles not showing"
- Check article status is "published"
- Verify Firestore rules allow read access
- Check browser console for errors

### "Can't save article"
- Ensure title and content are filled
- Check you're still logged in
- Verify Firestore rules allow write access

### "Images not loading"
- Verify image URL is correct
- Check URL starts with `https://`
- Try different image host

---

## 🎓 Next Steps

1. **Create your admin account** (Step 2 above)
2. **Login to /admin**
3. **Write your first article**
4. **Publish and share!**

---

## 💡 Pro Tips

### Content Ideas
- Answer common patient questions
- Break down complex medical terms
- Share success stories (anonymized)
- Debunk health myths
- Seasonal health topics

### Consistency
- Set a publishing schedule (e.g., Tuesdays and Fridays)
- Batch write articles
- Keep a running list of ideas

### Engagement
- Ask questions in your articles
- Invite readers to contact you
- Cross-promote with YouTube

---

## 📞 Support

If you need help with the blog:
- Check this guide first
- Review `FIREBASE_SETUP.md` for database issues
- Test in incognito mode to rule out cache issues
- Check Firebase Console logs

---

**Ready to start blogging?**

Visit `/admin` and create your first article! 🎉

---

**Your blog is now:**
- ✅ Secure with admin authentication
- ✅ SEO optimized for search engines
- ✅ Mobile responsive
- ✅ Easy to manage
- ✅ Professional looking

Start sharing your medical expertise with the world! 🌍
