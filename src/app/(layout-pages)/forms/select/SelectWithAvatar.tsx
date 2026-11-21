"use client"

import { useTranslation } from "@/i18n/use-translation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectWithAvatar() {
  const { t } = useTranslation()

  return (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder={t("Select user")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ephraim">
          <div className="flex items-center gap-2">
            <Avatar className="h-5 w-5">
              <AvatarImage src="https://blocks.so/avatar-01.png" />
              <AvatarFallback>ED</AvatarFallback>
            </Avatar>
            {t("Ephraim Duncan")}
          </div>
        </SelectItem>
        <SelectItem value="lucas">
          <div className="flex items-center gap-2">
            <Avatar className="h-5 w-5">
              <AvatarImage src="https://blocks.so/avatar-02.png" />
              <AvatarFallback>LS</AvatarFallback>
            </Avatar>
            {t("Lucas Smith")}
          </div>
        </SelectItem>
        <SelectItem value="timur">
          <div className="flex items-center gap-2">
            <Avatar className="h-5 w-5">
              <AvatarImage src="https://blocks.so/avatar-03.png" />
              <AvatarFallback>TE</AvatarFallback>
            </Avatar>
            {t("Timur Ercan")}
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}