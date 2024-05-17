"use client";
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import DataTable from '@trycreo/ui/dist/src/components/ui/data-table';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductsTableProps {
  onSelectProduct: (product: Product | null) => void;
}

export default function ProductsTable({ onSelectProduct }: ProductsTableProps) {
  const { data: products, error } = useSWR<Product[]>('/tools/side/api/products/');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  useEffect(() => {
    if (error || (products && products.length === 0)) {
      setSelectedProductId(null);
      onSelectProduct(null);
    }
  }, [error, products, onSelectProduct]);

  if (error) return <div>Failed to load products</div>;
  if (!products) return <div>Loading...</div>;

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
      cell: ({ row }: any) => <div>${row.original.price}</div>,
    },
  ];

  const handleRowsSelected = (selectedRows: any) => {
    const selectedProduct = selectedRows[0];
    setSelectedProductId(selectedProduct.id);
    onSelectProduct(selectedProduct);
  };

  return (
    <div className="grid grid-cols-1">
      {products.length > 0 ? (
        <DataTable
          selectionMode="single"
          onRowsSelected={handleRowsSelected}
          columns={columns}
          data={products}
          pageSize={10}
          isSearchable={true}
        />
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
}