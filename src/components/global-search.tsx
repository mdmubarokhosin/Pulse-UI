"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { VisuallyHidden } from "radix-ui"
import {
  Search,
  LayoutDashboard,
  BarChart3,
  Users,
  User,
  Bell,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { DialogTitle } from "@/components/ui/dialog"
import { useTranslation } from "@/i18n/use-translation"

const dashboardItems = [
  { label: "Dashboard", href: "/dashboard/eCommerce", icon: LayoutDashboard },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Customers", href: "/eCommerce/customer-list", icon: Users },
]

const settingsItems = [
  { label: "Profile", href: "/account/profile", icon: User },
  { label: "Notifications", href: "/account/notifications", icon: Bell },
]

export function GlobalSearch() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { t } = useTranslation()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const go = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  const renderItems = (items: typeof dashboardItems) =>
    items.map(({ label, href, icon: Icon }) => (
      <CommandItem
        key={href}
        value={label}
        onSelect={() => go(href)}
        className="flex items-center gap-2 px-2 py-2 rounded-md cursor-pointer"
      >
        <Icon className="size-4 text-muted-foreground" />
        <span>{t(label)}</span>
        <CommandShortcut>
          <ArrowRight className="size-3 opacity-40" />
        </CommandShortcut>
      </CommandItem>
    ))

  return (
    <>
      {/* Mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full h-10 w-10 flex xl:hidden"
        onClick={() => setOpen(true)}
      >
        <Search className="size-5" />
      </Button>

      {/* Desktop */}
      <Button
        variant="ghost"
        className="rounded-full hidden xl:flex items-center w-[280px] gap-2 h-9 px-4 border border-border justify-between bg-muted/40 hover:bg-muted/80 transition"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-2 text-muted-foreground">
          <Search className="size-5" />
          <span className="text-sm">{t("Type to search...")}</span>
        </div>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
          ⌘K
        </kbd>
      </Button>

      {/* Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <VisuallyHidden.Root>
          <DialogTitle>{t("Global Search")}</DialogTitle>
        </VisuallyHidden.Root>

        <Command>
          <CommandInput placeholder={t("Search pages, actions...")} />

          <CommandList className="max-h-[400px] overflow-y-auto">
            <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">
              {t("No results found.")}
            </CommandEmpty>

            <CommandGroup heading={t("Dashboard")}>
              {renderItems(dashboardItems)}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading={t("Settings")}>
              {renderItems(settingsItems)}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}