# Mimi Choice - Baby Products eCommerce Website

## Overview
A multi-page display-only eCommerce website for "Mimi Choice", a Pakistani baby products brand selling feeders and teats. Built with Next.js App Router — fully frontend, no database.

## Architecture
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v3 + shadcn/ui components
- **Data**: Hardcoded static data in `data/products.ts` (no database)

## Key Decisions
- Display-only catalog — no pricing shown, no Add to Cart
- Terminology: "Teats" (not nipples)
- Contact info: +92 321 2627 1662 / mimichoicee@gmail.com
- Product images served from `/public/products/` (66 JPEG images)
- All data is static/hardcoded in `data/products.ts`

## Directory Structure
```
app/                    # Next.js App Router pages
  page.tsx              # Home page
  about/page.tsx        # About Us
  contact/page.tsx      # Contact form (shows toast, no backend)
  privacy/page.tsx      # Privacy policy
  products/page.tsx     # All products with filter
  products/[id]/page.tsx# Product detail
  feeders/page.tsx      # Feeders (with subcategory links)
  feeders/wide-neck/    # Wide neck feeders
  feeders/regular/      # Regular feeders
  teats/page.tsx        # Teats
  globals.css
  layout.tsx
components/
  Navbar.tsx            # Sticky navbar with dropdown
  Footer.tsx
  ProductCard.tsx       # Display-only product card
  Providers.tsx         # TooltipProvider + Toaster
  ui/                   # shadcn/ui components
hooks/
  use-products.ts       # Filters from static data (useMemo)
  use-contact.ts        # Shows toast on form submit
  use-toast.ts
data/
  products.ts           # All 34 hardcoded products + filter helpers
  types.ts              # Contact form zod schema
lib/
  utils.ts              # cn() utility
public/
  logo.png
  products/             # 66 product JPEG images
```

## Running
Workflow "Start application" runs `next dev -p 5000`

## Product Categories
- **Feeders > Wide Neck**: TPR, Snowman, Strawberry, Bear series (320ml / 240ml)
- **Feeders > Regular**: Basic, Mug, Animal, Bear series (280ml / 150ml)
- **Teats**: Regular and Wide Neck silicone teats
