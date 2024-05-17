"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@trycreo/ui/dist/src/components/ui/card";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  // Add other relevant properties
}

interface ProductDetailsCardProps {
  product: Product;
}

export default function ProductDetailsCard({ product }: ProductDetailsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <p className="font-bold">Price:</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
        {/* Add more product details */}
      </CardContent>
      <CardFooter>
        {/* Add footer content if needed */}
      </CardFooter>
    </Card>
  );
}