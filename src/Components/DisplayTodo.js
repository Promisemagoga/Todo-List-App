import { useState } from "react";
import UpdateTodo from "./UpdateTodo";
import { Navigate, useNavigate } from "react-router-dom";

function DisplayTodo(props) {
  const navigate = useNavigate()
  const deletTodo = localStorage.getItem("todoList");
  const Delete = JSON.parse(deletTodo);

  function deleteTodo(event, index) {
    Delete.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(Delete));
    window.location.reload();
  }

  const [showForm, setShowForm] = useState(false);

  const edit = (event, value) => {
    localStorage.setItem("Todo", JSON.stringify([value]));
    setShowForm(!showForm);
  };
  const searchBar = localStorage.getItem("todoList");
  const results = JSON.parse(searchBar);
  const [searchTask, setSearchTask] = useState("");

  function search() {
    for (let i = 0; i < results.length; i++) {
      if (searchTask === results[i].todoPriority) {
        localStorage.setItem("searchBar", JSON.stringify([results[i]]));
      }
    }
  navigate("/search")
  }
  return (
    <div>
      <div className="displayContainer">
        <div className="tableBar">
          <button className="display"></button>
          <div className="title">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <h2>Task List</h2>
          </div>
        </div>
        <div className="searchBar">
          <i className="fa fa-search" aria-hidden="true" onClick={search}></i>
          <input
            type="search"
            placeholder="Search"
            onChange={(event) => setSearchTask(event.target.value)}
          />
        </div>
        <table>
          <tbody>
            <tr className="tableHead">
              <th>Task</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
            {props.todoList.map((value, index) => (
              <tr key={index}>
                <td>{value.todoItem}</td>
                <td>{value.todoDescription}</td>
                <td>{value.todoPriority}</td>
                <td className="actions">
                  <i
                    className="fa fa-trash-o"
                    aria-hidden="true"
                    onClick={(event) => deleteTodo(event, index)}
                  ></i>
                  <i
                    className="fa fa-pencil-square-o"
                    aria-hidden="true"
                    onClick={(event) => edit(event, value)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showForm && <UpdateTodo />}
      </div>
    </div>
  );
}

export default DisplayTodo;
