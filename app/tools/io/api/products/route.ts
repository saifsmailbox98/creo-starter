import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://6609b6140f324a9a2883ac57.mockapi.io/api/v1/products');
    
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    const products = await res.json();

    // Filter products with price above 300
    const filteredProducts = products.filter((product: { price: number }) => product.price > 300);

    return NextResponse.json(filteredProducts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}