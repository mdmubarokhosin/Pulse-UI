import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Locale = "en" | "bn"

type LanguageState = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      locale: "en",            // default
      setLocale: (locale) => set({ locale }),
    }),
    { name: "language" }       // localStorage key
  )
)
