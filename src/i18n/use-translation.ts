"use client"

import { useCallback } from "react"

import { useLanguageStore } from "@/store/language.store"
import { bn } from "@/i18n/dictionaries"

/**
 * Translation hook.
 *
 * Keys are the original English strings, so `t("Dashboard")` returns
 * "ড্যাশবোর্ড" when the locale is `bn` and the key itself when the
 * locale is `en` or when no translation exists yet (graceful fallback).
 *
 * Placeholder support: `t("Showing {0} of {1} entries", [1, 25])`
 * replaces `{0}`, `{1}`... with the supplied values.
 */
export function useTranslation() {
  const locale = useLanguageStore((s) => s.locale)
  const setLocale = useLanguageStore((s) => s.setLocale)

  const t = useCallback(
    (key: string, params?: (string | number)[]) => {
      let text = locale === "bn" ? (bn[key] ?? key) : key
      if (params && params.length > 0) {
        text = text.replace(/\{(\d+)\}/g, (match, index) => {
          const value = params[Number(index)]
          return value !== undefined ? String(value) : match
        })
      }
      return text
    },
    [locale]
  )

  return { locale, setLocale, t, isBengali: locale === "bn" }
}
