"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { useTranslation } from "@/i18n/use-translation"

export const description = "A radar chart with multiple data"

export default function RadarChartPage() {
  const { t } = useTranslation()

  const chartData = [
    { month: t("January"), desktop: 186, mobile: 80 },
    { month: t("February"), desktop: 305, mobile: 200 },
    { month: t("March"), desktop: 237, mobile: 120 },
    { month: t("April"), desktop: 73, mobile: 190 },
    { month: t("May"), desktop: 209, mobile: 130 },
    { month: t("June"), desktop: 214, mobile: 140 },
  ]

  const chartConfig = {
    desktop: {
      label: t("Desktop"),
      color: "var(--chart-1)",
    },
    mobile: {
      label: t("Mobile"),
      color: "var(--chart-3)",
    },
  } satisfies ChartConfig

  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>{t("Radar Chart - Multiple")}</CardTitle>
        <CardDescription>
          {t("Showing total visitors for the last 6 months")}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
            <Radar dataKey="mobile" fill="var(--color-mobile)" />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          {t("Trending up by 5.2% this month")} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground flex items-center gap-2 leading-none">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  )
}
