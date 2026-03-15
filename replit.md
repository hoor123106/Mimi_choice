# Mimi Choice - Baby Products eCommerce Website

## Overview
A multi-page display-only eCommerce website for "Mimi Choice", a Pakistani baby products brand selling feeders and teats. Built with Next.js App Router.

## Architecture
- **Framework**: Next.js 16 (App Router)
- **Database**: PostgreSQL via Drizzle ORM
- **Styling**: Tailwind CSS v3 + shadcn/ui components
- **State Management**: TanStack Query v5

## Key Decisions
- Display-only catalog — no pricing shown, no Add to Cart
- Terminology: "Teats" (not nipples)
- Contact info: +92 321 2627 1662 / mimichoicee@gmail.com
- Product images served from `/public/products/` (66 JPEG images)
- DB seeded on every server startup via `instrumentation.ts`

## Directory Structure
```
app/                    # Next.js App Router pages
  page.tsx              # Home page
  about/page.tsx        # About Us
  contact/page.tsx      # Contact form
  privacy/page.tsx      # Privacy policy
  products/page.tsx     # All products with filter
  products/[id]/page.tsx# Product detail
  feeders/page.tsx      # Feeders (with subcategory links)
  feeders/wide-neck/    # Wide neck feeders
  feeders/regular/      # Regular feeders
  teats/page.tsx        # Teats
  api/                  # Next.js API routes
    products/route.ts
    products/[id]/route.ts
    contact/route.ts
  globals.css
  layout.tsx
components/
  Navbar.tsx            # Sticky navbar with dropdown
  Footer.tsx
  ProductCard.tsx       # Display-only product card
  Providers.tsx         # QueryClient + TooltipProvider
  ui/                   # shadcn/ui components
hooks/
  use-products.ts
  use-contact.ts
  use-toast.ts
lib/
  db.ts                 # Drizzle + pg pool
  storage.ts            # IStorage interface
  seed.ts               # 34 products seed data
  queryClient.ts        # TanStack Query client
  utils.ts              # cn() utility
shared/
  schema.ts             # Drizzle schema (products, contactMessages)
public/
  logo.png
  products/             # 66 product JPEG images
```

## Running
Workflow "Start application" runs `next dev -p 5000`

## Product Categories
- **Feeders > Wide Neck**: TPR, Snowman series (320ml / 240ml)
- **Feeders > Regular**: Basic, Mug, Animal series (280ml / 150ml)
- **Teats**: Regular and Wide Neck silicone teats
