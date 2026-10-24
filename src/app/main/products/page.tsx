import Products from "@/components/Products/Products";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <Products />
    </Suspense>
  );
};

export default page;
