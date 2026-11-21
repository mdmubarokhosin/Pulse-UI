"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, MessageCircle } from "lucide-react"
import { useTranslation } from "@/i18n/use-translation"

export function UserFollowList() {
  const { t } = useTranslation()
  return (
    <Card className="overflow-hidden">
      
      {/* Optional Header */}
      <CardHeader className="border-b py-4">
        <CardTitle className="text-xl font-medium">{t("User Suggestions")}</CardTitle>
      </CardHeader>

      {/* Scroll Area */}
      <CardContent className="p-0">
        <div className="max-h-[480px] overflow-y-auto">
          <ul className="divide-y">

            {/* User 1 */}
            <li className="flex items-center justify-between gap-4 p-4 hover:bg-muted/40 transition">
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt={t("John Doe")}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="font-semibold">{t("John Doe")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4 shrink-0" />
                    {t("New York, USA")}
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button size="sm" variant="outline">
                  <MessageCircle/>
                </Button>
                <Button size="sm">{t("Follow")}</Button>
              </div>
            </li>

            {/* User 2 */}
            <li className="flex items-center justify-between gap-4 p-4 hover:bg-muted/40 transition">
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt={t("Emma Johnson")}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="font-semibold">{t("Emma Johnson")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4 shrink-0" />
                    {t("London, UK")}
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                 <Button size="sm" variant="outline">
                  <MessageCircle/>
                </Button>
                <Button size="sm">{t("Follow")}</Button>
              </div>
            </li>

            {/* User 3 */}
            <li className="flex items-center justify-between gap-4 p-4 hover:bg-muted/40 transition">
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src="https://randomuser.me/api/portraits/men/55.jpg"
                  alt={t("David Smith")}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="font-semibold">{t("David Smith")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4 shrink-0" />
                    {t("Toronto, Canada")}
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                 <Button size="sm" variant="outline">
                  <MessageCircle/>
                </Button>
                <Button size="sm">{t("Follow")}</Button>
              </div>
            </li>

            {/* User 4 */}
            <li className="flex items-center justify-between gap-4 p-4 hover:bg-muted/40 transition">
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src="https://randomuser.me/api/portraits/women/66.jpg"
                  alt={t("Sophia Brown")}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="font-semibold">{t("Sophia Brown")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4 shrink-0" />
                    {t("Sydney, Australia")}
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                 <Button size="sm" variant="outline">
                  <MessageCircle/>
                </Button>
                <Button size="sm">{t("Follow")}</Button>
              </div>
            </li>

            {/* User 5 */}
            <li className="flex items-center justify-between gap-4 p-4 hover:bg-muted/40 transition">
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt={t("Michael Lee")}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="font-semibold">{t("Michael Lee")}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4 shrink-0" />
                    {t("San Francisco, USA")}
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                 <Button size="sm" variant="outline">
                  <MessageCircle/>
                </Button>
                <Button size="sm">{t("Follow")}</Button>
              </div>
            </li>
            {/* User 6 */}
            <li className="flex items-center justify-between gap-4 p-4 hover:bg-muted/40 transition">
                <div className="flex items-center gap-4 min-w-0">
                    <img
                        src="https://randomuser.me/api/portraits/women/25.jpg"
                        alt={t("Lily Chen")}
                        className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                        <p className="font-semibold">{t("Lily Chen")}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-4 w-4 shrink-0" />
                            {t("Singapore")}
                        </div>
                    </div>
                </div>
                <div className="flex shrink-0 gap-2">
                    <Button size="sm" variant="outline">
                        <MessageCircle />
                    </Button>
                    <Button size="sm">{t("Follow")}</Button>
                </div>
            </li>
            {/* User 7 */}
            <li className="flex items-center justify-between gap-4 p-4 hover:bg-muted/40 transition">
                <div className="flex items-center gap-4 min-w-0">
                    <img
                        src="https://randomuser.me/api/portraits/men/41.jpg"
                        alt={t("Daniel Carter")}
                        className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                        <p className="font-semibold">{t("Daniel Carter")}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-4 w-4 shrink-0" />
                            {t("Berlin, Germany")}
                        </div>
                    </div>
                </div>
                <div className="flex shrink-0 gap-2">
                    <Button size="sm" variant="outline">
                        <MessageCircle />
                    </Button>
                    <Button size="sm">{t("Follow")}</Button>
                </div>
            </li>
            {/* User 8 */}
            <li className="flex items-center justify-between gap-4 p-4 hover:bg-muted/40 transition">
                <div className="flex items-center gap-4 min-w-0">
                    <img
                        src="https://randomuser.me/api/portraits/women/52.jpg"
                        alt={t("Olivia Martinez")}
                        className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                        <p className="font-semibold">{t("Olivia Martinez")}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-4 w-4 shrink-0" />
                            {t("Madrid, Spain")}
                        </div>
                    </div>
                </div>
                <div className="flex shrink-0 gap-2">
                    <Button size="sm" variant="outline">
                        <MessageCircle />
                    </Button>
                    <Button size="sm">{t("Follow")}</Button>
                </div>
            </li>

          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
