"use client"

import { useTranslation } from "@/i18n/use-translation"
import { Button } from "@/components/ui/button"

export default function Boxicons() {
  const { t } = useTranslation()
  return (
    <div className="icons-page-wrapper">
      <h5 className="text-2xl font-bold mb-6">{t("Boxicons Gallery")}</h5>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">

        {/* Home */}
        <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <i className="bx bx-home text-3xl mb-3 block"></i>
          <p className="text-md font-semibold">{t("Home")}</p>
        </div>

        {/* User */}
        <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <i className="bx bx-user text-3xl mb-3 block"></i>
          <p className="text-md font-semibold">{t("User")}</p>
        </div>

        {/* Heart */}
        <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <i className="bx bx-heart text-3xl mb-3 block"></i>
          <p className="text-md font-semibold">{t("Heart")}</p>
        </div>

        {/* Search */}
        <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <i className="bx bx-search text-3xl mb-3 block"></i>
          <p className="text-md font-semibold">{t("Search")}</p>
        </div>

        {/* Bell */}
        <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <i className="bx bx-bell text-3xl mb-3 block"></i>
          <p className="text-md font-semibold">{t("Bell")}</p>
        </div>

        {/* Mail */}
        <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <i className="bx bx-envelope text-3xl mb-3 block"></i>
          <p className="text-md font-semibold">{t("Mail")}</p>
        </div>

        {/* Settings */}
        <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <i className="bx bx-cog text-3xl mb-3 block"></i>
          <p className="text-md font-semibold">{t("Settings")}</p>
        </div>

        {/* Camera */}
        <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <i className="bx bx-camera text-3xl mb-3 block"></i>
          <p className="text-md font-semibold">{t("Camera")}</p>
        </div>

        {/* Cart */}
        <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <i className="bx bx-cart text-3xl mb-3 block"></i>
          <p className="text-md font-semibold">{t("Cart")}</p>
        </div>

        {/* Book */}
        <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <i className="bx bx-book text-3xl mb-3 block"></i>
          <p className="text-md font-semibold">{t("Book")}</p>
        </div>

        {/* Music */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-music text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Music")}</p>
</div>

{/* Star */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-star text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Star")}</p>
</div>

{/* Map */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-map text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Map")}</p>
</div>

{/* Lock */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-lock text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Lock")}</p>
</div>

{/* WiFi */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-wifi text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("WiFi")}</p>
</div>

{/* Gift */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-gift text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Gift")}</p>
</div>

{/* Globe */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-globe text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Globe")}</p>
</div>

{/* Calendar */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-calendar text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Calendar")}</p>
</div>

{/* Time */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-stopwatch text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Time")}</p>
</div>

{/* Download */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-archive-arrow-down text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Download")}</p>
</div>

{/* Upload */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-folder-up-arrow text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Upload")}</p>
</div>

{/* Play */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-play text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Play")}</p>
</div>

{/* Pause */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-pause text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Pause")}</p>
</div>

{/* Stop */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-stop text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Stop")}</p>
</div>

{/* Edit */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-edit text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Edit")}</p>
</div>

{/* Trash */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-trash text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Trash")}</p>
</div>

{/* Phone */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-phone text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Phone")}</p>
</div>

{/* Printer */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-printer text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Printer")}</p>
</div>

{/* Link */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-link text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Link")}</p>
</div>

{/* Cloud */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-cloud text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Cloud")}</p>
</div>

{/* Sun */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-sun text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Sun")}</p>
</div>

{/* Moon */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-moon text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Moon")}</p>
</div>

{/* Play */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-play text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Play")}</p>
</div>

{/* Pause */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-pause text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Pause")}</p>
</div>

{/* Stop */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-stop text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Stop")}</p>
</div>

{/* Rewind */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-rewind text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Rewind")}</p>
</div>

{/* Fast Forward */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-fast-forward text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Fast Forward")}</p>
</div>

{/* Volume Full */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-volume-full text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Volume Full")}</p>
</div>

{/* Volume Mute */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-volume-mute text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Volume Mute")}</p>
</div>

{/* Book */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-book text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Book")}</p>
</div>

{/* Calendar */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-calendar text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Calendar")}</p>
</div>

{/* Time */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-grid-circle-plus text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Time")}</p>
</div>

{/* Message */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-message text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Message")}</p>
</div>

{/* Chat */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-message-circle text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Chat")}</p>
</div>

{/* Group */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-group text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Group")}</p>
</div>

{/* Globe */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-globe text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Globe")}</p>
</div>

{/* Trending Up */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-trending-up text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Trending Up")}</p>
</div>

{/* Bar Chart */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-bar-chart text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Bar Chart")}</p>
</div>

{/* Credit Card */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-credit-card text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Credit Card")}</p>
</div>

{/* Building */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-building text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Building")}</p>
</div>

{/* Lock */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-lock text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Lock")}</p>
</div>

{/* Bar Chart Columns */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-chart-bar-columns text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Bar Chart")}</p>
</div>

{/* Search */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-search text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Search")}</p>
</div>

{/* Chart */}
<div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <i className="bx bx-bar-chart-big text-3xl mb-3 block"></i>
  <p className="text-md font-medium">{t("Chart")}</p>
</div>



      </div>

<div className="mx-auto mt-6 w-[200px] text-center">
  <Button asChild className="w-full">
    <a
      href="https://boxicons.com/icons"
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("View Full Icons")}
    </a>
  </Button>
</div>

    </div>
  )
}
