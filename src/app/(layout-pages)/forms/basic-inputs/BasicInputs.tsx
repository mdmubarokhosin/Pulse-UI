"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useTranslation } from "@/i18n/use-translation"

export default function BasicInputs() {
  const { t } = useTranslation()
  return (
    <div className="space-y-6">

      {/* Basic Inputs */}
      <Card>
        <CardHeader>
          <CardTitle>{t("Basic Inputs")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>{t("Email address")}</Label>
            <Input type="email" placeholder="name@example.com" />
          </div>

          <div className="space-y-2">
            <Label>{t("Example textarea")}</Label>
            <Textarea rows={3} />
          </div>
        </CardContent>
      </Card>

      {/* Input Sizing */}
      <Card>
        <CardHeader>
          <CardTitle>{t("Input Sizing")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input className="h-12 text-lg" placeholder={t("Large text")} />
          <Input placeholder={t("Normal text")} />
          <Input className="h-8 text-sm" placeholder={t("Small text")} />
        </CardContent>
      </Card>

      {/* Select */}
      <Card>
        <CardHeader>
          <CardTitle>{t("Select")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t("Large select")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">{t("Option One")}</SelectItem>
              <SelectItem value="2">{t("Option Two")}</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t("Default select")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">{t("Option One")}</SelectItem>
              <SelectItem value="2">{t("Option Two")}</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-8 text-sm w-full">
              <SelectValue placeholder={t("Small select")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">{t("Option One")}</SelectItem>
              <SelectItem value="2">{t("Option Two")}</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Floating Labels Alternative */}
      <Card>
        <CardHeader>
          <CardTitle>{t("Floating Style Inputs")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Input placeholder=" " />
            <Label className="absolute left-3 top-2 text-sm text-muted-foreground">
              {t("Email address")}
            </Label>
          </div>

          <div className="relative">
            <Input type="password" placeholder=" " />
            <Label className="absolute left-3 top-2 text-sm text-muted-foreground">
              {t("Password")}
            </Label>
          </div>

          <div className="relative">
            <Textarea placeholder=" " />
            <Label className="absolute left-3 top-2 text-sm text-muted-foreground">
              {t("Comments")}
            </Label>
          </div>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t("Works with selects")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">{t("One")}</SelectItem>
              <SelectItem value="2">{t("Two")}</SelectItem>
              <SelectItem value="3">{t("Three")}</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Disabled & Readonly */}
      <Card>
        <CardHeader>
          <CardTitle>{t("Disabled & Read Only")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder={t("Disabled input")} disabled />
          <Input placeholder={t("Readonly input")} readOnly />
        </CardContent>
      </Card>

      {/* File Input */}
      <Card>
        <CardHeader>
          <CardTitle>{t("File Input")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input type="file" />
          <Input type="file" multiple />
          <Input type="file" disabled />
          <Input type="file" className="text-sm" />
          <Input type="file" className="text-lg" />
        </CardContent>
      </Card>

      {/* Range */}
      <Card>
        <CardHeader>
          <CardTitle>{t("Range")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Slider defaultValue={[50]} max={100} step={1} />
        </CardContent>
      </Card>

    </div>
  )
}