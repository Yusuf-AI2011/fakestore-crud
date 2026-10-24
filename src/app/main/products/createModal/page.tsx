import CreateProductModal from "@/components/Products/CreateProductModal";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <CreateProductModal />
    </Suspense>
  );
};

export default page;
