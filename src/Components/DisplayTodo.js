function DisplayTodo(props) {
       const deletTodo = localStorage.getItem("todoList");
       const Delete = JSON.parse(deletTodo)

  function deleteTodo(event, index){
    Delete.splice(index, 1)
    localStorage.setItem("todoList", JSON.stringify(Delete))

    window.location.reload()
    
  }
  return (
    <div>
      {props.todoList.map((value, index) => (
        <div className="displayContainer" key={index}>
          <h2>{value.todoItem}</h2>
          <div className="actions">
          <i className="fa fa-trash-o" aria-hidden="true" onClick={((event) => deleteTodo(event, index))}></i>
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayTodo;
