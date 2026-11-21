"use client"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Printer,
  ArrowLeft,
} from "lucide-react"
import { useTranslation } from "@/i18n/use-translation"
const invoice = {
  id: "INV-003",
  orderId: "ORD-003",
  date: "2024-02-03",
  dueDate: "2024-02-10",
  status: "Paid",
  company: {
    name: "Acme Inc.",
    address: "123 Business Street, New York, USA",
    email: "billing@acme.com",
  },
  customer: {
    name: "Michael Brown",
    address: "45 Main Street, California, USA",
    email: "michael@example.com",
  },
  items: [
    { name: "Denim Jacket", qty: 1, price: 120 },
    { name: "Leather Belt", qty: 1, price: 45 },
    { name: "Cotton T-Shirt", qty: 2, price: 25 },
    { name: "Running Shoes", qty: 1, price: 85.75 },
  ],
  subtotal: 220,
  tax: 15.75,
  shipping: 10,
  total: 245.75,
}
export default function InvoicePage() {
  const { t } = useTranslation()
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>

          <div>
            <h2 className="text-2xl font-semibold">
              {t("Invoice")} {invoice.id}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("Order")} {invoice.orderId}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            {t("Print")}
          </Button>

          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            {t("Download PDF")}
          </Button>

          <Badge className="bg-green-100 text-green-600">
            {t(invoice.status)}
          </Badge>
        </div>
      </div>
              <Card className="mx-auto max-w-4xl">
        <CardContent className="space-y-8 p-8">
          <div className="flex flex-wrap justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold">
                {t(invoice.company.name)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(invoice.company.address)}
              </p>
              <p className="text-sm text-muted-foreground">
                {invoice.company.email}
              </p>
            </div>

            <div className="text-sm space-y-1">
              <p>
                <span className="font-medium">{t("Invoice:")}</span>{" "}
                {invoice.id}
              </p>
              <p>
                <span className="font-medium">{t("Date:")}</span>{" "}
                {invoice.date}
              </p>
              <p>
                <span className="font-medium">{t("Due:")}</span>{" "}
                {invoice.dueDate}
              </p>
            </div>
          </div>
          <Separator />

          <div>
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              {t("Bill To")}
            </p>
            <p className="font-medium">
              {t(invoice.customer.name)}
            </p>
            <p className="text-sm text-muted-foreground">
              {t(invoice.customer.address)}
            </p>
            <p className="text-sm text-muted-foreground">
              {invoice.customer.email}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left font-medium">
                    {t("Item")}
                  </th>
                  <th className="py-2 text-center font-medium">
                    {t("Qty")}
                  </th>
                  <th className="py-2 text-right font-medium">
                    {t("Price")}
                  </th>
                  <th className="py-2 text-right font-medium">
                    {t("Total")}
                  </th>
                </tr>
              </thead>

              <tbody>
                {invoice.items.map((item, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{t(item.name)}</td>
                    <td className="py-2 text-center">
                      {item.qty}
                    </td>
                    <td className="py-2 text-right">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="py-2 text-right">
                      ${(item.qty * item.price).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <div className="w-full max-w-sm space-y-2 text-sm">
              <div className="flex justify-between">
                <span>{t("Subtotal")}</span>
                <span>${invoice.subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>{t("Tax")}</span>
                <span>${invoice.tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>{t("Shipping")}</span>
                <span>${invoice.shipping.toFixed(2)}</span>
              </div>

              <Separator />

              <div className="flex justify-between text-base font-semibold">
                <span>{t("Total")}</span>
                <span>${invoice.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <Separator />

          <p className="text-center text-sm text-muted-foreground">
            {t("Thank you for your business!")}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
