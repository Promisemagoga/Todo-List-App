import React from "react";

function SearchResult() {
  const searchTodo = localStorage.getItem("searchBar");
  const parseSearchTodo = JSON.parse(searchTodo);

  if(parseSearchTodo === "" || parseSearchTodo === null){
    localStorage.setItem("searchBar", JSON.stringify([])) 
  }
  return (
    <div >
         <h1>Seach History</h1>
      {parseSearchTodo.map((data, index) => (
        <div className="search" key={index}>
          <p>Task: {data.todoItem}</p>
          <p>Description: {data.todoDescription}</p>
          <p>Priority: {data.todoPriority}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
