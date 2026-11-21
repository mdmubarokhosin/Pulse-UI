"use client"

import { ArrowRight, Clock, PackagePlus, Truck, TrendingUp } from "lucide-react"

import { useTranslation } from "@/i18n/use-translation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"


// Placeholder numbers, replace with real data
const todaySales = 2480
const salesChange = 18

const goal = { current: 48000, target: 60000 }
const goalPercent = Math.round((goal.current / goal.target) * 100)

const stats = [
  { label: "Orders", value: "1.8k", color: "text-violet-600 dark:text-violet-400" },
  { label: "Revenue", value: "$48k", color: "text-sky-600 dark:text-sky-400" },
  { label: "Customers", value: "640", color: "text-pink-600 dark:text-pink-400" },
]

export default function EcommerceWelcomeCard() {
  const { t } = useTranslation()

  return (
    <Card className="relative h-full overflow-hidden">
      {/* Grid pattern, fades out from the top-right corner */}
      <div
        className="pointer-events-none absolute inset-0 text-foreground opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at top right, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top right, black 10%, transparent 70%)",
        }}
      />

      <CardContent className="relative flex flex-1 items-center justify-between gap-4">
        {/* Content */}
        <div className="min-w-0 flex-1 space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">
              {t("Welcome back, Alex")}{" "}
              <span role="img" aria-label={t("wave")}>
                👋
              </span>
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("Your store made")}{" "}
              <span className="font-semibold text-foreground">
                ${todaySales.toLocaleString()}
              </span>{" "}
              {t("today")}
              <span className="ml-1.5 inline-flex items-center gap-0.5 font-medium text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="size-3.5" />
                {salesChange}%
              </span>
            </p>
          </div>

          {/* Monthly goal */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium">{t("Monthly goal")}</span>
              <span className="text-muted-foreground">
                {goalPercent}% {t("of")} ${goal.target.toLocaleString()}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500"
                style={{ width: `${goalPercent}%` }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 divide-x rounded-lg border">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-3">
                <p
                  className={`text-base leading-tight font-semibold ${stat.color}`}
                >
                  {stat.value}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {t(stat.label)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <img
          src="/images/welcome-banner-2.png"
          alt={t("Store illustration")}
          loading="lazy"
          className="hidden w-58 shrink-0 object-contain md:block"
        />
      </CardContent>

      <CardFooter className="relative flex-wrap items-center justify-between gap-3 border-t bg-transparent">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            className="gap-2 border-0 bg-linear-to-r from-pink-500 to-purple-600 text-white hover:opacity-90"
          >
            <PackagePlus className="size-4" />
            {t("Add product")}
          </Button>

          <Button size="sm" variant="outline" className="gap-2">
            {t("View orders")}
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 font-medium text-amber-600 dark:text-amber-400">
            <Truck className="size-3.5" />
            {t("12 orders to ship")}
          </span>

          <span className="hidden items-center gap-1 sm:inline-flex">
            <Clock className="size-3.5" />
            {t("Updated 5 min ago")}
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}