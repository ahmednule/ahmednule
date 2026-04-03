# Fix Plan: Projects & Certifications

## Issue 1: Certifications — Wrong file reference for MKU degree

**File:** `lib/about/certifications.ts` (line 13)

**Change:**
```diff
-    file: "Zetech_Bachelor_Certificate",
+    file: "MKU_Bachelor_Certificate",
```

**Note:** The logo `zetech` is still used for the MKU entry as a temporary placeholder. Once you add an MKU logo image to `/public/assets/images/`, update line 4 to import it and change line 16 to use the new import.

---

## Issue 2: Projects — Replace placeholder data with real projects

### 2a. `components/featured-projects.tsx`

Replace the `featuredProjects` array (lines 6-28) with real project data. Example structure:

```ts
const featuredProjects = [
  {
    title: "ShambaSync",
    description: "A platform empowering financial saving groups in underserved communities with transparent tracking and management.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/ahmednule/shambasync",
    demo: "https://shambasync.vercel.app", // update with real URL
  },
  {
    title: "CoffeeHub",
    description: "A coffee marketplace platform connecting growers with buyers.",
    tags: ["Next.js", "React", "Tailwind"],
    github: "https://github.com/ahmednule/coffeehub", // update with real URL
    demo: "https://coffeehub.vercel.app", // update with real URL
  },
  {
    title: "Cinemania",
    description: "A movie discovery and review application.",
    tags: ["React", "API Integration", "Tailwind"],
    github: "https://github.com/ahmednule/cinemania", // update with real URL
    demo: "https://cinemania.vercel.app", // update with real URL
  },
]
```

### 2b. `components/projects-grid.tsx`

Replace the `projects` array (lines 10-75) with real project data. Suggested projects based on images found in `/public/assets/images/`:

```ts
const projects = [
  {
    title: "ShambaSync",
    description: "A platform empowering financial saving groups in underserved communities. Features transparent contribution tracking, group management, automated savings calculations, and comprehensive financial reporting for community-based savings organizations.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    category: "Full-stack",
    github: "https://github.com/ahmednule/shambasync",
    demo: "https://shambasync.vercel.app",
  },
  {
    title: "CoffeeHub",
    description: "A coffee marketplace platform connecting local growers with buyers. Features product listings, order management, and real-time pricing dashboards.",
    tags: ["Next.js", "React", "Tailwind"],
    category: "Full-stack",
    github: "https://github.com/ahmednule/coffeehub",
    demo: "https://coffeehub.vercel.app",
  },
  {
    title: "Cinemania",
    description: "A movie discovery and review application with personalized recommendations, watchlist management, and social sharing features.",
    tags: ["React", "API Integration", "Tailwind"],
    category: "Frontend",
    github: "https://github.com/ahmednule/cinemania",
    demo: "https://cinemania.vercel.app",
  },
  {
    title: "Bellans",
    description: "A business management platform with inventory tracking, sales analytics, and customer relationship features.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    category: "Full-stack",
    github: "https://github.com/ahmednule/bellans",
    demo: "https://bellans.vercel.app",
  },
  {
    title: "AgriGuide",
    description: "An agricultural guidance platform providing farmers with best practices, crop management tips, and market information.",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Full-stack",
    github: "https://github.com/ahmednule/agriguide",
    demo: "https://agriguide.vercel.app",
  },
  {
    title: "DiabetesKenya",
    description: "A health awareness platform focused on diabetes education, management resources, and community support for Kenyan patients.",
    tags: ["Next.js", "React", "Tailwind"],
    category: "Frontend",
    github: "https://github.com/ahmednule/diabeteskenya",
    demo: "https://diabeteskenya.vercel.app",
  },
  {
    title: "Ujamaa",
    description: "A community-driven platform fostering collaboration and resource sharing among local communities.",
    tags: ["React", "Express", "PostgreSQL"],
    category: "Full-stack",
    github: "https://github.com/ahmednule/ujamaa",
    demo: "https://ujamaa.vercel.app",
  },
  {
    title: "ShakeHands",
    description: "A professional networking platform connecting freelancers with clients and facilitating project collaboration.",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    category: "Full-stack",
    github: "https://github.com/ahmednule/shakehands",
    demo: "https://shakehands.vercel.app",
  },
]
```

**Important:** All GitHub and demo URLs above are placeholders — update them with the real URLs for each project.

### 2c. Image paths in projects

If you want to add project images to the cards, you'll need to:
1. Add an `image` field to each project object pointing to `/public/assets/images/<project-image>`
2. Update the Card component to render the image using `next/image`

---

## Summary of files to edit

| File | Change |
|------|--------|
| `lib/about/certifications.ts` | Fix `file` field on line 13: `Zetech_Bachelor_Certificate` → `MKU_Bachelor_Certificate` |
| `components/featured-projects.tsx` | Replace `featuredProjects` array with real projects |
| `components/projects-grid.tsx` | Replace `projects` array with real projects |
