---
name: Al-Salam Scouting Groups (SSG)
description: The Living Impact Report
colors:
  green-900: "#14532D"
  green-800: "#166534"
  green-700: "#15803D"
  green-600: "#16A34A"
  green-500: "#22C55E"
  green-400: "#4ADE80"
  green-300: "#86EFAC"
  emerald-500: "#10B981"
  emerald-400: "#34D399"
  gold-600: "#CA8A04"
  gold-500: "#EAB308"
  gold-400: "#FACC15"
  gold-300: "#FDE047"
  bg-primary: "#0F172A"
  bg-secondary: "#1E293B"
  bg-tertiary: "#334155"
  bg-deep: "#0B1120"
  text-primary: "#FAF7F2"
typography:
  display:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontWeight: 800
    lineHeight: 0.95
  headline:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontWeight: 700
  title:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontWeight: 600
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontWeight: 600
    letterSpacing: "0.2em"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.75rem"
  xl: "1rem"
  2xl: "1.5rem"
  full: "9999px"
spacing:
  4: "1rem"
  8: "2rem"
  12: "3rem"
  16: "4rem"
  20: "5rem"
  24: "6rem"
  32: "8rem"
components:
  cta-button:
    rounded: "{rounded.full}"
  glass-card:
    backgroundColor: "rgba(15, 23, 42, 0.3)"
    rounded: "{rounded.xl}"
---

# Design System: Al-Salam Scouting Groups (SSG)

## 1. Overview

**Creative North Star: "The Living Impact Report"**

A premium blend of documentary storytelling, annual-report credibility, and modern organizational presentation. The experience is trustworthy, inspiring, human-centered, and professionally crafted. It creates an immersive and emotional journey while maintaining credibility and clarity. The aesthetic draws from National Geographic storytelling and premium foundation websites, explicitly rejecting SaaS dashboard aesthetics, startup clichés, and generic corporate templates.

**Key Characteristics:**
- Deep, immersive storytelling spaces using dark navy backgrounds (`--bg-primary`).
- Restrained accent use; green and gold are used sparingly for hierarchy and emphasis rather than decoration.
- Real people over visual effects; clarity before decoration.
- Glass effects and glows are used sparingly and only where they add value.

## 2. Colors

The SSG brand colors form the primary foundation, using rich navy-darks for depth and emerald/gold for calculated emphasis.

### Primary
- **Emerald Green** (`#22C55E`): Core brand action color, used sparingly to create hierarchy.
- **SSG Gold** (`#EAB308`): Premium accent color, used for badges, highlights, and secondary emphasis.

### Neutral
- **Navy Dark** (`#0F172A`): The dominant backdrop, providing documentary-style depth.
- **Deep Slate** (`#1E293B`): Elevated surfaces and cards.
- **Warm Cream** (`#FAF7F2`): Primary text color, avoiding harsh pure white to maintain an organic feel.

### Named Rules
**The Accent Hierarchy Rule.** Accent colors (green and gold) must be used sparingly to create hierarchy and emphasis, never as pure decoration.

## 3. Typography

**Display Font:** Manrope (with system-ui fallback)
**Body Font:** Inter (with system-ui fallback)

**Character:** Confident, clean, and highly readable. Manrope provides structural authority for headings, while Inter ensures maximum legibility for long-form impact reports.

### Hierarchy
- **Display** (800, `clamp(3rem, 8vw, 7rem)`, 0.95): Massive hero headlines that anchor the documentary feel.
- **Headline** (700, `2.25rem`, 1.1): Major section titles introducing new narrative arcs.
- **Title** (600, `1.5rem`, 1.2): Card titles and feature highlights.
- **Body** (400, `1rem`, 1.6): Narrative text. Maximum line length capped to ensure reading comfort.
- **Label** (600, `0.75rem`, 0.2em, uppercase): Structural kickers and navigational cues.

## 4. Elevation

Depth should come primarily from photography, composition, typography, spacing, and layering. Glass effects and glow effects are used sparingly and only where they add value.

### Shadow Vocabulary
- **Ambient Glows** (`box-shadow: 0 0 30px rgba(34, 197, 94, 0.12)`): Used extremely sparingly behind primary focus elements to create atmospheric depth.
- **Structural Elevation** (`box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2)`): Used on floating headers or overlapping cards to maintain readability against imagery.

### Named Rules
**The Content First Rule.** Real experiences and real people take visual precedence over abstract graphics or elevation effects.

## 5. Components

Confident, clean, and highly readable. Every component communicates trust, professionalism, and impact.

### CTA Buttons
- **Shape:** Fully rounded (9999px).
- **Primary:** Gradient backgrounds or solid emerald, high contrast text.
- **Hover / Focus:** Smooth glow expansions and micro-lifts.

### Cards / Containers (Glass-cards)
- **Corner Style:** Extra Large (1.5rem).
- **Background:** Semi-transparent Navy-Dark with subtle backdrop blur.
- **Border:** Delicate, faint borders to establish edges without heavy lines.
- **Internal Padding:** Generous spacing to maintain an airy, premium feel.

## 6. Do's and Don'ts

### Do:
- **Do** show impact before asking for partnership.
- **Do** rely on visual storytelling ("Show, don't tell").
- **Do** prioritize real people, real experiences, and real stories.
- **Do** focus on premium craftsmanship and attention to detail.

### Don't:
- **Don't** use SaaS dashboard aesthetics.
- **Don't** rely on startup landing page clichés.
- **Don't** use generic corporate templates or stock-photo-heavy designs.
- **Don't** use excessive gradients or flashy effects that distract from the human story.
