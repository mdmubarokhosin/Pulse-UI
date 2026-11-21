"use client"

import { useEffect } from "react"

import { useLanguageStore } from "@/store/language.store"

/**
 * Keeps the <html lang> attribute in sync with the selected locale
 * (accessibility + correct font shaping for Bengali text).
 */
export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = useLanguageStore((s) => s.locale)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return <>{children}</>
}
