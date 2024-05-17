export async function GET(request: Request) {
  const res = await fetch('https://6609b6140f324a9a2883ac57.mockapi.io/api/v1/products', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  const products = await res.json();

  // Filter products where price is less than 900
  const filteredProducts = products.filter((product: any) => product.price < 900);
 
  return Response.json(filteredProducts);
}