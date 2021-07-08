import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfiel } from "./UserProfiel";
import { User } from "./types/user";

const user: User = {
  name: "ヒレイ"
  // hobbies: ["ゲーム", "買い物"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchDeta = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfiel user={user} />
      <Text color="red" fontSize="18px" />
      <br />
      <button onClick={onClickFetchDeta}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
