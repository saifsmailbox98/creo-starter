"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@trycreo/ui/dist/src/components/ui/card';

export default function ProductDetails({ product }: { product: any }) {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="my-2">
          <span className="font-bold">Price:</span> ${product.price}
        </div>
        <div className="my-2">
          <span className="font-bold">Description:</span> {product.description}
        </div>
      </CardContent>
    </Card>
  );
}