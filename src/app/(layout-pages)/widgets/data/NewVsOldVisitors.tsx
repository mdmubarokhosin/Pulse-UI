"use client"

import {
  ChartNoAxesCombined,
  Download,
  EllipsisVertical,
  Eye,
  FileSpreadsheet,
  GalleryVerticalEnd,
  type LucideIcon,
  RefreshCw,
  TrendingUp,
} from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
import { useTranslation } from "@/i18n/use-translation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const description = "A multiple line chart comparing new and old visitors"

export default function NewVsOldVisitors() {
  const { t } = useTranslation()

  const chartData = [
    { month: t("January"), desktop: 120, mobile: 95 },
    { month: t("February"), desktop: 280, mobile: 160 },
    { month: t("March"), desktop: 190, mobile: 145 },
    { month: t("April"), desktop: 95, mobile: 210 },
    { month: t("May"), desktop: 240, mobile: 175 },
    { month: t("June"), desktop: 310, mobile: 220 },
  ]

  const chartConfig = {
    desktop: { label: t("New Visitors"), color: "var(--chart-1)" },
    mobile: { label: t("Old Visitors"), color: "var(--chart-2)" },
  } satisfies ChartConfig

  const stats: {
    key: keyof typeof chartConfig
    value: string
    caption: string
    icon: LucideIcon
  }[] = [
    { key: "desktop", value: "46", caption: t("Currently active"), icon: ChartNoAxesCombined },
    { key: "mobile", value: "+128", caption: t("Last 7 days"), icon: GalleryVerticalEnd },
  ]

  // June vs May change in new visitors, computed from the data above
  const [previous, latest] = chartData.slice(-2)
  const newVisitorChange = ((latest.desktop - previous.desktop) / previous.desktop) * 100

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-lg font-medium">{t("New vs Old Visitors")}</CardTitle>
          <CardDescription>{t("Monthly comparison of visitors")}</CardDescription>
        </div>

        <div className="flex items-center gap-2">
          <Badge
            variant="secondary"
            className="gap-1 font-medium text-emerald-600 dark:text-emerald-400"
            title={t("New visitors, June vs May")}
          >
            <TrendingUp className="size-3" />+{newVisitorChange.toFixed(1)}%
          </Badge>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="-mr-2 size-8 rounded-full"
                aria-label={t("Chart options")}
              >
                <EllipsisVertical className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Eye className="mr-2 size-4" />
                {t("View detailed report")}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 size-4" />
                {t("Download report")}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileSpreadsheet className="mr-2 size-4" />
                {t("Export as CSV / PDF")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <RefreshCw className="mr-2 size-4" />
                {t("Refresh data")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[280px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 8, left: 8, right: 8 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2.5}
              dot={{ r: 3, strokeWidth: 2, fill: "var(--background)" }}
              activeDot={{ r: 5 }}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2.5}
              dot={{ r: 3, strokeWidth: 2, fill: "var(--background)" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>

        <div className="grid gap-3 sm:grid-cols-2">
          {stats.map(({ key, value, caption, icon: Icon }) => (
            <div key={key} className="flex items-center gap-3 rounded-lg border p-3">
              <div
                className="flex size-10 shrink-0 items-center justify-center rounded-lg"
                style={{
                  color: chartConfig[key].color,
                  backgroundColor: `color-mix(in oklab, ${chartConfig[key].color} 15%, transparent)`,
                }}
              >
                <Icon className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium">{chartConfig[key].label}</p>
                <p className="text-muted-foreground text-xs">{caption}</p>
              </div>
              <span className="ml-auto text-xl font-semibold tabular-nums">{value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}