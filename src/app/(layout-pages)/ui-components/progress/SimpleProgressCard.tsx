"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useTranslation } from "@/i18n/use-translation"

export function SimpleProgressCard() {
  const { t } = useTranslation()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          {t("Simple Progress")}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        {/* Primary */}
        <Progress value={40} className="h-2 bg-muted [&>div]:bg-blue-500" />

        {/* Success */}
        <Progress value={50} className="h-2 bg-muted [&>div]:bg-emerald-500" />

        {/* Info */}
        <Progress value={60} className="h-2 bg-muted [&>div]:bg-cyan-500" />

        {/* Warning */}
        <Progress value={70} className="h-2 bg-muted [&>div]:bg-amber-500" />

        {/* Danger */}
        <Progress value={80} className="h-2 bg-muted [&>div]:bg-red-500" />

      </CardContent>
    </Card>
  )
}
