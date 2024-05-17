"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@trycreo/ui/dist/src/components/ui/card";
import { Badge } from "@trycreo/ui/dist/src/components/ui/badge";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
}

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm font-medium">ID: {product.id}</p>
        <p className="text-2xl font-bold">{product.name}</p>
        <p>
          Price: <span className="font-semibold">${product.price}</span>
        </p>
        <Badge variant="outline">{product.category}</Badge>
      </CardContent>
    </Card>
  );
}