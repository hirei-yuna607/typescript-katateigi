import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Pick<TodoType, "userId" | "title" | "completed">> = (
  props
) =>
  //必要なものをピックアップする
  // このコンポーネントの中で使うものだけピックアップする
  // props: Pick<TodoType, "userId" | "title" | "completed">

  // 不必要なものを書く
  //  props: Omit<TodoType, "id">
  {
    const { title, userId, completed = false } = props;
    const completeMarked = completed ? "[完]" : "[未]";
    return <p>{`${completeMarked} : ${title}(ユーザー: ${userId})`}</p>;
  };
