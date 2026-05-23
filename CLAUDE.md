@AGENTS.md

```markdown
# CLAUDE.md - TimeWell Care Services Website

## Project Overview

Build a professional, global-standard website for TimeWell Care Services, a UK-based home care provider. The website must be compassionate, trustworthy, and accessible, reflecting the dignity and quality of their care services.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Icons:** lucide-react (no emojis anywhere)
- **Language:** TypeScript
- **Deployment:** Vercel or Netlify ready

## Color System

Create a global color configuration in Tailwind config.

**Primary Colors:**
- Primary Blue: `#38AADD`
- Primary Green: `#8DC64C`

**Requirements:**
- Generate a complete color variant system from these two base colors
- Include: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 variants for each
- Create semantic color tokens: primary, secondary, accent, success, etc.
- All colors must be maintainable from ONE central configuration file
- Ensure proper contrast ratios for accessibility (WCAG 2.1 AA minimum)

**Example color structure:**

```css
primary-50: #eef8fe
primary-100: #d4eefc
primary-500: #38AADD
primary-700: #2a88b0
secondary-50: #f2f9e8
secondary-500: #8DC64C
secondary-700: #6e9e3a
```

## Pages to Build (6 Pages + Form Submissions)

Based on the sample text document provided:

1. **Home** - Hero, why choose us, services preview, testimonials, CTA
2. **About** - Company story, mission, vision, core values, commitment
3. **Services** - Home Care, Supported Living, Companionship (detailed)
4. **Free Care Assessment** - Form page with inquiry form
5. **Careers** - Available roles, why join, application instructions
6. **Contact** - Contact details, request care form, complaints link

## Forms Required

Build ALL forms with proper validation and email submission capability.

**Form 1: Free Care Assessment**

- Full Name (required)
- Phone Number (required)
- Email Address (required)
- Who needs care? (radio: Myself / Family Member / Friend)
- Type of care needed (radio: Home Care / Supported Living / Companionship)
- When is care needed? (radio: Immediately / Within 1-2 weeks / Within 1 month)
- Brief description of care needs (textarea)

**Form 2: Request Care (on Contact page)**

- Name (required)
- Email (required)
- Phone Number (required)
- Type of Care Needed (dropdown or radio)
- Message (textarea)

**Form 3: Career Application**

- Name (required)
- Email (required)
- Phone (required)
- Role applying for (dropdown)
- Upload CV / Message (textarea)

**Form requirements:**

- Client-side validation
- Proper error messages
- Success state with confirmation message
- Prepare for backend integration (API endpoints ready)
- Multi-email routing capability (up to 20 inboxes - configure via environment variables)

## Images

**Do NOT use local placeholder images.** Use online image URLs from reliable sources (Unsplash, Pexels, or placeholder services).

Use these types of images:
based on the attached components, and you can also imporvise

## Component Library Requirements

Build a reusable component system:

**Global Components:**

- Header (responsive, mobile menu)
- Footer (with links, contact info, copyright)
- Button (variants: primary, secondary, outline, ghost)
- wrapper for header and footer (max-width, responsive padding)
- Section (with consistent spacing)


you can add more to the card, including the props (if neccessary)
**Card Components:**

- ServiceCard (icon, title, description, link)
- ValueCard (icon, title, description)
- TeamMemberCard (image, name, role)
- TestimonialCard (quote, name, role, rating optional)

**Form Components:**

- Input (with label, error state)
- Textarea (with label, error state)
- RadioGroup (with label, options)
- Select (with label, options)

**Layout Components:**

- Hero (title, subtitle, CTA buttons, optional background image)
- FeaturesGrid (3-4 column grid for values/services)
- TwoColumnLayout (text + image side by side)

## Typography System

Define in Tailwind config:

**Headings:** Font weights, sizes, line heights

- h1: 48px/3rem (desktop), 36px (mobile)
- h2: 36px/2.25rem (desktop), 28px (mobile)
- h3: 24px/1.5rem
- h4: 20px/1.25rem

**Body:**

- Base: 16px/1rem, line-height 1.6
- Small: 14px
- Large: 18px

**Font family:** System fonts (Inter, or similar clean sans-serif)

## Responsive Requirements


- Test on: mobile (375px), tablet (768px), desktop (1280px)
- Mobile menu for navigation on screens below 768px
- Touch-friendly buttons and form elements (minimum 44x44px tap targets)

## Accessibility (Global Standard)

- Semantic HTML (header, nav, main, section, footer, form)
- ARIA labels where needed
- Keyboard navigation support
- Focus states visible on all interactive elements
- Alt text for all images
- Proper heading hierarchy (h1 only once per page)
- Color contrast ratio minimum 4.5:1 for normal text

## Performance Requirements

- Next.js Image component for all images (optimization)
- Lazy load below-the-fold images
- Font optimization (next/font)
- No unnecessary JavaScript on client
- Target Lighthouse scores: 90+ for Performance, Accessibility, SEO, Best Practices

## Code Structure

```

├── app/
│   ├── layout.tsx
│   ├── page.tsx (home)
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── assessment/
│   │   └── page.tsx
│   ├── careers/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/
│   │    └── contact/
│   │        └── route.ts
│   │── components/
│   ├   ├─ layout/
│   │   ├──── Header.tsx
│   │   ├──── Footer.tsx
│   │   └──── index.tsx //wrapper
│   ├   ├──ui/       //add more ui components
│   │   ├──── Button.tsx
│   │   ├──── Input.tsx
│   │   ├──── Textarea.tsx
│   │   └──── RadioGroup.tsx 
│   │   ├──sections/
│   │   ├──── Hero.tsx
│   │   ├──── ServicesSection.tsx
│   │   ├──── ValuesSection.tsx
│   │   └──── TestimonialsSection.tsx
│   │   ├─ cards/          //add more if needed
│       ├──── ServiceCard.tsx
│       └──── ValueCard.tsx
├── config/
│   └── site.ts (site metadata, contact info)
├── hooks/
│   └── useFormSubmit.ts
├── utils/
│   └── validation.ts
└── styles/
    └── globals.css
```
also create typs.ts page

## Content to Use

Use the provided "SAMPLE WEBSITE TEXT xx.docx" file for ALL copy. Do not invent new content. Extract:

- Home page hero and sections
- About page mission, vision, values
- Services page descriptions
- Contact details (phone, email - leave placeholders as `[PHONE]`, `[EMAIL]`)
- Footer text

**Placeholders to include:**

- Phone: `+44 [INSERT PHONE NUMBER]`
- Email: `info@timewellcareservices.co.uk`
- Address: Haringey, London, United Kingdom

## Icons (lucide-react - NO EMOJIS)

Required icons throughout the site:

- Phone, Mail, MapPin, Clock
- Check, ArrowRight, Menu, X
- Heart, Shield, Users, Award
- Home, Building, Coffee, MessageCircle (WhatsApp)
- Send, Upload (for careers)
- Star (for testimonials)

## Special Requirements from Contract

1. **No proprietary lock-in** - Build with standard Next.js, no visual builders
2. **WhatsApp integration** - Add a floating WhatsApp button or contact section
3. **SEO ready** - Meta tags, Open Graph, structured data for local business
4. **Analytics ready** - Prepare for Google Analytics (environment variable)
5. **GitHub ready** - Clean, documented code

## Build Instructions for Claude

1. Start with the global color configuration first
2. Build the layout components (Header, Footer, Container)
3. Create all UI components (Button, Input, etc.)
4. Build each page sequentially using the sample text content
5. Implement all forms with validation
6. Add API routes for form submissions
7. Optimize images and performance
8. Test responsiveness across all breakpoints

## Quality Standards

- No placeholder text like "lorem ipsum"
- No console errors or warnings
- No emojis anywhere - use lucide-react icons only
- Clean, few comments, maintainable code
- TypeScript interfaces for all props and data structures
- Proper error boundaries for form submissions

## Delivery Checklist

- All 6 pages built and routed correctly
- Color system with variants from #38AADD and #8DC64C
- All forms functional with validation
- lucide-react icons throughout (zero emojis)
- Fully responsive (mobile, tablet, desktop)
- Images from online URLs (replaceable by user)
- WhatsApp integration present
- No proprietary restrictions
- README with setup and deployment instructions
```