// app/components/steps/Step2.tsx
"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from "@/i18n/use-translation"

export default function Step2({ form, setForm }: any) {
  const { t } = useTranslation()
  return (
    <div className="space-y-6 bg-background rounded-2xl shadow border p-8">

      {/* Title */}
      <div>
        <h2 className="text-lg font-semibold">
          {t("Additional Info")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("Please fill in your additional information below.")}
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Address */}
        <div className="space-y-2">
          <Label>{t("Address")}</Label>
          <Input
            placeholder={t("Address")}
            value={form.address}
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
          />
        </div>

        {/* City */}
        <div className="space-y-2">
          <Label>{t("City")}</Label>
          <Input
            placeholder={t("City")}
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
          />
        </div>

        {/* State */}
        <div className="space-y-2">
          <Label>{t("State")}</Label>
          <Input
            placeholder={t("State")}
            value={form.state}
            onChange={(e) =>
              setForm({ ...form, state: e.target.value })
            }
          />
        </div>

        {/* Zip Code */}
        <div className="space-y-2">
          <Label>{t("Zip Code")}</Label>
          <Input
            placeholder={t("Zip Code")}
            value={form.zip}
            onChange={(e) =>
              setForm({ ...form, zip: e.target.value })
            }
          />
        </div>

        {/* Occupation */}
        <div className="space-y-2">
          <Label>{t("Occupation")}</Label>
          <Input
            placeholder={t("Occupation")}
            value={form.occupation}
            onChange={(e) =>
              setForm({ ...form, occupation: e.target.value })
            }
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label>{t("Company")}</Label>
          <Input
            placeholder={t("Company")}
            value={form.company}
            onChange={(e) =>
              setForm({ ...form, company: e.target.value })
            }
          />
        </div>

      </div>
    </div>
  )
}