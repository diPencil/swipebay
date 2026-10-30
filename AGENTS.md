<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` - verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Swipebay Project Development Guidelines

### 1. Architecture & Framework Integrity
- Preserve the existing Next.js App Router architecture and conventions.
- Maintain existing directory structures, TypeScript typing strictness, and build configurations.
- Do not introduce arbitrary heavy dependencies or alter `package.json` without explicit approval.
- Maintain clean, language-neutral public URLs (`/`, `/about`, `/services`, `/contact`, `/faq`). Never introduce language URL prefixes (`/en`, `/ar`) or query parameters (`?lang=...`).
- Locale resolution must occur server-side and client-side via the persistent `swipebay_locale` cookie and `Accept-Language` headers, accompanied by `Vary: Cookie, Accept-Encoding` cache control.

### 2. Strict Design System Preservation & Visual DNA
The existing SWIPEBAY website design system is the absolute visual foundation for all future development. Every newly created section, page, component, animation, and interaction must feel as though it was originally designed as part of this exact website.

- **Atmosphere & Depth**: Pure black base (`#000000`) with WebGL fluid Plasma background shader (`components/plasma.tsx`) in deep purple (`#8b5cf6`, scale 1.5, opacity 0.4, mouse-interactive).
- **Liquid-Glass Materiality**:
  - `.liquid-glass`: `rgba(0, 0, 0, 0.6)` background, `backdrop-filter: blur(20px) saturate(180%)`, `border: 1px solid rgba(255, 255, 255, 0.15)`, inner glow `inset 0 1px 0 rgba(255, 255, 255, 0.1)`.
  - `.liquid-glass-enhanced`: `rgba(0, 0, 0, 0.7)` background, deeper blur, `border: 1px solid rgba(255, 255, 255, 0.2)`, `shadow: 0 8px 24px rgba(0, 0, 0, 0.25)`.
  - `.liquid-glass-header`: floating pill bar with `rgba(0, 0, 0, 0.4)`, `rounded-full`.
  - Glass hover chromatic aberration: subtle RGB split drop-shadow filter on interactive card borders.
- **Color Palette & Accent Balance**:
  - Primary Action Accent: Vibrant SWIPEBAY Logo Cyan `#49CBDC` / `rgb(73, 203, 220)` (CTAs, key highlights, badges, checkmarks).
  - Intelligence & Infrastructure Accent: Deep violet / purple (`#8b5cf6`, `text-purple-300`, `border-purple-400/40`, `bg-purple-950/40`).
  - Text Hierarchy: `#FFFFFF` for primary titles, `text-neutral-300` / `text-white/80` for body, `text-neutral-400` / `text-neutral-500` for meta labels and deliverable tags.
- **Editorial Typography**: Inter display font for Latin; modern Arabic font stack (`Cairo`, `Noto Sans Arabic`, `Tajawal`, `Almarai`) for RTL. Editorial headlines, uppercase pill badges with tracking.
- **Component Geometry**: Phone cards `rounded-[28px]`, content cards `rounded-2xl` / `rounded-3xl`, buttons/badges `rounded-full`. Container rhythm `max-w-5xl`, `max-w-6xl`, `max-w-7xl`.
- **Motion & Micro-Interactions**: Infinite marquee scroll (`animate-scroll-right`, `animate-scroll-left` 45s) with horizontal gradient masks, smooth hover scale (`hover:scale-[1.02]`), glowing purple/cyan box shadows.

### 3. Creative Expansion & Section Variety
- Expand the established design language creatively; do not introduce unrelated patterns, flat corporate cards, or generic SaaS templates.
- Avoid repetitive three-card grids. Introduce purposeful visual variety through:
  - Creative bento layouts adapted to the liquid-glass system.
  - Asymmetrical and layered glass storytelling blocks.
  - Sticky process journeys and interactive exploration patterns.
  - Distinctive section introductions with strong editorial pacing.
- Internal pages must receive the exact same creative quality as the homepage. Never leave internal pages basic or unstyled.

### 4. Bilingual Support & Strict RTL Visual Parity
- Support both English (LTR) and Arabic (RTL) seamlessly on the exact same clean URLs.
- In Arabic (RTL) mode, ensure strict layout mirroring (directional spacing, flex orders, grids, icons with directional semantics).
- Never flip logos, brand typography, numbers, videos, or photographs during RTL transformation.
- Language style for Arabic must be professional, elegant, and modern standard Arabic suitable for both Egyptian and Gulf audiences without colloquialisms or stiff robotic phrasing.

### 5. Media Asset Handling (Temporary Placeholders)
- Existing images and videos are temporary placeholders.
- Do not delete, replace, hide, or spend time sourcing new media assets during this phase.
- Keep media components and their current functionality intact for later manual replacement by the project owner.
- Do not introduce apology or disclaimer notes in the user interface regarding placeholder media.

### 6. Approved Business Content Reference
- The previous Swipebay website (https://swipebay.net/) serves as the single source of truth for services, pricing structures, company information, and brand messaging.
- Centralized architecture in `lib/brand.ts` and `lib/services.ts`.
- Never introduce unrelated branding (e.g. legacy Swipebay references) or invented business information.

### 7. Mandatory Human-Crafted Content Standards
All Swipebay website content must reflect the editorial quality of a professional creative agency team consisting of a Senior Copywriter, Content Strategist, Content Writer, Creative Director, Art Director, and Arabic Localization Specialist.
- **Authentic Brand Voice**: Distinctive, confident, natural human brand voice.
- **Zero AI-sounding Fluff**: Avoid generic marketing clichés, repetitive sentence structures, and unnecessary buzzwords.
- **No Filler**: No robotic introductions, exaggerated promises, empty superlatives, or filler paragraphs.
- **Purpose-Driven Headlines**: Every headline must communicate a purposeful idea.
- **Credible Service Descriptions**: Specific, persuasive, and relevant to real enterprise needs.
- **Factually Grounded**: Never fabricate achievements, client names, statistics, partnerships, testimonials, or pricing claims.

### 8. Mandatory Design & Quality Gate
Before completing any newly implemented section or page, verify:
1. Does it genuinely look like part of the existing SWIPEBAY website?
2. Does it preserve the original design details (liquid-glass, WebGL plasma, palette, geometry)?
3. Is the section visually distinctive rather than a generic card repeat?
4. Does the copy suit the visual composition?
5. Does the Arabic version mirror the English layout correctly without flipping non-directional assets?
6. Is the experience responsive across mobile, tablet, and desktop without horizontal overflow?
7. Do TypeScript checks (`npx tsc --noEmit`) and production builds (`npm run build`) pass with zero errors?
