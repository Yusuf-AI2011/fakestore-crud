"use client";
import { getProducts } from "@/services/apiProducts";
import type { Product } from "@/types/product";
import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>();

  const get = async () => {
    try {
      setLoading(true);
      const request = await getProducts();
      setProducts(request);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return {
    loading,
    error,
    products,
  };
};
