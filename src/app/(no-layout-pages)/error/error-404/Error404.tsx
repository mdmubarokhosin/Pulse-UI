"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowUpRight,
  Home,
  LayoutDashboard,
  LifeBuoy,
  ShoppingCart,
  Users,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTranslation } from "@/i18n/use-translation"

const quickLinks = [
  { href: "/dashboard/analytics", label: "Dashboard", text: "Your store overview", icon: LayoutDashboard },
  { href: "/eCommerce/order-list", label: "Orders", text: "Track recent orders", icon: ShoppingCart },
  { href: "/eCommerce/customer-list", label: "Customers", text: "Manage your customers", icon: Users },
  { href: "/faq", label: "Help center", text: "Guides and support", icon: LifeBuoy },
]

export default function Error404() {
  const { t } = useTranslation()
  const router = useRouter()
  const reduceMotion = useReducedMotion()

  // One orchestrated entrance: each block fades up in sequence
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
  }
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background/10 px-6 py-16">
      {/* Background grid, faded toward the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.14)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />
      {/* Soft color glow behind the numerals */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      {/* Theme toggle */}
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-2xl text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md"
        >
          {t("Error 404")}
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-4 select-none bg-gradient-to-b from-foreground to-foreground/10 bg-clip-text text-[120px] font-bold leading-none tracking-tighter text-transparent sm:text-[200px]"
        >
          404
        </motion.h1>

        <motion.div variants={item} className="-mt-2 space-y-3 sm:-mt-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t("This page took a wrong turn")}
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
            {t("We couldn’t find the page you’re looking for. It may have been moved, renamed or never existed. Check the address, or pick one of the links below.")}
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-xl sm:w-auto"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("Go back")}
          </Button>
          <Button asChild size="lg" className="w-full rounded-xl sm:w-auto">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              {t("Back to home")}
            </Link>
          </Button>
        </motion.div>

        {/* Quick links */}
        <motion.div variants={item} className="mt-12 grid gap-3 text-left sm:grid-cols-2">
          {quickLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 rounded-xl border bg-background/60 p-4 backdrop-blur-md transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-muted/50">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{t(link.label)}</p>
                  <p className="truncate text-xs text-muted-foreground">{t(link.text)}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            )
          })}
        </motion.div>
      </motion.main>
    </div>
  )
}