export type dataType = "MORNING" | "LUNCH" | "EVENING" | null;

export interface createReqModel {
  title: string;
  content: string;
  dataType: dataType;
}
