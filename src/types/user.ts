export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export type CreateUser = Omit<User, "id">;
export type DeleteUser = Pick<User, "id">;
export type PatchUserId = Pick<User, "id">;
export type PatchUserBody = Omit<User, "id">;
