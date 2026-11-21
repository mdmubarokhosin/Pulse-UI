"use client"

import { useTranslation } from "@/i18n/use-translation"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
export function LightButtons() {
    const { t } = useTranslation()
    return (
        <Card>
            <CardHeader className="border-b py-4">
                <CardTitle className="text-xl">{t("Light Buttons")}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 p-6">

                {/* Outline Buttons */}
                <div>
                    <p className="mb-3 text-lg font-medium text-muted-foreground">
                        {t("Default")}
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">
                        {/* Primary */}
                         <Button variant="outline" className="px-6 bg-muted">{t("Primary")}</Button>
                         {/* Error */}
                        <Button
                            variant="outline"
                            className="text-red-600 bg-red-50 border-red-200 hover:bg-red-50 hover:text-red-500 dark:bg-red-500/20 dark:border-red-100/20 dark:text-red-500 px-6"
                        >
                            {t("Error")}
                        </Button>
                        {/* Success */}
                        <Button
                            variant="outline"
                            className="text-green-600 bg-green-50 border-green-200 hover:bg-green-50 hover:text-green-500 dark:bg-green-500/20 dark:border-green-100/20 dark:text-green-500 px-6"
                        >
                            {t("Success")}
                        </Button>

                        {/* Info */}
                        <Button
                            variant="outline"
                            className="text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-50 hover:text-blue-500 dark:bg-blue-500/20 dark:border-blue-100/20 dark:text-blue-500 px-6"
                        >
                            {t("Info")}
                        </Button>

                        {/* Warning */}
                        <Button
                            variant="outline"
                            className="text-orange-600 bg-orange-50 border-orange-200 hover:bg-orange-50 hover:text-orange-500 dark:bg-orange-500/20 dark:border-orange-100/20 dark:text-orange-500 px-6"
                        >
                            {t("Warning")}
                        </Button>

                        {/* Purple */}
                        <Button
                            variant="outline"
                            className="text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-50 hover:text-purple-500 dark:bg-purple-500/20 dark:border-purple-100/20 dark:text-purple-500 px-6"
                        >
                            {t("Purple")}
                        </Button>

                        {/* Amber */}
                        <Button
                            variant="outline"
                            className="text-amber-600 bg-amber-50 border-amber-200 hover:bg-amber-50 hover:text-amber-500 dark:bg-amber-500/20 dark:border-amber-100/20 dark:text-amber-500 px-6"
                        >
                            {t("Amber")}
                        </Button>

                        {/* Pink */}
                        <Button
                            variant="outline"
                            className="text-pink-600 bg-pink-50 border-pink-200 hover:bg-pink-50 hover:text-pink-500 dark:bg-pink-500/20 dark:border-pink-100/20 dark:text-pink-500 px-6"
                        >
                            {t("Pink")}
                        </Button>

                        {/* Yellow */}
                        <Button
                            variant="outline"
                            className="text-yellow-600 bg-yellow-50 border-yellow-200 hover:bg-yellow-50 hover:text-yellow-500 dark:bg-yellow-500/20 dark:border-yellow-100/20 dark:text-yellow-500 px-6"
                        >
                            {t("Yellow")}
                        </Button>

                        {/* Secondary */}
                        <Button
                            variant="outline"
                            className="text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-50 hover:text-gray-500 dark:bg-gray-500/20 dark:border-gray-100/20 dark:text-gray-400 px-6"
                        >
                            {t("Secondary")}
                        </Button>

                    </div>
                </div>

                {/* Rounded Buttons */}
                <div>
                    <p className="mb-3 text-lg font-medium text-muted-foreground">
                        {t("Rounded")}
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">
                        {/* Primary */}
                        <Button
                            variant="outline"
                            className="px-6 bg-muted rounded-full"
                        >
                            {t("Primary")}
                        </Button>

                        {/* Error */}
                        <Button
                            variant="outline"
                            className="text-red-600 bg-red-50 border-red-200 hover:bg-red-50 hover:text-red-500 dark:bg-red-500/20 dark:border-red-100/20 dark:text-red-500 px-6 rounded-full"
                        >
                            {t("Error")}
                        </Button>

                        {/* Success */}
                        <Button
                            variant="outline"
                            className="text-green-600 bg-green-50 border-green-200 hover:bg-green-50 hover:text-green-500 dark:bg-green-500/20 dark:border-green-100/20 dark:text-green-500 px-6 rounded-full"
                        >
                            {t("Success")}
                        </Button>

                        {/* Info */}
                        <Button
                            variant="outline"
                            className="text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-50 hover:text-blue-500 dark:bg-blue-500/20 dark:border-blue-100/20 dark:text-blue-500 px-6 rounded-full"
                        >
                            {t("Info")}
                        </Button>

                        {/* Warning */}
                        <Button
                            variant="outline"
                            className="text-orange-600 bg-orange-50 border-orange-200 hover:bg-orange-50 hover:text-orange-500 dark:bg-orange-500/20 dark:border-orange-100/20 dark:text-orange-500 px-6 rounded-full"
                        >
                            {t("Warning")}
                        </Button>

                        {/* Purple */}
                        <Button
                            variant="outline"
                            className="text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-50 hover:text-purple-500 dark:bg-purple-500/20 dark:border-purple-100/20 dark:text-purple-500 px-6 rounded-full"
                        >
                            {t("Purple")}
                        </Button>

                        {/* Amber */}
                        <Button
                            variant="outline"
                            className="text-amber-600 bg-amber-50 border-amber-200 hover:bg-amber-50 hover:text-amber-500 dark:bg-amber-500/20 dark:border-amber-100/20 dark:text-amber-500 px-6 rounded-full"
                        >
                            {t("Amber")}
                        </Button>

                        {/* Pink */}
                        <Button
                            variant="outline"
                            className="text-pink-600 bg-pink-50 border-pink-200 hover:bg-pink-50 hover:text-pink-500 dark:bg-pink-500/20 dark:border-pink-100/20 dark:text-pink-500 px-6 rounded-full"
                        >
                            {t("Pink")}
                        </Button>

                        {/* Yellow */}
                        <Button
                            variant="outline"
                            className="text-yellow-600 bg-yellow-50 border-yellow-200 hover:bg-yellow-50 hover:text-yellow-500 dark:bg-yellow-500/20 dark:border-yellow-100/20 dark:text-yellow-500 px-6 rounded-full"
                        >
                            {t("Yellow")}
                        </Button>

                        {/* Secondary */}
                        <Button
                            variant="outline"
                            className="text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-50 hover:text-gray-500 dark:bg-gray-500/20 dark:border-gray-100/20 dark:text-gray-400 px-6 rounded-full"
                        >
                            {t("Secondary")}
                        </Button>
                    </div>

                </div>

            </CardContent>
        </Card>
    )
}