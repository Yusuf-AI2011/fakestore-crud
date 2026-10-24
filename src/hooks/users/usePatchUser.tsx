"use client";
import { patchUser } from "@/services/apiUsers";
import { PatchUserBody, PatchUserId } from "@/types/user";
import { useState } from "react";

export const usePatchUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const PatchUser = async (userId: PatchUserId, changedUser: PatchUserBody) => {
    try {
      setLoading(true);
      const request = await patchUser(userId, changedUser);
      return request;
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    PatchUser,
    loading,
    error,
  };
};
