"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@trycreo/ui/dist/src/components/ui/card'

export default function ProductDetails({ product }: { product: any }) {
  if (!product) {
    return null
  }
  
  return (
    <Card className="p-4"> 
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>Product Details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="my-2">
          <span className="font-bold">ID:</span> {product.id}
        </div>
        <div className="my-2">
          <span className="font-bold">Price:</span> ${product.price}
        </div>
        <div className="my-2 text-sm text-muted-foreground">
          {product.description}
        </div>
      </CardContent>
    </Card>
  )
}