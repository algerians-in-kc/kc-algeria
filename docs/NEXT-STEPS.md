# Algerians in KC — Next Steps

Status snapshot and remaining work. The site is **live (private preview)** at
`kc-algeria.vercel.app` with the volunteer coordination system fully working
end-to-end (intake forms → Airtable → coordinator email automations).

## ✅ Done
- Deployed on Vercel from `algerians-in-kc/kc-algeria` (`master`), noindex until a real domain is set.
- Volunteer + newcomer intake: `/volunteer` and `/newcomer` → `/api/volunteer` + `/api/newcomer`
  → Airtable base "Algerians in KC — Intake" (`Volunteers`, `Newcomer Requests`) + email automations. Verified.
- Security headers/CSP, honeypot, rate limiting, escaped emails.
- SEO: homepage/org structured data; LocalBusiness schema on directory.
- Airtable Free plan. Matching is human (coordinators assist via filtered views), not automatic.

## 🧹 Immediate cleanup
- [ ] Delete the 4 TEST rows in Airtable (TEST + TEST2 in both tables).

## 📋 Before a real public launch
- [ ] **Register a domain.** Recommended: `ansufkc.com` ("Ansuf" = *welcome* in Tamazight —
      honors the Berber/French audience while welcoming all Algerians) + `algeriakc.com` as
      neutral/SEO backup. Then: update canonical/OG/JSON-LD/sitemap refs (currently `algeriansinKC.com`),
      point Vercel at the domain, and the noindex guard auto-lifts.
- [ ] **Verify placeholder content** (safety-critical — newcomers act on it):
      WhatsApp groups, events, the "5,000+" stat, and the settle/worship/DMV/SSA details are
      still placeholder. The 5 directory businesses are real. Fix the actionable items first
      (SSA/DMV, health, worship listings).
- [ ] **Gather feedback** from 3–5 real-audience friends (Berber/French-speaking Algerians in KC)
      via the private `kc-algeria.vercel.app` link. Tell them what's placeholder.

## 📖 Phase 3 — Coordinator operations (to write)
- [ ] **Coordinator SOP + Code of Conduct** — one page covering: vetting steps (interview + reference),
      consent-before-sharing-contact, women/family matching, first meetings in public places,
      minimum data + privacy, and the intake → interview → approve → match → introduce (WhatsApp) flow.
- [ ] Invite 1–2 trusted coordinators to the Airtable base as Editors (Free plan cap: 5 editors).

## 🔮 Later
- [ ] Resend for branded email from the real domain (deferred — needs domain verification; Airtable
      automations cover notifications until then).
- [ ] Per-business detail pages + directory search as the directory grows.
- [ ] **All non-English content must be human-reviewed by a native speaker before it ships**
      (machine translation is not acceptable, especially on safety/legal content). Specifically:
      add reviewed **Arabic** to the `/safety` page — the page/data already carry RTL support and
      an `ar` slot; just fill in `src/lib/data/safety.ts`. FR is reviewed/OK.
- [ ] Global language switcher (persisted) to deliver the FR/AR/Tamazight promise.
- [ ] Revisit a custom admin dashboard only if Airtable is outgrown (many coordinators / hundreds of records).
