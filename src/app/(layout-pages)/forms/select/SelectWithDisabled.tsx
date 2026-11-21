"use client"

import { useTranslation } from "@/i18n/use-translation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export function SelectWithDisabled() {
  const { t } = useTranslation()

  return (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder={t("Select status")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="online">{t("Online")}</SelectItem>
        <SelectItem value="offline" disabled>
          {t("Offline (Disabled)")}
        </SelectItem>
        <SelectItem value="busy">{t("Busy")}</SelectItem>
      </SelectContent>
    </Select>
  )
}