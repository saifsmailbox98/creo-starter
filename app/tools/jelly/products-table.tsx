"use client";
import { useState } from "react";
import DataTable from "@trycreo/ui/dist/src/components/ui/data-table";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsTable({ onSelectProduct }: { onSelectProduct: (product: any) => void }) {
  const { data, error } = useSWR("/tools/jelly/api/products/", fetcher);
  
  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }: any) => {
        const price = row.original.price;
        return <div>${price}</div>;
      },
    },
  ];

  return (
    <div className="p-4">
      <DataTable 
        selectionMode="single"
        onRowsSelected={(selectedRows) => onSelectProduct(selectedRows[0])}
        columns={columns}
        data={data}
        pageSize={10}
        isSearchable={true}
      />
    </div>
  );
}