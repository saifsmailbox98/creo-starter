"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@trycreo/ui/dist/src/components/ui/card";

type ProductDetailsProps = {
  product: any;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
        <CardDescription>Product Details</CardDescription>
      </CardHeader>
      <CardContent>
        <p><span className="font-bold">ID:</span> {product.id}</p>
        <p><span className="font-bold">Name:</span> {product.name}</p>
        <p><span className="font-bold">Price:</span> ${product.price}</p>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground">More details coming soon.</p>
      </CardFooter>
    </Card>
  );
}