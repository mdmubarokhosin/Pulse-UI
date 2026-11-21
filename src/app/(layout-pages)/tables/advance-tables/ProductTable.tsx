"use client"

import * as React from "react"
import {
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  MoreHorizontal,
  Settings2,
} from "lucide-react"

import { useTranslation } from "@/i18n/use-translation"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Product = {
  id: number
  name: string
  category: string
  stock: string
  price: number
  status: "Published" | "Draft"
  image: string
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    stock: "In Stock",
    price: 120,
    status: "Published",
    image: "/products/01.png",
  },
  {
    id: 2,
    name: "Gaming Mouse",
    category: "Accessories",
    stock: "In Stock",
    price: 45,
    status: "Published",
    image: "/products/02.png",
  },
  {
    id: 3,
    name: "Smartphone Pro",
    category: "Mobiles",
    stock: "Low Stock",
    price: 899,
    status: "Draft",
    image: "/products/03.png",
  },
  {
    id: 4,
    name: "Office Chair",
    category: "Furniture",
    stock: "In Stock",
    price: 199,
    status: "Published",
    image: "/products/04.png",
  },
  {
    id: 5,
    name: "Running Shoes",
    category: "Footwear",
    stock: "Out of Stock",
    price: 75,
    status: "Published",
    image: "/products/05.png",
  },
  {
    id: 6,
    name: "Coffee Maker",
    category: "Home Appliances",
    stock: "In Stock",
    price: 149,
    status: "Draft",
    image: "/products/06.png",
  },
]

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Published":
      return "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400"
    case "Draft":
      return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20 dark:text-yellow-400"
    default:
      return "bg-muted text-muted-foreground"
  }
}

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

function SortableHeader({
  column,
  title,
}: {
  column: Column<Product, unknown>
  title: string
}) {
  const sorted = column.getIsSorted()
  return (
    <Button
      variant="ghost"
      size="sm"
      className="-ml-3 h-8"
      onClick={() => column.toggleSorting(sorted === "asc")}
    >
      {title}
      {sorted === "asc" ? (
        <ArrowUp className="ml-2 size-3.5" />
      ) : sorted === "desc" ? (
        <ArrowDown className="ml-2 size-3.5" />
      ) : (
        <ArrowUpDown className="text-muted-foreground ml-2 size-3.5" />
      )}
    </Button>
  )
}

const getColumns = (
  onDelete: (product: Product) => void,
  t: (key: string, params?: (string | number)[]) => string
): ColumnDef<Product>[] => [
  {
    id: "image",
    header: () => t("Image"),
    enableSorting: false,
    cell: ({ row }) => (
      <img
        src={row.original.image}
        alt={t(row.original.name)}
        className="size-12 rounded-lg border object-cover p-1"
      />
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <SortableHeader column={column} title={t("Product")} />
    ),
    cell: ({ row }) => (
      <span className="font-medium">{t(row.original.name)}</span>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <SortableHeader column={column} title={t("Category")} />
    ),
    filterFn: "equalsString",
    cell: ({ row }) => t(row.original.category),
  },
  {
    accessorKey: "stock",
    header: () => t("Stock"),
    enableSorting: false,
    cell: ({ row }) => t(row.original.stock),
  },
  {
    accessorKey: "price",
    header: ({ column }) => <SortableHeader column={column} title={t("Price")} />,
    cell: ({ row }) => currency.format(row.original.price),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <SortableHeader column={column} title={t("Status")} />
    ),
    filterFn: "equalsString",
    cell: ({ row }) => (
      <Badge variant="outline" className={getStatusStyle(row.original.status)}>
        {t(row.original.status)}
      </Badge>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right">{t("Actions")}</div>,
    enableSorting: false,
    enableHiding: false,
    cell: ({ row }) => (
      <div className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("Actions for {0}", [row.original.name])}
            >
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>{t("View")}</DropdownMenuItem>
            <DropdownMenuItem>{t("Edit")}</DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-600 focus:text-red-600"
              onSelect={() => onDelete(row.original)}
            >
              {t("Delete")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
]

export default function ProductTable() {
  const { t } = useTranslation()
  const [data, setData] = React.useState(initialProducts)
  const [productToDelete, setProductToDelete] =
    React.useState<Product | null>(null)
  const columns = React.useMemo(
    () => getColumns(setProductToDelete, t),
    [t]
  )

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    getRowId: (row) => String(row.id),
    state: { sorting, columnFilters, columnVisibility },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  })

  const categories = React.useMemo(
    () => Array.from(new Set(data.map((p) => p.category))).sort(),
    [data]
  )
  const statuses = ["Published", "Draft"]

  const statusColumn = table.getColumn("status")
  const categoryColumn = table.getColumn("category")

  const handleDelete = () => {
    if (!productToDelete) return
    const id = productToDelete.id
    setData((prev) => prev.filter((p) => p.id !== id))
    setProductToDelete(null)
  }

  const { pageIndex, pageSize } = table.getState().pagination
  const filteredCount = table.getFilteredRowModel().rows.length
  const from = filteredCount === 0 ? 0 : pageIndex * pageSize + 1
  const to = Math.min((pageIndex + 1) * pageSize, filteredCount)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{t("Products List")}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Filters */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            <Input type="date" className="w-[180px]" />

            <Select
              value={(statusColumn?.getFilterValue() as string) ?? "all"}
              onValueChange={(value) =>
                statusColumn?.setFilterValue(value === "all" ? undefined : value)
              }
            >
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder={t("Status")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("All statuses")}</SelectItem>
                {statuses.map((s) => (
                  <SelectItem key={s} value={s}>
                    {t(s)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={(categoryColumn?.getFilterValue() as string) ?? "all"}
              onValueChange={(value) =>
                categoryColumn?.setFilterValue(
                  value === "all" ? undefined : value
                )
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t("Category")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("All categories")}</SelectItem>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {t(c)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Settings2 className="mr-2 size-4" />
                  {t("Columns")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{t("Toggle columns")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline">{t("Import")}</Button>
            <Button variant="secondary">{t("Export")}</Button>
            <Button>{t("Add Product")}</Button>
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader className="bg-muted/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="hover:bg-muted/40 transition">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getVisibleLeafColumns().length}
                  className="text-muted-foreground h-24 text-center"
                >
                  {t("No products found.")}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-muted-foreground text-sm">
            {t("Showing {0}-{1} of {2} products", [
              from,
              to,
              filteredCount,
            ])}
          </span>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">{t("Rows")}</span>
              <Select
                value={String(pageSize)}
                onValueChange={(value) => table.setPageSize(Number(value))}
              >
                <SelectTrigger size="sm" className="w-16">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[5, 10, 20].map((size) => (
                    <SelectItem key={size} value={String(size)}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <span className="text-sm tabular-nums">
              {t("Page {0} of {1}", [
                pageIndex + 1,
                Math.max(table.getPageCount(), 1),
              ])}
            </span>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                {t("Previous")}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                {t("Next")}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>

      <AlertDialog
        open={!!productToDelete}
        onOpenChange={(open) => {
          if (!open) setProductToDelete(null)
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("Delete this product?")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("This will permanently delete")}{" "}
              <span className="text-foreground font-medium">
                {productToDelete?.name}
              </span>
              . {t("This action cannot be undone.")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("Cancel")}</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-500/10 text-red-600 hover:bg-red-500/20 hover:text-red-600 dark:bg-red-500/20 dark:text-red-400 dark:hover:bg-red-500/30"
            >
              {t("Delete")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}