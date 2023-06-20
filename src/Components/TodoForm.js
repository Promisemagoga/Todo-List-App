import { useState } from "react";

function TodoForm(props) {
const[todoItem, setTodoItem] = useState("")
const[todoDescription, setTodoDescription] = useState("")
const[todoPriority, setTodoPriority] = useState("")

  function addButtonFunction(){
    props.AddTodoItems(
      todoItem,
      todoDescription,
      todoPriority,
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
         <input
          type="text"
          placeholder="Enter description"
          onChange={(event) => setTodoDescription(event.target.value)}
        />
        <select   onChange={(event) => setTodoPriority(event.target.value)}>
          <option>Priority Levels</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>

        </select>
        <button onClick={addButtonFunction}>Add</button>
      </div>
      
    </div>
  );
}

export default TodoForm;
