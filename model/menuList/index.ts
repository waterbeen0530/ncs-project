import { dataType } from "../create";

export interface menuListModel {
  id: number;
  title: string;
  nickname: string;
  userId: string;
  dataType: dataType;
  image: string;
}
