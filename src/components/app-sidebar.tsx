"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  House,
  ShoppingBag,
  FolderKanban,
  LayoutGrid,
  File,
  Grid2x2,
  Landmark,
  LockKeyhole,
  CircleUserRound,
  ChartNoAxesCombined,
  TriangleAlert,
  Code,
  Droplet,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { useTranslation } from "@/i18n/use-translation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"

// This is sample data.
const data = {
  user: {
    name: "Alex Martin",
    email: "alex@example.com",
    avatar: "https://untitledui.com/images/avatars/madeleine-pitts",
  },
  teams: [
    {
      name: "Pulse UI",
      logo: GalleryVerticalEnd,
      plan: "Next.js Admin",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: House,
      isActive: true,
      items: [
        {
          title: "eCommerce",
          url: "dashboard/eCommerce",
        },
        {
          title: "Analytics",
          url: "dashboard/analytics",
        },
      ],
    },
    {
      title: "eCommerce",
      url: "#",
      icon: ShoppingBag,
      items: [
        {
          title: "Product List",
          url: "eCommerce/product-list",
        },
        {
          title: "Product Grid",
          url: "eCommerce/product-grid",
        },
        {
          title: "Add Product",
          url: "eCommerce/add-product",
        },
        {
          title: "Categories",
          url: "eCommerce/categories",
        },
        {
          title: "Order List",
          url: "eCommerce/order-list",
        },
        {
          title: "Order Details",
          url: "eCommerce/order-details",
        },
        {
          title: "Customer List",
          url: "eCommerce/customer-list",
        },
        {
          title: "Customer Details",
          url: "eCommerce/customer-details",
        },
        {
          title: "Invoice",
          url: "eCommerce/invoice",
        },
      ],
    },
    {
      title: "Widgets",
      url: "#",
      icon: FolderKanban,
      items: [
        {
          title: "Data Widgets",
          url: "widgets/data",
        },
        {
          title: "Statistics Widgets",
          url: "widgets/statistics",
        },
      ],
    },
    {
      title: "Applications",
      url: "#",
      icon: LayoutGrid,
      items: [
        {
          title: "Chatbox",
          url: "applications/chatbox",
        },
        {
          title: "Calendar",
          url: "applications/calendar",
        },
        {
          title: "File Manager",
          url: "applications/file-manager",
        },
        {
          title: "Invoice Card",
          url: "applications/invoice",
        },
      ],
    },
    {
      title: "Components",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Alerts",
          url: "ui-components/alerts",
        },
        {
          title: "Accordion",
          url: "ui-components/accordion",
        },
        {
          title: "Sooner",
          url: "ui-components/sooner",
        },
        {
          title: "Badges",
          url: "ui-components/badges",
        },
        {
          title: "Buttons",
          url: "ui-components/buttons",
        },
        {
          title: "Cards",
          url: "ui-components/cards",
        },
        {
          title: "List Groups",
          url: "ui-components/list-groups",
        },
        {
          title: "Carousels",
          url: "ui-components/carousels",
        },
        {
          title: "Media Object",
          url: "ui-components/media-object",
        },
        {
          title: "Navbars",
          url: "ui-components/navbars",
        },
        {
          title: "Progress",
          url: "ui-components/progress",
        },
        {
          title: "Spinners",
          url: "ui-components/spinners",
        },
      ],
    },
    {
      title: "Forms",
      url: "#",
      icon: File,
      items: [
        {
          title: "Basic Inputs",
          url: "forms/basic-inputs",
        },
        {
          title: "Input Groups",
          url: "forms/input-groups",
        },
        {
          title: "Radio & Checkboxes",
          url: "forms/checkboxes-radios",
        },
        {
          title: "Form Layouts",
          url: "forms/form-layouts",
        },
        {
          title: "Form Wizard",
          url: "forms/form-wizard",
        },
        {
          title: "Text Editor",
          url: "forms/text-editor",
        },
        {
          title: "File Upload",
          url: "forms/file-upload",
        },
        {
          title: "Date Pickers",
          url: "forms/date-pickers",
        },
        {
          title: "Select",
          url: "forms/select",
        },
        {
          title: "Form Repeat",
          url: "forms/form-repeat",
        },
      ],
    },
    {
      title: "Tables",
      url: "#",
      icon: Grid2x2,
      items: [
        {
          title: "Data Tables",
          url: "tables/data-tables",
        },
        {
          title: "Advanced Tables",
          url: "tables/advance-tables",
        },
      ],
    },
    {
      title: "Icons",
      url: "#",
      icon: Droplet,
      items: [
        {
          title: "Boxicons",
          url: "icons/boxicons",
        },
        {
          title: "Bootstrap",
          url: "icons/bootstrap",
        },
        {
          title: "Lucide",
          url: "icons/lucide",
        },
      ],
    },
    {
      title: "Pricing",
      url: "pricing-tables",
      icon: Landmark,
    },
    {
      title: "Authentication",
      url: "#",
      icon: LockKeyhole,
      items: [
        {
          title: "Basic",
          url: "#",
          items: [
            {
              title: "Login",
              url: "auth/basic/login",
            },
            {
              title: "Register",
              url: "auth/basic/register",
            },
            {
              title: "Verify Email",
              url: "auth/basic/verify-email",
            },
            {
              title: "Forgot Password",
              url: "auth/basic/forgot-password",
            },
            {
              title: "New Password",
              url: "auth/basic/reset-password",
            },
            {
              title: "Reset Success",
              url: "auth/basic/password-reset-success",
            },
          ],
        },
        {
          title: "Cover",
          url: "#",
          items: [
            {
              title: "Login",
              url: "auth/cover/login",
            },
            {
              title: "Register",
              url: "auth/cover/register",
            },
            {
              title: "Verify Email",
              url: "auth/cover/verify-email",
            },
            {
              title: "Forgot Password",
              url: "auth/cover/forgot-password",
            },
            {
              title: "New Password",
              url: "auth/cover/reset-password",
            },
            {
              title: "Reset Success",
              url: "auth/cover/password-reset-success",
            },
          ],
        },
      ],
    },
    {
      title: "Accounts",
      url: "#",
      icon: CircleUserRound,
      items: [
        {
          title: "Profile",
          url: "account/profile",
        },
        {
          title: "Edit Profile",
          url: "account/edit-profile",
        },
        {
          title: "Password Setting",
          url: "account/password-setting",
        },
        {
          title: "Notifications",
          url: "account/notifications",
        },
      ],
    },
    {
      title: "Charts",
      url: "#",
      icon: ChartNoAxesCombined,
      items: [
        {
          title: "ReCharts",
          url: "charts/recharts",
        },
        {
          title: "Apex Charts",
          url: "charts/apex-charts",
        },
      ],
    },
    {
      title: "Documentation",
      url: "docs",
      icon: Code,
    },
    {
      title: "FAQ",
      url: "faq",
      icon: BookOpen,
    },
    {
      title: "Error Pages",
      url: "#",
      icon: TriangleAlert,
      items: [
        {
          title: "404 Not Found",
          url: "error/error-404",
        },
        {
          title: "500 Server Error",
          url: "error/error-500",
        },
        {
          title: "coming soon",
          url: "error/coming-soon",
        },
      ],
    },
  ],
  projects: [
  {
    name: "Design Engineering",
    url: "#",
    icon: <Frame />,
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: <PieChart />,
  },
  {
    name: "Travel",
    url: "#",
    icon: <Map />,
  },
],
}

// This is the sidebar component used in the app layout.
export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation()

  return (
   <Sidebar collapsible="icon" className="z-50 sidebar-hover-glass" {...props}>
      <SidebarHeader className="h-16 justify-center border-b">
        <div className="flex items-center gap-2 px-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0 group-data-[collapsible=icon]:px-0">
          <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <PieChart className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
            <span className="truncate font-medium">Pulse UI</span>
            <span className="truncate text-xs">{t("Next.js Admin")}</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex min-h-full flex-col px-2">
            <NavMain items={data.navMain} />
            <NavProjects projects={data.projects} />
          </div>
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter className="h-16 justify-center border-t">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}