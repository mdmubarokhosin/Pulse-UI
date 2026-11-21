"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { NotificationDropdown } from "@/components/notification-dropdown"
import { AppLauncherDropdown } from "@/components/appLauncher-dropdown"
import { LanguageDropdown } from "@/components/language-dropdown"
import { ThemeToggle } from "@/components/theme-toggle"
import { GlobalSearch } from "@/components/global-search"
import { UserDropdown } from "@/components/UserDropdown"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/i18n/use-translation"

const quickLinks = [
    { label: "Pricing", to: "/pricing-tables" },
    { label: "Docs", to: "/docs" },
    { label: "Reports", to: "/dashboard/analytics" },
    { label: "Profile", to: "/account/profile" },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const { t } = useTranslation()

    // Header background on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header
            className={cn(
                "px-4 sticky top-0 z-40 flex h-16 w-full shrink-0 items-center gap-2 transition-all duration-200 border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
                    : "bg-transparent"
            )}
        >
            <div className="flex items-center gap-1">
                <SidebarTrigger className="-ml-1 rounded-lg h-9 w-9 [&_svg]:!size-5 transition-colors" />
                <div className="header-quick-link hidden md:flex items-center gap-1">
                    {quickLinks.map(({ label, to }) => (
                        <Button key={to} asChild variant="ghost" className="font-medium text-sm">
                            <Link href={to}>{t(label)}</Link>
                        </Button>
                    ))}
                </div>
            </div>

            <div className="ml-auto flex items-center gap-1">
                <GlobalSearch />
                <ThemeToggle />
                <LanguageDropdown />
                <AppLauncherDropdown />
                <div className="relative hidden md:inline-flex">
                    <NotificationDropdown />
                </div>
                <UserDropdown />
            </div>
        </header>
    )
}