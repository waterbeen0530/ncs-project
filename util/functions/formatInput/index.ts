export const formatInput = (value: string, name: string): string => {
  if (name === "nickname") {
    return value.replace(/[^ㄱ-ㅎ가-힣ㅏ-ㅣA-Za-z0-9]/g, "");
  }
  if (name === "userId") {
    return value.replace(/[^A-Za-z0-9\d]/g, "");
  }
  if (name === "password") {
    return value.replace(/[^A-Za-z\d@$!%*#?&]/g, "");
  }

  throw new Error("알 수 없는 name");
};
