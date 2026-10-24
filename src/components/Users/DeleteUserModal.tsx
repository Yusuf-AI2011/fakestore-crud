"use client";
import { useDeleteUser } from "@/hooks/users/useDeleteUser";
import { useParams, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const DeleteUserModal = () => {
  const router = useRouter();
  const { id } = useParams();
  const { deleteOneUser, error } = useDeleteUser();

  const DeleteFunction = () => {
    console.log(id);
    toast.promise(
      deleteOneUser(id),

      {
        loading: "Yuklanmoqda ...",
        success: <b>Muvaffaqiyatli o'chirildi!</b>,
        error: <b>{error}</b>,
      },
    );
  };

  return (
    <div>
      <Toaster />
      <div>
        <h1>Rostdanham bu userni o'chirmoqchimisiz? ({id})</h1>
        <button
          className="w-[120px] h-[30px] border rounded-[8px]"
          onClick={() => {
            router.back();
          }}
        >
          No, back.
        </button>
        <button
          onClick={DeleteFunction}
          className="w-[120px] h-[30px] border rounded-[8px]"
        >
          Yes, I'm sure!
        </button>
      </div>
    </div>
  );
};

export default DeleteUserModal;
