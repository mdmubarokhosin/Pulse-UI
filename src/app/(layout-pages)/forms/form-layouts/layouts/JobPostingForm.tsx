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
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const initialState = {
  jobTitle: "",
  companyName: "",
  location: "",
  jobType: "",
  experience: "",
  salaryMin: "",
  salaryMax: "",
  description: "",
  skills: "",
  deadline: "",
  confirm: false,
}

export default function JobPostingForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState<any>({})
  const [touched, setTouched] = useState<any>({})

  const validate = () => {
    const newErrors: any = {}

    if (!form.jobTitle) newErrors.jobTitle = t("Job title is required")
    if (!form.companyName) newErrors.companyName = t("Company name is required")
    if (!form.location) newErrors.location = t("Location is required")
    if (!form.jobType) newErrors.jobType = t("Job type is required")
    if (!form.experience) newErrors.experience = t("Experience level is required")
    if (!form.salaryMin) newErrors.salaryMin = t("Minimum salary is required")
    if (!form.salaryMax) newErrors.salaryMax = t("Maximum salary is required")

    if (
      form.salaryMin &&
      form.salaryMax &&
      Number(form.salaryMin) > Number(form.salaryMax)
    ) {
      newErrors.salaryMax = t("Max salary must be greater than min salary")
    }

    if (!form.description)
      newErrors.description = t("Job description is required")

    if (!form.skills) newErrors.skills = t("Skills are required")
    if (!form.deadline)
      newErrors.deadline = t("Application deadline is required")

    if (!form.confirm)
      newErrors.confirm = t("Please confirm job details")

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
      alert(t("Job posted successfully!"))
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
            💼 {t("Post a Job")}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Job Title */}
            <div className="space-y-2">
              <Label>{t("Job Title")}</Label>
              <Input
                placeholder={t("Enter job title")}
                value={form.jobTitle}
                onChange={(e) =>
                  handleChange("jobTitle", e.target.value)
                }
                onBlur={() => handleBlur("jobTitle")}
                className={inputStyle("jobTitle")}
              />
              {touched.jobTitle && errors.jobTitle && (
                <p className="text-sm text-red-500">
                  {errors.jobTitle}
                </p>
              )}
            </div>

            {/* Company + Location */}
            <div className="grid md:grid-cols-2 gap-6">
              {["companyName", "location"].map((field) => (
                <div key={field} className="space-y-2">
                  <Label className="capitalize">
                    {field === "companyName"
                      ? t("Company Name")
                      : t("Location")}
                  </Label>
                  <Input
                    placeholder={
                      field === "companyName"
                        ? t("Enter companyName")
                        : t("Enter location")
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

            {/* Job Type + Experience */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>{t("Job Type")}</Label>
                <Select
                  onValueChange={(value) =>
                    handleChange("jobType", value)
                  }
                  
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("Select job type")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-Time">
                      {t("Full-Time")}
                    </SelectItem>
                    <SelectItem value="Part-Time">
                      {t("Part-Time")}
                    </SelectItem>
                    <SelectItem value="Contract">
                      {t("Contract")}
                    </SelectItem>
                    <SelectItem value="Internship">
                      {t("Internship")}
                    </SelectItem>
                    <SelectItem value="Remote">
                      {t("Remote")}
                    </SelectItem>
                  </SelectContent>
                </Select>
                {touched.jobType && errors.jobType && (
                  <p className="text-sm text-red-500">
                    {errors.jobType}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>{t("Experience Level")}</Label>
                <Select
                  onValueChange={(value) =>
                    handleChange("experience", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("Select experience")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Entry Level">
                      {t("Entry Level")}
                    </SelectItem>
                    <SelectItem value="Mid Level">
                      {t("Mid Level")}
                    </SelectItem>
                    <SelectItem value="Senior Level">
                      {t("Senior Level")}
                    </SelectItem>
                  </SelectContent>
                </Select>
                {touched.experience && errors.experience && (
                  <p className="text-sm text-red-500">
                    {errors.experience}
                  </p>
                )}
              </div>
            </div>

            {/* Salary */}
            <div className="grid md:grid-cols-2 gap-6">
              {["salaryMin", "salaryMax"].map((field) => (
                <div key={field} className="space-y-2">
                  <Label>
                    {field === "salaryMin"
                      ? t("Salary Range (Min)")
                      : t("Salary Range (Max)")}
                  </Label>
                  <Input
                    type="number"
                    placeholder={t("Enter amount")}
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

            {/* Description */}
            <div className="space-y-2">
              <Label>{t("Job Description")}</Label>
              <Textarea
                rows={4}
                placeholder={t("Enter detailed job description")}
                value={form.description}
                onChange={(e) =>
                  handleChange("description", e.target.value)
                }
                onBlur={() => handleBlur("description")}
                className={inputStyle("description")}
              />
              {touched.description && errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <Label>{t("Skills Required")}</Label>
              <Input
                placeholder="React, Node.js, SQL"
                value={form.skills}
                onChange={(e) =>
                  handleChange("skills", e.target.value)
                }
                onBlur={() => handleBlur("skills")}
                className={inputStyle("skills")}
              />
              {touched.skills && errors.skills && (
                <p className="text-sm text-red-500">
                  {errors.skills}
                </p>
              )}
            </div>

            {/* Deadline */}
            <div className="space-y-2">
              <Label>{t("Application Deadline")}</Label>
              <Input
                type="date"
                value={form.deadline}
                onChange={(e) =>
                  handleChange("deadline", e.target.value)
                }
                onBlur={() => handleBlur("deadline")}
                className={inputStyle("deadline")}
              />
              {touched.deadline && errors.deadline && (
                <p className="text-sm text-red-500">
                  {errors.deadline}
                </p>
              )}
            </div>

            {/* Confirm Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={form.confirm}
                onCheckedChange={(value) =>
                  handleChange("confirm", value)
                }
              />
              <Label>
                {t("I confirm the job details are accurate before posting")}
              </Label>
            </div>
            {touched.confirm && errors.confirm && (
              <p className="text-sm text-red-500">
                {errors.confirm}
              </p>
            )}

            <Button type="submit" className="w-full font-semibold">
              {t("Post Job")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}