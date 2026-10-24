import { CreateProduct, Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  const request = await fetch(`https://fakestoreapi.com/products`);

  if (!request.ok) {
    throw new Error("Yuklanishga oid xato yuz berdi!");
  }

  return request.json();
};

export const postProduct = async (
  newProduct: CreateProduct,
): Promise<Product[]> => {
  const request = await fetch(`https://fakestoreapi.com/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  if (!request.ok) {
    throw new Error("Yuborishga oid xato yuz berdi!");
  }
  return request.json();
};
