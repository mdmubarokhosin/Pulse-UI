"use client"

import { useTranslation } from "@/i18n/use-translation"
import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>{t("Default")}</Badge>
      <Badge variant="secondary">{t("Secondary")}</Badge>
      <Badge variant="destructive">{t("Destructive")}</Badge>
      <Badge variant="outline">{t("Outline")}</Badge>
      <Badge variant="ghost">{t("Ghost")}</Badge>
    </div>
  )
}
