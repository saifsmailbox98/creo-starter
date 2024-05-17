"use client";
import { useState } from "react";
import ProductsTable from "./products-table";
import ProductDetails from "./product-details";

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Product Khoj</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <ProductsTable onProductSelected={setSelectedProduct} />
        </div>

        <div>
          <ProductDetails product={selectedProduct} />
        </div>
      </div>
    </div>
  );
}