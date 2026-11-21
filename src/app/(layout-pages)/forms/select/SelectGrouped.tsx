"use client"

import { useTranslation } from "@/i18n/use-translation"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectGrouped() {
  const { t } = useTranslation()

  return (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder={t("Choose country")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("Europe")}</SelectLabel>
          <SelectItem value="de">{t("Germany")}</SelectItem>
          <SelectItem value="fr">{t("France")}</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>{t("Asia")}</SelectLabel>
          <SelectItem value="jp">{t("Japan")}</SelectItem>
          <SelectItem value="in">{t("India")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}