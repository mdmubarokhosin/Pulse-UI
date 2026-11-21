"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Bold,
  ChevronRight,
  GripVertical,
  Heading2,
  Image as ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Plus,
  Star,
  Trash2,
  Upload,
  X,
} from "lucide-react"
import { useTranslation } from "@/i18n/use-translation"

/* -------------------------------------------------------------------------- */
/*  Static sample data: replace with your own data or remove when wiring up   */
/* -------------------------------------------------------------------------- */

const variants = [
  { name: "Black / S", price: "49.00", stock: "24", sku: "TSH-BLK-S" },
  { name: "Black / M", price: "49.00", stock: "32", sku: "TSH-BLK-M" },
  { name: "Blue / S", price: "52.00", stock: "12", sku: "TSH-BLU-S" },
  { name: "Blue / M", price: "52.00", stock: "0", sku: "TSH-BLU-M" },
]

const tags = ["Summer", "Cotton", "Bestseller"]

/* -------------------------------------------------------------------------- */
/*                                 Page                                       */
/* -------------------------------------------------------------------------- */

export default function AddProduct() {
  const { t } = useTranslation()

  return (
    <div className="min-w-0 max-w-full space-y-8">
      {/* PAGE HEADER */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <nav className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>{t("Products")}</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{t("Add product")}</span>
          </nav>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-tight">{t("Add new product")}</h1>
            <Badge variant="secondary">{t("Draft")}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {t("Fill in the details below to add a product to your catalog.")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button type="button" variant="ghost">{t("Discard")}</Button>
          <Button type="button" variant="outline">{t("Save as draft")}</Button>
          <Button type="button">{t("Publish product")}</Button>
        </div>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        {/* ============================ MAIN COLUMN ============================ */}
        <div className="min-w-0 space-y-6">
          {/* BASIC INFORMATION */}
          <Card>
            <CardHeader>
              <CardTitle>{t("Basic information")}</CardTitle>
              <CardDescription>{t("Name and describe your product.")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">{t("Product name")}</Label>
                <Input id="name" placeholder={t("e.g. Classic cotton t-shirt")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">{t("Description")}</Label>
                <div className="overflow-hidden rounded-md border focus-within:ring-2 focus-within:ring-ring/30">
                  <div className="flex flex-wrap items-center gap-1 border-b bg-muted/40 p-1.5">
                    {[Heading2, Bold, Italic, List, ListOrdered, Link2].map((Icon, i) => (
                      <Button key={i} type="button" variant="ghost" size="icon" className="h-8 w-8">
                        <Icon className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                  <Textarea
                    id="description"
                    rows={7}
                    placeholder={t("Describe materials, fit, key features...")}
                    className="rounded-none border-0 shadow-none focus-visible:ring-0"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  {t("Shown on the product page. Keep it clear and scannable.")}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* MEDIA */}
          <Card>
            <CardHeader>
              <CardTitle>{t("Media")}</CardTitle>
              <CardDescription>
                {t("Upload up to 8 images. The first image is used as the cover.")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed bg-muted/20 px-6 py-10 text-center transition-colors hover:bg-muted/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border bg-background">
                  <Upload className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm">
                  <span className="font-medium text-primary">{t("Click to upload")}</span>{" "}
                  {t("or drag and drop")}
                </p>
                <p className="text-xs text-muted-foreground">{t("PNG, JPG or WEBP, up to 5 MB each")}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="group relative aspect-square overflow-hidden rounded-lg border bg-gradient-to-br from-muted to-muted/40"
                  >
                    <div className="flex h-full w-full items-center justify-center text-muted-foreground/60">
                      <ImageIcon className="h-8 w-8" />
                    </div>

                    {i === 0 && <Badge className="absolute left-2 top-2">{t("Cover")}</Badge>}

                    <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                      {i !== 0 && (
                        <Button type="button" size="icon" variant="secondary" className="h-7 w-7">
                          <Star className="h-3.5 w-3.5" />
                        </Button>
                      )}
                      <Button type="button" size="icon" variant="destructive" className="h-7 w-7">
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}

                <div className="flex aspect-square cursor-pointer items-center justify-center rounded-lg border border-dashed text-muted-foreground transition-colors hover:bg-muted/40">
                  <Plus className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PRICING */}
          <Card>
            <CardHeader>
              <CardTitle>{t("Pricing")}</CardTitle>
              <CardDescription>{t("Set the price and tax for this product.")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="price">{t("Price")}</Label>
                  <PrefixInput id="price" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sale-price">{t("Sale price")}</Label>
                  <PrefixInput id="sale-price" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cost">{t("Cost per item")}</Label>
                  <PrefixInput id="cost" placeholder="0.00" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label>{t("Tax class")}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t("Select tax")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">{t("No tax")}</SelectItem>
                      <SelectItem value="vat">{t("VAT")}</SelectItem>
                      <SelectItem value="gst">{t("GST")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-3 divide-x rounded-lg border bg-muted/30 text-sm">
                {[
                  { label: t("Selling price"), value: "$49.00" },
                  { label: t("Profit"), value: "$21.00" },
                  { label: t("Margin"), value: "42.8%" },
                ].map((s) => (
                  <div key={s.label} className="space-y-0.5 px-3 py-3 sm:px-4">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="font-semibold">{s.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* INVENTORY */}
          <Card>
            <CardHeader>
              <CardTitle>{t("Inventory")}</CardTitle>
              <CardDescription>{t("Track stock and manage availability.")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="sku">{t("SKU")}</Label>
                  <Input id="sku" placeholder="TSH-001" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="barcode">{t("Barcode (ISBN, UPC, GTIN)")}</Label>
                  <Input id="barcode" placeholder="0123456789012" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock">{t("Stock quantity")}</Label>
                  <Input id="stock" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="low-stock">{t("Low stock alert")}</Label>
                  <Input id="low-stock" type="number" placeholder="5" />
                </div>
              </div>

              <div className="divide-y rounded-lg border">
                <ToggleRow
                  title={t("Track inventory")}
                  description={t("Reduce stock automatically when orders are placed.")}
                  defaultChecked
                />
                <ToggleRow
                  title={t("Allow backorders")}
                  description={t("Let customers buy this product when it is out of stock.")}
                />
              </div>
            </CardContent>
          </Card>

          {/* VARIANTS */}
          <Card>
            <CardHeader className="flex flex-col items-start justify-between gap-4 sm:flex-row">
              <div className="space-y-1.5">
                <CardTitle>{t("Variants")}</CardTitle>
                <CardDescription>
                  {t("Add options like color or size when a product comes in several versions.")}
                </CardDescription>
              </div>
              <Button type="button" size="sm" variant="outline">
                <Plus className="mr-1 h-4 w-4" />
                {t("Add option")}
              </Button>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Options */}
              <div className="space-y-3">
                {[
                  { name: t("Color"), values: [t("Black"), t("Blue")] },
                  { name: t("Size"), values: ["S", "M"] },
                ].map((opt) => (
                  <div key={opt.name} className="flex items-start gap-3 rounded-lg border p-3">
                    <GripVertical className="mt-2 h-4 w-4 shrink-0 cursor-grab text-muted-foreground" />
                    <div className="grid min-w-0 flex-1 gap-3 sm:grid-cols-[160px_1fr]">
                      <Input defaultValue={opt.name} aria-label={t("Option name")} />
                      <div className="flex min-h-9 flex-wrap items-center gap-2 rounded-md border px-2 py-1.5">
                        {opt.values.map((v) => (
                          <Badge key={v} variant="secondary" className="gap-1 pr-1">
                            {v}
                            <X className="h-3 w-3 cursor-pointer" />
                          </Badge>
                        ))}
                        <input
                          className="min-w-24 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                          placeholder={t("Add value")}
                        />
                      </div>
                    </div>
                    <Button type="button" size="icon" variant="ghost" className="h-9 w-9">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Variant table */}
              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full min-w-[560px] text-sm">
                  <thead className="bg-muted/40 text-left text-xs text-muted-foreground">
                    <tr>
                      <th className="px-4 py-2.5 font-medium">{t("Variant")}</th>
                      <th className="px-4 py-2.5 font-medium">{t("Price")}</th>
                      <th className="px-4 py-2.5 font-medium">{t("Stock")}</th>
                      <th className="px-4 py-2.5 font-medium">{t("SKU")}</th>
                      <th className="px-4 py-2.5" />
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {variants.map((v) => (
                      <tr key={v.sku}>
                        <td className="px-4 py-2.5 font-medium">{t(v.name)}</td>
                        <td className="px-4 py-2.5">
                          <Input defaultValue={v.price} className="h-8 w-24" />
                        </td>
                        <td className="px-4 py-2.5">
                          {v.stock === "0" ? (
                            <Badge variant="destructive">{t("Out of stock")}</Badge>
                          ) : (
                            <Input defaultValue={v.stock} className="h-8 w-20" />
                          )}
                        </td>
                        <td className="px-4 py-2.5">
                          <Input defaultValue={v.sku} className="h-8 w-36" />
                        </td>
                        <td className="px-4 py-2.5 text-right">
                          <Button type="button" size="icon" variant="ghost" className="h-8 w-8">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* SHIPPING */}
          <Card>
            <CardHeader>
              <CardTitle>{t("Shipping")}</CardTitle>
              <CardDescription>{t("Used to calculate shipping rates at checkout.")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <ToggleRow
                title={t("This is a physical product")}
                description={t("Turn off for digital products and services.")}
                defaultChecked
                bordered
              />

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[t("Weight (kg)"), t("Length (cm)"), t("Width (cm)"), t("Height (cm)")].map((label) => (
                  <div key={label} className="space-y-2">
                    <Label>{label}</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ============================== SIDEBAR ============================== */}
        <aside className="min-w-0 space-y-6 xl:sticky xl:top-6">
          {/* STATUS */}
          <Card>
            <CardHeader>
              <CardTitle>{t("Status")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select defaultValue="draft">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">{t("Active")}</SelectItem>
                  <SelectItem value="draft">{t("Draft")}</SelectItem>
                  <SelectItem value="archived">{t("Archived")}</SelectItem>
                </SelectContent>
              </Select>

              <div className="divide-y rounded-lg border">
                <ToggleRow
                  title={t("Featured product")}
                  description={t("Show on the home page.")}
                  compact
                />
                <ToggleRow
                  title={t("Visible in search")}
                  description={t("Appear in store search results.")}
                  defaultChecked
                  compact
                />
              </div>
            </CardContent>
          </Card>

          {/* ORGANIZATION */}
          <Card>
            <CardHeader>
              <CardTitle>{t("Organization")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>{t("Category")}</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("Select category")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fashion">{t("Fashion")}</SelectItem>
                    <SelectItem value="electronics">{t("Electronics")}</SelectItem>
                    <SelectItem value="accessories">{t("Accessories")}</SelectItem>
                    <SelectItem value="home">{t("Home & Living")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{t("Brand")}</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("Select brand")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nike">{t("Nike")}</SelectItem>
                    <SelectItem value="adidas">{t("Adidas")}</SelectItem>
                    <SelectItem value="puma">{t("Puma")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{t("Collection")}</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("Select collection")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="summer">{t("Summer 2026")}</SelectItem>
                    <SelectItem value="essentials">{t("Essentials")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{t("Tags")}</Label>
                <div className="flex min-h-9 flex-wrap items-center gap-2 rounded-md border px-2 py-1.5">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="gap-1 pr-1">
                      {t(tag)}
                      <X className="h-3 w-3 cursor-pointer" />
                    </Badge>
                  ))}
                  <input
                    className="min-w-20 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                    placeholder={t("Add tag")}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardHeader>
              <CardTitle>{t("Search engine listing")}</CardTitle>
              <CardDescription>{t("Preview how this product appears on Google.")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1 rounded-lg border bg-muted/30 p-3">
                <p className="truncate text-xs text-muted-foreground">
                  yourstore.com › products › classic-cotton-tshirt
                </p>
                <p className="truncate text-sm font-medium text-primary">
                  {t("Classic cotton t-shirt | Your Store")}
                </p>
                <p className="line-clamp-2 text-xs text-muted-foreground">
                  {t("Soft, breathable cotton t-shirt in a relaxed fit. Available in multiple colors and sizes.")}
                </p>
              </div>

              <div className="space-y-2">
                <Label>{t("SEO title")}</Label>
                <Input placeholder={t("SEO title")} />
              </div>
              <div className="space-y-2">
                <Label>{t("Slug")}</Label>
                <Input placeholder="product-slug" />
              </div>
              <div className="space-y-2">
                <Label>{t("Meta description")}</Label>
                <Textarea rows={3} placeholder={t("Short summary for search engines")} />
                <p className="text-xs text-muted-foreground">{t("Recommended: up to 160 characters.")}</p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex flex-wrap justify-end gap-2 border-t pt-6">
        <Button type="button" variant="ghost" className="h-8">
          {t("Discard")}
        </Button>
        <Button type="button" variant="outline" className="h-8">
          {t("Save as draft")}
        </Button>
        <Button type="button" className="h-8">
          {t("Publish product")}
        </Button>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                         Small presentational helpers                       */
/* -------------------------------------------------------------------------- */

function PrefixInput({ id, placeholder }: { id?: string; placeholder?: string }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
        $
      </span>
      <Input id={id} placeholder={placeholder} className="pl-7" />
    </div>
  )
}

function ToggleRow({
  title,
  description,
  defaultChecked,
  compact,
  bordered,
}: {
  title: string
  description: string
  defaultChecked?: boolean
  compact?: boolean
  bordered?: boolean
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 ${compact ? "px-3 py-2.5" : "px-4 py-3"} ${
        bordered ? "rounded-lg border" : ""
      }`}
    >
      <div className="space-y-0.5">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  )
}