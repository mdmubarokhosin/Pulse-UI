"use client"

import { useTranslation } from "@/i18n/use-translation"

const AUTHOR_URL = "https://www.mdmubarok.com/"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t">
      <div className="container flex h-14 flex-col items-center justify-center gap-0.5 text-sm text-muted-foreground px-4 bg-card/60 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
        <a
          href={AUTHOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <span suppressHydrationWarning>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-foreground">MD MUBAROK</span>
            {t(". All rights reserved.")}
          </span>
        </a>
        <span className="text-center">
          {t("Built with ❤️ by")}{" "}
          <span className="font-medium text-foreground">
            <a
              href={AUTHOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              MD MUBAROK
            </a>
          </span>
        </span>
      </div>
    </footer>
  )
}
