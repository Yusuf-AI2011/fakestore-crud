"use client";
import { usePatchUser } from "@/hooks/users/usePatchUser";
import type { PatchUserBody, PatchUserId } from "@/types/user";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const PatchUserModal = () => {
  const { id } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState<PatchUserBody>({
    username: "",
    email: "",
    password: "",
  });

  const userId: PatchUserId = id as PatchUserId;
  console.log(formData);

  const { PatchUser, error } = usePatchUser();

  const HandleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const patchFunction = (e: any) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      return toast.error("Hamma bo'limlarni to'ldiring!");
    }

    toast
      .promise(PatchUser(userId, formData), {
        loading: "Yuklanmoqda...",
        success: <b>Muvaffaqiyatli o'zgardi!</b>,
        error: <b>{error}</b>,
      })
      .then(() => {
        router.push("/main/users");
      });
  };

  return (
    <div>
      <Toaster />
      <form onSubmit={patchFunction}>
        <input
          onChange={HandleInputChange}
          name="username"
          placeholder="ism"
          type="text"
        />
        <input
          onChange={HandleInputChange}
          name="email"
          placeholder="email"
          type="text"
        />
        <input
          onChange={HandleInputChange}
          name="password"
          placeholder="parol"
          type="text"
        />
        <button
          type="button"
          onClick={() => {
            router.push("/main/users");
          }}
          className="w-[120px] h-[30px] border rounded-[8px]"
        >
          Orqaga
        </button>
        <button
          onClick={patchFunction}
          className="w-[120px] h-[30px] border rounded-[8px]"
        >
          Saqlab qolish
        </button>
      </form>
    </div>
  );
};

export default PatchUserModal;
