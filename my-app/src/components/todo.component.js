import React, { useState } from "react";
// import ReactDOM from "react-dom";
import TodoList from "./todoList.component"
// import ls from 'local-storage'


 function Todo()  {

    const [todoItems, setTodoItems] = useState('')
    const [data, setData] = useState([])

  const handleChange = (event) => {
    const value = event.target.value
    setTodoItems(value);

 }
  const handleSubmit = (event) => {

    event.preventDefault()
    
    console.log('A name was submitted: ' + todoItems)
    data.push(todoItems);
    console.log(data)
    setTodoItems('')
  }
  

      return (
        <div>
        Welcome to Todo Component
        <form onSubmit={handleSubmit}>
          <label>What are you up to?</label>
          <input
          type="text"
          value={todoItems}
          onChange={handleChange}
          />
          <button type="submit" value="Submit">
            Add 
          </button>
        </form>
        <TodoList todoItems={data} />
      </div>
    )
  
  
}

export default Todo;