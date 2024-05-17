"use client";
import { useState } from "react";
import ProductsTable from "./products-table";
import ProductDetails from "./product-details";

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductsTable onRowSelected={(product) => setSelectedProduct(product)} />
        
        {selectedProduct && (
          <ProductDetails product={selectedProduct} />
        )}
      </div>
    </div>
  );
}  