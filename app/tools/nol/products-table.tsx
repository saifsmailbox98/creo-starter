'use client'

import DataTable from '@trycreo/ui/dist/src/components/ui/data-table';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsTable({ onSelectProduct }: { onSelectProduct: (product: any) => void }) {
  const { data, error } = useSWR('/tools/nol/api/products/', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const columns = [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'price',
      header: 'Price',
      cell: ({ row }: { row: any }) => <div>${row.original.price}</div>,
    },
  ];

  return (
    <div className="p-4">
      <DataTable
        selectionMode="single"
        onRowsSelected={(rows) => onSelectProduct(rows[0])}
        columns={columns}
        data={data}
        pageSize={10}
        isSearchable
      />
    </div>
  );
}