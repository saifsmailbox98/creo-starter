"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@trycreo/ui/dist/src/components/ui/card";

export default function ProductDetails({ product }: { product: any }) {
  if (!product) {
    return null;
  }

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>Price: ${product.price}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Add more product details here */}
      </CardContent>  
    </Card>
  );
}