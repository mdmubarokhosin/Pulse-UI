"use client"

import { useTranslation } from "@/i18n/use-translation"
import { Check } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectWithCheckmarks() {
  const { t } = useTranslation()

  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder={t("Pick status")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="active">
          <Check className="mr-2 h-4 w-4 text-green-500" />
          {t("Active")}
        </SelectItem>
        <SelectItem value="inactive">
          <Check className="mr-2 h-4 w-4 text-red-500" />
          {t("Inactive")}
        </SelectItem>
        <SelectItem value="pending">
          <Check className="mr-2 h-4 w-4 text-yellow-500" />
          {t("Pending")}
        </SelectItem>
      </SelectContent>
    </Select>
  )
}