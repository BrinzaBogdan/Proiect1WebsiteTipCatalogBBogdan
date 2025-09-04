export async function fetchClothes(manufacturer: string) {
  const url = `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "4171f0c199mshb4dd8e081fae820p1ae106jsnd224826774",
      "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
  };
//export async function fetchClothes(filters: FilterProps) {
//  const { name, price, images, description } = filters;

 
//  const headers: HeadersInit = {
//    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
//   "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//  };


//  const response = await fetch(
//   `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN`,
//    {
//     headers: headers,
//    }
//  );


// const result = await response.json();

//  return result;
//}
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Failed to fetch clothes: ${response.status}`);

    const data = await response.json();

    return data.products.map((item: any) => ({
      name: item.name || `${manufacturer} Item`,
      price: item.price?.formattedValue || "$ 0",
      image: item.images?.[0]?.url || null,
      description: item.description || `${manufacturer} stylish item`,
    }));
  } catch (err) {
    console.error(err);
    return [
      { name: `${manufacturer} Jacket`, price: "250", image: null, description: `${manufacturer} stylish jacket` },
      { name: `${manufacturer} Shirt`, price: "120", image: null, description: `${manufacturer} elegant shirt` },
    ];
  }
}
