import axios from "axios";
import cookies from "react-cookies";

const EXPIRES_TIME = Math.pow(2, 100);

export const setToken = (token: string) => {
  /** axios header setting */
  axios.defaults.headers.common.Authorization = "Bearer " + token;

  /** cookie 만료 시간 설정 */
  const expires = new Date();
  expires.setDate(Date.now() + EXPIRES_TIME);

  cookies.save("token", token, {
    path: "/",
    expires,
  });
};

/** cookie 지우기 */
export const removeToken = () => {
  cookies.remove("token");
};

/**
 * @returns cookie에 저장된 token을 반환
 */
export const getToken = () => {
  const token: string = cookies.select().token;

  return token;
};
