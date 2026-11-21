"use client"

import { useWizard } from "./WizardContext"
import { Button } from "@/components/ui/button"
import StepProgress from "./StepProgress"
import { toast } from "sonner"
import { useTranslation } from "@/i18n/use-translation"

export default function FormWizard({ children }: any) {
  const { t } = useTranslation()
  const { step, next, back } = useWizard()

  return (
    <div className="w-full mx-auto p-8 space-y-8">

      {/* Stepper */}
      <StepProgress currentStep={step} />

      {/* Render Step */}
      <div>{children[step - 1]}</div>

      {/* Controls */}
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={back} disabled={step === 1}>
          {t("Back")}
        </Button>
        <Button
          onClick={() => {
            if (step === 4) {
              toast.success(t("Form submitted successfully"))
              return
            }
            next()
          }}
        >
          {step === 4 ? t("Finish") : t("Next")}
        </Button>
      </div>

    </div>
  )
}