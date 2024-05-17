"use client";

import { useState } from "react";
import ProductsTable from "./products-table";
import ProductDetailsCard from "./product-details-card";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  // Add other relevant properties
}

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ProductsTable onSelectProduct={setSelectedProduct} />
        </div>
        <div>
          {selectedProduct && (
            <ProductDetailsCard product={selectedProduct} />
          )}
        </div>
      </div>
    </div>
  );
}