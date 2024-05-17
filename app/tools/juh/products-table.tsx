"use client";

import DataTable from "@trycreo/ui/dist/src/components/ui/data-table";
import useSWR from "swr";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  // Add other relevant properties
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ProductsTableProps {
  onSelectProduct: (product: Product) => void;
}

export default function ProductsTable({ onSelectProduct }: ProductsTableProps) {
  const { data, error } = useSWR<Product[]>("/api/products", fetcher);
  const [selectedRow, setSelectedRow] = useState<Product | null>(null);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    // Add more columns as needed
  ];

  function onRowsSelectedCallback(selectedRows: (Product | undefined)[]) {
    const selectedProduct = selectedRows.find((row) => row !== undefined);
    setSelectedRow(selectedProduct || null);
    if (selectedProduct) {
      onSelectProduct(selectedProduct);
    }
  }

  return (
    <div className="p-4">
      <DataTable
        columns={columns}
        data={data}
        onRowsSelected={onRowsSelectedCallback}
        selectionMode="single"
        pageSize={10}
        isSearchable={true}
      />
    </div>
  );
}