"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@trycreo/ui/dist/src/components/ui/card"; 

export default function ProductDetails({ product }: { product: any }) {
  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>Product ID: {product.id}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold mb-2">${product.price}</p>
        <p className="text-sm text-muted-foreground">Quantity: {product.quantity}</p>
        <p className="text-sm text-muted-foreground mt-4">{product.description}</p>
      </CardContent>
    </Card>
  );
}