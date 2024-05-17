"use client";
import { useState } from "react";
import useSWR from "swr";
import DataTable from "@trycreo/ui/dist/src/components/ui/data-table";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsTable({
  onProductSelected,
}: {
  onProductSelected: (product: any) => void;
}) {
  const { data, error } = useSWR("/tools/alias/api/products/", fetcher);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  function onRowsSelectedCallback(selectedRows: any) {
    const selectedProduct = selectedRows[0];
    setSelectedRow(selectedProduct);
    onProductSelected(selectedProduct);
  }

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
  ];

  return (
    <div className="w-full">
      <DataTable
        selectionMode="single"
        onRowsSelected={onRowsSelectedCallback}
        columns={columns}
        data={data}
        pageSize={10}
        isSearchable={true}
      />
    </div>
  );
}