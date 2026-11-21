"use client"

import { useTranslation } from "@/i18n/use-translation"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const items = [
    {
        value: "plans",
        trigger: "What subscription plans do you offer?",
        content:
            "We offer three subscription tiers: Starter ($9/month), Professional ($29/month), and Enterprise ($99/month). Each plan includes increasing storage limits, API access, priority support, and team collaboration features.",
    },
    {
        value: "billing",
        trigger: "How does billing work?",
        content:
            "Billing occurs automatically at the start of each billing cycle. We accept all major credit cards, PayPal, and ACH transfers for enterprise customers. You'll receive an invoice via email after each payment.",
    },
    {
        value: "cancel",
        trigger: "How do I cancel my subscription?",
        content:
            "You can cancel your subscription anytime from your account settings. There are no cancellation fees or penalties. Your access will continue until the end of your current billing period.",
    },
]

export function AccordionCard() {
    const { t } = useTranslation()
    return (
        <div>
            <h3 className="text-lg font-medium mb-4">{t("Card Accordion")}</h3>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>{t("Subscription & Billing")}</CardTitle>
                    <CardDescription>
                        {t("Common questions about your account, plans, payments and cancellations.")}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible defaultValue="plans">
                        {items.map((item) => (
                            <AccordionItem key={item.value} value={item.value}>
                                <AccordionTrigger className="text-md">{t(item.trigger)}</AccordionTrigger>
                                <AccordionContent className="text-md">{t(item.content)}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    )
}
