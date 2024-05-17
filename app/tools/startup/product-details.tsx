"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@trycreo/ui/dist/src/components/ui/card";

interface ProductDetailsProps {
    product: {
        id: number;
        name: string;
        price: number;
        description: string;
    };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>ID: {product.id}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Price: ${product.price}</p>
                <p className="text-muted-foreground">Description: {product.description}</p>
            </CardContent>
            <CardFooter />
        </Card>
    );
}