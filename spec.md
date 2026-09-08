# Online Resume System — Technical Specification

## 1. Overview

A static, single-page-style portfolio/resume website built with vanilla HTML, CSS, and JavaScript. Resume data is stored in a single JS file (`data/resume.js`) and rendered dynamically into the DOM at page load, replacing the need for a backend or database. The site is deployed via GitHub Pages.

**Author:** Kiyoraka Ken — Kiyo Software Tech Lab

---

## 2. Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Markup     | HTML5                                   |
| Styling    | Vanilla CSS (CSS custom properties)     |
| Scripting  | Vanilla ES5/ES6 JavaScript (no bundler) |
| Data       | Plain JS object (`resumeData`)          |
| PDF        | Embedded via `<object>` tag; browser print for export |
| Hosting    | GitHub Pages (static)                   |
| Versioning | Git                                     |

No build step, no framework, no package manager.

---

## 3. Project Structure

```
├── index.html                      # Landing / home page
├── resume.html                     # Resume page (embedded PDF viewer)
├── Izzun_Mustaqim_Resume.pdf       # PDF resume (resume page)
├── Muhammad_Izzun_Mustaqim_Resume.pdf  # PDF resume (download)
├── assets/
│   ├── css/
│   │   ├── base.css                # Reset, CSS variables, typography, utility classes
│   │   ├── landing.css             # Navbar, hero, stats, summary, contact, footer, sidebar
│   │   ├── resume.css              # Resume page layout & typography
│   │   └── print.css               # Print stylesheet (A4, ATS-friendly)
│   ├── images/
│   │   ├── izzun_white.png         # Hero / profile image (logo variant)
│   │   └── profile_1767195104.jpg  # Profile photo
│   └── js/
│       └── main.js                 # Sidebar nav, smooth scroll, scroll effects, utilities
├── data/
│   └── resume.js                   # Single data source for all resume content
├── README.md
└── spec.md
```

---

## 4. Pages

### 4.1 Landing Page (`index.html`)

Sections rendered top-to-bottom:

| Section       | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| **Navbar**    | Fixed top bar with brand name, nav links (Home, Resume, Contact), hamburger (mobile) |
| **Hero**      | Profile image, full name, job title, "View Resume" and "Download PDF" buttons. The Download PDF button uses an inline style referencing undefined CSS variables (`--primary-color`, `--text-color`), resulting in a transparent background with a `1px solid` border via the `var(--primary)` fallback. |
| **Stats**     | Two-row stat counters: Work Experience, Education, Skills, Certifications, Projects. Counts are computed dynamically from array lengths; a "+" suffix is appended to Work Experience (if >1) and Skills (if >5). |
| **Summary**   | Professional summary paragraph                                             |
| **Contact**   | Phone (clickable `tel:`), Location, Email (clickable `mailto:`), GitHub     |
| **Footer**    | Copyright with dynamic year and name                                        |

All text content is populated from `resumeData.profile` and other arrays in `data/resume.js`.

### 4.2 Resume Page (`resume.html`)

| Component       | Description                                                             |
|-----------------|-------------------------------------------------------------------------|
| **Navbar**      | Same as landing page with "Resume" link active                         |
| **Action Bar**  | "Back" button (→ `index.html`) and "Download PDF" button               |
| **PDF Viewer**  | `<object>` tag embedding `Izzun_Mustaqim_Resume.pdf` at 80vh height    |
| **Footer**      | Same as landing page                                                   |

On mobile the PDF viewer height reduces to 60vh.

---

## 5. Navigation

### 5.1 Desktop Navbar
- Fixed position at top, cobalt blue (`#0047AB`) background.
- Brand name on left; nav links (Home, Resume, Contact) on right.
- Active page indicated by `.active` class.
- Gains a deeper box-shadow on scroll (>100px).

### 5.2 Mobile Sidebar
- Triggered by hamburger button (visible only at ≤768px).
- Implemented via JS injection in `main.js` — sidebar HTML is dynamically inserted as the first child of `<body>`.
- Slides in from the left (280px wide) with overlay backdrop.
- Contains: close button, nav links (Home, Resume, Contact), "Download PDF" button.
- Closes on: close button click, overlay click, link click, Escape key, or swipe-left gesture (>80px).
- **Focus trap** keeps keyboard focus within sidebar while open.
- **Auto-closes** if viewport expands beyond 768px.
- `aria-modal="true"` and `role="dialog"` attributes for accessibility.

### 5.3 Smooth Scrolling
- All anchor links (e.g., `#contact`) use smooth scroll with offset for the fixed navbar height.

---

## 6. Data Model (`data/resume.js`)

All resume content lives in a single global `resumeData` object.

### 6.1 Schema

```js
resumeData = {
    profile: {
        full_name: string,
        job_title: string,
        email: string,
        phone: string,
        location: string,
        linkedin_url: string,
        website_url: string,
        portfolio_url: string,
        profile_image: string,      // path to image
        summary: string
    },

    skills: [
        {
            skill_name: string,
            category: string,        // one of 6 categories (see below)
            proficiency_level: string // "Expert" | "Advanced" | "Intermediate"
        }
    ],

    experiences: [
        {
            company_name: string,
            job_title: string,
            location: string,
            start_date: string,      // "YYYY-MM-DD" or "YYYY"
            end_date: string | null,
            is_current: boolean,
            description: string      // "- " prefixed lines for bullet points
        }
    ],

    education: [
        {
            institution: string,
            degree: string,
            field_of_study: string,
            location: string,
            start_date: string,
            end_date: string
        }
    ],

    certifications: [
        {
            cert_name: string,
            issuing_org: string,
            issue_date: string
        }
    ],

    projects: [
        {
            project_name: string,
            description: string,
            technologies_used: string,
            project_url: string,
            start_date: string,
            end_date: string
        }
    ],

    references: [
        {
            name: string,
            title: string,
            organization: string,
            phone: string
        }
    ]
}
```

**Skill categories** (6 total): Programming Languages, Frameworks & Libraries, AI & Machine Learning, Databases, DevOps & Cloud, Tools & Platforms.

> **Note:** `resumeData.references` exists in the data file but is not currently rendered on any page.

### 6.2 Utility Functions (defined in `resume.js`)

| Function         | Purpose                                                  |
|------------------|----------------------------------------------------------|
| `formatDate()`   | Converts date string to `"Mon YYYY"` format; passes year-only strings through |
| `formatDateRange()` | Builds `"Mon YYYY - Mon YYYY"` or `"Mon YYYY - Present"` |
| `escapeHtml()`   | XSS prevention — escapes HTML special characters         |
| `parseDescription()` | Converts `"- "` prefixed lines into `<ul><li>` HTML. **Note:** Currently unused — the landing page inline script uses `escapeHtml()` with a simpler `\n` → `<br>` replacement instead. |

---

## 7. JavaScript (`assets/js/main.js`)

Loaded after `data/resume.js` on both pages. Key behaviors:

| Feature                  | Description                                                              |
|--------------------------|--------------------------------------------------------------------------|
| **Sidebar Init**         | IIFE that builds and injects sidebar HTML, binds all event listeners     |
| **Sidebar Focus Trap**   | Tab cycling trapped within sidebar elements while open                   |
| **Swipe to Close**       | Touch gesture: horizontal left swipe >80px closes sidebar               |
| **Resize Handler**       | Auto-closes sidebar if viewport exceeds 768px                           |
| **Smooth Scroll**        | Intercepts anchor clicks, calculates navbar offset, scrolls smoothly    |
| **Navbar Scroll Effect** | Toggles box-shadow depth based on scroll position                       |
| **Console Easter Egg**   | ASCII art banner printed to browser console                             |
| **Form Validation**      | `validateForm()` helper for required fields                             |
| **Alert Auto-Dismiss**   | Alerts fade out after 5 seconds                                         |
| **Confirm Delete**       | `[data-confirm]` attribute triggers `confirm()` dialog                 |

### 7.1 Landing Page Inline Script

Runs on `DOMContentLoaded` in `index.html`:
- Updates `<title>`, meta description, navbar name, hero name/title, hero image.
- Computes stat counts from array lengths.
- Populates contact info with `tel:`, `mailto:` links.
- Hides contact items if data is missing.
- Sets footer copyright year dynamically.

---

## 8. CSS Architecture

### 8.1 Theme

- **Primary color:** Cobalt Blue `#0047AB`
- **Font:** Segoe UI / Tahoma / Geneva / Verdana, sans-serif
- **Breakpoint:** 768px (tablet/mobile), 480px (small mobile)

### 8.2 Custom Properties (`base.css`)

Extensive CSS variable system covering:

| Category        | Examples                                                          |
|-----------------|-------------------------------------------------------------------|
| Colors          | `--primary`, `--gray-50` through `--gray-900`, `--success`, `--danger`, `--info`, `--warning` |
| Typography      | `--font-family`, `--font-family-mono`, sizes `--text-xs` to `--text-5xl`, weights |
| Spacing         | `--space-1` (4px) to `--space-20` (80px)                         |
| Border Radius   | `--rounded-sm` to `--rounded-full`                                |
| Shadows         | `--shadow-sm` to `--shadow-xl`                                    |
| Transitions     | `--transition-fast` (150ms), `--transition-normal` (300ms), `--transition-slow` (500ms) |
| Z-Index         | `--z-dropdown` (1000) through `--z-tooltip` (1060)                |

### 8.3 CSS Files

| File           | Responsibility                                                          |
|----------------|-------------------------------------------------------------------------|
| `base.css`     | CSS reset, variables, typography, utility classes (flex, spacing, color, display), base components (container, card, btn, form, alert, table, badge), mobile base |
| `landing.css`  | Navbar, hamburger, hero, stats, summary, contact, footer, sidebar, mobile overrides |
| `resume.css`   | Resume page layout, resume document styling, entry/header/subtitle styles, skills grid, certs, projects, mobile overrides. Contains full ATS-friendly resume rendering styles (`.resume`, `.resume-header`, `.resume-section`, `.resume-entry`, `.resume-skills`, `.resume-cert`, `.resume-project`, etc.) that are currently unused since the resume page only embeds a PDF. |
| `print.css`    | `@media print` — A4 page setup, hide nav/footer/actions, ATS-friendly typography, page-break avoidance, single-column skills |

### 8.4 Utility Classes

`base.css` provides a Tailwind-like utility class system:
- **Text:** `.text-primary`, `.text-white`, `.text-center`, `.font-bold`, etc.
- **Background:** `.bg-primary`, `.bg-white`, `.bg-gray`
- **Layout:** `.flex`, `.grid`, `.hidden`, `.block`, `.items-center`, `.justify-between`, `.flex-wrap`
- **Spacing:** `.m-auto`, `.mt-4`, `.mb-6`, `.p-4`, `.px-6`, `.py-4`, `.gap-3`
- **Sizing:** `.w-full`, `.h-full`, `.min-h-screen`
- **Misc:** `.rounded-lg`, `.shadow-md`

---

## 9. Responsive Design

### Breakpoints

| Breakpoint     | Behavior                                                               |
|----------------|------------------------------------------------------------------------|
| > 768px        | Desktop: full navbar visible, sidebar hidden, standard layouts         |
| ≤ 768px        | Mobile: hamburger visible, sidebar nav, stacked hero buttons, reduced font sizes, column contact items, 60vh PDF viewer |
| ≤ 480px        | Small mobile: further reduced navbar brand size, smaller hero name, wrapped stat items |

Key responsive behaviors:
- Hero buttons stack vertically on mobile.
- Stats rows use flex-wrap with reduced gaps.
- Contact items go full-width in a column layout.
- Resume entry headers stack vertically.
- Skills grid goes single-column.
- Resume actions center-align.
- Base font size drops from 16px to 14px on mobile.

---

## 10. Print / PDF Export

`print.css` (`@media print`) ensures ATS-friendly output:
- **Page:** A4 size, 15mm margins.
- **Hidden elements:** Navbar, footer, resume actions, sidebar, buttons, SVGs.
- **Typography:** Fixed pt sizes (name 18pt, body 9pt, section titles 11pt).
- **Layout:** Single-column skills, no shadows/borders/backgrounds.
- **Page breaks:** Avoided inside `.resume-entry` and `.resume-section`; avoid after headings.
- All colors forced to `#000`; all backgrounds forced to transparent.

---

## 11. Accessibility

| Feature                    | Implementation                                                    |
|----------------------------|-------------------------------------------------------------------|
| **Semantic HTML**          | `<nav>`, `<main>`, `<section>`, `<footer>`, `<a>`, `<button>`   |
| **ARIA attributes**        | `aria-label` on hamburger, `aria-modal="true"` and `role="dialog"` on sidebar |
| **Focus management**       | Sidebar traps Tab key; close button receives focus on open; previous focus restored on close |
| **Keyboard support**       | Escape key closes sidebar; all interactive elements are keyboard-focusable |
| **Alt text**               | Hero image uses `alt` attribute with full name                    |
| **Color contrast**         | Cobalt blue on white; white text on blue backgrounds              |
| **Skip links**             | Not implemented (candidate for future improvement)               |

---

## 12. Data Flow

```
data/resume.js (global `resumeData`)
        │
        ├──► index.html inline <script> ─── DOMContentLoaded ──► Populate DOM elements
        │
        ├──► resume.html (loads resume.js but no inline rendering; data used only by main.js sidebar)
        │
assets/js/main.js ───────────── Sidebar init (on both pages), smooth scroll, scroll effects
```

- **No AJAX/fetch calls.** All data is inline.
- **No build step.** Files are served as-is.
- **No client-side routing.** Multi-page navigation via `<a>` links.

---

## 13. Deployment

- **Platform:** GitHub Pages (static hosting).
- **Build:** None required — open `index.html` or serve with any static server.
- **Local dev:**
  ```bash
  python -m http.server 8000
  # or
  npx serve .
  ```

---

## 14. Known Limitations & Future Considerations

| Area                  | Note                                                                  |
|-----------------------|-----------------------------------------------------------------------|
| No dynamic resume page | `resume.html` currently only embeds a PDF; the CSS for a fully-rendered HTML resume exists but is unused |
| No form backend       | Contact section is display-only (no contact form)                     |
| No dark mode          | Single light theme only                                               |
| No i18n               | English-only                                                          |
| No analytics          | No tracking scripts included                                          |
| No service worker     | No offline/PWA support                                                |
| No meta OG tags       | Missing Open Graph / Twitter Card meta for social sharing            |
| No sitemap.xml        | Not present                                                           |
| References unused     | `resumeData.references` exists but is not rendered on any page        |
| Undefined CSS vars    | Hero Download PDF button uses inline style with `var(--primary-color)` and `var(--text-color)`, which are undefined in the CSS; the button renders correctly only because the `1px solid` border inherits from the parent's `var(--primary)` |
| `hero-btn-secondary` class | Used in `index.html` inline style but not defined in any CSS file; visual styling relies entirely on the inline `style` attribute |
