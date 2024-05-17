"use client";
import { useState } from "react";
import useSWR from "swr";
import DataTable from "@trycreo/ui/dist/src/components/ui/data-table";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsTable({ onRowSelected }: { onRowSelected: (product: any) => void }) {
  const { data, error } = useSWR("/tools/july/api/products/", fetcher);
  
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
  ];
  
  function onRowsSelectedCallback(selectedRows: any) {
    onRowSelected(selectedRows[0]);
  }

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