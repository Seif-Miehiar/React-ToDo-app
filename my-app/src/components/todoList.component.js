import React from "react";
// import ReactDOM from "react-dom";

const TodoList = (props) => {

console.log(props.todoItems)
    return (
      <div>
        Welcome to TodoList Component
        <div>
          {props.todoItems.map((todo) => {
            return <li> {todo}</li>
          })}
        </div>
      </div>
    )
  
  
}

export default TodoList;