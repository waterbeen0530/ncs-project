import { dataType } from "../create";

export interface postDetail {
  title: string;
  content: string;
  nickname: string;
  userId: string;
  dataType: dataType;
  image: string;
}
