import PatchUserModal from "@/components/Users/PatchUserModal";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <PatchUserModal />
    </Suspense>
  );
};

export default page;
