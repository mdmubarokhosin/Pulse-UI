"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu } from "lucide-react"
import { useTranslation } from "@/i18n/use-translation"

export function Navbar3() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <div>
      <nav className="border rounded-xl px-6 py-4 bg-background shadow-sm">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <h2 className="text-lg font-semibold">{t("MyAdmin")}</h2>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-8">

            {/* Left Links */}
            <div className="flex items-center gap-6">

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-md hover:text-primary transition">
                  {t("Products")} <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>{t("Product 1")}</DropdownMenuItem>
                  <DropdownMenuItem>{t("Product 2")}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-md hover:text-primary transition">
                  {t("Use case")} <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>{t("Use Case 1")}</DropdownMenuItem>
                  <DropdownMenuItem>{t("Use Case 2")}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-md hover:text-primary transition">
                  {t("Integration")} <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>{t("Integration 1")}</DropdownMenuItem>
                  <DropdownMenuItem>{t("Integration 2")}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-md hover:text-primary transition">
                  {t("Resources")} <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>{t("Blog")}</DropdownMenuItem>
                  <DropdownMenuItem>{t("Docs")}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="#" className="text-sm hover:text-primary transition">
                {t("Pricing")}
              </a>

            </div>

            {/* Right Links */}
            <div className="flex items-center gap-3">

              <a href="#" className="text-sm font-medium text-primary">
                {t("Login")}
              </a>

              <Button variant="outline" className="rounded-lg">
                {t("Request demo")}
              </Button>

              <Button className="bg-indigo-500 hover:bg-indigo-600 rounded-lg">
                {t("Get started")}
              </Button>

            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu className="h-6 w-6" />
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-4 flex flex-col gap-4 xl:hidden">

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm">
                {t("Products")} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>{t("Product 1")}</DropdownMenuItem>
                <DropdownMenuItem>{t("Product 2")}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm">
                {t("Use case")} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>{t("Use Case 1")}</DropdownMenuItem>
                <DropdownMenuItem>{t("Use Case 2")}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#" className="text-sm">{t("Pricing")}</a>

            <div className="flex flex-col gap-3 pt-3 border-t">
              <a href="#" className="text-sm font-medium text-primary">
                {t("Login")}
              </a>
              <Button variant="outline" className="rounded-lg w-full">
                {t("Request demo")}
              </Button>
              <Button className="rounded-lg w-full">
                {t("Get started")}
              </Button>
            </div>

          </div>
        )}

      </nav>
    </div>
  )
}
