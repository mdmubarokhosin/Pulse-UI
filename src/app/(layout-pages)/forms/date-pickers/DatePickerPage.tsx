"use client"

import { DatePickerInput } from "./DatePickerInput"
import { DatePickerWithRange } from "./DatePickerWithRange"
import { DatePickerSimple } from "./SimpleDatePicker"
import { ComponentPreview } from "./ComponentPreview"
import { useTranslation } from "@/i18n/use-translation"

export default function DatePickerPage() {
  const { t } = useTranslation()
  return (
    <div className="p-6 space-y-6">

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t("Date Pickers")}
        </h1>
        <p className="text-muted-foreground">
          {t("Interactive date picker components with live preview and source code.")}
        </p>
      </div>

      <div className="space-y-6">

        <ComponentPreview
          title={t("Simple Date Picker")}
          description={t("Basic single date selection.")}
          code={`<DatePickerSimple />`}
        >
          <DatePickerSimple />
        </ComponentPreview>

        <ComponentPreview
          title={t("Date Range Picker")}
          description={t("Select start and end date.")}
          code={`<DatePickerWithRange />`}
        >
          <DatePickerWithRange />
        </ComponentPreview>

        <ComponentPreview
          title={t("Input Date Picker")}
          description={t("Date picker integrated with input.")}
          code={`<DatePickerInput />`}
        >
          <DatePickerInput />
        </ComponentPreview>

      </div>
    </div>
  )
}