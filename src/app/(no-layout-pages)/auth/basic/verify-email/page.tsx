
import { Suspense } from "react"
import { VerifyEmailForm } from "./VerifyEmailForm"

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <VerifyEmailForm />
    </Suspense>
  )
}
