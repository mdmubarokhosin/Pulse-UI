"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "A multiple line chart"

export default function LineChartPage() {
  const { t } = useTranslation()

  const chartData = [
    { month: t("January"), desktop: 186, mobile: 80 },
    { month: t("February"), desktop: 305, mobile: 200 },
    { month: t("March"), desktop: 237, mobile: 120 },
    { month: t("April"), desktop: 173, mobile: 190 },
    { month: t("May"), desktop: 209, mobile: 130 },
    { month: t("June"), desktop: 214, mobile: 140 },
    { month: t("July"), desktop: 260, mobile: 180 },
    { month: t("August"), desktop: 310, mobile: 220 },
    { month: t("September"), desktop: 280, mobile: 210 },
  ]

  const chartConfig = {
    desktop: {
      label: t("Desktop"),
      color: "var(--chart-1)",
    },
    mobile: {
      label: t("Mobile"),
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig

  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>{t("Line Chart - Multiple")}</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <ChartContainer config={chartConfig}
        className="w-full h-[260px] sm:h-[320px] md:h-[360px]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={3}
              dot={true}
            />
            <Line
              dataKey="mobile"
              type="linear"
              stroke="var(--color-mobile)"
              strokeWidth={3}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="border-t pt-6">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              {t("Trending up by 5.2% this month")} <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              {t("Showing total visitors for the last 6 months")}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
