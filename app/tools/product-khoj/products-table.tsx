"use client";
import { useState } from "react";
import DataTable from "@trycreo/ui/dist/src/components/ui/data-table";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface ProductsTableProps {
  onProductSelected: (product: Product | null) => void;
}

export default function ProductsTable({ onProductSelected }: ProductsTableProps) {
  const { data, error } = useSWR<Product[]>("/tools/product-khoj/api/products/", fetcher);

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
    },
    {
      accessorKey: "category",
      header: "Category",
    },
  ];

  return (
    <div className="grid grid-cols-1">
      <DataTable
        selectionMode="single"
        onRowsSelected={(rows) => {
          if (rows.length > 0) {
            onProductSelected(rows[0] as Product);
          } else {
            onProductSelected(null);
          }
        }}
        columns={columns}
        data={data}
        pageSize={10}
        isSearchable={true}
      />
    </div>
  );
}