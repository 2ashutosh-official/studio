# **App Name**: Ashu's Universe

## Core Features:

- Dynamic Project Display: Implement a dynamic project showcase with filtering capabilities (personal, client, open-source, featured).
- Social Feed Integration: Embed and display social media feeds (YouTube, X, LinkedIn) in a carousel or infinite scroll layout.
- Blog Display: Create a blog section that parses Markdown content into HTML, supports filtering by tags, and generates SEO-friendly URLs.
- Contact Links: Design an interactive 'Contact & Connect' section with links to GitHub, LinkedIn, Email, Twitter, and a resume, using island-style buttons.
- Interactive UI Elements: Implement scroll-based reveal animations and a custom circular cursor that changes contrast on hover to enhance user experience.

## Style Guidelines:

- Primary color: Kotlin brand blue (#A97BFF) to reflect expertise in Kotlin technologies.
- Secondary color: Dark gray (#333333) for a professional and modern look.
- Accent: Teal (#008080) for interactive elements and highlights.
- Use a clean, modern layout with clear sections and smooth scroll navigation.
- Incorporate relevant icons for technologies (Kotlin, Android, etc.) and platforms (GitHub, LinkedIn, etc.).
- Subtle animations and transitions to enhance user experience (e.g., scroll-based reveals, cursor effects).

## Original User Request:
🔍 Overview & Objectives
A personal portfolio website for Ashu — a Kotlin specialist in Android, Multiplatform (Compose), and backend (Ktor, Spring Boot). This site:

Showcases your tech skills, personality, and projects.

Acts as a visual CV, blog space, and social proof hub.

Dazzles with 3D visuals and thoughtful interactivity — because code can be art.

🎯 Target Audience
👨‍💼 Recruiters scouting Kotlin/Android/backend devs

🧑‍💻 Clients wanting product-ready engineering help

👨‍🚀 Dev community exploring new tech or inspiration

🎥 Content followers from X, LinkedIn, YouTube

🧩 Core Sections (Multi-page w/ Smooth Scroll Navigation)
1. Home/About
Tagline + summary (with scroll-triggered entrance)

Avatar or image + animated intro (floating elements?)

Background: animated hyperspace scene via react-three-fiber

A “start journey” button → Projects section

2. Projects (Dynamic)
Firebase-powered dynamic list

Each project:

Title, Description, Tech stack

Image carousel (if multiple shots)

GitHub / Live link

Filter by: personal, client, opensource, featured

Tech badges (styled like GitHub topics)

3. Social Feed (Dynamic)
YouTube embeds (latest 3–5)

Twitter/X and LinkedIn post previews

Carousel layout or infinite scroll

Source data: Firebase (manually added)

4. Blogs (Dynamic)
Each blog: Title, Summary, Image, Tags

Content: Markdown (parsed to HTML)

Filter by tag

Optional "Read time" and publish date

Route: /blogs/:slug for SEO-friendly URLs

5. Contact & Connect
Island-style buttons:

GitHub, LinkedIn, Email, Twitter, Resume

Optional contact form (using EmailJS/Formspree)

Future-proof: Add more methods from Firebase

🧠 UX Features
Circular custom cursor, switches contrast on hover

Scroll-based reveal animations (Framer Motion)

Kotlin aesthetic:

Colors: Kotlin brand palette + dark space mode

Fonts: JetBrains Mono + custom display font

Responsive for mobile/tablet/desktop

Easter Egg: Konami code opens secret page with mini space game or meme console 👀

🔧 Technical Stack
Frontend
React + Vite (fast dev & builds)

React Router DOM v6+ (with HashRouter for GitHub Pages)

TailwindCSS (for utility power) + Styled Components (for themed parts)

React Three Fiber + Drei (for immersive backgrounds)

Framer Motion (for scroll + hover animations)

React Helmet (for SEO tags)

Backend
Firebase Firestore (data storage)

Firebase Storage (media hosting)

Optional: Firebase Auth (if adding admin panel later)

Hosting
GitHub Pages (w/ custom domain)

GitHub Actions (for CI/CD deployments)

Option: Deploy on Netlify or Vercel for better SSR control later

🔐 Security & Best Practices
Firebase security rules: only Ashu writes

Sanitization for blogs (Markdown content)

Asset compression (WebP, lazy loading)

Lighthouse checks for accessibility & perf

No user tracking unless added intentionally

🧬 Data Models (Updated)
Project

{
  id: string,
  title: string,
  description: string,
  imageUrls: string[],
  projectLink: string,
  repoLink: string,
  technologies: string[],
  featured: boolean,
  order: number,
  createdAt: timestamp
}
Social Post

{
  id: string,
  platform: "youtube" | "twitter" | "linkedin",
  title: string,
  description: string,
  embedLink: string,
  thumbnailUrl: string,
  postDate: timestamp,
  order: number
}
Blog Post

{
  id: string,
  slug: string,
  title: string,
  description: string,
  content: string, // markdown
  imageUrl: string,
  tags: string[],
  publishDate: timestamp,
  featured: boolean
}
Contact Link

{
  id: string,
  platform: "github" | "linkedin" | "email" | "twitter" | "resume",
  url: string,
  icon: string,
  displayText: string,
  order: number
}
🪜 Development Phases
Phase 1: Foundation
Setup React + Vite project

Install router, framer-motion, firebase, etc.

Add layout, navbar, HashRouter

Firebase setup + connect to Firestore

Phase 2: Core Content
Build static sections (About, Projects, Blogs, Social)

 dummy data integration

Basic responsive layout
Add Firestore , i already have project in firebase , ask for json 
Phase 3: Dynamic Rendering
Convert all content sections to dynamic (Firebase)

Add blog detail pages

Image uploads via Firebase Storage

Phase 4: Space Visuals & Motion
Add react-three-fiber starfield scene

Cursor animation, framer motion scrolls

Apply consistent Kotlin-inspired theming

Phase 5: Finishing & Deployment
SEO meta tags, sitemap.xml

GitHub Pages deploy via Actions

Test responsiveness, fix bugs, polish transitions

⚠️ Anticipated Challenges

Challenge	Solution
3D visuals slowing down low-end devices	Lazy-load canvas, reduce poly count, use instancing
Blog markdown injection	Use DOMPurify or react-markdown with strict sanitization
Content updates	Use Firebase Console or build a minimal admin UI in future
SEO on GitHub Pages	Add Helmet, meta tags per route, sitemap.xml manually
🌱 Future Upgrades
🌒 Light/Dark mode toggle

🌍 i18n (for multi-language support)

✍️ Admin panel for managing posts/projects

🎧 Ambient soundscape toggle (spacey BGM?)

📊 Analytics dashboard for blog and social reach

📘 Case studies with long-form project breakdowns
  