"use client"

import { LogOut } from "lucide-react"
import KpiCard from "./KpiCard"
import { useTranslation } from "@/i18n/use-translation"

// Placeholder data, replace with real numbers.
// A lower bounce rate is better, so the -2.1% change shows green.
export default function BounceRateCard() {
  const { t } = useTranslation()
  return (
    <KpiCard
      id="bounce"
      variant="progress"
      title={t("Bounce Rate")}
      value="38.4%"
      subtitle={t("of sessions left after one page")}
      change={-2.1}
      lowerIsBetter
      icon={LogOut}
      from="#f7971e"
      to="#ffd200"
      percent={38.4}
    />
  )
}