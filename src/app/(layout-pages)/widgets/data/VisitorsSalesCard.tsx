"use client"

import { useState } from "react"
import { Gauge, ShieldHalf, TrendingUp, type LucideIcon } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "@/i18n/use-translation"

export const description = "An area chart comparing visitors and sales"

type Range = "weekly" | "monthly" | "yearly"

type ChartItem = {
  label: string
  visitors: number
  sales: number
}

const stats: {
  label: string
  caption: string
  value: string
  icon: LucideIcon
  iconClass: string
  valueClass: string
}[] = [
  {
    label: "Completed Orders",
    caption: "Last 7 days",
    value: "+128",
    icon: Gauge,
    iconClass: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    valueClass: "text-green-600 dark:text-green-400",
  },
  {
    label: "Processing Orders",
    caption: "Currently active",
    value: "46",
    icon: ShieldHalf,
    iconClass: "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400",
    valueClass: "text-yellow-600 dark:text-yellow-400",
  },
]

const periodChange = 2.5

export default function VisitorsSalesCard() {
  const { t } = useTranslation()
  const [range, setRange] = useState<Range>("monthly")

  const chartData: Record<Range, ChartItem[]> = {
    weekly: [
      { label: t("Mon"), visitors: 40, sales: 60 },
      { label: t("Tue"), visitors: 55, sales: 75 },
      { label: t("Wed"), visitors: 50, sales: 70 },
      { label: t("Thu"), visitors: 65, sales: 90 },
      { label: t("Fri"), visitors: 70, sales: 95 },
      { label: t("Sat"), visitors: 60, sales: 80 },
      { label: t("Sun"), visitors: 75, sales: 110 },
    ],
    monthly: [
      { label: t("Jan"), visitors: 80, sales: 120 },
      { label: t("Feb"), visitors: 100, sales: 180 },
      { label: t("Mar"), visitors: 70, sales: 140 },
      { label: t("Apr"), visitors: 130, sales: 220 },
      { label: t("May"), visitors: 120, sales: 200 },
      { label: t("Jun"), visitors: 150, sales: 260 },
      { label: t("Jul"), visitors: 130, sales: 230 },
      { label: t("Aug"), visitors: 170, sales: 300 },
      { label: t("Sep"), visitors: 140, sales: 250 },
      { label: t("Oct"), visitors: 190, sales: 340 },
      { label: t("Nov"), visitors: 160, sales: 290 },
      { label: t("Dec"), visitors: 200, sales: 360 },
    ],
    yearly: [
      { label: "2021", visitors: 1200, sales: 1800 },
      { label: "2022", visitors: 1500, sales: 2300 },
      { label: "2023", visitors: 1800, sales: 2900 },
      { label: "2024", visitors: 2100, sales: 3400 },
      { label: "2025", visitors: 2400, sales: 3900 },
    ],
  }

  const chartConfig = {
    visitors: { label: t("Visitors"), color: "var(--chart-1)" },
    sales: { label: t("Sales"), color: "var(--chart-2)" },
  } satisfies ChartConfig

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-3 space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-lg font-medium">{t("Visitors / Sales")}</CardTitle>
          <CardDescription>{t("Showing {0} totals", [range])}</CardDescription>
        </div>

        <div className="flex items-center gap-2">
          <Badge
            variant="secondary"
            className="gap-1 font-medium text-emerald-600 dark:text-emerald-400"
            title={t("Change vs last period")}
          >
            <TrendingUp className="size-3" />+{periodChange}%
          </Badge>

          <Tabs value={range} onValueChange={(v) => setRange(v as Range)}>
            <TabsList className="h-8">
              <TabsTrigger value="weekly">{t("Weekly")}</TabsTrigger>
              <TabsTrigger value="monthly">{t("Monthly")}</TabsTrigger>
              <TabsTrigger value="yearly">{t("Yearly")}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[320px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData[range]}
            margin={{ top: 8, left: 8, right: 8 }}
          >
            <defs>
              <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-visitors)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-visitors)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-sales)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-sales)" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Area
              dataKey="visitors"
              type="natural"
              fill="url(#fillVisitors)"
              stroke="var(--color-visitors)"
            />
            <Area
              dataKey="sales"
              type="natural"
              fill="url(#fillSales)"
              stroke="var(--color-sales)"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>

        <div className="grid gap-3 sm:grid-cols-2">
          {stats.map(({ label, caption, value, icon: Icon, iconClass, valueClass }) => (
            <div key={label} className="flex items-center gap-3 rounded-lg border p-3">
              <div
                className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
              >
                <Icon className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium">{t(label)}</p>
                <p className="text-muted-foreground text-xs">{t(caption)}</p>
              </div>
              <span className={`ml-auto text-lg font-semibold tabular-nums ${valueClass}`}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}