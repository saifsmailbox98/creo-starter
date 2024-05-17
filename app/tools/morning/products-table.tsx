"use client";
import DataTable from "@trycreo/ui/dist/src/components/ui/data-table";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsTable({ onRowSelected }: { onRowSelected: (row: any) => void }) {
  const { data, error } = useSWR("/tools/morning/api/product", fetcher);

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

  return (
    <div className="grid grid-cols-1">
      <DataTable 
        selectionMode="single"
        onRowsSelected={(rows) => onRowSelected(rows[0])}
        columns={columns}
        data={data}
        pageSize={10}
        isSearchable={true}
      />
    </div>
  );
}