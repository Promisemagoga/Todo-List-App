import "./App.css";
import DisplayTodo from "./Components/DisplayTodo";
import TodoForm from "./Components/TodoForm";
import { useEffect, useState } from "react";

function App() {
  const getTodo = JSON.parse(localStorage.getItem("todoList")) || [];
  const [todoList, setTodoList] = useState(getTodo);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const AddTodoItems = (todoItem) => {
    setTodoList((todoList) => [
      ...todoList,
      {
        todoItem: todoItem
      },
    ]);
  };
  return (
    <div>
      <TodoForm AddTodoItems={AddTodoItems} />
      <DisplayTodo todoList={todoList} />
    </div>
  );
}

export default App;
