"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@trycreo/ui/dist/src/components/ui/card";

export default function ProductDetails({ product }: { product: any }) {
  if (!product) {
    return null;
  }

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="my-2">
          <span className="font-bold">ID: </span>
          <span>{product.id}</span>
        </div>
        <div className="my-2"> 
          <span className="font-bold">Name: </span>
          <span>{product.name}</span>
        </div>
        <div className="my-2">
          <span className="font-bold">Price: </span>
          <span>${product.price}</span>
        </div>
      </CardContent>
    </Card>
  );
}