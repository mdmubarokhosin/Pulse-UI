# PULSE-UI — AUDIT REPORT (PHASE 1)

**Document type:** Baseline audit of the EXISTING project. This report describes what IS, proposes nothing, and changes nothing.
**Status:** Phase 1 complete. No source code, configuration, styling, or asset file was modified, added (except this report), or deleted.
**Next step:** Waiting for the project owner's explicit authorization before any Phase 2 work.

---

## 0. DOCUMENT CONTROL

| Item | Value |
|---|---|
| Repository | https://github.com/mdmubarokhosin/Pulse-UI.git |
| Branch audited | `main` |
| Commit audited | `ba05bd36f9432be71015e2f0725d302ba8d7cc86` ("Delete PULSE_UI_PRESERVATION_RULES.md") |
| Author of HEAD commit | Md Mubarok Hosin <contact.mdmubarok@gmail.com> |
| HEAD commit date | Fri Nov 20 05:49:47 2026 +0800 |
| Audit date | 2026-11-20 |
| Working tree at audit start | Clean (`git status` empty; no uncommitted owner work present) |
| Audit environment | Linux sandbox, Node v24.22.3, npm 11.19.1, git 2.47.3 |
| Method | Full clone; every configuration file read; core architecture, all providers, all shared components, navigation, theme system read line-by-line; all route directories swept file-by-file; every high-severity finding independently re-verified by direct grep/read of the named files; baseline `tsc --noEmit`, `npm run lint`, `npm run build` executed |
| History note | Commit `fd5364e` previously created `PULSE_UI_PRESERVATION_RULES.md` (that file was an instruction template, not a completed report); commit `ba05bd3` deleted it. Neither `PULSE_UI_AUDIT_REPORT.md` nor `PULSE_UI_PRESERVATION_RULES.md` exists at HEAD, so both are being created fresh as requested. |

**Evidence tags used below**
- `[V]` = personally verified by direct read/grep of the file during this audit.
- `[S]` = verified by full-directory source sweep (file-by-file read with route/import cross-checking); consistent with all spot-checks.

---

## 1. EXECUTIVE SUMMARY

Pulse-UI is a comprehensive, statically-exported Next.js 16 admin dashboard template built with React 19, TypeScript (strict), Tailwind CSS 4, and a shadcn/ui "radix-nova" component kit. It ships 68 feature routes across dashboards, eCommerce, applications, forms, tables, charts, icons, UI-component galleries, widgets, account, auth, and error pages, plus a live theme system with four selectable skins.

**Overall technical health is good.** The production build succeeds, TypeScript compiles with zero errors, and the codebase is consistent in structure and conventions. The baseline issues found are localized and are catalogued below — they have NOT been touched:

- **1 confirmed runtime crash** (Form Wizard step 4 comments field — missing prop).
- **10 dead internal links** (search menu, 404 page quick links, register page links, user menu "Messages", two lowercase-URL product links).
- **2 groups of broken image paths** (wrong basePath `/pulse-ui/` instead of `/pulse-ui-next/` — 6 product images plus 1 category flow) and **1 missing fallback asset** (`/images/placeholder-product.png` does not exist in `public/`).
- **1 invalid Tailwind class typo** (`min-h-scree`).
- **8 `console.log` placeholders** in eCommerce list pages.
- **9 orphaned/duplicate source files** and **6 npm dependencies never imported**.
- **Hydration-mismatch risks** from locale-dependent date/currency formatting and build-time date seeding (relevant because the app is statically exported).

All findings are documentation only. Nothing has been fixed. Section 11 lists candidate fix batches awaiting owner authorization.

---

## 2. PROJECT IDENTITY

| Item | Verified value |
|---|---|
| Package name (`package.json`) | `pulse-ui-next`, version `0.1.0`, private, `"type": "module"` |
| Product name | Pulse UI — "Next.js 16 + shadcn/ui Admin Template" (root metadata) |
| Publisher / author metadata | Codervent (https://codervent.com) |
| Marketing/site URL in metadata | `https://store.codervent.com/pulse-ui-next/` |
| Framework | Next.js 16.1.6, App Router, `output: "export"` (static site) |
| Language | TypeScript 5, `strict: true` |
| Styling | Tailwind CSS 4.3.5 via `@tailwindcss/postcss` (CSS-first config; no `tailwind.config` file) |
| UI kit | shadcn/ui style **radix-nova** (`components.json`), 65 files under `src/components/ui/` |
| State | Zustand 5 (persisted UI-theme store) + React context (custom ThemeProvider) |
| Fonts | Inter via `next/font/google` (subsets: latin, display swap) — the only font loaded |
| Deployment shape | Static export deployed under base path `/pulse-ui-next` (GitHub Pages–style hosting; canonical URL points at store.codervent.com) |
| Test infrastructure | NONE — no test runner, no test scripts, no test files exist |

---

## 3. TECHNOLOGY STACK (from `package.json`, verified)

**Scripts:** `dev` = `next dev`; `build` = `next build`; `start` = `next start`; `lint` = `eslint`.

**Dependencies (43):** `@base-ui/react` ^1.9.0, `@boxicons/react` ^1.0.3, `@fullcalendar/daygrid|interaction|react|timegrid` ^6.1.20, `@hookform/resolvers` ^7.0.6, `@shadcn/react` ^0.3.1, `@tailwindcss/postcss` ^4.3.5, `@tanstack/react-table` ^8.21.3, `apexcharts` ^5.10.3, `bootstrap-icons` ^1.13.1, `class-variance-authority` ^0.7.1, `clsx` ^2.1.1, `cmdk` ^1.1.1, `cn` ^0.5.2, `date-fns` ^4.1.0, `embla-carousel-react` ^8.6.0, `file-saver` ^2.0.5, `framer-motion` ^12.36.0, `input-otp` ^1.5.0, `jspdf` ^4.2.0, `jspdf-autotable` ^5.0.7, `lucide-react` ^1.70.0, `next` 16.1.6, `next-themes` ^0.4.6, `radix-ui` ^1.8.1 (unified package), `react` 19.2.3, `react-apexcharts` ^2.1.0, `react-day-picker` ^10.0.2, `react-dom` 19.2.3, `react-hook-form` ^7.92.0, `react-icons` ^5.7.0, `react-resizable-panels` ^4.21.0, `react-simple-wysiwyg` ^3.4.1, `recharts` ^3.8.0, `shiki` ^4.6.0, `sonner` ^2.0.7, `tailwind-merge` ^3.7.0, `tailwindcss` ^4.3.5, `tailwindcss-animate` ^1.0.7, `tw-animate-css` ^1.4.0, `vaul` ^1.1.2, `xlsx` ^0.18.5, `zod` ^4.6.7, `zustand` ^5.0.12.

**DevDependencies (8):** `@types/file-saver`, `@types/node` ^20, `@types/react` ^19, `@types/react-dom` ^19, `eslint` ^9, `eslint-config-next` 16.1.6, `shadcn` ^4.23.0, `typescript` ^5.

**Import-usage verification (grep over `src/`):**
- Never imported anywhere: `file-saver`, `jspdf`, `jspdf-autotable`, `xlsx`, `@boxicons/react`, `bootstrap-icons` (the Bootstrap Icons *font* is loaded via CDN `<link>` in the root layout, not via the npm package), `date-fns` (used only indirectly if at all — no direct import found in the sweep).
- `next-themes` is imported only by `src/components/ui/sonner.tsx`, which is itself unused (see §10/C16).
- `@fullcalendar/*` is imported only by `src/components/calendar/shadcn-full-calendar.tsx`, which is orphaned (see §10/C17).
- `react-hook-form` + `zod` are used only by the stock `src/components/ui/form.tsx` integration; no page-level form uses them (form demos use local state).

No dependency has been added, removed, or upgraded during this audit.

---

## 4. CONFIGURATION BASELINE (all verified by full read; none modified)

| File | Contents (verified) |
|---|---|
| `next.config.ts` | `output: "export"`, `basePath: "/pulse-ui-next"`, `assetPrefix: "/pulse-ui-next/"`, `trailingSlash: true`. Uses `module.exports = nextConfig` at the end of a `.ts` file (unconventional but build-verified working). No middleware, no rewrites, no headers. |
| `tsconfig.json` | Target ES2017, `strict: true`, `noEmit`, `moduleResolution: "bundler"`, `jsx: react-jsx`, path alias `@/* -> ./src/*`, includes `.next/types/**` and `.next/dev/types/**`, excludes `node_modules`. No `noUnusedLocals`/`noUnusedParameters`. |
| `eslint.config.mjs` | Flat config: `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`; `globalIgnores` for `.next/**`, `out/**`, `build/**`, `next-env.d.ts`. |
| `postcss.config.js` | Single plugin `@tailwindcss/postcss`. |
| `components.json` | shadcn style `radix-nova`, `rsc: true`, `tsx: true`, css `src/app/globals.css`, baseColor `neutral`, `cssVariables: true`, icon library `lucide`, `rtl: false`, aliases components/ui/lib/hooks → `@/...`, `registries: {}`. |
| `.gitignore` | Standard create-next-app set: `node_modules`, `.next/`, `out/`, `build`, `.env*`, `.vercel`, `*.tsbuildinfo`, `next-env.d.ts`, coverage, debug logs. |
| `README.md` | Unmodified create-next-app default readme (does not describe the actual project). |
| `package-lock.json` | Committed; used as-is by `npm ci`. |
| Env files | None committed (`.env*` is gitignored; no env usage found in source — the app is fully client-side demo data). |

---

## 5. REPOSITORY INVENTORY

- **488 tracked files** total = 402 code/config/docs + **86 public assets**.
- **393 files under `src/`**; 391 TypeScript/TSX; **~50,127 lines** of TS/TSX/CSS in `src/`.
- **240 files** declare `"use client"`.
- **69 `page.tsx` files** (root + 68 route-group pages); **3 route-group/root layouts** + `admin-layout.tsx`.
- **65 files** in `src/components/ui/` (64 `.tsx` + `use-mobile.ts`).
- **Public assets:** card imagery (basic/blog/eComm/travel, duplicated under `public/cards/` and `public/images/cards/`), carousels, countries, products, welcome banners, two theme background images (`bg-themes/dark-blue.png`, `bg-themes/gausian-black.png` — note on-disk spelling "gausian"), illustration, `avatar.png`, Next/Vercel/none framework SVGs, `favicon.ico`.

### Directory map (source)

```
src/
├─ app/
│  ├─ layout.tsx                 # root layout: metadata, Inter, theme boot script, CDN icon CSS, providers
│  ├─ page.tsx                   # redirect("/dashboard/analytics")
│  ├─ globals.css                # design tokens + 4 custom themes + glass/scrollbar styling (610 lines)
│  ├─ (layout-pages)/            # 60 routes wrapped in AdminLayout (sidebar/header/footer)
│  │  ├─ layout.tsx              # AdminLayout + sonner <Toaster> (direct import) + ThemeCustomizer
│  │  ├─ account/{profile,edit-profile,password-setting,notifications}
│  │  ├─ applications/{calendar,chatbox,file-manager,invoice}
│  │  ├─ charts/{recharts,apex-charts}
│  │  ├─ dashboard/{analytics,eCommerce}
│  │  ├─ docs/  faq/  pricing-tables/
│  │  ├─ eCommerce/{product-list,product-grid,add-product,categories,order-list,
│  │  │             order-details,customer-list,customer-details,invoice}
│  │  ├─ forms/{basic-inputs,input-groups,checkboxes-radios,form-layouts,form-wizard,
│  │  │         text-editor,file-upload,date-pickers,select,form-repeat}
│  │  ├─ icons/{lucide,bootstrap,boxicons}
│  │  ├─ tables/{data-tables,advance-tables}
│  │  ├─ ui-components/{accordion,alerts,badges,buttons,cards,carousels,list-groups,
│  │  │                 media-object,navbars,progress,sooner,spinners}
│  │  └─ widgets/{data,statistics}
│  └─ (no-layout-pages)/         # 8 auth + 3 error routes, bare full-screen layout
│     ├─ layout.tsx
│     ├─ auth/{basic,cover}/{login,register,verify-email,forgot-password,
│     │                      reset-password,password-reset-success}
│     └─ error/{error-404,error-500,coming-soon}
├─ components/
│  ├─ ui/                        # 65 shadcn-style primitives (see §9)
│  ├─ layout/{admin-layout,Header,Footer}.tsx
│  ├─ app-sidebar.tsx, nav-main.tsx, nav-projects.tsx, nav-user.tsx, nav-secondary.tsx (orphaned)
│  ├─ UserDropdown.tsx, user-menu-content.tsx, notification-dropdown.tsx,
│  │  appLauncher-dropdown.tsx, language-dropdown.tsx, team-switcher.tsx (orphaned),
│  │  global-search.tsx, theme-toggle.tsx, theme-customizer.tsx
│  ├─ colored-progress.tsx, columns.tsx, data-table.tsx
│  ├─ calendar/{shadcn-full-calendar,event-dialog,types} (orphaned)
│  └─ file-manager/{data,file-card,folder-card,sidebar,toolbar} (orphaned)
├─ hooks/{use-mobile.ts, use-highlighted-code.ts}
├─ lib/{utils.ts (cn), highlighter.tsx (shiki loader)}
├─ providers/{theme-provider.tsx (custom), ui-theme-provider.tsx}
└─ store/ui-theme.store.ts (zustand + persist)
```

---

## 6. ROUTING ARCHITECTURE (verified against `next build` output)

- Root `/` (`src/app/page.tsx`) immediately `redirect("/dashboard/analytics")`. `[V]`
- Route groups: `(layout-pages)` — full admin shell; `(no-layout-pages)` — bare wrapper (`div.w-full.min-h-screen`).
- `next build` exported **70 static entries**: the root redirect route, the generated `/_not-found`, and **68 feature routes** — all `○ (Static)` prerendered.
- Complete exported route list: `/account/{edit-profile,notifications,password-setting,profile}`, `/applications/{calendar,chatbox,file-manager,invoice}`, `/auth/basic/{forgot-password,login,password-reset-success,register,reset-password,verify-email}`, `/auth/cover/{...same six}`, `/charts/{apex-charts,recharts}`, `/dashboard/{analytics,eCommerce}`, `/docs`, `/eCommerce/{add-product,categories,customer-details,customer-list,invoice,order-details,order-list,product-grid,product-list}`, `/error/{coming-soon,error-404,error-500}`, `/faq`, `/forms/{basic-inputs,checkboxes-radios,date-pickers,file-upload,form-layouts,form-repeat,form-wizard,input-groups,select,text-editor}`, `/icons/{bootstrap,boxicons,lucide}`, `/pricing-tables`, `/tables/{advance-tables,data-tables}`, `/ui-components/{accordion,alerts,badges,buttons,cards,carousels,list-groups,media-object,navbars,progress,sooner,spinners}`, `/widgets/{data,statistics}`.
- Every sidebar entry in `app-sidebar.tsx` matches an existing route directory except where noted in §10; `nav-main.tsx` prefixes relative URLs with `/` (`toHref`) and opens `auth/*` and `error/*` links in a new tab (`NEW_TAB_PREFIXES`). `[V]`
- With `output: "export"`, there are **no** API routes, no server actions, no middleware; all interactivity is client-side with demo data.

---

## 7. APPLICATION ARCHITECTURE (all read in full)

**Boot chain (`src/app/layout.tsx`)** `[V]`
1. Inline `themeScript` runs before paint: reads `localStorage.theme` (fallback `"dark"`) and the persisted zustand `ui-theme` key (`localStorage["ui-theme"]`, expected shape `{state:{theme}}`), then sets `light/dark` + custom-theme class on `<html>`; failure fallback = `dark dark-blue`.
2. CDN stylesheets: bootstrap-icons 1.13.1 (jsdelivr) and boxicons (cdn.boxicons.com).
3. `<body class="Inter antialiased">` wraps `ThemeProvider` (custom, default `dark`) → `UIThemeProvider` → `TooltipProvider (delayDuration 0)`.
4. Rich SEO metadata block (title template, keywords, OpenGraph, Twitter, canonical, robots) with `metadataBase = store.codervent.com`.

**Theme system (dual-layer)** `[V]`
- Layer 1 — mode: `src/providers/theme-provider.tsx` is a **custom** context implementation (NOT `next-themes`): `light | dark | system` in `localStorage["theme"]`, system-preference listener, transition-suppression style injection while switching. Exposes `useTheme()`.
- Layer 2 — skin: `src/store/ui-theme.store.ts` (zustand + persist, key `ui-theme`, default `"dark-blue"`). `src/providers/ui-theme-provider.tsx` strips all four custom classes then applies the current one and removes `light/dark` while a custom skin is active.
- `theme-toggle.tsx`: clears the custom skin (`setCustomTheme("")`) and flips light/dark. `theme-customizer.tsx` (floating gear button, bottom-right, only inside `(layout-pages)`): Sheet panel offering the 4 skins (`dark-blue`, `gaussian-black`, `classic-light`, `semi-dark`) with live previews, and "Reset theme" → skin cleared + `setMode("system")`.

**Admin shell** `[V]`
- `(layout-pages)/layout.tsx` → `AdminLayout` → `SidebarProvider` (open state controlled by `window.innerWidth >= 1024` resize handler) → `AppSidebar` + `SidebarInset` → `Header` / `children (p-4 flex column)` / `Footer`; plus sonner `<Toaster position="top-right" richColors closeButton />` and `ThemeCustomizer`.
- `app-sidebar.tsx`: brand header ("Pulse UI / Next.js Admin"), 14 top-level nav groups with full route tree (see §6), `NavProjects` section, `NavUser` footer; sample user "Alex Martin"; `collapsible="icon"`; class `sidebar-hover-glass`.
- `nav-main.tsx`: 2-level (3-level for auth) collapsible menus; hover-expands a collapsed icon sidebar (overrides `--sidebar-width-icon: 4rem`, applies overlay shadow, keeps layout width fixed); active-state via `pathname.startsWith`; animates submenu open/close (`collapsible-down/up` keyframes expected in global CSS). `[V]`
- `Header.tsx`: sticky, scroll-blur background; SidebarTrigger; quick links (Pricing, Docs, Reports, Profile — all valid routes); right cluster: `GlobalSearch` (⌘K dialog), `ThemeToggle`, `LanguageDropdown`, `AppLauncherDropdown`, `NotificationDropdown` (hidden on mobile), `UserDropdown`. `[V]`
- `Footer.tsx`: "© {year} Codervent" + "Built with ❤️ by Codervent" (external links to codervent.com). `[V]`

**Data & state patterns**
- Page pattern everywhere: `page.tsx` (server wrapper, metadata) → sibling client component. 240 files are client components.
- Table pages use `@tanstack/react-table`; two shared implementations: `src/components/data-table.tsx` (565 lines, TanStack + shadcn Table with sorting/filter/pagination/column visibility) and per-page tables in `tables/advance-tables/`.
- Calendar application is a self-contained custom implementation under `applications/calendar/` (15 files: month/time-grid/agenda views, event dialog/sheet, draft state, utils, `use-calendar` hook). It does NOT use FullCalendar.
- Charts: Recharts via shadcn `chart.tsx` wrapper; ApexCharts via `react-apexcharts` with `next/dynamic({ ssr:false })`.

---

## 8. DESIGN SYSTEM (source of truth: `src/app/globals.css`, 610 lines) `[V]`

**Token architecture:** Tailwind 4 `@theme inline` maps shadcn variables (`background, foreground, card, popover, primary, secondary, muted, accent, destructive, border, input, ring, chart-1..5, sidebar-*, scroll-track/thumb/thumb-hover, panel, grid-line`) into utility classes. Radius scale derived from `--radius: 0.625rem` (`sm ×0.6 → 4xl ×2.6`). All colors are **oklch**.

**Six theme variants defined in CSS:**
1. `:root` — default light (neutral, shadcn baseline).
2. `.dark` — default dark (neutral; `--sidebar-primary` indigo `oklch(0.488 0.243 264.376)`).
3. `.dark-blue` ("Dark Blue Nebula") — deep blue glass; fixed background image `/pulse-ui-next/images/bg-themes/dark-blue.png`; translucent blurred cards (72% mix, blur 18px), sidebar (78%, blur 22px), header (60%, blur 18px), mobile Sheet styling; gradient active menu items; 8px custom scrollbar.
4. `.gaussian-black` — frosted black glass over `gausian-black.png` (50% black cards/sidebar, blur 18–22px); 5 custom chart colors.
5. `.classic-light` — pastel radial-gradient background, glass sidebar with inner highlights, 6px scrollbar.
6. `:root.semi-dark` — dark sidebar tokens on light page; scoped dark token block for sidebar internals; thin scrollbars.

**Component-layer effects:** `@layer components` defines `.sidebar-hover-glass` hover state (blur 40px, saturate 150%, shadow) and mobile-drawer blur. `@layer base` applies `border-border outline-ring/50` globally and `bg-background text-foreground` on body.

**Typography:** Inter only (Google Fonts via `next/font`), `antialiased`; no other font family is configured. Viewport `themeColor: #6d4aff`.

**Icons:** lucide-react (primary), Bootstrap Icons + Boxicons via CDN CSS classes, react-icons available.

---

## 9. SHARED COMPONENT INVENTORY

### 9.1 Non-UI shared components (`src/components/*`, excluding `ui/`)
| Component | Role (verified) |
|---|---|
| `layout/admin-layout.tsx` | Sidebar + header + content + footer shell, responsive sidebar state |
| `layout/Header.tsx`, `layout/Footer.tsx` | Top bar (search/theme/lang/apps/notifications/user) and footer |
| `app-sidebar.tsx` | Sidebar structure + full navigation data model |
| `nav-main.tsx` | Recursive nav renderer + hover-expand behavior |
| `nav-projects.tsx`, `nav-user.tsx` | Sidebar projects section; sidebar footer user card |
| `nav-secondary.tsx` | **Orphaned** — no importer |
| `team-switcher.tsx` | **Orphaned** — no importer |
| `global-search.tsx` | ⌘K command dialog with static page index |
| `theme-toggle.tsx`, `theme-customizer.tsx` | Mode flip button; skin customizer Sheet |
| `UserDropdown.tsx` + `user-menu-content.tsx` | Header avatar menu (profile/account/billing/messages/logout items) |
| `notification-dropdown.tsx` | Notifications popover (sample data) |
| `appLauncher-dropdown.tsx` | Apps grid popover |
| `language-dropdown.tsx` | Locale-ish picker (country names as "languages") |
| `data-table.tsx`, `columns.tsx`, `colored-progress.tsx` | Shared TanStack table implementation used by `/tables/data-tables` |
| `calendar/*` (3 files) | **Orphaned** full-calendar implementation |
| `file-manager/*` (5 files) | **Orphaned** file-manager components |

### 9.2 `src/components/ui/` — 65 files (shadcn radix-nova kit)
Stock/near-stock Radix wrappers: accordion, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button-group, calendar (react-day-picker), checkbox, collapsible, context-menu, direction, drawer (vaul), empty, field, form (react-hook-form glue), hover-card, input-group, input-otp, item, kbd, label, marker, menubar, navigation-menu, native-select, pagination, popover, progress, questionnaire, radio-group, resizable, scroll-area, separator, skeleton, slider, spinner, switch, table, tabs, textarea, toggle, toggle-group, tooltip, trace.
Composite additions: alert (with `AlertAction`), attachment, bubble, message, message-scroller, code-block (shiki), combobox (Base UI), command (cmdk), empty-state, item blocks.
Customized vs stock shadcn: `button` (8 sizes, data-variant attrs), `card` (`--card-spacing`, ring instead of border), `chart` (Recharts v3 adaptation), `dialog`/`sheet` (popover bg, custom close button, `showCloseButton`), `dropdown-menu` (trigger-width content), `input` (h-8, ring-3), `select` (item-aligned default), `sidebar` (controlled open/onOpenChange + cookie write), `table` (compact), `sonner` (styled — currently unused).

---

## 10. FINDINGS — CONFIRMED ISSUES (documented only; NOTHING was fixed)

Severity legend: **A** = user-visible malfunction or crash; **B** = visible defect; **C** = code-quality defect.

| ID | Sev | Location | Issue | Evidence |
|---|---|---|---|---|
| C1 | **A** | `forms/form-wizard/steps/Step4.tsx:9,46-48` + `WizardPage.tsx:45` | Step 4 destructures `{ form, setForm }: any` but `WizardPage` renders `<Step4 form={form} />` without `setForm`. Typing in the "Additional Comments" textarea calls `setForm(...)` → `TypeError: setForm is not a function` at runtime. Invisible to TS because props are `any`. | `[V]` both files read |
| C2 | **A** | `tables/advance-tables/ProductTable.tsx:82-127` | All 6 product image paths use `/pulse-ui/products/*.png`; actual basePath is `/pulse-ui-next` → all 6 render 404 images. | `[V]` grep |
| C3 | **A** | `eCommerce/categories/CategoryList.tsx:453` | Newly added categories get `image: "/pulse-ui/products/01.png"` (seed data correctly uses `/pulse-ui-next/…`) → every category added via the sheet shows a broken image. | `[V]` grep |
| C4 | **A** | `components/global-search.tsx:31,33,38` | ⌘K search links to `/dashboard`, `/crm`, `/account/billing` — none exist (routes are `/dashboard/analytics`, `/dashboard/eCommerce`; no `crm`; no `account/billing`) → navigation to 404. | `[V]` grep + route list |
| C5 | **A** | `error/error-404/Error404.tsx:19-22` | 404-page quick links `/dashboard`, `/orders`, `/customers`, `/help` — all four routes do not exist. | `[V]` grep + route list |
| C6 | **A** | `auth/basic/password-reset-success/PasswordResetSuccess.tsx:49,91` | "Contact support" links to `/contact` — route does not exist. | `[S]` + route list |
| C7 | **A** | `auth/basic/register/BasicRegisterPage.tsx:173,179` | Terms/Privacy links to `/terms`, `/privacy` — routes do not exist. | `[S]` + route list |
| C8 | **A** | `components/user-menu-content.tsx:52` | "Messages" menu item navigates to `/app/chatbox`; actual route is `/applications/chatbox`. | `[V]` grep |
| C9 | **A** | `eCommerce/product-grid/ProductGrid.tsx:247`, `eCommerce/product-list/ProductList.tsx:502` | "Add Product" links use lowercase `/ecommerce/add-product`; route directory is `eCommerce/` (case-sensitive in App Router; no middleware/rewrites exist) → 404. | `[V]` grep |
| C10 | **A** | `dashboard/eCommerce/product-orders-table.tsx:306-308` | Image `onError` fallback points to `/images/placeholder-product.png`, which does not exist in `public/` (and also lacks the basePath prefix) → broken fallback. | `[V]` grep + public listing |
| C11 | **B** | `forms/form-layouts/layouts/LayoutSignup2.tsx:82` | Invalid Tailwind class `min-h-scree` (typo for `min-h-screen`) — silently ignored, min-height not applied. | `[V]` grep |
| C12 | **C** | `eCommerce/{categories/CategoryList,order-list/OrderList,customer-list/CustomerList,product-list/ProductList}.tsx` | 8 `console.log(...)` calls serve as the entire implementation of row "View"/"Edit" menu actions (2 per file). | `[V]` grep -c |
| C13 | **C** | `applications/invoice/page.tsx:2` | Default import named `FileManagerPage` for `./InvoiceCard` (copy-paste identifier; functionally correct). | `[S]` |
| C14 | **C** | `eCommerce/invoice/InvoicePage.tsx:5-6`; `forms/select/SelectBasic,SelectWithAvatar,SelectTwoAvatars,SelectWithCheckmarks,SelectWithDisabled`; `forms/form-wizard/WizardContext.tsx:3` | Unused imports (`CardHeader/CardTitle`; `SelectSeparator` used only by `SelectGrouped`; `React`). Corroborated by 31 `no-unused-vars` lint hits. | `[S]` + lint |
| C15 | **B** | `ui-components/badges/BadgesPage.tsx:1` | Imports `Separator` from `@radix-ui/react-separator`, which is not a declared dependency (resolves today only via npm hoisting of the unified `radix-ui` package). Fragile under strict/pnpm installs; should use `@/components/ui/separator`. Build currently passes. | `[V]` grep |
| C16 | **B** | `components/ui/sonner.tsx` | Styled Toaster wrapper is unused — `(layout-pages)/layout.tsx:3` imports `Toaster` directly from `"sonner"`. Additionally `ui/sonner.tsx:3` uses `useTheme` from `next-themes`, which the app does not use (custom ThemeProvider instead) → latent incompatibility if ever adopted. | `[V]` grep |
| C17 | **C** | 9 files (list in §13) | Orphaned/duplicate source files with zero importers, incl. backup file `TrafficOverviewCard-old.tsx` and exact duplicate `ui/use-mobile.ts` of `hooks/use-mobile.ts`. Preserved untouched. | `[V]` grep (zero-import check) |
| C18 | **C** | `app-sidebar.tsx:387` | Sidebar label typo "Noitifications" (route/folder `ui-components/sooner/` is also a misspelling of "sonner" — renaming is a routing change and is NOT proposed). | `[V]` read |
| C19 | **C** | `tables/data-tables/data.ts:56-63` | Duplicate seed rows (identical "James Wilson" entries). | `[S]` |

---

## 11. FINDINGS — POTENTIAL RISKS (not confirmed bugs; documented only)

| ID | Location | Risk |
|---|---|---|
| R1 | `eCommerce/order-list/OrderList.tsx:137-142,456,556`; `eCommerce/customer-list/CustomerList.tsx:134-135,145-150,471,562,1095` | `toLocaleDateString/toLocaleString(undefined, …)` in statically prerendered pages: HTML is generated with the build machine's locale but hydrated with each visitor's locale → hydration mismatch warnings whenever they differ. (`calendar-utils.ts` correctly pins `"en-US"`.) `[S]` |
| R2 | `applications/calendar/calendar-data.ts:96-107` + `use-calendar.ts:25` | Seed events derive from `new Date()` at module init in a `useState` initializer → prerender bakes the build-time date into the exported HTML; client hydrates with the real current date → guaranteed first-paint mismatch (React recovers; prerendered calendar shows build-date week until hydration). `[V]` |
| R3 | `layout/Footer.tsx:7` | `{new Date().getFullYear()}` in a server component under static export → year frozen at build time; a deployment spanning New Year renders a stale year. `[V]` |
| R4 | `components/layout/admin-layout.tsx:16-24` | Sidebar starts `open=true` then collapses after mount on mobile (`resize` handler) → visible layout jump/flash on first mobile paint. `[V]` |
| R5 | `components/nav-main.tsx:77,95,113` | Three `useLayoutEffect` calls in an SSR'd client component → "useLayoutEffect does nothing on the server" warnings during prerender; effects skipped on first paint. `[V]` |
| R6 | `app/layout.tsx:129-133` (CDN CSS); `UserDropdown.tsx:16`, `app-sidebar.tsx:44` (untitledui.com avatar), `VisitorsByCountryCard.tsx:94` (flagcdn), media-object demos (randomuser.me), `widgets/statistics/page.tsx` (i.pravatar.cc), `product-orders-table.tsx:116-117` (images.unsplash.com), `ProjectTable.tsx` (jsdelivr devicon) | Runtime dependency on external CDNs/hosts for styling and imagery; offline or blocked CDN = missing icons/fonts/avatars. Cosmetic only, but affects fidelity. `[V/S]` |
| R7 | Multiple files (ProductTable, CategoryList, ProductGrid, ProductList, OrderDetails, `dark-blue`/`gaussian-black` body backgrounds) | Hardcoded `/pulse-ui-next/...` asset paths and plain `<img>` (85 `no-img-element` lint hits, no `next/image`); correct today but breaks if `basePath` ever changes. `[V/S]` |
| R8 | `components/ui/sidebar.tsx:85` | Writes a `sidebar_state` cookie on every toggle; nothing reads it back (admin-layout controls state via resize handler) — dead persistence path. `[S]` |
| R9 | `forms/file-upload/file-item.tsx:17`; `FileUpload01.tsx` | `URL.createObjectURL(file)` called in render body (new blob URL per render, revoked only in an effect); upload progress keyed by `file.name` (duplicate filenames collide). `[S]` |
| R10 | `forms/form-repeat/FormRepeater.tsx:19,25` | Row ids from `Date.now()` — two rows added in the same millisecond collide. `[S]` |
| R11 | `charts/recharts/ChartPieDonutActive.tsx:5` | Deep import `recharts/types/polar/Pie` — internal module path, may break on recharts upgrades. `[S]` |
| R12 | `forms/form-wizard/*` | No per-step validation; "Finish" on step 4 just calls `next()` (capped — no-op); terms checkbox not enforced. Combined with C1, the wizard flow is fragile. `[S]` |
| R13 | `forms/form-layouts/layouts/*`, `forms/checkboxes-radios/FilterCard.tsx:94-98` | `alert()` used as submit feedback in all 5 layout demos. `[S]` |
| R14 | `next.config.ts` | `module.exports` at the end of a `.ts` config (works — build-verified — but unconventional for `"type": "module"`). `[V]` |
| R15 | `src/app/layout.tsx:91,104` | Metadata references `og-image.png` on the production domain; no `og-image.png` exists in `public/` (may be hosted externally — unverified). `[S]` |
| R16 | Process | `npm run lint` reports 78 errors, but `next build` does not run ESLint (Next 16), so lint errors never block builds. Baseline recorded; no config change made. `[V]` |

---

## 12. FINDINGS — INCOMPLETE / PLACEHOLDER FUNCTIONALITY (by design or unfinished)

These are template-demo behaviors, not necessarily defects. Listed so the owner can decide. **Nothing was wired up.**

- `eCommerce/add-product/AddProduct.tsx` — fully static form: no state, no submit handler; Publish/Discard are no-ops. `[S]`
- `eCommerce/order-details/OrderDetails.tsx`, `customer-details/CustomerDetails.tsx`, `eCommerce/invoice/InvoicePage.tsx` — buttons (Invoice/PDF/Update status/Refund/Cancel/Edit/Delete/Send message/Print/Download) have no handlers; status Select uncontrolled. `[S]` (contrast: `applications/invoice` does wire `window.print()`)
- Dashboard card dropdown menus (Refresh/Export/View report) — no-op items in `TrafficSourcesCard`, `VisitorsByCountryCard`, `NewVsReturningCard`, `sales-overview`, `top-categories`, `transactions-card`, `order-status`, `sales-by-channel`; row "View"/"Edit" in `product-orders-table` (Delete is wired); "View all …" buttons in `TopPagesCard`, `transactions-card`, `notification-dropdown`, `appLauncher-dropdown`; `nav-projects.tsx` item actions. `[S]`
- `tables/advance-tables/ProductTable.tsx:383-385` — Import/Export/Add Product inert; date filter input has no value/onChange. `[S]`
- Account pages (`UserProfile`, `EditProfile`, `PasswordSettings`, `NotificationSettings`) — Save buttons lack submit actions (the latter two do have client-side validation gating). `[S]`
- `PricingPage` CTAs; `Chatbox` send/search; `CategoryList` image upload input is never read on submit (`:812`); `OrderList`/`CustomerList` collect a validated "notes" field but never persist it to the created row. `[S]`
- Auth pages: explicit `// TODO: wire up to your auth provider` comments in all Cover auth pages and `ComingSoon.tsx`; `BasicLoginPage.tsx:101` `<form>` has **no onSubmit**; `VerifyEmailForm.tsx` resend is a no-op timer reset. `[V/S]`
- `dashboard/analytics/page.tsx:15,71-75` — `DevicesCard` is lazy-imported but its render block is commented out (disabled feature). `[V]`
- `eCommerce/order-details`, `applications/invoice` "Back" flows target lists that exist, but `InvoiceCard.tsx` "Back to invoices" targets no existing list route. `[S]`
- `language-dropdown.tsx` — "languages" are actually country names (placeholder mislabeled). `[S]`

---

## 13. ORPHANED / DUPLICATE FILES (zero importers — PRESERVED, deletion requires authorization)

1. `src/app/(layout-pages)/dashboard/analytics/TrafficOverviewCard-old.tsx` — backup copy of `TrafficOverviewCard.tsx`.
2. `src/app/(layout-pages)/dashboard/eCommerce/earnings-breakdown.tsx` — unreferenced; `CardContent` is empty (incomplete placeholder).
3. `src/components/calendar/shadcn-full-calendar.tsx`, `event-dialog.tsx`, `types.ts` — orphaned calendar kit (only user of the four `@fullcalendar/*` packages).
4. `src/components/file-manager/data.ts`, `file-card.tsx`, `folder-card.tsx`, `sidebar.tsx`, `toolbar.tsx` — orphaned; `FileManagerPage.tsx` implements its own.
5. `src/components/team-switcher.tsx` — orphaned.
6. `src/components/nav-secondary.tsx` — orphaned.
7. `src/components/ui/use-mobile.ts` — exact duplicate of `src/hooks/use-mobile.ts`; no importer.
8. `src/app/(layout-pages)/dashboard/analytics/DevicesCard.tsx` — imported (lazy) but never rendered (see §12).

---

## 14. BASELINE QUALITY CHECK RESULTS (recorded; nothing changed to make them pass)

| Check | Command | Result |
|---|---|---|
| TypeScript | `npx tsc --noEmit` | **PASS — 0 errors** |
| ESLint | `npm run lint` (flat config) | **224 problems (78 errors, 146 warnings) across 103 files.** Top rules: `@next/next/no-img-element` 85, `@typescript-eslint/no-explicit-any` 49, `no-unused-vars` 31, `jsx-a11y/alt-text` 17, `react/no-unescaped-entities` 13, `react-hooks/set-state-in-effect` 11, `react-hooks/incompatible-library` 9, `react-hooks/refs` 4, `no-unused-expressions` 3. |
| Production build | `npm run build` | **PASS** — exit 0, no warnings in log; 70 static entries exported to `out/` |
| Runtime | — | No runtime verification performed (static-export template with demo data; no test framework exists). Confirmed issue C1 is asserted from code reading, not from a live run. |
| Git after checks | `git status --porcelain` | Clean — installs/builds touched only gitignored `node_modules/`, `.next/`, `out/`, `tsbuildinfo` |

---

## 15. NOT VERIFIED / UNKNOWN

- Live runtime behavior (clicking through routes in a browser) was not exercised; findings above are from static analysis + successful compile/build.
- Availability of external URLs (avatars, flags, CDN CSS, production og-image) was not fetched.
- Tailwind 4 compiled output was not inspected class-by-class (e.g., `h-88`, `w-18`, `supports-[backdrop-filter]:*` assumed valid under v4).
- Exact behavior of zustand-persist ↔ boot-script handshake was read and judged plausible, not runtime-tested.
- ApexCharts runtime rendering and theme MutationObserver updates were not executed.

---

## 16. PHASE 1 COMPLIANCE STATEMENT

- **Source code modified:** NONE. **Files deleted/renamed/moved:** NONE. **Dependencies installed/removed/upgraded:** NONE (dependencies were installed into `node_modules` from the committed lockfile via `npm ci`; manifests untouched). **Configuration changes:** NONE. **Commits/pushes:** NONE.
- **Files created by this audit:** `PULSE_UI_AUDIT_REPORT.md` (this file) and `PULSE_UI_PRESERVATION_RULES.md` — both requested by the owner, both new at HEAD, neither overwrote anything.
- Verification: `git status --porcelain` shows only the two new untracked `.md` files; `git diff` is empty.

---

## 17. CANDIDATE FIX BATCHES (awaiting explicit owner authorization — NO work has started)

Grouped so the owner can authorize any subset. Each batch is designed to be minimal-scope.

1. **Runtime crash fix** — C1 (one prop or one handler; 1–2 lines in 2 files).
2. **Asset path corrections** — C2, C3, C10 (`/pulse-ui/` → `/pulse-ui-next/`, add missing placeholder asset or change fallback target).
3. **Dead-link corrections** — C4, C5, C6, C7, C8, C9 (point to existing routes or remove items).
4. **Typo/cosmetic fixes** — C11, C18 (+ optional "sooner" naming, left untouched by default).
5. **Console.log / unused-import cleanup** — C12, C13, C14.
6. **Hydration-risk hardening** — R1 (pin `en-US` formatting), R2 (stable seed date), R3 (client-side year), R4/R5.
7. **Orphan file removal** — §13 list (destructive; requires explicit approval).
8. **Dependency pruning** — §3 unused packages (modifies `package.json`/lockfile; requires explicit approval).
9. **Lint hygiene** — reduce the 224 baseline problems (touches many files; requires explicit approval and a decision on whether lint should gate builds).

Silence is not approval. If no batch is authorized, the repository remains exactly as audited at commit `ba05bd3`.
