'use client';

import { useEffect, useState } from 'react';
import DataTableComponent from '@trycreo/ui/dist/src/components/ui/data-table';
import { columns } from './columns';

export default function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <DataTableComponent 
      columns={columns} 
      data={products}
    />
  );
}