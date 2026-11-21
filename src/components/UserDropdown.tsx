"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  UserMenuContent,
  getInitials,
  useUserStatus,
  type UserInfo,
} from "@/components/user-menu-content"

const DEFAULT_USER: UserInfo = {
  name: "Alex Martin",
  email: "alex@example.com",
  avatar: "https://untitledui.com/images/avatars/madeleine-pitts",
}

export function UserDropdown({ user = DEFAULT_USER }: { user?: UserInfo }) {
  const { status, setStatus, current } = useUserStatus()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="relative ml-2 h-10 w-10 rounded-full p-0 overflow-visible"
        >
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          <span
            className={`absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-background ${current.dot}`}
          />
        </Button>
      </DropdownMenuTrigger>

      <UserMenuContent
        user={user}
        status={status}
        onStatusChange={setStatus}
        side="bottom"
        align="end"
      />
    </DropdownMenu>
  )
}