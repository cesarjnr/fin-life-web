import axios from 'axios';
import { useState } from 'react';

const api = axios.create({ baseURL: process.env.API_BASE_URL });

export const usePost = <T, U>(path: string, payload: U) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [createdResource, setCreatedResource] = useState<T>();
  const [requestErrorMessage, setRequestErrorMessage] = useState<string>();
  const makePostRequest = async () => {
    try {
      setIsLoading(true);

      const response = await api.post(path, payload);

      setCreatedResource(response.data);
    } catch (error: any) {
      setRequestErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [makePostRequest, isLoading, requestErrorMessage, createdResource];
};
