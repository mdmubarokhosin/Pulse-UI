"use client"

import { DataTable } from "@/components/data-table"
import { useColumns } from "@/components/columns"
import { data } from "./data"

export default function DataTablePage() {
  const columns = useColumns()
  return (
    <div className="data-table-page border rounded-xl p-6 shadow-sm">
      <DataTable columns={columns} data={data} />
    </div>
  )
}