"use client";
import { useState } from 'react';
import ProductsTable, { Product } from './products-table';
import ProductDetails from './product-details';

export default function Page() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <div className="p-8">
            <h1 className="my-2">New Tool</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductsTable onSelectProduct={setSelectedProduct} />
                {selectedProduct && (
                    <ProductDetails product={selectedProduct} />
                )}
            </div>
        </div>
    );
}