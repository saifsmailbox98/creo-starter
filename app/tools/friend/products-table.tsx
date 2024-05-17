'use client';

import { useState, useEffect } from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
};

export function ProductsTable() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}