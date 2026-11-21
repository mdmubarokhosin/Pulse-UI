"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/i18n/use-translation"
import { LucideIcon } from "lucide-react"

type StatCardProps = {
  title: string
  value: string
  icon: LucideIcon
}

export default function StatCardWidgets({ title, value, icon: Icon }: StatCardProps) {
  const { t } = useTranslation()

  return (
    <Card className="stat-card-widget">
      <CardContent className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{t(title)}</p>
          <h2 className="text-2xl font-bold">{value}</h2>
        </div>
        <Icon className="h-8 w-8 text-muted-foreground" />
      </CardContent>
    </Card>
  )
}
