import axios, { AxiosError } from "axios";
import { getToken } from "../functions/token";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config: any) {
    const accessToken: string = await getToken();

    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    if (axios.isAxiosError(error) && error.response) {
      console.log("임수빈이~ 교무실로 따라오세요.");
      return Promise.reject(error);
    }
  }
);

export default instance;
