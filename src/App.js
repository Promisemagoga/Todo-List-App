import "./App.css";
import DisplayTodo from "./Components/DisplayTodo";
import Login from "./Components/Login";
import TodoForm from "./Components/TodoForm";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./Components/Register";
import LogoutButton from "./Components/LogoutButton";


function App() {
  const getTodo = JSON.parse(localStorage.getItem("todoList")) || [];
  const [todoList, setTodoList] = useState(getTodo);

  const signedIn = JSON.parse(localStorage.getItem("signedIn")) || false;

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const AddTodoItems = (todoItem, todoDescription, todoPriority) => {
    setTodoList((todoList) => [
      ...todoList,
      {
        todoItem: todoItem,
        todoDescription: todoDescription,
        todoPriority: todoPriority,
      },
    ]);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(signedIn);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <Login setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/Home" />
            )
          }
        ></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route
          path="/Home"
          element={
            isAuthenticated ? (
              <div className="homeDisplay">
                <LogoutButton setIsAuthenticated={setIsAuthenticated} />{" "}
                <TodoForm AddTodoItems={AddTodoItems} />
                <DisplayTodo todoList={todoList} /> 
              </div>
            ) : (
              <Navigate to={"/"} />
            )
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
