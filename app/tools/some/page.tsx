"use client";
import { useState } from 'react';
import { Card } from '@trycreo/ui/dist/src/components/ui/card';
import ProductsTable from './products-table';
import ProductDetails from './product-details';

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="col-span-1">
          <ProductsTable onRowSelected={(row) => setSelectedProduct(row)} />
        </Card>
        {selectedProduct && (
          <div className="col-span-1">
            <ProductDetails product={selectedProduct} />
          </div>
        )}
      </div>
    </div>
  );
}