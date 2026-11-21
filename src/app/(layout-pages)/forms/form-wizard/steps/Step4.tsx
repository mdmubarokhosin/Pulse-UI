// app/components/steps/Step4.tsx
"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useTranslation } from "@/i18n/use-translation"

export default function Step4({ form, setForm }: any) {
  const { t } = useTranslation()
  const [agree, setAgree] = useState(false)

  return (
    <div className="space-y-8 bg-background rounded-2xl shadow border p-8">

      {/* Title */}
      <div>
        <h2 className="text-lg font-semibold">
          {t("Review & Confirm")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("Please review your details before submitting.")}
        </p>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

        <div><span className="font-medium">{t("First Name:")}</span> {form.firstName}</div>
        <div><span className="font-medium">{t("Last Name:")}</span> {form.lastName}</div>
        <div><span className="font-medium">{t("Email:")}</span> {form.email}</div>
        <div><span className="font-medium">{t("Phone:")}</span> {form.phone}</div>
        <div><span className="font-medium">{t("Address:")}</span> {form.address}</div>
        <div><span className="font-medium">{t("City:")}</span> {form.city}</div>
        <div><span className="font-medium">{t("State:")}</span> {form.state}</div>
        <div><span className="font-medium">{t("Zip:")}</span> {form.zip}</div>
        <div><span className="font-medium">{t("Card Number:")}</span> **** **** **** {form.cardNumber?.slice(-4)}</div>

      </div>

      {/* Comments */}
      <div className="space-y-2">
        <Label>{t("Additional Comments")}</Label>
        <Textarea
          placeholder={t("Any final comments?")}
          value={form.comments || ""}
          onChange={(e) =>
            setForm({ ...form, comments: e.target.value })
          }
        />
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-start space-x-3">
        <Checkbox
          checked={agree}
          onCheckedChange={(checked: boolean) =>
            setAgree(checked)
          }
        />
        <Label className="text-sm leading-none">
          {t("I agree to the Terms and Conditions")}
        </Label>
      </div>

    </div>
  )
}