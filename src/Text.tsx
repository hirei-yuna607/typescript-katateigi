import { FC, VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// 関数コンポーネントの型の指定の仕方
// FCは暗黙的にchildrenを受け取る
// VFCはchildrenを受け取らない 推奨
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color: color, fontSize: fontSize }}>テキスト</p>;
};
