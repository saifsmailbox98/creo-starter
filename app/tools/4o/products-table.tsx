"use client";
import useSWR from 'swr';
import DataTable from "@trycreo/ui/dist/src/components/ui/data-table";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ProductsTable({ onSelect }: { onSelect: (product: any) => void }) {
  const { data, error } = useSWR('/tools/4o/api/products/', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }: any) => {
        const product = row.original;
        return <div className="cursor-pointer" onClick={() => onSelect(product)}>{product.name}</div>;
      },
    },
    {
      accessorKey: "price",
      header: "Price",
    },
  ];

  return (
    <div className="p-4">
      <DataTable
        selectionMode="single"
        columns={columns}
        data={data}
        pageSize={10}
        isSearchable={true}
      />
    </div>
  );
}