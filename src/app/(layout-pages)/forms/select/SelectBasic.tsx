"use client"

import { useTranslation } from "@/i18n/use-translation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectBasic() {
  const { t } = useTranslation()

  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder={t("Choose option")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">{t("Option One")}</SelectItem>
        <SelectItem value="option2">{t("Option Two")}</SelectItem>
        <SelectItem value="option3">{t("Option Three")}</SelectItem>
      </SelectContent>
    </Select>
  )
}