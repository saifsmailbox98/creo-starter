'use client'

import { useState } from 'react';
import ProductsTable from './products-table';
import ProductDetails from './product-details';
import { Button } from '@trycreo/ui/dist/src/components/ui/button';

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <ProductsTable onSelectProduct={setSelectedProduct} />
        </div>
        
        {selectedProduct && (
          <div>
            <ProductDetails product={selectedProduct} />
            <div className="mt-4">
              <Button onClick={() => setSelectedProduct(null)}>Clear Selection</Button>  
            </div>
          </div>
        )}
      </div>
    </div>
  );
}