"use client"

import * as React from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Bell,
  CreditCard,
  LifeBuoy,
  LogOut,
  MessageSquare,
  Settings,
  User,
} from "lucide-react"
import { useTranslation } from "@/i18n/use-translation"

/* ---------- Types ---------- */
export type UserInfo = {
  name: string
  email: string
  avatar: string
}

/* ---------- Extra profile data (edit or connect to your API) ---------- */
const PROFILE = {
  role: "Manager",
  storage: { used: 6.2, total: 10, unit: "GB" },
}

export const STATUSES = [
  { value: "online", label: "Online", short: "Online", dot: "bg-emerald-500" },
  { value: "away", label: "Away", short: "Away", dot: "bg-amber-500" },
  { value: "busy", label: "Do not disturb", short: "DND", dot: "bg-red-500" },
  { value: "offline", label: "Appear offline", short: "Off", dot: "bg-zinc-400" },
]

const MAIN_ITEMS = [
  { title: "Profile", icon: User, url: "/account/profile" },
  { title: "Settings", icon: Settings, url: "/account/edit-profile" },
  { title: "Notifications", icon: Bell, url: "/account/notifications", badge: "3" },
  { title: "Messages", icon: MessageSquare, url: "/applications/chatbox", badge: "12" },
]

const MORE_ITEMS = [
  { title: "Billing", icon: CreditCard, url: "#" },
  { title: "Help & Support", icon: LifeBuoy, url: "/faq" },
]

/* ---------- Styles ---------- */
const itemClass =
  "h-8 cursor-pointer gap-3 rounded-lg px-2.5 text-sm " +
  "focus:bg-foreground/10 focus:text-foreground " +
  "[&>svg]:size-4.5! [&>svg]:text-muted-foreground! " +
  "focus:[&>svg]:text-foreground!"

const subTriggerClass =
  "h-8 cursor-pointer gap-3 rounded-lg px-2.5 text-sm " +
  "focus:bg-foreground/10 focus:text-foreground " +
  "data-[state=open]:bg-foreground/10 data-[state=open]:text-foreground"

const logoutClass =
  "h-8 cursor-pointer gap-3 rounded-lg px-2.5 text-sm text-destructive " +
  "focus:bg-destructive/10 focus:text-destructive " +
  "[&>svg]:size-4.5! [&>svg]:text-destructive!"

/* ---------- Helpers ---------- */
export function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function useUserStatus() {
  const [status, setStatus] = React.useState("online")
  const current = STATUSES.find((s) => s.value === status) ?? STATUSES[0]
  return { status, setStatus, current }
}

/* ---------- Shared dropdown content ---------- */
type UserMenuContentProps = Omit<
  React.ComponentProps<typeof DropdownMenuContent>,
  "children"
> & {
  user: UserInfo
  status: string
  onStatusChange: (value: string) => void
}

export function UserMenuContent({
  user,
  status,
  onStatusChange,
  className,
  ...props
}: UserMenuContentProps) {
  const current = STATUSES.find((s) => s.value === status) ?? STATUSES[0]
  const initials = getInitials(user.name)
  const { t } = useTranslation()
  const usedPercent = Math.round(
    (PROFILE.storage.used / PROFILE.storage.total) * 100
  )

  return (
    <DropdownMenuContent
      sideOffset={10}
      collisionPadding={12}
      className={
        "max-h-(--radix-dropdown-menu-content-available-height) w-64 overflow-y-auto rounded-xl border border-border bg-popover/70 p-0 shadow-xl backdrop-blur-xl backdrop-saturate-150 " +
        (className ?? "")
      }
      {...props}
    >
      {/* Compact profile header */}
      <DropdownMenuLabel className="rounded-t-xl border-b border-border bg-foreground/5 p-0 font-normal">
        <div className="flex items-center gap-3 px-3 py-3">
          <span className="relative shrink-0">
            <Avatar className="size-10 rounded-xl ring-2 ring-border">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-xl">{initials}</AvatarFallback>
            </Avatar>
            <span
              className={`absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-popover ${current.dot}`}
            />
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="truncate text-sm font-semibold">{user.name}</p>
              <Badge variant="secondary" className="h-4.5 px-1.5 text-[10px]">
                {t(PROFILE.role)}
              </Badge>
            </div>
            <p className="truncate text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>

        {/* Storage — single thin row */}
        <div className="px-3 pb-3">
          <div className="mb-1 flex items-center justify-between text-[11px]">
            <span className="font-medium">{t("Storage")}</span>
            <span className="text-muted-foreground">
              {PROFILE.storage.used} / {PROFILE.storage.total}{" "}
              {PROFILE.storage.unit}
            </span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-foreground/10">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${usedPercent}%` }}
            />
          </div>
        </div>
      </DropdownMenuLabel>

      <div className="p-1.5">
        {/* Status picker */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={subTriggerClass}>
            <span className={`size-2.5 rounded-full ${current.dot}`} />
            <span className="flex-1">{t(current.label)}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent
            sideOffset={10}
            alignOffset={-6}
            collisionPadding={12}
            className="z-[60] w-48 rounded-xl border border-border bg-popover p-1.5 shadow-xl"
          >
            <DropdownMenuRadioGroup value={status} onValueChange={onStatusChange}>
              <div className="flex items-center gap-1 px-1 py-1">
                {STATUSES.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => onStatusChange(s.value)}
                    title={t(s.label)}
                    className={`flex h-8 flex-1 items-center justify-center gap-1.5 rounded-lg text-xs transition-colors hover:text-foreground ${
                      status === s.value
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span className={`size-2 rounded-full ${s.dot}`} />
                    {t(s.short)}
                  </button>
                ))}
              </div>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator className="my-1 bg-border" />

        <DropdownMenuGroup>
          {MAIN_ITEMS.map(({ title, icon: Icon, url, badge }) => (
            <DropdownMenuItem key={title} asChild className={itemClass}>
              <Link href={url}>
                <Icon />
                {t(title)}
                {badge && (
                  <Badge className="ml-auto h-4.5 min-w-4.5 justify-center rounded-full px-1.5 text-[10px]">
                    {badge}
                  </Badge>
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-1 bg-border" />

        <DropdownMenuGroup>
          {MORE_ITEMS.map(({ title, icon: Icon, url }) => (
            <DropdownMenuItem key={title} asChild className={itemClass}>
              <Link href={url}>
                <Icon />
                {t(title)}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-1 bg-border" />

        <DropdownMenuItem className={logoutClass}>
          <LogOut />
          {t("Logout")}
        </DropdownMenuItem>
      </div>
    </DropdownMenuContent>
  )
}