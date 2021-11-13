import axios from "axios";
import { useState } from "react";
import { useToast } from "@chakra-ui/toast";

const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

export const usePost = <T>(
  path: string
): [<U>(payload: U) => void, boolean, T | undefined] => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [createdResource, setCreatedResource] = useState<T>();
  const makePostRequest = async <U>(payload: U) => {
    try {
      setIsLoading(true);

      const response = await api.post(path, payload);

      setCreatedResource(response.data);
    } catch (error: any) {
      if (error.response) {
        toast({
          title: error.response.data.message,
          status: 'error',
          position: 'bottom-right'
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [makePostRequest, isLoading, createdResource];
};
