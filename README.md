# Pulse UI — Next.js 16 Admin Dashboard Template

Pulse UI হলো একটি সম্পূর্ণ প্রোডাকশন-রেডি অ্যাডমিন ড্যাশবোর্ড টেমপ্লেট — **Next.js 16 (App Router, Static Export) + React 19 + TypeScript (strict) + Tailwind CSS 4 + shadcn/ui (radix-nova)**।

- **৬৮টি রেডি পেজ:** Analytics ও eCommerce ড্যাশবোর্ড, সম্পূর্ণ eCommerce মডিউল (প্রোডাক্ট, অর্ডার, কাস্টমার, ইনভয়েস), Calendar, Chatbox, File Manager, Forms (১০টি ভ্যারিয়েন্ট), Tables, Charts (Recharts + ApexCharts), Icons, UI Components, Widgets, Auth (Basic + Cover × ৬ পেজ), Error পেজ
- **Select language (English + বাংলা):** হেডারের ফ্ল্যাগ ড্রপডাউন (auth/error পেজে ভাসমান বাটন) থেকে লাইভ ভাষা সুইচ — **সম্পূর্ণ template A to Z বাংলায় অনূদিত** (৭২টি পেজের প্রতিটি শব্দ: সাইডবার, ড্যাশবোর্ড, ই-কমার্স, চার্ট, ফর্ম, টেবিল, UI কম্পোনেন্ট, উইজেট, ক্যালেন্ডার/চ্যাট/ফাইল ম্যানেজার, অ্যাকাউন্ট, auth/error, ক্যালেন্ডারের মাস/বার পর্যন্ত); পছন্দ localStorage-এ persist থাকে
- **সম্পূর্ণ মোবাইল রেসপনসিভ** — সব রুট ৩২০px থেকে ১৯২০px ভিউপোর্টে পরীক্ষিত, কোনো horizontal overflow নেই
- **ফন্ট:** সর্বত্র **Noto Serif Bengali** (বাংলা + ল্যাটিন সাপোর্ট, next/font চালু সেল্ফ-হোস্টেড woff2)
- **ব্র্যান্ডিং:** ক্রেডিট ও ফুটার — **MD MUBAROK** (https://www.mdmubarok.com/)
- **লাইভ থিম সিস্টেম:** Dark Blue Nebula / Gaussian Black / Classic Light / Semi Dark + light-dark টগল
- **ডিপ্লয়-রেডি:** Cloudflare Pages, GitHub Pages, Netlify, Vercel বা যেকোনো স্ট্যাটিক হোস্ট

---

## দ্রুত শুরু (General)

```bash
npm install        # ডিপেন্ডেন্সি ইনস্টল
npm run dev        # ডেভেলপমেন্ট সার্ভার → http://localhost:3000
npm run build      # প্রোডাকশন বিল্ড → out/ ডিরেক্টরিতে স্ট্যাটিক এক্সপোর্ট
```

প্রোডাকশন বিল্ড লোকালি পরীক্ষা করতে:

```bash
npx serve out -l 3000
# অথবা
python3 -m http.server 3000 -d out
```

---

## Termux (Android) এ লোকাল ডিপ্লয়

Termux চালু করে ধাপে ধাপে:

```bash
# ১. প্যাকেজ আপডেট + Node.js ইনস্টল
pkg update -y && pkg upgrade -y
pkg install nodejs-lts git -y

# ২. প্রজেক্ট ডাউনলোড (zip আনজিপ করে বা repo clone)
#    zip হলে:
pkg install unzip -y
unzip pulse-ui-production-ready.zip -d pulse-ui
cd pulse-ui

# ৩. ডিপেন্ডেন্সি ইনস্টল
npm install

# ৪a. ডেভেলপমেন্ট মোড (হট রিলোড সহ)
npm run dev
#    → ব্রাউজারে http://localhost:3000

# ৪b. অথবা প্রোডাকশন বিল্ড + স্ট্যাটিক সার্ভ
npm run build
npx serve out -l 3000
#    অথবা: python3 -m http.server 3000 -d out
```

> টিপ: Termux-এ `npx serve` না চললে `npm install -g serve` চালিয়ে নিন। একই নেটওয়ার্কের ফোন/পিসি থেকে দেখতে চাইলে: `npx serve out -l 3000 --listen tcp:0.0.0.0` এবং ফোনের IP ব্যবহার করুন (`ifconfig` দিয়ে দেখুন)।

---

## Cloudflare Pages এ ডিপ্লয়

এই প্রজেক্ট `output: "export"` ব্যবহার করে — অর্থাৎ `npm run build` চালালে `out/` ডিরেক্টরিতে **সম্পূর্ণ স্ট্যাটিক সাইট** তৈরি হয় (কোনো সার্ভার/API লাগে না)।

**ধাপ ১ — Repo আপলোড:** পুরো সোর্স কোড (zip-এর ভেতরের সব ফাইল) আপনার GitHub repo-তে push করুন:

```bash
git init
git add .
git commit -m "Pulse UI production ready"
git remote add origin https://github.com/<আপনার-ইউজারনেম>/<repo>.git
git push -u origin main
```

**ধাপ ২ — Cloudflare Pages কনফিগার:**
1. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**
2. আপনার repo সিলেক্ট করুন
3. Build সেটিংস:
   - **Framework preset:** `None`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Environment variable:** `NODE_VERSION` = `22` (Next 16-এর জন্য Node ≥ 20.9 দরকার)
4. **Save and Deploy** → `https://<আপনার-প্রজেক্ট>.pages.dev` লাইভ হয়ে যাবে

পরবর্তী প্রতিটি git push-এ Cloudflare স্বয়ংক্রিয়ভাবে রি-বিল্ড করবে।

> কাস্টম ডোমেইন: Pages প্রজেক্ট → Custom domains → আপনার ডোমেইন যোগ করুন। কোনো basePath কনফিগ দরকার নেই — সাইট রুট থেকেই সার্ভ হয়।

---

## ভাষা সিস্টেম (Select language)

হেডারের ফ্ল্যাগ বাটনে (auth/error পেজে ডান-উপরে ভাসমান বাটন) ক্লিক করে **English** অথবা **বাংলা (বাংলাদেশ)** সিলেক্ট করা যায় — **সম্পূর্ণ template A to Z** সাথে সাথেই রূপান্তরিত হয় এবং পছন্দটি `localStorage` (`language` key, zustand persist) এ সেভ থাকে। `<html lang>` অ্যাট্রিবিউটও স্বয়ংক্রিয়ভাবে আপডেট হয়।

**কভারেজ:** ~২,৫৩৬ এন্ট্রির বাংলা dictionary — সব পেজের শিরোনাম, বাটন, ফর্ম লেবেল, টেবিল হেডার, চার্টের ক্যাটাগরি/সিরিজ, ডেমো ডেটা (প্রোডাক্ট, নাম, স্ট্যাটাস, মাস), ভ্যালিডেশন মেসেজ, চ্যাট বার্তা, FAQ, ইনভয়েস, ক্যালেন্ডার ইভেন্ট — প্রতিটি user-facing স্ট্রিং। Calendar কম্পোনেন্ট date-fns `bn` locale ব্যবহার করে (মাস/বার বাংলায়)। শুধু প্রযুক্তিগত স্ট্রিং (ইমেইল, ফাইলের নাম, CSS, id) ইংরেজিতেই থাকে — সেগুলো অনুবাদযোগ্য নয়।

**নতুন ভাষা বা নতুন অনুবাদ যোগ করতে:**

1. অনুবাদ যোগ করুন `src/i18n/dictionaries.ts` ফাইলের `bn` অবজেক্টে — **key হলো ইংরেজি স্ট্রিং**, value বাংলা:
   ```ts
   "Monthly goal": "মাসিক লক্ষ্য",
   ```
2. যেকোনো কম্পোনেন্টে অনুবাদ ব্যবহার করতে:
   ```tsx
   import { useTranslation } from "@/i18n/use-translation"
   const { t } = useTranslation()
   <h1>{t("Monthly goal")}</h1>
   ```
   key খুঁজে না পেলে ইংরেজি টেক্সটই দেখাবে (graceful fallback) — তাই ধীরে ধীরে অনুবাদ যোগ করা যায়।
3. নতুন ভাষা (যেমন French) যোগ করতে: `src/store/language.store.ts`-এ `Locale` টাইপ বাড়ান, `dictionaries.ts`-এ নতুন অবজেক্ট যোগ করুন, `use-translation.ts`-এ হ্যান্ডেল করুন এবং `language-dropdown.tsx`-এর `languages` অ্যারেতে এন্ট্রি + ফ্ল্যাগ (`public/images/countries/`) যোগ করুন।

> নোট: স্ট্যাটিক এক্সপোর্টে SSR HTML সবসময় ডিফল্ট (English) ভাষায় আসে — যারা আগে বাংলা সিলেক্ট করেছে তাদের জন্য React hydrate হওয়ার পর টেক্সট বাংলায় সুইচ হয় (~১০০–৩০০ms)।

---

## প্রজেক্ট স্ট্রাকচার (ভবিষ্যৎ এডিটের জন্য)

```
src/
├─ app/
│  ├─ layout.tsx                  # রুট লেআউট: মেটাডেটা, ফন্ট (Noto Serif Bengali), থিম বুট-স্ক্রিপ্ট
│  ├─ globals.css                 # ডিজাইন টোকেন + ৬টি থিম ভ্যারিয়েন্ট (এটাই ডিজাইনের source of truth)
│  ├─ (layout-pages)/             # সব মেইন পেজ (AdminLayout shell সহ)
│  │  └─ <section>/<page>/page.tsx + PageComponent.tsx
│  └─ (no-layout-pages)/          # Auth + Error পেজ (ফুল-স্ক্রিন, শেল ছাড়া)
├─ components/
│  ├─ ui/                         # ৬৩টি shadcn/ui প্রিমিটিভ (button, card, dialog...)
│  ├─ layout/                     # admin-layout, Header, Footer
│  └─ ...                         # app-sidebar, nav-main, dropdowns, data-table ইত্যাদি
├─ providers/                     # ThemeProvider (light/dark), UIThemeProvider (স্কিন), LanguageProvider (html lang)
├─ i18n/                          # dictionaries.ts (bn অনুবাদ), use-translation.ts (t() হুক)
├─ store/                         # zustand persist: ui-theme.store.ts (স্কিন), language.store.ts (ভাষা)
├─ hooks/                         # useIsMobile, useHighlightedCode
└─ lib/                           # cn() হেল্পার, shiki highlighter
```

**নতুন পেজ যোগ করতে:** `(layout-pages)/` এর ভেতরে ফোল্ডার + `page.tsx` বানালেই সাইডবার লিংক কাজ করবে (`src/components/app-sidebar.tsx`-এ nav item যোগ করুন)।

**থিম বদলাতে:** `globals.css`-এর `.dark-blue` / `.gaussian-black` / `.classic-light` টোকেন ব্লক এডিট করুন। স্কিনের তালিকা `src/components/theme-customizer.tsx`-এর `THEMES` অ্যারেতে।

**শেপ/কালার:** Tailwind 4 CSS-first — কোনো `tailwind.config` ফাইল নেই; সব `globals.css`-এর `@theme inline` ব্লকে।

---

## নন-নেগোশিয়েবল প্রিজার্ভেশন রুলস

`PULSE_UI_PRESERVATION_RULES.md` ও `PULSE_UI_AUDIT_REPORT.md` দুটি ডকুমেন্ট এই রিপোর রক্ষণাবেক্ষণের স্থায়ী পলিসি ও ফুল অডিট রেকর্ড ধারণ করে — ভবিষ্যতে কোনো AI/ডেভেলপার এডিট করার আগে এগুলো পড়ে নিন। সারসংক্ষেপ: **যা আছে তা-ই source of truth; শুধু যা অনুমোদন করা হয় তা-ই বদলান; minimal diff রাখুন।**

---

## স্ক্রিপ্ট

| কমান্ড | কাজ |
|---|---|
| `npm run dev` | ডেভেলপমেন্ট সার্ভার |
| `npm run build` | প্রোডাকশন স্ট্যাটিক এক্সপোর্ট → `out/` |
| `npm run lint` | ESLint চেক |
| `npx tsc --noEmit` | TypeScript চেক |

## টেক স্ট্যাক

Next.js 16.1.6 · React 19.2.3 · TypeScript 5 · Tailwind CSS 4.3.5 · shadcn/ui (radix-nova) · Zustand 5 · TanStack Table 8 · Recharts 3 + ApexCharts 5 · Sonner · framer-motion · shiki
