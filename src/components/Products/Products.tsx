"use client";
import { useGetProducts } from "@/hooks/products/useGetProducts";
import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();
  const { products, loading, error } = useGetProducts();

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex justify-center items-start scrollbar-none">
      <div className="w-[100%] flex justify-center items-start flex-col gap-[10px]">
        <div className="w-[1090px] flex justify-end items-center">
          <button
            onClick={() => router.push("/main/products/createModal")}
            className="rounded-[8px] p-1.25 bg-blue-700 text-mist-200"
          >
            Create +
          </button>
        </div>
        <div className="flex justify-center items-center gap-[50px]">
          <p className="flex justify-start items-center w-[500px]">Title</p>
          <p className="flex justify-start items-center w-[200px]">Category</p>
          <p className="flex justify-start items-center w-[50px]">Price</p>
          <p className="flex justify-start items-center w-[70px]">Image</p>
          <p className="flex justify-start items-center w-[200px]">Actions</p>
        </div>
        <div>
          {products?.map(
            ({ id, title, category, price, image, description }) => (
              <div
                key={id}
                className="h-[100px] flex justify-center items-center gap-[50px] border-b-1 rounded-[8px]"
              >
                <p className="w-[500px] text-blue-700">{title}</p>
                <p className="w-[200px]">{category}</p>
                <p className="w-[50px]">{price}$</p>
                <img className="w-[70px] h-[80px]" src={image} alt="img" />
                <div className="flex justify-start items-start flex-col gap-[10px]">
                  <button className="w-[70px] h-[30px] rounded-[8px] text-mist-200 bg-orange-400">
                    Edit
                  </button>
                  <button className="w-[70px] h-[30px] rounded-[8px] text-mist-200 bg-red-600">
                    Delete
                  </button>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
