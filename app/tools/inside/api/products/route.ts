import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://externalapi.com/products', {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY!,
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch products' }, { status: res.status });
    }

    const products = await res.json();

    // Filter products with price above 300
    const filteredProducts = products.filter((product: { price: number }) => product.price > 300);

    return NextResponse.json(filteredProducts, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}