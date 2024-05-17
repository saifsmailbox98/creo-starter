"use client";
import { useState } from "react";

import { Card, CardContent } from "@trycreo/ui/dist/src/components/ui/card";
import ProductsTable from "./products-table";
import ProductDetails from "./product-details";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
}

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardContent>
              <ProductsTable onProductSelected={setSelectedProduct} />  
            </CardContent>
          </Card>
        </div>
        
        <div>
          {selectedProduct ? (
            <ProductDetails product={selectedProduct} />
          ) : (
            <Card>
              <CardContent>
                <p className="text-center text-lg text-muted-foreground">Select a product to view details</p>
              </CardContent>  
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}