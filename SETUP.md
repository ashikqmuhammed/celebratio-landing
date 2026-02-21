# Celebratio Landing Page - Setup Guide

## Quick Start

```bash
cd celebratio-landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
celebratio-landing/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── navigation.tsx      # Fixed header navigation
│   ├── hero.tsx            # Hero section with animations
│   ├── features.tsx        # Three-column features grid
│   ├── crm-section.tsx     # CRM detailed section
│   ├── website-builder-section.tsx  # Website builder section
│   ├── marketplace-section.tsx      # Marketplace section
│   ├── pricing-section.tsx          # Pricing tiers
│   ├── testimonials-section.tsx     # Customer testimonials
│   ├── cta-section.tsx             # Final call-to-action
│   └── footer.tsx                   # Footer with links
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── tailwind.config.ts      # Tailwind with design tokens
```

## Design System

All components use the Celebratio design tokens:

### Colors

- Purple: `brand-purple-{50-900}`
- Pink: `brand-pink-{50-900}`
- Orange: `brand-orange-{50-900}`
- Blue: `brand-blue-{50-900}`

### Spacing

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

### Border Radius

- sm: 4px
- md: 8px
- lg: 12px
- xl: 16px
- 2xl: 24px
- 3xl: 32px

### Typography

- Body: Inter
- Display: Manrope

## Animations

All animations use Framer Motion and respect `prefers-reduced-motion`:

- Hero: Gradient orbs, staggered entrance
- Features: Scroll-triggered fade-in
- Sections: Viewport-based animations
- CTA: Animated background orbs
- Navigation: Mobile menu slide

## Mobile Optimization

- Mobile-first responsive design
- Touch-friendly tap targets (min 44x44px)
- Optimized animations for mid-range devices
- No heavy GPU effects on mobile
- Smooth 60fps animations

## Performance

- Next.js 15 with App Router
- Automatic code splitting
- Optimized font loading (swap strategy)
- Lazy-loaded animations (viewport triggers)
- Minimal JavaScript bundle

## Customization

### Update Colors

Edit `tailwind.config.ts` to modify brand colors.

### Add Sections

Create new components in `components/` and import in `app/page.tsx`.

### Modify Content

Edit component files directly - all content is inline for easy customization.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The landing page is ready to deploy to:

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)
