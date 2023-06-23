import { loginReqModel } from "@/model/login";
import instance from "@/util/axios/instance";
import { setToken } from "@/util/functions/token";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const postLogin = async (loginData: loginReqModel) => {
  try {
    console.log(loginData);
    const { data } = await axios.post(`${BASE_URL}user/login`, loginData);

    setToken(data.token);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
