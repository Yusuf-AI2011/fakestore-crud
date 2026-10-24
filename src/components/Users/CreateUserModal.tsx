"use client";
import { useState } from "react";
import type { CreateUser } from "../../types/user";
import { useCreateUser } from "../../hooks/users/usePostUser";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const CreateUserModal = () => {
  const [userFromData, setUserFormData] = useState<CreateUser>({
    username: "",
    email: "",
    password: "",
  });

  const { createUser, error, loading } = useCreateUser();
  const router = useRouter();

  function HandleChange(e: any) {
    setUserFormData({
      ...userFromData,
      [e.target.name]: e.target.value,
    });
  }

  function HandleSubmit(e: any) {
    e.preventDefault();
    const { username, email, password } = userFromData;

    if (!username || !email || !password) {
      return toast.error("Hamma bo'limlarni to'ldiring!");
    }

    toast.promise(createUser(userFromData), {
      loading: "Yuklanmoqda...",
      success: <b>Muvvafaqiyatli yuklandi!</b>,
      error: <b>{error}</b>,
    });
  }

  const BackRouteFunction = () => {
    router.back();
  };

  return (
    <div className="">
      <Toaster position="top-center" />
      <form className="flex justify-center items-center p-[10px]">
        <input
          name="username"
          onChange={HandleChange}
          className="w-[200px] h-[30px]"
          placeholder="name"
          type="text"
        />
        <input
          name="email"
          onChange={HandleChange}
          className="w-[200px] h-[30px]"
          placeholder="email"
          type="email"
        />
        <input
          name="password"
          onChange={HandleChange}
          className="w-[200px] h-[30px]"
          placeholder="password"
          type="password"
        />
        <div>
          <button
            onClick={HandleSubmit}
            className="w-[120px] h-[30px] border rounded-[8px]"
          >
            Qo'shish
          </button>
        </div>
      </form>
      <button
        className="w-[120px] h-[30px] border rounded-[8px]"
        onClick={BackRouteFunction}
      >
        Cancel
      </button>
    </div>
  );
};

export default CreateUserModal;
