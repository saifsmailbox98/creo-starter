"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@trycreo/ui/dist/src/components/ui/card";

export default function ProductDetails({ product }: { product: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
        <CardDescription>Details for selected product</CardDescription>
      </CardHeader>
      <CardContent>
        <p><b>ID:</b> {product.id}</p>
        <p><b>Name:</b> {product.name}</p>
        <p><b>Price:</b> {product.price}</p>
        <p><b>Description:</b> {product.description}</p>
      </CardContent>
    </Card>
  )
}