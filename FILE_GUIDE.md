# 📂 File Guide - What Each File Does

Quick reference guide to understand every file in your project.

## 🎯 Configuration Files (Root Directory)

### `package.json` ⚙️
**What it does**: Lists all dependencies and scripts
**When to edit**: When adding new packages
```json
{
  "scripts": {
    "dev": "vite",          // Run development server
    "build": "vite build",   // Build for production
    "preview": "vite preview" // Preview production build
  }
}
```

### `vite.config.js` ⚡
**What it does**: Configures Vite build tool
**When to edit**: Rarely (already optimized)

### `tailwind.config.js` 🎨
**What it does**: Customizes Tailwind CSS
**When to edit**: To change color scheme, fonts, or add custom styles
```javascript
theme: {
  extend: {
    colors: {
      rose: { /* Your brand colors */ }
    }
  }
}
```

### `postcss.config.js` 📦
**What it does**: Processes CSS with Tailwind
**When to edit**: Never (leave as is)

### `vercel.json` 🚀
**What it does**: Configures Vercel deployment
**When to edit**: Rarely (handles SPA routing)

### `.env.example` 🔐
**What it does**: Template for environment variables
**When to edit**: Never (copy to .env instead)

### `.gitignore` 🚫
**What it does**: Tells Git what not to track
**When to edit**: To exclude additional files

---

## 📄 Documentation Files

### `README.md` 📖
**Purpose**: Complete project documentation
**Audience**: Developers
**Contains**: Setup, structure, deployment

### `QUICK_START.md` ⚡
**Purpose**: Get running in 10 minutes
**Audience**: You (non-technical overview)
**Contains**: Minimal steps to launch

### `FIREBASE_SETUP.md` 🔥
**Purpose**: Detailed Firebase configuration
**Audience**: You or developer
**Contains**: Step-by-step Firebase setup

### `DEPLOYMENT_GUIDE.md` 🚀
**Purpose**: Complete deployment walkthrough
**Audience**: You or developer
**Contains**: Vercel deployment, SEO, monitoring

### `LAUNCH_CHECKLIST.md` ✅
**Purpose**: Pre-launch verification
**Audience**: You
**Contains**: Everything to check before going live

### `PROJECT_SUMMARY.md` 📊
**Purpose**: High-level overview
**Audience**: You or stakeholders
**Contains**: What's built, features, next steps

### `FILE_GUIDE.md` 📂
**Purpose**: This file!
**Audience**: Anyone confused about project structure

---

## 🌐 Public Files (`/public`)

### `favicon.svg` 🎨
**What it does**: Your website icon (AG logo)
**When to edit**: To change the icon in browser tabs
**How to edit**: Replace with new SVG or PNG

### `robots.txt` 🤖
**What it does**: Tells search engines what to crawl
**When to edit**: Rarely (unless blocking pages)
```txt
User-agent: *
Allow: /
```

### `sitemap.xml` 🗺️
**What it does**: Helps search engines find all pages
**When to edit**: When adding new pages
```xml
<url>
  <loc>https://amidost.com/new-page</loc>
</url>
```

---

## ⚛️ React Components (`/src/components`)

### Layout Components (`/src/components/layout`)

#### `Navbar.jsx` 🧭
**What it does**: Top navigation bar
**What to edit**:
- Navigation links
- Logo
- Mobile menu behavior
**Key features**:
- Sticky on scroll
- Mobile hamburger menu
- Active page highlighting

#### `Footer.jsx` 👣
**What it does**: Bottom footer with links
**What to edit**:
- Footer links
- Social media icons
- Company information
**Key features**:
- 4-column layout
- Social media links
- Copyright notice

### Shared Components (`/src/components/shared`)

#### `Button.jsx` 🔘
**What it does**: Reusable button component
**Variants**:
- `primary` - Rose gradient
- `secondary` - White with border
- `outline` - Transparent with border
- `dark` - Dark background
**Usage**:
```jsx
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>
```

#### `SectionHeading.jsx` 📰
**What it does**: Consistent section titles
**What to edit**: Nothing (used throughout site)
**Usage**:
```jsx
<SectionHeading
  title="Our Services"
  subtitle="What we offer"
  centered={true}
/>
```

#### `FeatureCard.jsx` 🃏
**What it does**: Service/feature showcase cards
**Usage**:
```jsx
<FeatureCard
  icon={Heart}
  title="Women's Health"
  description="Expert guidance"
/>
```

#### `SEO.jsx` 🔍
**What it does**: Manages meta tags for SEO
**What to edit**: Default values if needed
**Usage**: Automatically included in each page

---

## 📄 Pages (`/src/pages`)

### `HomePage.jsx` 🏠
**What it shows**: Landing page with hero, stats, pillars
**Key sections**:
- Hero with background image
- YouTube subscriber stats
- 3 core pillars cards
**What to edit**:
- Hero text
- Background image
- Stats numbers

### `AboutPage.jsx` ℹ️
**What it shows**: Company information, mission, objectives
**Key sections**:
- Company story
- Mission & Vision
- 6 corporate objectives
**What to edit**:
- Company description
- Team information
- Objectives list

### `MediaPage.jsx` 📺
**What it shows**: YouTube channel showcase
**Key sections**:
- Featured video embed
- Channel stats
- Content categories
**What to edit**:
- YouTube video IDs
- Subscriber count
- Category descriptions

### `ProductsPage.jsx` 📱
**What it shows**: Apps and publications
**Key sections**:
- Pregnancy After Loss app
- Books (in development)
- Waitlist CTAs
**What to edit**:
- App features
- Launch dates
- Book titles

### `ContactPage.jsx` 📧
**What it shows**: Contact form and information
**Key sections**:
- Working contact form
- Office address
- Email and phone
**What to edit**:
- Contact information
- Form fields
- Success messages
**How it works**:
1. User fills form
2. Submits to Firebase
3. Shows success/error message

---

## 🔧 Configuration & Setup (`/src`)

### `App.jsx` 🎯
**What it does**: Main app component with routing
**What to edit**: When adding new pages
```jsx
<Route path="/new-page" element={<NewPage />} />
```

### `main.jsx` 🚪
**What it does**: React entry point
**When to edit**: Rarely (to add global providers)

### `index.css` 🎨
**What it does**: Global styles and animations
**What to edit**: Custom animations, font imports

### `config/firebase.js` 🔥
**What it does**: Firebase initialization
**When to edit**: Never (uses .env variables)

---

## 🎨 When to Edit What

### Changing Content
**Files to edit**:
- `src/pages/*.jsx` - Page content
- `public/sitemap.xml` - Add new pages

### Changing Design
**Files to edit**:
- `tailwind.config.js` - Colors, fonts
- `src/components/shared/*.jsx` - Component styles

### Adding New Page
**Files to edit**:
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add link in `src/components/layout/Navbar.jsx`
4. Update `public/sitemap.xml`

### Fixing Bugs
**Check these files**:
1. Browser console (F12)
2. Vercel deployment logs
3. Firebase Firestore rules

---

## 📦 Don't Edit These

Files that should stay as-is:

- ❌ `node_modules/` (auto-generated)
- ❌ `dist/` (build output)
- ❌ `vite.config.js` (unless you know what you're doing)
- ❌ `postcss.config.js` (configured correctly)
- ❌ `.gitignore` (proper exclusions set)

---

## 🔍 Finding Things Quickly

### "Where is the contact form?"
→ `src/pages/ContactPage.jsx` (line 23+)

### "Where are the colors defined?"
→ `tailwind.config.js` (lines 8-21)

### "Where is the navigation menu?"
→ `src/components/layout/Navbar.jsx` (line 27)

### "Where are YouTube links?"
→ Search for `@FriendlyHealth` in all files

### "Where is Firebase connected?"
→ `src/config/firebase.js`

### "Where are the meta tags?"
→ `src/components/shared/SEO.jsx`

---

## 🚀 Quick Commands Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod

# Check for errors
npm run build && npm run preview
```

---

## 📞 Need Help?

**Can't find something?**
1. Use search: `Ctrl+Shift+F` in VS Code
2. Check `README.md` for detailed docs
3. Ask Claude or your developer

**File is broken?**
1. Check browser console (F12)
2. Look for syntax errors
3. Restore from Git if needed

---

**Remember**: This is YOUR website. Feel free to customize, but test changes locally first with `npm run dev` before deploying! 🎨
