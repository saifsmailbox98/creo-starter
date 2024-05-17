"use client";
import useSWR from 'swr';
import DataTable from "@trycreo/ui/dist/src/components/ui/data-table";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsTable({ onProductSelect }: { onProductSelect: (product: any) => void }) {
  const { data, error } = useSWR('/tools/train/api/products', fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

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
    },
  ];

  return (
    <DataTable
      selectionMode="single"
      onRowsSelected={(selectedRows: any) => onProductSelect(selectedRows[0])}
      columns={columns}
      data={data}
      pageSize={10}
      isSearchable={true}
    />
  );
}