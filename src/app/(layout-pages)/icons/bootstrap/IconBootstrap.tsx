"use client"

import { useTranslation } from "@/i18n/use-translation"
import { Button } from "@/components/ui/button"

export default function IconBootstrap() {
    const { t } = useTranslation()
    return (
        <div className="icons-page-wrapper">

            <h5 className="text-2xl font-bold mb-6">
                {t("Bootstrap Icons Gallery")}
            </h5>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">

                {/* Example Icon Card */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-house text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("House")}</p>
                </div>

                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-alarm text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Alarm")}</p>
                </div>

                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-bag text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Bag")}</p>
                </div>

                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-bell text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Bell")}</p>
                </div>

                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-book text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Book")}</p>
                </div>

                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-box text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Box")}</p>
                </div>

                {/* ---- Continue same pattern for all icons ---- */}

                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-mic text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Mic")}</p>
                </div>

                {/* Briefcase */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-briefcase text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Briefcase")}</p>
                </div>

                {/* Brightness */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-brightness-high text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Brightness")}</p>
                </div>

                {/* Camera */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-camera text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Camera")}</p>
                </div>

                {/* Calendar */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-calendar text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Calendar")}</p>
                </div>

                {/* Car */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-car-front text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Car")}</p>
                </div>

                {/* Chat */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-chat text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Chat")}</p>
                </div>

                {/* Check */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-check2-circle text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Check")}</p>
                </div>

                {/* Clock */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-clock text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Clock")}</p>
                </div>

                {/* Cloud */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-cloud text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Cloud")}</p>
                </div>

                {/* Collection */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-collection text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Collection")}</p>
                </div>

                {/* Compass */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-compass text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Compass")}</p>
                </div>

                {/* CPU */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-cpu text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("CPU")}</p>
                </div>

                {/* Cup */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-cup text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Cup")}</p>
                </div>

                {/* Diagram */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-diagram-3 text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Diagram")}</p>
                </div>

                {/* Disc */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-disc text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Disc")}</p>
                </div>

                {/* Door */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-door-open text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Door")}</p>
                </div>

                {/* Download */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-download text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Download")}</p>
                </div>

                {/* Droplet */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-droplet text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Droplet")}</p>
                </div>

                {/* Smile */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-emoji-smile text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Smile")}</p>
                </div>

                {/* Envelope */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-envelope text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Envelope")}</p>
                </div>

                {/* Warning */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-exclamation-triangle text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Warning")}</p>
                </div>

                {/* Eye */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-eye text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Eye")}</p>
                </div>

                {/* Flag */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-flag text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Flag")}</p>
                </div>

                {/* Folder */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-folder text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Folder")}</p>
                </div>

                {/* Gear */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-gear text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Gear")}</p>
                </div>

                {/* Gem */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-gem text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Gem")}</p>
                </div>

                {/* Gift */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-gift text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Gift")}</p>
                </div>

                {/* Globe */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-globe text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Globe")}</p>
                </div>

                {/* Graph */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-graph-up text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Graph")}</p>
                </div>

                {/* Grid */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-grid text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Grid")}</p>
                </div>

                {/* Hammer */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-hammer text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Hammer")}</p>
                </div>

                {/* Headphones */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-headphones text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Headphones")}</p>
                </div>

                {/* Heart */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-heart text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Heart")}</p>
                </div>

                {/* House Door */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-house-door text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("House Door")}</p>
                </div>

                {/* Inbox */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-inbox text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Inbox")}</p>
                </div>

                {/* Journal */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-journal text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Journal")}</p>
                </div>

                {/* Key */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-key text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Key")}</p>
                </div>

                {/* Laptop */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-laptop text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Laptop")}</p>
                </div>

                {/* Lightning */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-lightning text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Lightning")}</p>
                </div>

                {/* Lock */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-lock text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Lock")}</p>
                </div>

                {/* Map */}
                <div className="rounded-2xl border bg-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="bi bi-map text-3xl mb-3 block"></i>
                    <p className="text-md font-medium">{t("Map")}</p>
                </div>


            </div>

            {/* View Full Icons Button */}
            <div className="mx-auto mt-8 w-[200px] text-center">
                <Button asChild className="w-full">
                    <a
                        href="https://icons.getbootstrap.com/"
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
