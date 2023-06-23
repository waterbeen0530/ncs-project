import axios from "axios";
import { singupReqModel } from "@/model/signup";
import instance from "@/util/axios/instance";

export const postSignup = async (signData: singupReqModel) => {
  try {
    await instance.post(`/user/signup`, signData);
  } catch (error) {
    throw error;
  }
};
