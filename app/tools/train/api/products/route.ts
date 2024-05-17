import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://6609b6140f324a9a2883ac57.mockapi.io/api/v1/products', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    const products = await res.json();
    const filteredProducts = products.filter((product: any) => product.price > 300);

    return NextResponse.json(filteredProducts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}