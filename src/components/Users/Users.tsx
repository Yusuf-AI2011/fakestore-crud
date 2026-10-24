"use client";
import { useRouter } from "next/navigation";
// import { useState } from "react";
import { useGetAllUsers } from "../../hooks/users/useGetAllUsers";
import CreateUserModal from "./CreateUserModal";

const Users = ({ children }: any) => {
  const router = useRouter();
  const { users, error, loading } = useGetAllUsers();

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error}</h1>;

  // if (loading && !users) return toast.loading("Yuklanmoqda!");
  // if (error) toast.error(error);

  return (
    <div>
      <div className="w-200 p-2.5 flex justify-end items-center">
        <button
          onClick={() => {
            router.push(`/main/users/createModal`);
          }}
          className="rounded-[8px] p-1.25 bg-blue-700 text-mist-200"
        >
          Create +
        </button>
      </div>
      <div className="w-[800px] flex justify-start items-center gap-[10px] p-[10px]">
        <p className="flex justify-start items-center w-[200px]">Username</p>
        <p className="flex justify-start items-center w-[200px]">Email</p>
        <p className="flex justify-start items-center w-[200px]">Password</p>
        <p className="flex justify-center items-center w-[200px]">Actions</p>
      </div>
      {users?.map(({ id, username, email, password }) => (
        <div
          key={id}
          className="border-b w-[800px] p-[10px] flex justify-start items-center rounded-[8px]"
        >
          <p className="w-[200px]">{username}</p>
          <p className="w-[200px]">{email}</p>
          <p className="w-[200px]">{password}</p>
          <div className="w-[200px] flex justify-end items-center gap-[10px] text-mist-200">
            <button
              onClick={() => {
                router.push(`/main/users/patchModal/${id}`);
              }}
              className="w-[70px] h-[30px] rounded-[8px] bg-orange-400"
            >
              Edit
            </button>
            <button
              onClick={() => {
                router.push(`/main/users/deleteModal/${id}`);
              }}
              className="w-[70px] h-[30px] rounded-[8px] bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {children}
    </div>
  );
};

export default Users;
