import { useEffect, useState } from "react";

function UpdateTodo() {
  const getTodoList = localStorage.getItem("todoList");
  let parseTodoList = JSON.parse(getTodoList);
  const updateTodo = localStorage.getItem("Todo");
  let parseUpdateTodo = JSON.parse(updateTodo);

  const [todoIndex, setTododIndex] = useState(0);

  useEffect(() => {
    for (let i = 0; i < parseTodoList.length; i++) {
      if (
        parseUpdateTodo[0].todoDescription === parseTodoList[i].todoDescription
      ) {
        setTododIndex(i);
      }
    }
  }, [parseUpdateTodo, parseTodoList]);

  const [todo, setTodo] = useState({
    task: parseUpdateTodo[0].todoItem,
    taskDespription: parseUpdateTodo[0].todoDescription,
    priority: parseUpdateTodo[0].todoPriority,
  });

  function save() {
    parseTodoList[todoIndex].todoItem = todo.task;
    parseTodoList[todoIndex].todoDescription = todo.taskDespription;
    parseTodoList[todoIndex].todoPriority = todo.priority;
    localStorage.setItem("todoList", JSON.stringify(parseTodoList));
    window.location.reload();
  }

  const handleChange = (e) =>
    setTodo((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder={parseUpdateTodo[0].todoItem}
        name="task"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder={parseUpdateTodo[0].todoDescription}
        name="taskDespription"
        onChange={handleChange}
      />
      <select name="priority" placeholder={parseUpdateTodo[0].todoPriority} onChange={handleChange}>
        <option>Priority Levels</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button onClick={save}>Save Changes</button>
    </div>
  );
}

export default UpdateTodo;
