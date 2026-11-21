# PULSE_UI_PRESERVATION_RULES.md
## Pulse-UI — Permanent Project Preservation & Authorized-Change Policy

**Document type:** Permanent preservation policy. It documents what EXISTS and the rules any future agent, developer, or automation MUST follow. It introduces no designs, no features, and no changes.
**Binding on:** every AI agent, script, or person modifying this repository.
**Basis:** full Phase-1 audit of commit `ba05bd36f9432be71015e2f0725d302ba8d7cc86` (2026-11-20). Facts marked `[VERIFIED]` were confirmed by reading the actual source at that commit.

---

## SECTION 01 — PROJECT IDENTITY (VERIFIED FACTS)

| Fact | Value |
|---|---|
| Project name | Pulse UI (`pulse-ui-next` in `package.json`) |
| Repository | https://github.com/mdmubarokhosin/Pulse-UI.git |
| Framework | Next.js 16.1.6, App Router, static export (`output: "export"`, `basePath: "/pulse-ui-next"`, `trailingSlash: true`) |
| Language | TypeScript 5, `strict: true` |
| Styling system | Tailwind CSS 4.3.5 (CSS-first via `@tailwindcss/postcss`; `src/app/globals.css` is the single styling source of truth) |
| UI component system | shadcn/ui style `radix-nova` (`components.json`), 65 primitives in `src/components/ui/` |
| State management | Custom React context (`src/providers/theme-provider.tsx`) + Zustand 5 with persist (`src/store/ui-theme.store.ts`) |
| Fonts | Inter only, via `next/font/google` in `src/app/layout.tsx` |
| Icons | lucide-react (npm), Bootstrap Icons + Boxicons (CDN CSS links in root layout) |
| Architecture | App Router route groups: `(layout-pages)` = AdminLayout shell (60 routes); `(no-layout-pages)` = bare full-screen wrapper (auth + error, 11 routes); root `page.tsx` redirects to `/dashboard/analytics` |
| Conventions | Page pattern: server `page.tsx` wrapper → sibling client component; `"use client"` on interactive files; path alias `@/*` → `./src/*`; `cn()` helper in `src/lib/utils.ts` |
| Charts | Recharts 3 (via `ui/chart.tsx`) and ApexCharts 5 via `react-apexcharts` with `next/dynamic({ ssr:false })` |
| Testing | No test framework exists. Verification = `tsc --noEmit`, `npm run lint`, `npm run build` |

**Development conventions to preserve:** existing naming (including imperfect names such as folder `ui-components/sooner/`, label "Noitifications" in `app-sidebar.tsx`, file `TrafficOverviewCard-old.tsx`, type-in-comment `// was "next-themes"`), existing comment style, existing import order, existing file placement. Do not "improve" any of these without authorization.

---

## SECTION 02 — PROJECT OWNER AUTHORITY

1. The project owner has complete and final authority over every modification to this repository.
2. The agent is an implementation assistant, not an independent product designer or architect.
3. Priority hierarchy: (1) explicit owner instruction → (2) this document → (3) existing project architecture/conventions → (4) agent technical judgment. Technical judgment never overrides an owner instruction.
4. No explicit authorization means no modification. **Silence is NOT approval.**
5. If the agent believes something should be improved, it must: identify the issue, explain why it matters, list affected files, propose the change, and WAIT. Implementation without approval is a violation.

---

## SECTION 03 — IMMUTABLE PROJECT ELEMENTS

The following are protected. They may be changed ONLY by explicit owner instruction naming them specifically:

1. **UI designs** — every page and component's visual output, including all six theme variants (`:root`, `.dark`, `.dark-blue`, `.gaussian-black`, `.classic-light`, `.semi-dark`) defined in `src/app/globals.css`.
2. **Layouts** — root layout, `(layout-pages)/layout.tsx` (AdminLayout + Toaster + ThemeCustomizer), `(no-layout-pages)/layout.tsx`, `components/layout/admin-layout.tsx`, Header, Footer.
3. **Components** — all 65 `src/components/ui/*` primitives, all shared components (`app-sidebar`, `nav-main`, dropdowns, `global-search`, `theme-toggle`, `theme-customizer`, `data-table`, etc.), all page-level components (69 `page.tsx` + their sibling client components).
4. **Pages/routes** — all 68 feature routes + root redirect. Route names are case-sensitive (`/eCommerce/...`, not `/ecommerce/...`) — preserve exact casing.
5. **Features & business logic** — dashboard cards, calendar implementation (custom, in `applications/calendar/`), chatbox, file manager, invoice printing (`window.print()`), table implementations (TanStack in `components/data-table.tsx` and per-page), form demos, wizard, charts.
6. **Functions, hooks, interactions** — `use-calendar`, `useIsMobile` (both copies), `useHighlightedCode`, `loadHighlighter`, `cn`, all event handlers and state logic.
7. **Styles** — every token, color value (oklch), radius scale (`--radius: 0.625rem` and derived multipliers), blur/backdrop values, gradients, background images, scrollbar styling, `sidebar-hover-glass` behavior, transition-suppression trick in `theme-provider.tsx`.
8. **Colors & typography** — Inter font only; existing font sizes/weights; `themeColor: #6d4aff`; all oklch palette values.
9. **Animations** — `collapsible-down/up` keyframes usage in `nav-main.tsx`, framer-motion in FAQ/error pages, sonner toasts, theme-switch transition suppression.
10. **Assets** — all 86 files in `public/` (cards, products, carousels, countries, bg-themes, welcome banners, avatar, favicon, SVGs). On-disk spellings (e.g. `gausian-black.png`) are part of the contract because code references them.
11. **Icons & fonts setup** — CDN links in root layout (`bootstrap-icons@1.13.1`, boxicons), `next/font` Inter config.
12. **Routing architecture** — route-group split, layout nesting, `redirect("/dashboard/analytics")`, `nav-main.tsx` `toHref` + `NEW_TAB_PREFIXES` behavior, hover-expand sidebar behavior.
13. **Configuration** — `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.js`, `components.json`, `.gitignore`, `package.json`, `package-lock.json`.
14. **Integrations** — zustand persist key `ui-theme` (shape `{state:{theme}}`), localStorage key `theme`, the pre-paint `themeScript` in root layout (including its fallback `dark dark-blue`), CDN stylesheet URLs.
15. **Responsive behavior** — desktop/tablet/mobile breakpoints, `useIsMobile` 768px breakpoint, AdminLayout 1024px sidebar rule, mobile Sheet sidebar styling per theme.
16. **Project architecture** — directory structure, file organization, naming, state architecture, theme architecture, build/TS/ESLint configuration exactly as audited.

---

## SECTION 04 — ZERO UNAUTHORIZED DESIGN CHANGES

Prohibited without explicit, specific authorization:

- Any UI redesign (page, layout, component, card, button, sidebar, header, footer, navbar, dialog, dropdown, tooltip, table, chart, form).
- Any color, typography, spacing, padding, margin, border, shadow, border-radius, background, gradient, blur, or animation change.
- Replacing UI patterns (e.g., swapping a shadcn primitive for a custom one or vice versa, replacing `<img>` with `next/image`, swapping icon libraries).
- Changing loading/empty/error/success states, or responsive behavior.
- "Minor" visual cleanups — even one class name or one pixel of spacing requires authorization.

Example: authorization to fix a button's handler does NOT authorize changing its size, color, radius, position, or surrounding card.

---

## SECTION 05 — COMPONENT PROTECTION

No agent may independently delete, replace, rename, move, merge, split, or rewrite any component; change its props/interfaces; change its behavior; or change shared component styling.

**Component-specific facts to respect** `[VERIFIED]`:
- `ThemeProvider` is a custom context provider (NOT next-themes). Do not swap it for `next-themes`; note that `src/components/ui/sonner.tsx` assumes next-themes and is currently unused — keep it as-is.
- `src/components/ui/sidebar.tsx` is extended (controlled `open`/`onOpenChange`, cookie write). Preserve the extension.
- `button`, `card`, `dialog`, `sheet`, `dropdown-menu`, `input`, `select`, `table`, `chart` deviate from stock shadcn. Preserve the deviations.
- Orphaned components (`team-switcher.tsx`, `nav-secondary.tsx`, `components/calendar/*`, `components/file-manager/*`, `TrafficOverviewCard-old.tsx`, `earnings-breakdown.tsx`, `ui/use-mobile.ts`) are PROTECTED — do not delete them because they look unused.
- `DevicesCard` is lazy-imported but intentionally not rendered (block commented out at `dashboard/analytics/page.tsx:71-75`). Preserve this state.

---

## SECTION 06 — FUNCTIONALITY PROTECTION

Preserve every feature, function, event handler, navigation behavior, form, validation, state mechanism, data flow, integration, utility, hook, provider, configuration, and error-handling path.

Never remove functionality because it appears unused or unnecessary. In particular, the template's placeholder behaviors are part of the current contract until the owner changes them:
- `console.log` row actions in the four eCommerce list pages.
- No-op dashboard card menus; static AddProduct form; auth pages' `// TODO: wire up to your auth provider` stubs; `BasicLoginPage` form without onSubmit.
- `alert()` feedback in form-layout demos; wizard's no-op "Finish"; language dropdown's country list.

Known runtime defects are also part of the current behavior until the owner authorizes fixes (see SECTION 15 list): do not "quietly fix" them while doing unrelated work.

---

## SECTION 07 — STRICT FILE PROTECTION

Treat every existing file as protected. Prohibited without authorization: deleting, renaming, moving, replacing, or wholesale rewriting any file; removing code that looks unused; removing comments or documentation; reformatting unrelated sections.

Editing procedure for any authorized change:
1. Read the complete relevant file.
2. Understand its existing behavior.
3. Make the smallest modification that satisfies the exact request.
4. Preserve all unrelated sections, comments, and formatting.
5. Review the final diff line-by-line.

Never use broad automated replacement, regex sweeps, or formatters (prettier/eslint --fix) across the repository. Never run destructive git commands (`git reset --hard`, `git clean -fd`, `git checkout -- .`). Never overwrite the owner's uncommitted work — if `git status` shows pre-existing changes, STOP and report.

---

## SECTION 08 — MINIMAL DIFF POLICY

**Minimum Necessary Change = Maximum Project Preservation.**

For every authorized update: identify the exact lines to change; modify only those; leave neighbors byte-identical; verify with `git diff` that only intended lines moved. If the smallest implementation requires touching a protected area (shared component, config, dependency), STOP and ask for permission first. Do not silently expand scope.

---

## SECTION 09 — NO SELF-INITIATED IMPROVEMENTS

Prohibited without authorization: refactoring, component restructuring, design-system restructuring, architecture migration, dependency updates, performance optimization, styling cleanup, naming standardization, file consolidation, dead-code deletion, code simplification, UI modernization, accessibility redesign, responsive redesign, TypeScript strictness increases, lint-error cleanup.

If an improvement is discovered: report it (issue → why it matters → affected files → proposed minimal change), then wait. The audit report's §10–§13 and §17 catalogue known candidates — none may be acted on without the owner picking a batch.

---

## SECTION 10 — EXPLICIT AUTHORIZATION SYSTEM

Every task must define, before implementation:
- What the owner requested (literally).
- The affected files, components, and functions.
- What is authorized and what must remain unchanged.
- Whether shared/config/dependency files are implicated (these always require separate approval).

If a request appears to require out-of-scope changes: STOP, explain, ask. Interpret permission narrowly: authorizing one page does not authorize others; authorizing functionality does not authorize visuals; authorizing a fix does not authorize refactoring of the fixed file.

---

## SECTION 11 — DEPENDENCY PROTECTION

The dependency set in `package.json` (43 dependencies + 8 devDependencies, audited at commit `ba05bd3`) and `package-lock.json` are protected. No installs, removals, upgrades, replacements, package-manager changes, or lockfile regeneration without explicit approval.

Known facts for future decisions (do NOT act on them): `file-saver`, `jspdf`, `jspdf-autotable`, `xlsx`, `@boxicons/react`, and the `bootstrap-icons` npm package are currently never imported in `src/`; `next-themes` is imported only by the unused `ui/sonner.tsx`; the four `@fullcalendar/*` packages are imported only by the orphaned `components/calendar/` kit. `BadgesPage.tsx` imports `@radix-ui/react-separator` (transitive-only — flagged, not fixed).

---

## SECTION 12 — GIT AND CHANGE CONTROL

Before every update:
1. `git status` — record pre-existing uncommitted changes (owner's work is untouchable).
2. Record current commit hash.
3. Re-read the preservation-relevant baseline files for the area involved.

After every update:
1. `git status`, `git diff --stat`, `git diff --name-status`; review the complete diff.
2. Classify every modified/added/deleted file as directly request-related or unauthorized.
3. If an unrelated modification appears: do NOT auto-revert (it may be the owner's work) — stop and report.

Never commit, push, or deploy unless explicitly authorized. The only files an agent may create on its own initiative are the two baseline documents (`PULSE_UI_AUDIT_REPORT.md`, `PULSE_UI_PRESERVATION_RULES.md`) when instructed by the owner.

---

## SECTION 13 — APPROVAL GATE

Workflow: receive request → analyze → identify affected files → prepare minimal change plan → explain side effects → request approval if extra scope is needed → implement exactly the authorized change → review diff → run existing checks (`tsc --noEmit`, `npm run lint`, `npm run build`) → report.

For routine requests where the owner has explicitly authorized the exact change and its necessary scope, do not create unnecessary approval loops — but still never exceed the stated scope.

---

## SECTION 14 — TESTING AND VERIFICATION

Baseline (recorded 2026-11-20, commit `ba05bd3`):
- `tsc --noEmit`: PASS, 0 errors.
- `npm run lint`: 224 problems (78 errors, 146 warnings) across 103 files. This is the accepted baseline — do not "fix" lint issues as a side effect.
- `npm run build`: PASS, 70 static routes exported, no warnings.

Rules: run the project's existing scripts only; do not add test infrastructure; do not modify configuration or code merely to make a check pass; if a check exposes an unrelated pre-existing issue, report it separately; never fabricate results; claim only what was actually verified.

---

## SECTION 15 — KNOWN ISSUES AT BASELINE (documented; fixing each requires authorization)

Confirmed (details and exact lines in `PULSE_UI_AUDIT_REPORT.md` §10):
- C1 Form Wizard Step 4 crashes on typing comments (`setForm` prop missing).
- C2/C3 wrong asset basePath `/pulse-ui/` in `ProductTable.tsx` and `CategoryList.tsx:453`.
- C4–C9 dead internal links (global-search `/dashboard`,`/crm`,`/account/billing`; Error404 quick links; `/contact`; `/terms`,`/privacy`; user menu `/app/chatbox`; lowercase `/ecommerce/add-product` ×2).
- C10 missing fallback asset `/images/placeholder-product.png`.
- C11 `min-h-scree` class typo; C12 console.log row actions; C13–C14 import hygiene; C15 transitive `@radix-ui/react-separator` import; C16 unused `ui/sonner.tsx`; C17–C19 orphans/duplicates/typos.

Risks (details in audit §11): locale-dependent formatting hydration mismatches; calendar seeded from build-time clock; frozen footer year; mobile sidebar first-paint jump; `useLayoutEffect` SSR warnings; external CDN/hosts for imagery and icon CSS; hardcoded basePath asset paths; misc.

Rule: these are REPORTED, not repaired. Any fix must be individually authorized (audit §17 groups them into batches for convenience).

---

## SECTION 16 — UPDATE COMPLETION REPORT (required after every authorized update)

Report must include: (A) requested change; (B) exact implementation; (C) every modified file with the reason it was necessary; (D) preserved elements confirmed untouched; (E) actual tsc/lint/build results; (F) diff verification (`git status`, `git diff --name-status`) and whether any unauthorized change was detected; (G) remaining issues/limitations; (H) explicit statement whether the work stayed inside the approved scope. Never claim 100% preservation without reviewing the actual diff.

---

## SECTION 17 — CONFLICT RESOLUTION

If instructions conflict or are ambiguous: (1) stop the potentially destructive operation; (2) explain the conflict; (3) identify affected project elements; (4) ask the owner. Never choose the interpretation that expands modification scope. When local conventions in the repo differ from generic best practice, the repo's existing conventions win.

---

## SECTION 18 — PERMANENT NON-NEGOTIABLE COMMAND

> **THE EXISTING PULSE-UI PROJECT IS THE SOURCE OF TRUTH.**
>
> **PRESERVE EVERYTHING BY DEFAULT.**
> **CHANGE ONLY WHAT THE PROJECT OWNER EXPLICITLY AUTHORIZES.**
>
> **DO NOT REDESIGN. DO NOT REFACTOR. DO NOT REPLACE. DO NOT REMOVE.**
> **DO NOT RESTRUCTURE. DO NOT MODIFY UNRELATED FILES.**
>
> **NO UNAUTHORIZED CHANGE IS ACCEPTABLE.**

DO EXACTLY WHAT THE PROJECT OWNER ASKS. NOTHING MORE. NOTHING LESS.
