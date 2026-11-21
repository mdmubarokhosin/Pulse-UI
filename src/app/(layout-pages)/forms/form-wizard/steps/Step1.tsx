// app/components/steps/Step1.tsx
"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslation } from "@/i18n/use-translation"

export default function Step1({ form, setForm }: any) {
  const { t } = useTranslation()
  return (
    <div className="space-y-6 bg-background rounded-2xl shadow border p-8">

      {/* Title */}
      <div>
        <h2 className="text-lg font-semibold">
          {t("Personal Details")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("Please fill in your personal details below.")}
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* First Name */}
        <div className="space-y-2">
          <Label>{t("First Name")}</Label>
          <Input
            placeholder={t("First Name")}
            value={form.firstName}
            onChange={(e) =>
              setForm({ ...form, firstName: e.target.value })
            }
          />
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label>{t("Last Name")}</Label>
          <Input
            placeholder={t("Last Name")}
            value={form.lastName}
            onChange={(e) =>
              setForm({ ...form, lastName: e.target.value })
            }
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label>{t("Phone Number")}</Label>
          <Input
            placeholder={t("Phone Number")}
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label>{t("E-mail Address")}</Label>
          <Input
            type="email"
            placeholder={t("Enter Email Address")}
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        {/* Country */}
        <div className="space-y-2">
          <Label>{t("Country")}</Label>
          <Select
            value={form.country}
            onValueChange={(value) =>
              setForm({ ...form, country: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="---" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="india">{t("India")}</SelectItem>
              <SelectItem value="usa">{t("United States")}</SelectItem>
              <SelectItem value="uk">{t("United Kingdom")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Language */}
        <div className="space-y-2">
          <Label>{t("Language")}</Label>
          <Select
            value={form.language}
            onValueChange={(value) =>
              setForm({ ...form, language: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="---" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">{t("English")}</SelectItem>
              <SelectItem value="hindi">{t("Hindi")}</SelectItem>
              <SelectItem value="spanish">{t("Spanish")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </div>
    </div>
  )
}