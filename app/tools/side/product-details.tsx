"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@trycreo/ui/dist/src/components/ui/card';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
        <CardDescription>Selected product information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="my-2">
          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground">Full product details</p>
      </CardFooter>
    </Card>
  );
}