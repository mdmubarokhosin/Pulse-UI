"use client"

import { useTranslation } from "@/i18n/use-translation"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export function BasicButtons() {
  const { t } = useTranslation()
  return (
    <Card>
      <CardHeader className="border-b py-4">
        <CardTitle className="text-xl">{t("Basic Buttons")}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 p-6">

        {/* Default Buttons */}
        <div>
          <p className="mb-3 text-lg font-medium text-muted-foreground">
            {t("Default")}
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <Button className="px-6">{t("Primary")}</Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6">
              {t("Error")}
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6">
              {t("Success")}
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
              {t("Info")}
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
              {t("Warning")}
            </Button>
             <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">
              {t("Purple")}
            </Button>
             <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6">
              {t("Amber")}
            </Button>
             <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6">
              {t("Pink")}
            </Button>
             <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6">
              {t("Yellow")}
            </Button>
            <Button variant="secondary" className="px-6">
              {t("Secondary")}
            </Button>
            <Button variant="ghost" className="px-6">
              {t("Text Button")}
            </Button>
          </div>
        </div>

        {/* Rounded Buttons */}
        <div>
          <p className="mb-3 text-lg font-medium text-muted-foreground">
            {t("Rounded")}
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <Button className="px-6 rounded-full">{t("Primary")}</Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 rounded-full">
              {t("Error")}
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 rounded-full">
              {t("Success")}
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 rounded-full">
              {t("Info")}
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-full">
              {t("Warning")}
            </Button>
             <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 rounded-full">
              {t("Purple")}
            </Button>
             <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 rounded-full">
              {t("Amber")}
            </Button>
             <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 rounded-full">
              {t("Pink")}
            </Button>
             <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 rounded-full">
              {t("Yellow")}
            </Button>
            <Button variant="secondary" className="px-6 rounded-full">
              {t("Secondary")}
            </Button>
            <Button variant="ghost" className="px-6 rounded-full">
              {t("Text Button")}
            </Button>
          </div>
        </div>
       
      </CardContent>
    </Card>
  )
}
