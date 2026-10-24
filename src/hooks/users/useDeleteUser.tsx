import { useState } from "react";
import { deleteUser } from "../../services/apiUsers";
import type { DeleteUser } from "../../types/user";

export const useDeleteUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const deleteOneUser = async (userId: DeleteUser) => {
    try {
      setLoading(true);
      const request = await deleteUser(userId);
      return request;
    } catch (error: any) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteOneUser,
    loading,
    error,
  };
};
