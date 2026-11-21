"use client"

import { LanguageDropdown } from "@/components/language-dropdown"

export default function NoLayoutPages({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen">
      {/* Floating language switcher for auth/error pages (outside the admin shell) */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageDropdown />
      </div>
      {children}
    </div>
  )
}
