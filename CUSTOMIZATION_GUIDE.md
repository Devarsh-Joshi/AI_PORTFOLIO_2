# Portfolio Website Customization Guide

Welcome! This guide will help you customize your AI portfolio website with your own colors, links, images, and personal details.

---

## 📋 Table of Contents
1. [Changing Colors](#changing-colors)
2. [Updating Personal Information](#updating-personal-information)
3. [Adding/Editing Projects](#addingediting-projects)
4. [Updating Skills & Experience](#updating-skills--experience)
5. [Modifying Links](#modifying-links)
6. [Adding Images](#adding-images)
7. [Contact Information](#contact-information)

---

## 🎨 Changing Colors

All colors are defined in the CSS file at `client/src/index.css`. The primary color scheme uses CSS custom properties.

### Primary Color
**Location:** `client/src/index.css` (Line 14)

```css
--color-primary: hsl(180 100% 50%);  /* Currently Cyan */
```

**To change the primary color:**
- Change the HSL values:
  - First number (0-360): **Hue** (0=Red, 60=Yellow, 120=Green, 180=Cyan, 240=Blue, 300=Magenta)
  - Second number: **Saturation** (0-100%)
  - Third number: **Lightness** (0-100%)

**Examples:**
- `hsl(0 100% 50%)` - Bright Red
- `hsl(120 100% 50%)` - Bright Green
- `hsl(240 100% 50%)` - Bright Blue
- `hsl(300 100% 50%)` - Bright Magenta

### Background & Text Colors
**Location:** `client/src/index.css` (Lines 11-12)

```css
--color-background: hsl(222 47% 4%);    /* Dark blue-black background */
--color-foreground: hsl(210 40% 98%);   /* Light text */
```

### Accent Colors
The site uses gradient colors in text effects. Look for these in component files:
- `from-primary` - Uses the primary color
- `to-cyan-400` - Can be changed to any Tailwind color
- `to-purple-500` - Can be changed to any Tailwind color

**Location:** `client/src/components/home/Hero.tsx` (Line 45)
```tsx
bg-gradient-to-r from-primary via-cyan-400 to-purple-500
```

---

## 👤 Updating Personal Information

### Hero Section (Main Title)
**Location:** `client/src/components/home/Hero.tsx` (Lines 45-49)

```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white">
  Architecting <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-purple-500">
    Artificial Intelligence
  </span>
</h1>
```

**Change this to:** Your profession/specialty
```tsx
<h1>
  Building <br />
  <span>Full Stack Applications</span>
</h1>
```

### Hero Subtitle
**Location:** `client/src/components/home/Hero.tsx` (Lines 51-56)

```tsx
<p className="text-xl text-muted-foreground mb-10">
  I build scalable machine learning models and intelligent systems that solve 
  complex real-world problems. Specialized in Computer Vision, NLP, and Deep 
  Reinforcement Learning.
</p>
```

**Replace with your own description.**

### Availability Badge
**Location:** `client/src/components/home/Hero.tsx` (Line 38)

```tsx
<span className="text-xs font-mono font-medium tracking-wide">AVAILABLE FOR HIRE</span>
```

Change to: `CURRENTLY EMPLOYED`, `FREELANCING`, `AVAILABLE`, etc.

---

## 🚀 Adding/Editing Projects

Projects are stored as data in `client/src/pages/Home.tsx`

**Location:** `client/src/pages/Home.tsx` (Lines 4-31)

```tsx
const projects = [
  { 
    id: "01", 
    title: "NEURAL.EYE",                    // Project name
    type: "COMPUTER VISION",                // Project category
    desc: "Real-time cortical mapping...",  // Project description
    tech: ["PYTORCH", "CUDA", "WASM"],      // Technologies used
    metrics: { accuracy: "99.2%", latency: "4.2ms" }  // Key metrics
  },
  // More projects...
];
```

### To Add a New Project:
```tsx
{ 
  id: "05",                              // Unique ID
  title: "YOUR PROJECT NAME",            // Display name
  type: "PROJECT CATEGORY",              // Category
  desc: "Your project description...",   // What it does
  tech: ["TECH1", "TECH2", "TECH3"],    // Technologies used
  metrics: { 
    metric1: "value1",                   // Custom metrics
    metric2: "value2" 
  }
}
```

### To Edit an Existing Project:
Simply update the `projects` array with your own data.

---

## 💼 Updating Skills & Experience

### Skills Section
**Location:** `client/src/components/home/Skills.tsx` (Lines 4-22)

```tsx
const skillCategories = [
  {
    title: "Machine Learning",
    icon: <Brain className="w-8 h-8 text-primary" />,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", ...]
  },
  // More categories...
];
```

**To modify:**
- Change `title` to your skill category
- Change `icon` to any icon from the `lucide-react` library
- Update `skills` array with your technologies

**Available icons:** `Code2`, `Brain`, `Database`, `Cpu`, `Network`, `LineChart`, `Zap`, `Shield`, etc.

### Experience Section
**Location:** `client/src/pages/Home.tsx` (Lines 35-51)

```tsx
const experience = [
  {
    period: "2024 - PRESENT",
    role: "SR. AI ARCHITECT",
    company: "SYNAPSE LABS",
    desc: "Leading the development of multi-modal foundation models..."
  },
  // More roles...
];
```

**Update with your own experience.**

---

## 🔗 Modifying Links

### Contact Information
**Location:** `client/src/components/home/Contact.tsx` (Lines 30-49)

```tsx
<p>hello@ai-engineer.dev</p>          // Email
<p>San Francisco, CA (Remote Available)</p>  // Location
```

**Update with your contact details.**

### Social/External Links
These are typically added in the Navbar or footer. Check:
- `client/src/components/layout/Navbar.tsx` - For header links
- Update any hardcoded URLs with your own social profiles or websites

### Adding New Links
To add social media buttons, update the Contact section:
```tsx
<a href="https://github.com/yourprofile" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
```

---

## 🖼️ Adding Images

### Hero Background Image
**Location:** `client/src/components/home/Hero.tsx` (Line 21)

```tsx
<motion.img 
  src="/assets/hero-bg.png"  // Change this path
  alt="Neural Network Background"
/>
```

**Steps to add your image:**
1. Place your image in `client/public/assets/`
2. Update the `src` path: `/assets/your-image-name.png`
3. Update the `alt` text for accessibility

### Supported Image Formats:
- PNG (`.png`)
- JPG/JPEG (`.jpg`, `.jpeg`)
- WebP (`.webp`)
- SVG (`.svg`)

### Image Optimization Tips:
- Keep file size under 500KB
- Use WebP format for better performance
- Recommended resolution: 1920x1080 or higher
- Use transparent PNG for overlays

---

## 📧 Contact Information

### Email
**Location:** `client/src/components/home/Contact.tsx` (Line 35)
```tsx
<p>hello@ai-engineer.dev</p>
```

### Location
**Location:** `client/src/components/home/Contact.tsx` (Line 43)
```tsx
<p>San Francisco, CA (Remote Available)</p>
```

### Contact Form
The contact form is styled but you'll need to:
1. Set up an email backend service (EmailJS, SendGrid, etc.)
2. Connect the form submission to your service

**Current form location:** `client/src/components/home/Contact.tsx` (Lines 57-81)

---

## 🎯 Quick Reference: File Locations

| Element | File | Line |
|---------|------|------|
| Primary Color | `client/src/index.css` | 14 |
| Hero Title | `client/src/components/home/Hero.tsx` | 45 |
| Hero Subtitle | `client/src/components/home/Hero.tsx` | 51 |
| Projects Data | `client/src/pages/Home.tsx` | 4-31 |
| Experience Data | `client/src/pages/Home.tsx` | 35-51 |
| Skills | `client/src/components/home/Skills.tsx` | 4-22 |
| Contact Email | `client/src/components/home/Contact.tsx` | 35 |
| Contact Location | `client/src/components/home/Contact.tsx` | 43 |
| Hero Background | `client/src/components/home/Hero.tsx` | 21 |

---

## 🚀 Making Changes

### Development Mode
To see changes in real-time:
```bash
npm run dev
```
Visit: `http://localhost:5000`

### Build for Production
```bash
npm run build
```

### Type Checking
```bash
npm run check
```

---

## 💡 Tips & Best Practices

1. **Always work in development mode** (`npm run dev`) to see changes live
2. **Keep colors consistent** - Use the same primary color throughout
3. **Update both light and dark text** - Ensure good contrast
4. **Test on mobile** - Your site should look good on all devices
5. **Optimize images** - Compress before uploading
6. **Keep descriptions concise** - Mobile users scan quickly
7. **Use metrics** - Add meaningful metrics to projects
8. **Regular updates** - Keep your portfolio current

---

## 🆘 Troubleshooting

### Colors not changing?
- Clear browser cache (Ctrl+Shift+Del)
- Rebuild the project: `npm run build`
- Check you edited the correct file

### Images not showing?
- Verify the path starts with `/assets/`
- Check image exists in `client/public/assets/`
- Ensure file extension is correct (.png, .jpg, .webp)

### Changes not appearing?
- Restart dev server: Stop `npm run dev` and run it again
- Check browser console for errors (F12)
- Ensure you saved the file

---

## 📖 Learning Resources

- **Tailwind CSS Colors:** https://tailwindcss.com/docs/customizing-colors
- **Framer Motion Docs:** https://www.framer.com/motion
- **Lucide Icons:** https://lucide.dev
- **HSL Color Picker:** https://www.rapidtables.com/web/color/hsl-color.html

---

**Happy customizing! 🎉**

For more help, refer to the project's source code or React documentation.
