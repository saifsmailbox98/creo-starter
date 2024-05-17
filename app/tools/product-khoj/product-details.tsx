"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@trycreo/ui/dist/src/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface ProductDetailsProps {
  product: Product | null;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  if (!product) {
    return null;
  }

  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>Product ID: {product.id}</CardDescription>  
      </CardHeader>
      <CardContent>
        <p>
          <span className="font-bold">Category:</span> {product.category}
        </p>
        <p>
          <span className="font-bold">Price:</span> ${product.price}
        </p>
      </CardContent>
    </Card>
  );
}