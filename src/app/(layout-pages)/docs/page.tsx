"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from "lucide-react"
import { useTranslation } from "@/i18n/use-translation"

export default function Documentation() {
  const { t } = useTranslation()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("Documentation")}</h1>
        <p className="text-muted-foreground">
          {t("PulseUI official documentation")}
        </p>
      </div>

      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {t("PulseUI Docs")}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {t("View the complete setup and usage guide for PulseUI.")}
          </p>

          <Button asChild>
            <a
              href="https://github.com/mdmubarokhosin/Pulse-UI"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Open Documentation")}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
