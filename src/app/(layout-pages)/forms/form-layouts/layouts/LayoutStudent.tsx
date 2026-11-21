"use client"

import { useState } from "react"
import { useTranslation } from "@/i18n/use-translation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  course: "",
  address: "",
  confirm: false,
}

export default function LayoutStudent() {
  const { t } = useTranslation()
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState<any>({})
  const [touched, setTouched] = useState<any>({})

  const validate = () => {
    const newErrors: any = {}

    if (!form.firstName) newErrors.firstName = t("First name is required")
    if (!form.lastName) newErrors.lastName = t("Last name is required")

    if (!form.email) {
      newErrors.email = t("Email is required")
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = t("Email is invalid")
    }

    if (!form.phone) newErrors.phone = t("Phone number is required")
    if (!form.dob) newErrors.dob = t("Date of birth is required")
    if (!form.gender) newErrors.gender = t("Gender is required")
    if (!form.course) newErrors.course = t("Course is required")
    if (!form.address) newErrors.address = t("Address is required")
    if (!form.confirm) newErrors.confirm = t("Please confirm your details")

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

    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      dob: true,
      gender: true,
      course: true,
      address: true,
      confirm: true,
    })

    if (Object.keys(validationErrors).length === 0) {
      alert(t("Form submitted successfully!"))
      setForm(initialState)
      setTouched({})
    }
  }

  const inputStyle = (name: string) =>
    touched[name] && errors[name]
      ? "border-red-500 focus-visible:ring-red-500"
      : ""

  return (
    <div className="flex justify-center py-10 px-4 min-h-screen">
      <Card className="w-full max-w-3xl rounded-2xl shadow-xl">
        <CardHeader className="border-b">
          <CardTitle className="text-xl font-bold text-center">
            🎓 {t("Student Registration")}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* First & Last Name */}
            <div className="grid md:grid-cols-2 gap-6">
              {["firstName", "lastName"].map((field) => (
                <div key={field} className="space-y-2">
                  <Label>
                    {field === "firstName"
                      ? t("First Name")
                      : t("Last Name")}
                  </Label>
                  <Input
                    placeholder={
                      field === "firstName"
                        ? t("Enter first name")
                        : t("Enter last name")
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

            {/* Email */}
            <div className="space-y-2">
              <Label>{t("Email Address")}</Label>
              <Input
                type="email"
                placeholder={t("Enter email")}
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

            {/* Phone */}
            <div className="space-y-2">
              <Label>{t("Phone Number")}</Label>
              <Input
                type="tel"
                placeholder={t("Enter phone number")}
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

            {/* DOB & Gender */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>{t("Date of Birth")}</Label>
                <Input
                  type="date"
                  value={form.dob}
                  onChange={(e) =>
                    handleChange("dob", e.target.value)
                  }
                  onBlur={() => handleBlur("dob")}
                  className={inputStyle("dob")}
                />
                {touched.dob && errors.dob && (
                  <p className="text-sm text-red-500">
                    {errors.dob}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>{t("Gender")}</Label>
                <Select
                  onValueChange={(value) =>
                    handleChange("gender", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("Select gender")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">{t("Male")}</SelectItem>
                    <SelectItem value="Female">{t("Female")}</SelectItem>
                    <SelectItem value="Other">{t("Other")}</SelectItem>
                  </SelectContent>
                </Select>
                {touched.gender && errors.gender && (
                  <p className="text-sm text-red-500">
                    {errors.gender}
                  </p>
                )}
              </div>
            </div>

            {/* Course */}
            <div className="space-y-2">
              <Label>{t("Course")}</Label>
              <Select
                onValueChange={(value) =>
                  handleChange("course", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("Select course")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bachelor of Science">
                    {t("Bachelor of Science")}
                  </SelectItem>
                  <SelectItem value="Bachelor of Arts">
                    {t("Bachelor of Arts")}
                  </SelectItem>
                  <SelectItem value="Bachelor of Commerce">
                    {t("Bachelor of Commerce")}
                  </SelectItem>
                  <SelectItem value="Engineering">
                    {t("Engineering")}
                  </SelectItem>
                  <SelectItem value="Other">
                    {t("Other")}
                  </SelectItem>
                </SelectContent>
              </Select>
              {touched.course && errors.course && (
                <p className="text-sm text-red-500">
                  {errors.course}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label>{t("Address")}</Label>
              <Textarea
                rows={3}
                placeholder={t("Enter full address")}
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

            {/* Confirm */}
            <div className="flex items-start space-x-2">
              <Checkbox
                checked={form.confirm}
                onCheckedChange={(value) =>
                  handleChange("confirm", value)
                }
              />
              <Label className="text-sm font-normal">
                {t("I confirm that the above details are correct")}
              </Label>
            </div>
            {touched.confirm && errors.confirm && (
              <p className="text-sm text-red-500">
                {errors.confirm}
              </p>
            )}

            <Button type="submit" className="w-full font-semibold">
              {t("Register")}
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}