"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useTranslation } from "@/i18n/use-translation"

export function SonnerPosition() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-wrap justify-center gap-4 border p-6 rounded-xl shadow-sm max-w-xl">
      <Button
        variant="outline"
        onClick={() =>
          toast(t("Event has been created"), { position: "top-left" })
        }
      >
        {t("Top Left")}
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast(t("Event has been created"), { position: "top-center" })
        }
      >
        {t("Top Center")}
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast(t("Event has been created"), { position: "top-right" })
        }
      >
        {t("Top Right")}
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast(t("Event has been created"), { position: "bottom-left" })
        }
      >
        {t("Bottom Left")}
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast(t("Event has been created"), { position: "bottom-center" })
        }
      >
        {t("Bottom Center")}
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast(t("Event has been created"), { position: "bottom-right" })
        }
      >
        {t("Bottom Right")}
      </Button>
    </div>
  )
}
