"use client"

import { useState } from "react"
import { useTranslation } from "@/i18n/use-translation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  paymentMethod: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
  saveDetails: false,
}

export default function CheckoutBillingForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState<any>({})
  const [touched, setTouched] = useState<any>({})

  const validate = () => {
    const newErrors: any = {}

    if (!form.fullName) newErrors.fullName = t("Full name is required")

    if (!form.email) {
      newErrors.email = t("Email is required")
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = t("Email is invalid")
    }

    if (!form.phone) newErrors.phone = t("Phone number is required")
    if (!form.address) newErrors.address = t("Street address is required")
    if (!form.city) newErrors.city = t("City is required")
    if (!form.state) newErrors.state = t("State is required")
    if (!form.zip) newErrors.zip = t("Zip code is required")
    if (!form.country) newErrors.country = t("Country is required")
    if (!form.paymentMethod)
      newErrors.paymentMethod = t("Payment method is required")

    if (
      form.paymentMethod === "Credit Card" ||
      form.paymentMethod === "Debit Card"
    ) {
      if (!form.cardNumber)
        newErrors.cardNumber = t("Card number is required")
      if (!form.expiry) newErrors.expiry = t("Expiry is required")
      if (!form.cvv) newErrors.cvv = t("CVV is required")
    }

    return newErrors
  }

  const handleChange = (name: string, value: any) => {
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (name: string) => {
    setTouched((prev: any) => ({ ...prev, [name]: true }))
    setErrors(validate())
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      alert(t("Purchase completed!"))
      setForm(initialState)
      setTouched({})
    }
  }

  const inputStyle = (name: string) =>
    touched[name] && errors[name]
      ? "border-red-500 focus-visible:ring-red-500"
      : ""

  return (
    <div className="flex justify-center py-10 px-4">
      <Card className="w-full max-w-4xl rounded-2xl shadow-lg">
        <CardHeader className="border-b">
          <CardTitle className="text-xl font-bold text-center">
            🧾 {t("Checkout - Billing Details")}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Full Name */}
            <div className="space-y-2">
              <Label>{t("Full Name")}</Label>
              <Input
                placeholder={t("Enter your full name")}
                value={form.fullName}
                onChange={(e) =>
                  handleChange("fullName", e.target.value)
                }
                onBlur={() => handleBlur("fullName")}
                className={inputStyle("fullName")}
              />
              {touched.fullName && errors.fullName && (
                <p className="text-sm text-red-500">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>{t("Email")}</Label>
                <Input
                  type="email"
                  placeholder={t("Enter your email")}
                  value={form.email}
                  onChange={(e) =>
                    handleChange("email", e.target.value)
                  }
                  onBlur={() => handleBlur("email")}
                  className={inputStyle("email")}
                />
                {touched.email && errors.email && (
                  <p className="text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>{t("Phone")}</Label>
                <Input
                  placeholder="+91 9876543210"
                  value={form.phone}
                  onChange={(e) =>
                    handleChange("phone", e.target.value)
                  }
                  onBlur={() => handleBlur("phone")}
                  className={inputStyle("phone")}
                />
                {touched.phone && errors.phone && (
                  <p className="text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label>{t("Street Address")}</Label>
              <Input
                placeholder="123 Main St"
                value={form.address}
                onChange={(e) =>
                  handleChange("address", e.target.value)
                }
                onBlur={() => handleBlur("address")}
                className={inputStyle("address")}
              />
              {touched.address && errors.address && (
                <p className="text-sm text-red-500">
                  {errors.address}
                </p>
              )}
            </div>

            {/* City / State / Zip */}
            <div className="grid md:grid-cols-3 gap-6">
              {["city", "state", "zip"].map((field) => (
                <div key={field} className="space-y-2">
                  <Label className="capitalize">
                    {field === "city"
                      ? t("City")
                      : field === "state"
                        ? t("State")
                        : t("Zip")}
                  </Label>
                  <Input
                    placeholder={
                      field === "city"
                        ? t("Enter city")
                        : field === "state"
                          ? t("Enter state")
                          : t("Enter zip")
                    }
                    value={(form as any)[field]}
                    onChange={(e) =>
                      handleChange(field, e.target.value)
                    }
                    onBlur={() => handleBlur(field)}
                    className={inputStyle(field)}
                  />
                  {touched[field] && errors[field] && (
                    <p className="text-sm text-red-500">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label>{t("Country")}</Label>
              <Select
                onValueChange={(value) =>
                  handleChange("country", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("Select Country")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="India">{t("India")}</SelectItem>
                  <SelectItem value="United States">
                    {t("United States")}
                  </SelectItem>
                  <SelectItem value="United Kingdom">
                    {t("United Kingdom")}
                  </SelectItem>
                  <SelectItem value="Canada">{t("Canada")}</SelectItem>
                  <SelectItem value="Australia">
                    {t("Australia")}
                  </SelectItem>
                </SelectContent>
              </Select>
              {touched.country && errors.country && (
                <p className="text-sm text-red-500">
                  {errors.country}
                </p>
              )}
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <Label>{t("Payment Method")}</Label>
              <Select
                onValueChange={(value) =>
                  handleChange("paymentMethod", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("Select Payment Method")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Credit Card">
                    {t("Credit Card")}
                  </SelectItem>
                  <SelectItem value="Debit Card">
                    {t("Debit Card")}
                  </SelectItem>
                  <SelectItem value="UPI">{t("UPI")}</SelectItem>
                  <SelectItem value="Net Banking">
                    {t("Net Banking")}
                  </SelectItem>
                  <SelectItem value="COD">
                    {t("Cash on Delivery")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Card Details */}
            {(form.paymentMethod === "Credit Card" ||
              form.paymentMethod === "Debit Card") && (
              <div className="grid md:grid-cols-3 gap-6">
                <Input
                  placeholder={t("Card Number")}
                  onChange={(e) =>
                    handleChange("cardNumber", e.target.value)
                  }
                />
                <Input
                  placeholder="MM/YY"
                  onChange={(e) =>
                    handleChange("expiry", e.target.value)
                  }
                />
                <Input
                  type="password"
                  placeholder={t("CVV")}
                  onChange={(e) =>
                    handleChange("cvv", e.target.value)
                  }
                />
              </div>
            )}

            {/* Save Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={form.saveDetails}
                onCheckedChange={(value) =>
                  handleChange("saveDetails", value)
                }
              />
              <Label>{t("Save my details for future checkout")}</Label>
            </div>

            <Button type="submit" className="w-full font-semibold">
              {t("Complete Purchase")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}