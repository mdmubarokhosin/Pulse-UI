"use client"

import { useTranslation } from "@/i18n/use-translation"
import { SelectBasic } from "./SelectBasic"
import { SelectWithAvatar } from "./SelectWithAvatar"
import { SelectTwoAvatars } from "./SelectTwoAvatars"
import {SelectWithCheckmarks} from "./SelectWithCheckmarks"
import {SelectGrouped} from "./SelectGrouped"
import { ComponentPreview } from "./ComponentPreview"
import { SelectWithDisabled } from "./SelectWithDisabled"

export default function SelectExamplesPage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      <ComponentPreview
        title={t("Basic Select")}
        code={`<SelectBasic />`}
      >
        <SelectBasic />
      </ComponentPreview>

      <ComponentPreview
        title={t("Select with Avatar")}
        code={`<SelectWithAvatar />`}
      >
        <SelectWithAvatar />
      </ComponentPreview>

      <ComponentPreview
        title={t("Two Avatar Select")}
        code={`<SelectTwoAvatars />`}
      >
        <SelectTwoAvatars />
      </ComponentPreview>

      <ComponentPreview
        title={t("Select with Checkmarks")}
        code={`<SelectWithCheckmarks />`}
      >
        <SelectWithCheckmarks />
      </ComponentPreview>

      <ComponentPreview
        title={t("Grouped Select")}
        code={`<SelectGrouped />`}
      >
        <SelectGrouped />
      </ComponentPreview>

      <ComponentPreview
        title={t("Disabled Items")}
        code={`<SelectWithDisabled />`}
      >
        <SelectWithDisabled />
      </ComponentPreview>
    </div>
  )
}