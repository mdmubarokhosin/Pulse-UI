"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/i18n/use-translation"

export default function FormInputGroup() {
  const { t } = useTranslation()
  return (
    <div className="space-y-6">

      {/* Input Groups */}
      <Card>
        <CardHeader>
          <CardTitle>{t("Input Groups")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">

          {/* Username */}
          <div className="flex rounded-md border overflow-hidden">
            <span className="px-3 flex items-center bg-muted">@</span>
            <Input className="border-0 rounded-none focus-visible:ring-0" placeholder={t("Username")} />
          </div>

          {/* Email */}
          <div className="flex rounded-md border overflow-hidden">
            <Input className="border-0 rounded-none focus-visible:ring-0" placeholder={t("Recipient's username")} />
            <span className="px-3 flex items-center bg-muted">@example.com</span>
          </div>

          {/* URL */}
          <div className="flex rounded-md border overflow-hidden">
            <span className="px-3 flex items-center bg-muted text-sm">
              https://example.com/users/
            </span>
            <Input className="border-0 rounded-none focus-visible:ring-0" />
          </div>

          {/* Amount */}
          <div className="flex rounded-md border overflow-hidden">
            <span className="px-3 flex items-center bg-muted">$</span>
            <Input className="border-0 rounded-none focus-visible:ring-0" />
            <span className="px-3 flex items-center bg-muted">.00</span>
          </div>

          {/* Textarea */}
          <div className="flex rounded-md border overflow-hidden">
            <span className="px-3 flex items-center bg-muted">
              {t("With textarea")}
            </span>
            <Textarea className="border-0 rounded-none focus-visible:ring-0" />
          </div>

        </CardContent>
      </Card>

      {/* Sizing */}
      <Card>
        <CardHeader>
          <CardTitle>{t("Sizing")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">

          <div className="flex rounded-md border overflow-hidden h-8 text-sm">
            <span className="px-3 flex items-center bg-muted">{t("Small")}</span>
            <Input className="border-0 rounded-none focus-visible:ring-0 text-sm" />
          </div>

          <div className="flex rounded-md border overflow-hidden">
            <span className="px-3 flex items-center bg-muted">{t("Default")}</span>
            <Input className="border-0 rounded-none focus-visible:ring-0" />
          </div>

          <div className="flex rounded-md border overflow-hidden h-12 text-lg">
            <span className="px-3 flex items-center bg-muted">{t("Large")}</span>
            <Input className="border-0 rounded-none focus-visible:ring-0 text-lg" />
          </div>

        </CardContent>
      </Card>

      {/* Checkbox & Radio */}
      <Card>
        <CardHeader>
          <CardTitle>{t("Checkboxes & Radios")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">

          <div className="flex items-center gap-3 border rounded-md p-2">
            <Checkbox />
            <Input className="border-0 focus-visible:ring-0" placeholder={t("Text input with checkbox")} />
          </div>

          <div className="flex items-center gap-3 border rounded-md p-2">
            <RadioGroup defaultValue="one">
              <RadioGroupItem value="one" />
            </RadioGroup>
            <Input className="border-0 focus-visible:ring-0" placeholder={t("Text input with radio")} />
          </div>

        </CardContent>
      </Card>

      {/* Multiple Inputs */}
      <Card>
        <CardHeader>
          <CardTitle>{t("Multiple Inputs")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex rounded-md border overflow-hidden">
            <span className="px-3 flex items-center bg-muted">
              {t("First and last name")}
            </span>
            <Input className="border-0 rounded-none focus-visible:ring-0" placeholder={t("First name")} />
            <Input className="border-0 rounded-none focus-visible:ring-0" placeholder={t("Last name")} />
          </div>
        </CardContent>
      </Card>

      {/* Dropdown Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>{t("Buttons with Dropdowns")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">

          <div className="flex rounded-md border overflow-hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-none">
                  {t("Dropdown")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>{t("Action")}</DropdownMenuItem>
                <DropdownMenuItem>{t("Another action")}</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{t("Separated link")}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Input className="border-0 rounded-none focus-visible:ring-0" />
          </div>

          <div className="flex rounded-md border overflow-hidden">
            <Input className="border-0 rounded-none focus-visible:ring-0" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-none">
                  {t("Dropdown")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>{t("Action")}</DropdownMenuItem>
                <DropdownMenuItem>{t("Another action")}</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{t("Separated link")}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </CardContent>
      </Card>

      {/* Buttons Addons */}
      <Card>
        <CardHeader>
          <CardTitle>{t("Buttons Addons")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">

          <div className="flex rounded-md border overflow-hidden">
            <Button variant="outline" className="rounded-none">
              {t("Button")}
            </Button>
            <Input className="border-0 rounded-none focus-visible:ring-0" />
          </div>

          <div className="flex rounded-md border overflow-hidden">
            <Input className="border-0 rounded-none focus-visible:ring-0" />
            <Button variant="outline" className="rounded-none">
              {t("Button")}
            </Button>
          </div>

          <div className="flex rounded-md border overflow-hidden">
            <Button variant="outline" className="rounded-none">
              {t("Button")}
            </Button>
            <Button variant="outline" className="rounded-none">
              {t("Button")}
            </Button>
            <Input className="border-0 rounded-none focus-visible:ring-0" />
          </div>

        </CardContent>
      </Card>

    </div>
  )
}