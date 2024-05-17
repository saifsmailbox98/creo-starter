"use client";
import { useState } from 'react';
import ProductsTable from './products-table';
import ProductDetails from './product-details';

interface Product {
  id: string;
  name: string;
  price: number;
}

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelected = (product: Product | null) => {
    setSelectedProduct(product);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Product Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-x-8">
        <div className="w-full md:w-2/3">
          <h2 className="text-xl font-bold my-2">Products Table</h2>
          <ProductsTable onSelectProduct={handleProductSelected} />
        </div>
        {selectedProduct && (
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <ProductDetails product={selectedProduct} />
          </div>
        )}
      </div>
    </div>
  );
}