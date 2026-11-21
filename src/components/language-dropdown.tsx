"use client"

import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/i18n/use-translation"
import { useLanguageStore, type Locale } from "@/store/language.store"
import { cn } from "@/lib/utils"

type Language = {
  code: Locale
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "/images/countries/gb.png" },
  { code: "bn", name: "বাংলা (বাংলাদেশ)", flag: "/images/countries/bd.png" },
]

export function LanguageDropdown() {
  const { t } = useTranslation()
  const locale = useLanguageStore((s) => s.locale)
  const setLocale = useLanguageStore((s) => s.setLocale)

  const selected = languages.find((l) => l.code === locale) ?? languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`${t("Select language")}: ${selected.name}`}
          className="h-9 w-9"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selected.flag}
            alt={selected.name}
            className="size-5 rounded-full object-cover ring-1 ring-border"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-72 max-w-[calc(100vw-2rem)] rounded-xl p-3 shadow-xl"
      >
        <DropdownMenuLabel className="px-1 pt-0 pb-2 text-sm font-semibold">
          {t("Select language")}
        </DropdownMenuLabel>

        <div className="grid grid-cols-1 gap-1.5">
          {languages.map((lang) => {
            const isSelected = selected.code === lang.code

            return (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setLocale(lang.code)}
                className={cn(
                  "cursor-pointer gap-2 rounded-lg border px-2.5 py-1.5",
                  isSelected
                    ? "border-primary/40 bg-primary/5"
                    : "border-transparent"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lang.flag}
                  alt=""
                  className="size-5 shrink-0 rounded-full object-cover ring-1 ring-border"
                />
                <span className="truncate text-sm">{lang.name}</span>
                {isSelected && (
                  <Check className="ml-auto size-4 shrink-0 text-primary" />
                )}
              </DropdownMenuItem>
            )
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
