# Al Rukn Al Dhahabi - Official Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)](https://tailwindcss.com)

> 🏆 **Official website** for Al Rukn Al Dhahabi - Ajman's premier billiards, snooker, PlayStation, and gaming entertainment venue.

🌐 **Live Site:** [alruknaldhahabi.com](https://alruknaldhahabi.com)  
📍 **Location:** Grand Mall, Al Rashidiya 3, Ajman, UAE  
📱 **WhatsApp:** +971 54 200 2332

---

## 🎯 Project Overview

This repository contains the complete source code for Al Rukn Al Dhahabi's official website, built as a modern, bilingual web application with a focus on performance, SEO, and user experience.

---

## 💻 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15.5 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Font** | Cairo (Google Fonts) |
| **Images** | Cloudinary CDN |
| **Icons** | Lucide React, React Icons |
| **Deployment** | Vercel |

---

## ✨ Key Features

✅ **Bilingual Support** - Full English & Arabic with URL-based routing (`/en`, `/ar`)  
✅ **RTL Layout** - Complete right-to-left support for Arabic users  
✅ **Responsive Design** - Mobile-first approach, optimized for all devices  
✅ **Performance Optimized** - Translation caching, instant language switching (<50ms)  
✅ **SEO Enhanced** - Locale-specific metadata, hreflang tags, JSON-LD structured data  
✅ **Modern UX** - Smooth scrolling, reveal animations, micro-interactions  
✅ **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation  

---

## 🎨 Design System

**Theme:** Light Luxury Sport - Premium aesthetics with warm cream backgrounds and gold accents

**Color Palette:**
- Backgrounds: `#FAFAF8`, `#F5F3EE` (warm off-whites)
- Gold Accents: `#C9A84C`, `#E8C97A`, `#A07830`
- Text: Warm browns and near-blacks

**Typography:** Cairo font family for consistent Latin & Arabic script rendering

---

## 🏗️ Architecture Highlights

### Component Structure
- **Navbar** - Fixed navigation with mobile-responsive menu
- **Hero** - Full-viewport landing section with parallax effects
- **About** - Company information with stat cards
- **Services** - Service offerings in responsive grid layout
- **Gallery** - Masonry image gallery with lightbox
- **Contact** - Location, hours, and contact information
- **Footer** - Site links and social media integration

### Internationalization (i18n)
- URL-based locale detection and routing
- Middleware handles server-side locale logic
- Client-side context manages language state
- Pre-cached translations for zero-latency switching

### Performance Metrics
- First Contentful Paint: ~1.2s
- Time to Interactive: ~2.8s
- Lighthouse Performance Score: 95+
- Lighthouse SEO Score: 100

---

## 📁 Project Structure

```
frontend/
├── app/
│   ├── [locale]/              # Dynamic locale routes
│   │   ├── layout.tsx         # SEO, metadata, hreflang, JSON-LD
│   │   └── page.tsx           # Main page rendering
│   ├── components/            # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── context/
│   │   └── LanguageContext.tsx
│   ├── lib/
│   │   └── i18n.ts
│   ├── types/
│   │   └── i18n.ts
│   ├── middleware.ts
│   └── globals.css
├── public/
├── .env
├── package.json
└── tailwind.config.ts
```

---

## 👨‍💻 Developer

**Developed by:** [SWE-Ebrahim](https://github.com/SWE-Ebrahim)  
**Portfolio:** [ebrahimalmahbosh.com](https://ebrahimalmahbosh.com)  
**Email:** swe.ebrahim@gmail.com

---

## 📜 LICENSE & TERMS OF USE

### ⚠️ IMPORTANT - READ CAREFULLY

**Copyright Notice:**  
© 2024 Al Rukn Al Dhahabi. All Rights Reserved.

This repository is made publicly available for **educational and portfolio purposes only**. By accessing this repository, you agree to the following terms:

### ✅ PERMITTED USES

You are granted the following non-exclusive, non-transferable rights:

1. **Personal Study** - You may view, download, and study the source code for personal educational purposes
2. **Learning Reference** - You may reference specific implementation patterns, architecture decisions, or coding techniques in your own learning journey
3. **Academic Research** - You may cite this project in academic papers or presentations with proper attribution
4. **Portfolio Inspiration** - You may use this as inspiration for your own portfolio projects (with significant modifications)

### ❌ PROHIBITED USES

The following activities are strictly prohibited without explicit written permission from the copyright holder:

1. **Commercial Use** - You may NOT use this codebase, in whole or in part, for any commercial purpose, including but not limited to:
   - Building websites for clients
   - Creating products or services for sale
   - Using in paid freelance or contract work
   - Incorporating into business operations

2. **Derivative Works** - You may NOT create derivative works based on this codebase, including:
   - Modified versions for distribution
   - Translations or adaptations
   - Forks intended for public sharing

3. **Redistribution** - You may NOT:
   - Redistribute the code on other platforms or repositories
   - Share copies with third parties
   - Sub-license or transfer your rights

4. **Brand Usage** - You may NOT use:
   - The "Al Rukn Al Dhahabi" name, logo, or branding
   - Any content, images, or text from the live website
   - Trademarks or service marks associated with the business

5. **Misrepresentation** - You may NOT:
   - Claim this work as your own
   - Remove or alter copyright notices
   - Misrepresent your relationship with the original project

### 🔒 LEGAL PROTECTION

This codebase is protected under international copyright laws and treaties. Unauthorized use may result in:

- Legal action for copyright infringement
- Monetary damages and statutory penalties
- Injunctive relief prohibiting further use
- Recovery of legal fees and court costs

### 📧 LICENSING INQUIRIES

If you wish to use this codebase for purposes beyond those permitted above, including commercial licensing or custom implementations, please contact:

**Email:** swe.ebrahim@gmail.com  
**Portfolio:** [ebrahimalmahbosh.com](https://ebrahimalmahbosh.com)  
**GitHub:** [SWE-Ebrahim](https://github.com/SWE-Ebrahim)

Licensing options may be available for qualified businesses and developers under specific terms and conditions.

### 🛡️ WARRANTY DISCLAIMER

THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### ⚖️ GOVERNING LAW

These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.

---

## 📞 Business Contact

**For Al Rukn Al Dhahabi (the business):**
- **Visit:** Grand Mall, Al Rashidiya 3, Ajman, UAE
- **WhatsApp:** +971 54 200 2332
- **Instagram:** [@alrukn.aldhahabi](https://www.instagram.com/alrukn.aldhahabi/)
- **TikTok:** [@alrukn.aldhahabi](https://www.tiktok.com/@alrukn.aldhahabi)
- **Directions:** [Google Maps](https://maps.app.goo.gl/jWcPmvJwTzk3QoW5A)

---

## 🙏 Acknowledgments

- **Client:** Al Rukn Al Dhahabi management
- **Fonts:** Google Fonts (Cairo)
- **Icons:** Lucide React & React Icons
- **CDN:** Cloudinary
- **Hosting:** Vercel

---

<div align="center">

**Built with ❤️ by SWE-Ebrahim**  
*Showcasing modern web development excellence*

[Portfolio](https://ebrahimalmahbosh.com) • [GitHub](https://github.com/SWE-Ebrahim) • [Email](mailto:swe.ebrahim@gmail.com)

© 2024 Al Rukn Al Dhahabi. All Rights Reserved.

</div>
