import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const res = await fetch('https://6609b6140f324a9a2883ac57.mockapi.io/api/v1/products', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: res.status });
  }

  const products = await res.json();
  
  // Filter products by price above 300
  const filteredProducts = products.filter((product: any) => product.price > 300);

  return NextResponse.json(filteredProducts);
}