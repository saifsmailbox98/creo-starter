"use client";
import useSWR from 'swr'
import DataTable from '@trycreo/ui/dist/src/components/ui/data-table'
import { Badge } from '@trycreo/ui/dist/src/components/ui/badge'

export default function ProductsTable({ onSelectProduct }: { onSelectProduct: (product: any) => void }) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR('/tools/johsss/api/products/', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'price',
      header: 'Price',
      cell: ({ row }: any) => <div>${row.original.price}</div>
    },
  ]

  return (
    <DataTable 
      selectionMode="single"
      onRowsSelected={(rows: any[]) => onSelectProduct(rows[0])}
      columns={columns}
      data={data}
      pageSize={10}
      isSearchable={true}
    />
  )
}