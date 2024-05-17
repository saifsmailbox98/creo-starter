import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const res = await fetch(`https://myapi.com`, {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY!,
    },
  });
  const products = await res.json();

  // Filter products with price above 300
  const filteredProducts = products.filter((product: { price: number }) => product.price > 300);
  
  return NextResponse.json(filteredProducts);
}