import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

import { API_URL } from '../../constants';

type RequestError = AxiosError<{ errors: { code: string; message: string }[] }>;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => request,
  (err: AxiosError) => Promise.reject(err)
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (err: AxiosError) => Promise.reject(err)
);

export type { RequestError };
export { api };
