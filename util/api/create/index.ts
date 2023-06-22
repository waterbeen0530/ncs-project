import { createReqModel } from "@/model/create";
import instance from "@/util/axios/instance";

export const createPost = async (postData: createReqModel, imgFile: File) => {
  try {
    const form = new FormData();
    form.append(
      "postRequest",
      new Blob([JSON.stringify(postData)], { type: "application/json" })
    );
    form.append("file", imgFile);

    const res = await instance.post("/post", form, {
      headers: { "content-Type": "multipart/form-data" },
    });

    console.log(res);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
