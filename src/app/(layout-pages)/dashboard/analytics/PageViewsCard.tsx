"use client"

import { MousePointerClick } from "lucide-react"
import KpiCard from "./KpiCard"
import { useTranslation } from "@/i18n/use-translation"

// Placeholder data, replace with real numbers.
export default function PageViewsCard() {
  const { t } = useTranslation()
  return (
    <KpiCard
      id="pageviews"
      variant="bars"
      title={t("Page Views")}
      value="84,600"
      subtitle={t("vs last month")}
      change={12.1}
      icon={MousePointerClick}
      from="#00c6fb"
      to="#005bea"
      data={[48, 55, 51, 63, 58, 69, 62, 74, 68, 79, 76, 84.6]}
    />
  )
}