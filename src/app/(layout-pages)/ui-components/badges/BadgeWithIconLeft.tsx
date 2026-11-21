"use client"

import { useTranslation } from "@/i18n/use-translation"
import { Badge } from "@/components/ui/badge"
import {
    BadgeCheck,
    BookmarkIcon,
    AlertTriangle,
    Info,
    XCircle,
    Star,
    ShieldCheck,
} from "lucide-react"

export function BadgeWithIconLeft() {
    const { t } = useTranslation()
    return (
        <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="gap-1">
                <BadgeCheck data-icon="inline-start" className="h-4 w-4" />
                <span>{t("Verified")}</span>
            </Badge>
            <Badge variant="outline" className="gap-1">
                <span>{t("Bookmark")}</span>
                <BookmarkIcon data-icon="inline-end" className="h-4 w-4" />
            </Badge>
            <Badge variant="secondary" className="gap-1">
                <Info className="h-4 w-4" />
                <span>{t("Info")}</span>
            </Badge>
            <Badge className="gap-1">
                <Star className="h-4 w-4" />
                <span>{t("Featured")}</span>
            </Badge>
            <Badge variant="destructive" className="gap-1">
                <XCircle className="h-4 w-4" />
                <span>{t("Blocked")}</span>
            </Badge>
            <Badge variant="outline" className="gap-1">
                <span>{t("Warning")}</span>
                <AlertTriangle className="h-4 w-4" />
            </Badge>
            <Badge variant="ghost" className="gap-1">
                <ShieldCheck className="h-4 w-4" />
                <span>{t("Protected")}</span>
            </Badge>

        </div>
    )
}
