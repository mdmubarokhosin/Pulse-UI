import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Noto_Serif_Bengali } from "next/font/google"
import { ThemeProvider } from "@/providers/theme-provider"
import UIThemeProvider from "@/providers/ui-theme-provider"
import { LanguageProvider } from "@/providers/language-provider"
// src/app/layout.tsx
import { TooltipProvider } from "@/components/ui/tooltip"

const themeScript = `
(function () {
  var root = document.documentElement;
  try {
    var t = localStorage.getItem("theme") || "dark";
    var resolved = t === "system"
      ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : t;

    var ui = "dark-blue";
    var raw = localStorage.getItem("ui-theme");
    if (raw) {
      var parsed = JSON.parse(raw);
      if (parsed && parsed.state && typeof parsed.state.theme === "string") {
        ui = parsed.state.theme;
      }
    }

    root.classList.remove("light", "dark");
    root.classList.add(resolved);
    if (ui) root.classList.add(ui);
  } catch (e) {
    root.classList.add("dark", "dark-blue");
  }
})();
`

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali", "latin", "latin-ext"],
  display: "swap",
})

const SITE_URL = "https://www.mdmubarok.com/"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mdmubarok.com"),

  title: {
    default: "Pulse UI - Next.js 16 + shadcn/ui Admin Template",
    template: "%s | Pulse UI",
  },

  description:
    "Pulse UI is a modern Next.js 16 admin dashboard template built with React 19, shadcn/ui, Tailwind CSS 4 and TypeScript. Includes eCommerce and analytics dashboards, tables, forms, charts and dark mode.",

  keywords: [
    "next.js admin template",
    "nextjs 16 admin dashboard",
    "shadcn ui admin dashboard",
    "react 19 dashboard",
    "tailwind css admin template",
    "typescript admin template",
    "next.js dashboard template",
  ],

  authors: [{ name: "MD MUBAROK", url: "https://www.mdmubarok.com" }],
  creator: "MD MUBAROK",
  publisher: "MD MUBAROK",

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    type: "website",
    siteName: "Pulse UI",
    title: "Pulse UI - Next.js 16 + shadcn/ui Admin Template",
    description:
      "Modern Next.js 16 admin template with shadcn/ui, Tailwind CSS 4 and TypeScript. Dashboards, charts, apps and dark mode.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}og-image.png`,
        width: 1200,
        height: 630,
        alt: "Pulse UI - Next.js Admin Template",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pulse UI - Next.js 16 Admin Template",
    description:
      "Next.js 16 admin template with shadcn/ui, Tailwind CSS 4 and TypeScript.",
    images: [`${SITE_URL}og-image.png`],
  },

  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d4aff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.boxicons.com/fonts/basic/boxicons.min.css"
        />
      </head>
      <body className={`${notoSerifBengali.className} antialiased`}>
        <ThemeProvider defaultTheme="dark">
          <UIThemeProvider>
            <LanguageProvider>
              <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
            </LanguageProvider>
          </UIThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}