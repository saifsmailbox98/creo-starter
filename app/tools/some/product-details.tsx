"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@trycreo/ui/dist/src/components/ui/card';

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>Product Details</CardDescription>
      </CardHeader>
      <CardContent>
        <p>ID: {product.id}</p>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
      </CardContent>
    </Card>
  );
}