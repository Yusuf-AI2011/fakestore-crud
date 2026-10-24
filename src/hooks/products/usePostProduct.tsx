"use client";
import { postProduct } from "@/services/apiProducts";
import { useState } from "react";

export const usePostProduct = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const post = async (newProduct: any) => {
    try {
      setLoading(true);
      const request = await postProduct(newProduct);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    post,
    loading,
    error,
  };
};
