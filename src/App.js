import "./App.css";
import DisplayTodo from "./Components/DisplayTodo";
import Login from "./Components/Login";
import TodoForm from "./Components/TodoForm";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom";
import Register from "./Components/Register";

function App() {
  const getTodo = JSON.parse(localStorage.getItem("todoList")) || [];
  const [todoList, setTodoList] = useState(getTodo);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const AddTodoItems = (todoItem,todoDescription,todoPriority) => {
    setTodoList((todoList) => [
      ...todoList,
      {
        todoItem: todoItem,
        todoDescription:todoDescription,
        todoPriority:todoPriority,
      },
    ]);
  };


  const[isAuthenticated, setIsAuthenticated] = useState(false);
  return (
<Router>
  <Routes>
    <Route path="/" element={!isAuthenticated ?<Login setIsAuthenticated={setIsAuthenticated}/>: <Navigate to="/Home"/>}></Route>
    <Route path="/Register"element={<Register />}></Route>
    <Route path="/Home" element={<div><TodoForm AddTodoItems={AddTodoItems} /><DisplayTodo todoList={todoList} /></div>}></Route>
  </Routes>
</Router>
  );
}

export default App;

