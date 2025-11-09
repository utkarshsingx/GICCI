<p align="center">
  <strong>Import–Export Community Web Platform</strong><br />
  Prepared for Jagadeesh Private Limited · Aligned with FICCI / CII / ASSOCHAM frameworks and the RAMP initiative
</p>

---

## Overview

This repository contains the frontend implementation of the Import–Export Community Web Platform. The experience blends public-facing trade facilitation content with member-only workspaces, modelled on institutional guidance from FICCI, CII, ASSOCHAM, and the Government of India’s RAMP programme.

The build uses **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, and is structured with mock data hooks so backend integrations can be layered in incrementally.

---

## Project Setup

```bash
# install dependencies
npm install

# run development server
npm run dev

# lint checks
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) after running `npm run dev`.

---

## Public Site Navigation

| Route        | Purpose                                                                                                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`          | Home overview with hero mission, featured members, policy highlights, sector councils, events, alliances, market insights, prime membership overview, and contact support. |
| `/about`     | Platform objectives, strategic partnerships, advisory council, milestones, prime membership recap.                                                                         |
| `/policy`    | Policy advocacy hub with advisories, MSME feedback intake, and events relevant to policy agendas.                                                                          |
| `/sectors`   | Sector council grid, matchmaking snapshot, capacity-building resources.                                                                                                    |
| `/events`    | Events & delegations showcase with global alliances and prime membership CTA.                                                                                              |
| `/alliances` | Embassy desks, trade chambers, and strategic partner directory with contact pathways.                                                                                      |
| `/knowledge` | Knowledge & capacity-building resources, policy snippets, platform milestones.                                                                                             |
| `/market`    | Market intelligence, HS-code lookup panel, matchmaking insights, and events feed.                                                                                          |
| `/contact`   | Helpdesk channels plus enquiry form connected to trade facilitation desks.                                                                                                 |

Each route pulls from mock JSON fixtures located in `src/mocks/data.ts`, simulating future API responses.

---

## Member & Admin Navigation

| Route        | Module                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/login`     | Trade login form with KYC reminder and onboarding steps.                                                                                                                                                                                                                                                                                                                                     |
| `/join`      | Prime membership application form capturing UDYAM/IEC, sector focus, and trade priorities.                                                                                                                                                                                                                                                                                                   |
| `/dashboard` | Unified member/admin workspace. Modules include:<br />- Trade profile overview<br />- Product & trade listings manager<br />- Buyer–seller engagement communications<br />- Compliance & certification centre<br />- User registration & KYC tracker<br />- Administrative member registry and event operations<br />- Reports dashboard & finance tracker<br />- Policy cell feedback queue |

> Note: These modules currently read from mock data to illustrate frontend behaviour. Replace with live API calls when backend endpoints are available.

---

## Feature Matrix

- **Public Experience**
  - Mission-driven home page with institutional tone.
  - Policy advocacy, knowledge, sector, and events microsites.
  - Market intelligence previews and global alliance rollups.
  - Contact/helpdesk with contextual desks and enquiry form.

- **Registered Member Modules**
  - Trade profile management and Prime membership status.
  - Product listings with HS codes, compliance tags, and target markets.
  - Buyer–seller engagement threads with negotiation stages.
  - Compliance centre for ISO/ESG documentation tracking.
  - Onboarding/KYC tracker with tasks, timeline, and document statuses.

- **Administrative Modules**
  - Member registry and event publishing controls.
  - Analytics snapshot (traffic, engagements, conversions, policy processing).
  - Finance ledger for Prime billing and renewals.
  - Policy cell queue for MSME feedback triage and escalation.

---

## Folder Structure Highlights

```
src/
  app/
    (routes)
    dashboard/page.tsx        // Member & admin workspace
    login/page.tsx            // Trade login module
    join/page.tsx             // Prime application form
  components/
    layout/                   // Shell, headers, footers, ribbons
    modules/
      admin/                  // Admin panel, reports, policy cell components
      dashboard/              // Trade profile, listings, communications, compliance
      onboarding/             // KYC and onboarding module
  mocks/data.ts               // Mock datasets for all modules
  types/entities.ts           // Shared TypeScript interfaces
```

---

## Implementation Notes

- Styling is handled with Tailwind CSS, extended in `tailwind.config.ts` with domain-specific color tokens, shadows, and gradients.
- Fonts: Inter (body) and Merriweather (display) via `next/font`.
- Layout primitives (`SiteLayout`, `PageHero`, `Header`, `Footer`) ensure consistent tone across public and private routes.
- All mock data is type-safe; swap in API hooks by replacing fixture imports with data fetching logic (React Query, SWR, etc.).

---

## Next Steps

- Wire mock modules to backend APIs (KYC, listings, matchmaking, policy feedback).
- Add authentication guards and role-based route protection.
- Extend analytics modules with real charting/visualisation libraries.
- Prepare Storybook or design system documentation for shared components.

---

## License

Internal project prepared for Jagadeesh Private Limited. Redistribution or reuse should follow client’s governance policy.
