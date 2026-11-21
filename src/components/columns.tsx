"use client"

import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/i18n/use-translation"

type Member = {
  name: string
  email: string
  role: string
  status: string
}

export function useColumns(): ColumnDef<Member>[] {
  const { t } = useTranslation()

  // Headers stay plain strings and are translated at the flexRender site in
  // data-table.tsx so exported file headers remain the raw English labels.
  return useMemo<ColumnDef<Member>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => t(row.original.name),
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => t(row.original.role),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
          <Badge
            variant="outline"
            className={
              row.original.status === "Active"
                ? "bg-green-500/10 text-green-600"
                : "bg-muted"
            }
          >
            {t(row.original.status)}
          </Badge>
        ),
      },
    ],
    [t]
  )
}
