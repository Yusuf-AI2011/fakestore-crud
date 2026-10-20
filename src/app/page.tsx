"use client";
import Dashboard from "@/components/Dashboard";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  router.push("/main/users");
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default page;
