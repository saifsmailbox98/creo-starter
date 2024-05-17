"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@trycreo/ui/dist/src/components/ui/card";

export default function ProductDetails({ product }: { product: any }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div>
            <span className="font-bold mr-2">ID:</span>
            <span>{product.id}</span>
          </div>
          <div>
            <span className="font-bold mr-2">Name:</span>
            <span>{product.name}</span>
          </div>
          <div>
            <span className="font-bold mr-2">Price:</span>
            <span>{product.price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}