"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useTranslation } from "@/i18n/use-translation"

export function SonnerTypes() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col border p-6 rounded-xl shadow-sm max-w-xl">
      <h3 className="text-2xl mb-6 font-medium">{t("Sooner Types")}</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="outline"
          onClick={() => toast(t("Event has been created"))}
          className="px-5"
        >
          {t("Default")}
        </Button>
        <Button
          onClick={() => toast.success(t("Event has been created"))}
          className="bg-green-500 hover:bg-green-600 px-5"
        >
          {t("Success")}
        </Button>
        <Button
          onClick={() =>
            toast.info(t("Be at the area 10 minutes before the event time"))
          }
          className="bg-blue-500 text-white hover:bg-blue-600 px-5"
        >
          {t("Info")}
        </Button>
        <Button
          onClick={() =>
            toast.warning(t("Event start time cannot be earlier than 8am"))
          }
          className="bg-orange-400 text-white hover:bg-orange-500 px-5"
        >
          {t("Warning")}
        </Button>
        <Button
          onClick={() => toast.error(t("Event has not been created"))}
          className="bg-red-500 text-white hover:bg-red-600 px-5"
        >
          {t("Error")}
        </Button>
        <Button
          onClick={() => {
            toast.promise<{ name: string }>(
              () =>
                new Promise((resolve) =>
                  setTimeout(() => resolve({ name: "Event" }), 2000)
                ),
              {
                loading: t("Loading..."),
                success: (data) => t(`${data.name} has been created`),
                error: t("Error"),
              }
            )
          }}
        >
          {t("Promise")}
        </Button>
      </div>
    </div>
  )
}
