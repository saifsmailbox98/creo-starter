import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://6609b6140f324a9a2883ac57.mockapi.io/api/v1/products');
  const products = await res.json();

  const filteredProducts = products.filter((product: { price: number; }) => product.price > 300);
 
  return NextResponse.json(filteredProducts);
}