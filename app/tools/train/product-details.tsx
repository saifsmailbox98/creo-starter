"use client";
import { Card, CardContent, CardHeader } from "@trycreo/ui/dist/src/components/ui/card";

export default function ProductDetails({ product }: { product: any }) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">{product.name}</h3>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div>
            <span className="font-bold">ID:</span> {product.id}
          </div>
          <div>
            <span className="font-bold">Price:</span> {product.price}
          </div>
          <div>
            <span className="font-bold">Category:</span> {product.category}
          </div>
          <div>
            <span className="font-bold">Description:</span>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}