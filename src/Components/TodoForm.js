import { useState } from "react";

function TodoForm(props) {
const[todoItem, setTodoItem] = useState("")
  function addButtonFunction(){
    props.AddTodoItems(
      todoItem
    )
    window.location.reload()
  }
  return (
    <div>
      <h1>Todo-List</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={(event) => setTodoItem(event.target.value)}
        />
        <button onClick={addButtonFunction}>Add</button>
      </div>
    </div>
  );
}

export default TodoForm;
