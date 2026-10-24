"use client";

import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="w-[10%] h-[100vh] bg-mist-700">
      <div>
        <button onClick={() => router.push("/main/users")}>Users</button>
        <button onClick={() => router.push("/main/products")}>Products</button>
        <button>Carts</button>
      </div>
    </div>
  );
};

export default Sidebar;
