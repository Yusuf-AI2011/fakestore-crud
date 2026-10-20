import type { CreateUser, DeleteUser, User } from "../types/user";

export const getAllUsers = async (): Promise<User[]> => {
  const request = await fetch(`https://fakestoreapi.com/users`);

  if (!request.ok) {
    throw new Error("Yuklanishga oid xato yuz berdi!");
  }

  return request.json();
};

export const postUser = async (newUser: CreateUser): Promise<User[]> => {
  const request = await fetch(`https://fakestoreapi.com/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!request.ok) {
    throw new Error("Qo'shishda xato yuz berdi!");
  }

  return request.json();
};

export const deleteUser = async (userId: DeleteUser): Promise<User[]> => {
  const request = await fetch(`https://fakestoreapi.com/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!request.ok) {
    throw new Error("O'chirishga oid xato yuz berdi!");
  }

  return request.json();
};
