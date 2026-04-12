# Gardevoir TCG Master Tracker

A premium, fully-offline Gardevoir Pokémon TCG master collection tracker. Tracks all ~80+ Gardevoir cards across all languages (EN/JP/DE/FR/IT/ES/PT), with market prices, convention mode, import/export, and full EN/DE UI.

## Features

- **80+ Gardevoir cards** across all eras (EX, DP, BW, XY, SM, SWSH, SV) with prices
- **Multi-language tracking** — EN, JP, DE, FR, IT, ES, PT variants
- **Convention Mode** — fullscreen lightning-fast search by card number
- **Quantity tracking** — mark owned, dupes auto-appear in trade binder
- **Trade Binder** — see all duplicates with combined value
- **Stats view** — completion %, collection value, missing value, by-era breakdown
- **Import/Export** — JSON backup/restore for cross-device sync
- **Light/Dark mode** — seamless toggle
- **EN/DE UI** — full German localization
- **100% offline** — everything in localStorage, no backend needed
- **Vercel Free** compatible — static Next.js build

## Deploy to Vercel (5 minutes)

### Option A: GitHub + Vercel (Recommended)

1. Push this folder to a new GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Vercel auto-detects Next.js — click **Deploy**
4. Done. Your URL is live in ~60 seconds.

### Option B: Vercel CLI

```bash
npm install -g vercel
cd gardevoir-tracker
vercel --prod
```

### Option C: Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Card Database

The card database is in `src/lib/cardDatabase.ts`. It includes:

- All major English, Japanese, German print runs
- Promo, Secret Rare, Trainer Gallery, Classic Collection variants
- Market prices sourced from TCGPlayer/Pokescreener (April 2026)
- `artworkGroup` field for cross-language ownership linking

### Adding Cards

Add entries to the `CARD_DATABASE` array in `src/lib/cardDatabase.ts`:

```ts
{
  id: 'unique-id',
  name: 'Gardevoir ex',
  set: 'Set Name',
  setCode: 'CODE',
  number: '086/198',
  language: 'EN',
  rarity: 'Double Rare',
  price: 4.00,
  era: 'SV',
  artworkGroup: 'group-id', // same as other language prints of same art
  releaseYear: 2023,
}
```

## Tech Stack

- **Next.js 14** (App Router, static export)
- **React 18** with hooks
- **Framer Motion** for all animations
- **Phosphor Icons**
- **Tailwind CSS v3**
- **localStorage** for persistence
- **No database, no backend, no paid tier needed**

## Architecture

```
src/
  app/
    layout.tsx       # Root layout, AppProvider
    page.tsx         # Entry point → MainApp
    globals.css      # Design tokens (CSS vars), Satoshi font
  components/
    MainApp.tsx      # View router with AnimatePresence
    Navbar.tsx       # Desktop + mobile nav, import/export
    DatabaseView.tsx # Main card browser with filters + grouping
    CardItem.tsx     # Individual card component
    StatsView.tsx    # Collection stats + charts
    TradeView.tsx    # Duplicate binder
    ConventionOverlay.tsx  # Fullscreen fast-search
  lib/
    cardDatabase.ts  # All 80+ Gardevoir cards + helpers
    i18n.ts          # EN/DE translations
    store.tsx        # Global state with localStorage sync
```
