import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const res = await fetch('https://dummyjson.com/products', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  const data = await res.json();
  const products = data.products;

  const filteredProducts = products.filter((product: { price: number; }) => product.price > 500);

  return NextResponse.json(filteredProducts);
}