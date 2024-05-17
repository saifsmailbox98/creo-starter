"use client";
import DataTable from "@trycreo/ui/dist/src/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
}

export default function ProductsTable({ onProductSelected }: { onProductSelected: (product: Product | null) => void }) {
  const { data, error } = useSWR<Product[]>('/tools/gp/api/product', fetcher);

  const columns: ColumnDef<Product>[] = [
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
    },
  ];

  return (
    <DataTable
      selectionMode="single"
      onRowsSelected={(selectedRows) => onProductSelected(selectedRows[0] || null)}
      columns={columns}
      data={data || []}
      pageSize={10}
      isSearchable
    />
  );
}