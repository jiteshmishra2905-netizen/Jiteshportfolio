# Mechanical Engineering & CAD Portfolio Website

Welcome to your professional Mechanical Engineering Portfolio website. This platform is custom-built to showcase **3D CAD models, mechanical assemblies, engineering drawings, FEA simulations, IoT telemetry systems, and technical credentials**.

---

## 🛠️ Technology Stack & Architecture

- **Framework:** Next.js 15 (React 19, App Router)
- **Language:** TypeScript (Type-safe engineering data structures)
- **Styling:** Tailwind CSS (Dark technical blueprint design system)
- **Icons:** Lucide React (Clean engineering iconography)
- **Data Model:** Structured local TypeScript files (`src/data/`) — no database required!

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your system.
Check your version by opening PowerShell or Terminal and running:
```bash
node -v
npm -v
```

### 2. Local Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to: **[http://localhost:3000](http://localhost:3000)**

### 3. Production Build
To create an optimized production build:
```bash
npm run build
npm start
```

---

## 📁 Project Directory Structure

```text
├── public/                       # Static files, images, drawings, and PDFs
│   ├── projects/                 # Project assets organized by project slug
│   │   ├── cycloidal-gearbox/    # Renders, drawings, simulations, downloads
│   │   ├── pneumatic-gripper/
│   │   └── ...
│   ├── certificates/             # Certificate images and PDF credentials
│   └── documents/                # Resume PDF and downloadable engineering files
│
├── src/
│   ├── app/                      # Next.js App Router pages and API routes
│   │   ├── layout.tsx            # Global layout, fonts, Navbar & Footer
│   │   ├── page.tsx              # Homepage
│   │   ├── projects/
│   │   │   ├── page.tsx          # All Projects catalog with filters & search
│   │   │   └── [slug]/page.tsx   # Dynamic project detail pages (CAD/IoT/Web)
│   │   ├── certificates/page.tsx # Certificates directory & PDF viewer
│   │   ├── contact/page.tsx      # Contact page
│   │   ├── api/contact/route.ts  # Contact form submission API handler
│   │   ├── not-found.tsx         # Custom 404 page
│   │   ├── sitemap.ts            # Dynamic SEO sitemap
│   │   └── robots.ts             # SEO robots rules
│   │
│   ├── components/               # Reusable UI and layout components
│   │   ├── layout/               # Navbar, Footer
│   │   ├── projects/             # ProjectCard, Filters, CADDetail, Gallery
│   │   ├── certificates/         # CertificateCard, PDFViewerModal
│   │   ├── contact/              # ContactForm with validation
│   │   └── ui/                   # Button, Card, Badge, Lightbox, SectionHeader
│   │
│   ├── data/                     # 💡 ALL CONTENT LIVES HERE (Edit these files!)
│   │   ├── profile.ts            # Your name, bio, skills, education, links
│   │   ├── projects.ts           # All CAD, IoT, and Web engineering projects
│   │   └── certificates.ts       # All certificates, credentials, and verification links
│   │
│   ├── types/                    # TypeScript interfaces and schemas
│   │   ├── profile.ts
│   │   ├── project.ts
│   │   └── certificate.ts
│   │
│   └── lib/
│       └── utils.ts              # Styling helpers and category labels
```

---

## ✏️ How to Manage Your Portfolio Content

You do **NOT** need to edit HTML or React UI components to update your portfolio. Everything is managed through the files in `src/data/`.

### 1. Update Personal Info & Resume
Open `src/data/profile.ts`:
- **Name & Title:** Change `name: "Jitesh Kumar"` or `title: "Mechanical Engineer & CAD Designer"`.
- **Bio & Philosophy:** Update `shortBio`, `fullBio`, or `engineeringPhilosophy`.
- **Skills Matrix:** Add or remove CAD software and engineering skills in `skillCategories`.
- **Resume:** Place your resume PDF in `public/documents/resume.pdf` and set `resumeUrl: "/documents/resume.pdf"`.
- **Social Links:** Update your LinkedIn, GitHub, or email address in `socialLinks`.

---

### 2. How to Add a New CAD / Mechanical Project
1. Open `src/data/projects.ts`.
2. Add a new project object to the `projectsData` array:
```typescript
{
  slug: "hydraulic-scissor-lift-mechanism",
  title: "Heavy-Duty Electro-Hydraulic Scissor Lift",
  subtitle: "Kinematic link analysis and structural FEA verification under 2,000 kg payload",
  category: "cad-mechanical",
  year: 2024,
  featured: true,
  status: "Completed",
  thumbnail: "/projects/scissor-lift/thumbnail.webp",
  summary: "Parametric CAD assembly designed in SolidWorks...",
  tags: ["SolidWorks", "FEA", "Hydraulics", "DFMA"],
  cadSoftware: ["SolidWorks 2024", "Ansys Mechanical"],
  engineeringProblem: "Describe the mechanical problem...",
  designObjectives: ["Achieve 1.8 m lift height", "Ensure FoS > 2.5"],
  specifications: [
    { label: "Max Load Capacity", value: "2,000", unit: "kg" },
    { label: "Collapsed Height", value: "320", unit: "mm" }
  ],
  assemblyComponents: [
    { itemNumber: 1, partName: "Base Frame Weldment", quantity: 1, material: "ASTM A36 Structural Steel" },
    { itemNumber: 2, partName: "Hydraulic Cylinder (Ø80 mm)", quantity: 2 }
  ],
  technicalImages: [
    {
      url: "/projects/scissor-lift/renders/lift-render-1.webp",
      caption: "Isometric 3D render of scissor mechanism at full extension.",
      alt: "Scissor lift CAD render",
      category: "render"
    },
    {
      url: "/projects/scissor-lift/drawings/scissor-arm-drawing.webp",
      caption: "Dimensioned manufacturing drawing of inner scissor arm.",
      alt: "Scissor arm manufacturing drawing",
      category: "drawing"
    }
  ],
  downloadableFiles: [
    {
      title: "Assembly STEP File",
      fileType: "STEP",
      fileSize: "12.4 MB",
      url: "/projects/scissor-lift/downloads/scissor-lift.step",
      isPublic: true
    }
  ]
}
```
3. Place your images in `public/projects/scissor-lift/renders/`, `drawings/`, etc.
4. Save the file. The new project will automatically appear on the Homepage, Projects catalog, and dynamic detail route (`/projects/hydraulic-scissor-lift-mechanism`)!

---

### 3. How to Add a Certificate
1. Open `src/data/certificates.ts`.
2. Add a new certificate entry:
```typescript
{
  id: "cswp-sheet-metal",
  title: "Certified SolidWorks Professional Advanced — Sheet Metal (CSWPA-SM)",
  issuer: "Dassault Systèmes",
  issueDate: "2024",
  credentialId: "C-CSWPA-SM-12345",
  verificationUrl: "https://www.solidworks.com/verify-placeholder",
  description: "Advanced certification covering bend calculations, flat patterns, and forming tools.",
  category: "cad-design",
  tags: ["SolidWorks", "Sheet Metal", "DFMA"],
  imageUrl: "/certificates/cswpa-sm.webp",
  pdfUrl: "/certificates/cswpa-sm.pdf",
  featured: true
}
```
3. Place your preview image or PDF into `public/certificates/`.

---

## ✉️ Configuring the Functional Contact Form

The contact form is fully functional out of the box with:
- Client-side and server-side validation
- Anti-spam honeypot protection
- Rate-limiting protection

### Development Mode (Default)
When you submit a contact message without configuring an email service, the message is safely received, and its contents are printed to your terminal.

### Production Email Forwarding (via Resend)
To receive messages directly to your real email inbox:
1. Create a free account at [Resend.com](https://resend.com).
2. Generate an API Key (starts with `re_...`).
3. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
4. Edit `.env.local`:
```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_NOTIFICATION_EMAIL=your.real.email@example.com
```
5. Restart your development server (`npm run dev`). Incoming submissions will now be delivered straight to your inbox!

---

## 🌐 Deploying to the Web

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com) (created by the creators of Next.js):
1. Push your code to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Add your environment variables (`RESEND_API_KEY`, `CONTACT_NOTIFICATION_EMAIL`, `NEXT_PUBLIC_SITE_URL`) in the Vercel dashboard.
5. Click **Deploy**. Your portfolio will be live worldwide on a fast CDN!
