import { Suspense } from "react"
import CoverVerifyEmailPage  from "./CoverVerifyEmailPage"

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <CoverVerifyEmailPage />
    </Suspense>
  )
}