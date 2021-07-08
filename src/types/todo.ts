// 実際のデータ（apiで取ってくるデータ）を見ながらした方がわかりやすい
// ?は必須ではないよという意味
export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed?: boolean;
};
