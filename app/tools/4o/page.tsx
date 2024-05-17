"use client";
import { useState } from 'react';
import ProductsTable from './products-table';
import ProductDetails from './product-details';

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="p-8">
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} />
      ) : (
        <ProductsTable onSelect={setSelectedProduct} />
      )}
    </div>
  )
}