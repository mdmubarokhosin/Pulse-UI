"use client"

import {
  Download,
  Dumbbell,
  EllipsisVertical,
  FileSpreadsheet,
  FileText,
  Flame,
  RefreshCw,
  Shirt,
  Smartphone,
  Sofa,
  Sparkles,
  TrendingDown,
  TrendingUp,
  type LucideIcon,
} from "lucide-react"

import { useTranslation } from "@/i18n/use-translation"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type Category = {
  name: string
  sales: number
  change: number
  icon: LucideIcon
  tile: string
  bar: string
}

// Placeholder data, replace with real numbers.
// The sales add up to $48,250, the same as June revenue in Sales Overview.
const categories: Category[] = [
  {
    name: "Electronics",
    sales: 16890,
    change: 14.2,
    icon: Smartphone,
    tile: "border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400",
    bar: "bg-violet-500",
  },
  {
    name: "Fashion",
    sales: 12560,
    change: 9.6,
    icon: Shirt,
    tile: "border-pink-500/20 bg-pink-500/10 text-pink-600 dark:text-pink-400",
    bar: "bg-pink-500",
  },
  {
    name: "Home & Living",
    sales: 8690,
    change: 5.1,
    icon: Sofa,
    tile: "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    bar: "bg-amber-500",
  },
  {
    name: "Beauty",
    sales: 5790,
    change: 11.8,
    icon: Sparkles,
    tile: "border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-400",
    bar: "bg-sky-500",
  },
  {
    name: "Sports",
    sales: 4320,
    change: -3.2,
    icon: Dumbbell,
    tile: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    bar: "bg-emerald-500",
  },
]

const orders = 1800
const total = categories.reduce((sum, c) => sum + c.sales, 0)

const money = (value: number) => `$${value.toLocaleString("en-US")}`

export default function TopCategories() {
  const { t } = useTranslation()

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="mb-0 text-lg font-medium">{t("Top Categories")}</CardTitle>
          <CardDescription>{t("Best selling product categories")}</CardDescription>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("More options")}
              className="rounded-full [&_svg]:size-5"
            >
              <EllipsisVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <FileText />
              {t("View all categories")}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download />
              {t("Download report")}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileSpreadsheet />
              {t("Export as CSV / PDF")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <RefreshCw />
              {t("Refresh data")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-6">
        {/* Total + share bar (the only bar in the card) */}
        <div className="space-y-3">
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-semibold tabular-nums">
              {money(total)}
            </h2>
            <span className="text-sm text-muted-foreground">
              {t("from {0} orders", [orders.toLocaleString("en-US")])}
            </span>
          </div>

          <div
            role="img"
            aria-label={t("Sales share by category")}
            className="flex h-2 gap-1 overflow-hidden rounded-full"
          >
            {categories.map((c) => (
              <div
                key={c.name}
                title={t(c.name)}
                className={cn("h-full rounded-full", c.bar)}
                style={{ width: `${(c.sales / total) * 100}%` }}
              />
            ))}
          </div>
        </div>

        {/* Category list */}
        <div className="flex flex-1 flex-col justify-between gap-3.5">
          {categories.map((c) => {
            const Icon = c.icon
            const share = Math.round((c.sales / total) * 100)
            const positive = c.change >= 0
            const TrendIcon = positive ? TrendingUp : TrendingDown

            return (
              <div key={c.name} className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-lg border",
                    c.tile
                  )}
                >
                  <Icon className="size-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{t(c.name)}</p>
                  <p className="text-xs text-muted-foreground">
                    {share}% {t("of sales")}
                  </p>
                </div>

                <div className="flex shrink-0 flex-col items-end gap-0.5">
                  <span className="text-sm font-semibold tabular-nums">
                    {money(c.sales)}
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-0.5 text-xs font-medium",
                      positive
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-rose-600 dark:text-rose-400"
                    )}
                  >
                    <TrendIcon className="size-3.5" />
                    {Math.abs(c.change)}%
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>

      <CardFooter className="flex-wrap gap-x-2 gap-y-1 border-t text-sm">
        <Flame className="size-4 text-orange-500" />
        <span className="text-muted-foreground">{t("Best seller")}</span>
        <span className="font-medium">{t("Wireless Earbuds Pro")}</span>
        <span className="ml-auto text-muted-foreground">{t("342 sold")}</span>
      </CardFooter>
    </Card>
  )
}