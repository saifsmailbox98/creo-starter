export async function GET(request: Request) {
  const res = await fetch('https://6609b6140f324a9a2883ac57.mockapi.io/api/v1/products', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const products = await res.json();

  const filteredProducts = products.filter((product: any) => product.price > 500);

  return new Response(JSON.stringify(filteredProducts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}