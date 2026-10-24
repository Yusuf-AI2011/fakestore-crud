"use client";
import { usePostProduct } from "@/hooks/products/usePostProduct";
import type { CreateProduct } from "@/types/product";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const CreateProductModal = () => {
  const [formData, setFormData] = useState<CreateProduct>({
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  });
  const { post, loading, error } = usePostProduct();

  const HandleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = () => {
    const { title, price, category, description, image } = formData;

    if (!title || !price || !category || !description || !image) {
      return toast.error("Hamma bo'limlarni to'ldiring!");
    }

    toast.promise(post(formData), {
      loading: "Loading...",
      success: <b>Yuklanish muvaffaqiyatli yakunlandi!</b>,
      error: <b>{error}</b>,
    });
  };

  return (
    <div>
      <Toaster />
      <form onSubmit={HandleSubmit}>
        <input
          onChange={HandleChange}
          name="id"
          placeholder="id"
          type="number"
        />
        <input
          onChange={HandleChange}
          name="title"
          placeholder="title"
          type="text"
        />
        <input
          onChange={HandleChange}
          name="price"
          placeholder="price"
          type="number"
        />
        <input
          onChange={HandleChange}
          name="description"
          placeholder="description"
          type="text"
        />
        <input
          onChange={HandleChange}
          name="category"
          placeholder="category"
          type="text"
        />
        <input
          onChange={HandleChange}
          name="image"
          placeholder="image"
          type="text"
        />
        <button onClick={HandleSubmit} type="button">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default CreateProductModal;
