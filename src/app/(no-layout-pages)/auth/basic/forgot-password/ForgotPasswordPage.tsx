"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslation } from "@/i18n/use-translation"

export default function ForgotPasswordPage() {
  const { t } = useTranslation()
  const router = useRouter()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = new FormData(e.currentTarget).get("email") as string
    // call your send-reset-link API here
    router.push(`/auth/basic/verify-email?email=${encodeURIComponent(email)}`)
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col isolate bg-background/0 text-foreground">
      {/* Background texture — muted */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Muted tone wash */}
        <div className="absolute left-1/2 top-0 h-[460px] w-[680px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-muted-foreground/10 blur-3xl" />
        <div className="absolute right-[12%] bottom-0 h-[320px] w-[320px] translate-y-1/3 rounded-full bg-muted-foreground/10 blur-3xl" />

        {/* Film grain (below the grid) */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.1] dark:opacity-[0.05]">
          <filter id="auth4-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#auth4-grain)" />
        </svg>

        {/* Grid lines — follow the theme's --border */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* Header */}
      <header className="flex flex-col items-center justify-between gap-4 px-8 py-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background">
            <Sparkles className="size-5" />
          </div>

          <span className="text-lg font-semibold">MD MUBAROK</span>
        </div>

        <div className="text-sm text-muted-foreground">
          {t("New to MD MUBAROK?")}{" "}
          <Link
            href="/auth/basic/register"
            className="font-medium text-foreground hover:underline"
          >
            {t("Create an account")}
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 pb-10">
        <div className="w-full max-w-md rounded-xl border border-border/60 bg-card/80 p-8 shadow-xl backdrop-blur-lg">
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {t("Forgot your password?")}
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("Enter the email address linked to your MD MUBAROK account and we'll send you a link to reset your password.")}
            </p>
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="email" className="text-sm font-medium">
                {t("Email address")}
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="h-9 bg-background px-3"
                required
              />
            </div>

            <Button
              type="submit"
              className="mt-1 h-9 bg-linear-to-r from-pink-500 to-purple-600 text-white"
            >
              {t("Send reset link")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          {/* Back link */}
          <div className="mt-6 flex justify-center">
            <Link
              href="/auth/basic/login"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              <ArrowLeft className="size-4" />
              {t("Back to sign in")}
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center gap-5 px-4 pb-8 text-center">
        <p className="text-sm text-muted-foreground">
          {t("Join thousands of developers building faster with MD MUBAROK")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-60 grayscale">
          <span className="text-base font-semibold tracking-tight">
            ANTHROPIC
          </span>

          <span className="flex items-center gap-1.5 text-base font-semibold">
            <span className="text-foreground">⚡</span>
            supabase
          </span>

          <span className="text-base font-bold">NVIDIA.</span>

          <span className="text-base font-semibold italic">Resend</span>

          <span className="flex items-center gap-1.5 text-base font-medium">
            <span>✦</span>
            OpenAI
          </span>
        </div>
      </footer>
    </div>
  )
}