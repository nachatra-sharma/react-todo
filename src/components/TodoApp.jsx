import React, { useState } from "react";
import { TodoItems } from "./TodoItems";
import { Counter } from "./Counter.jsx";
import { AddTodoModal } from "./AddTodoModal.jsx";
const TodoApp = () => {
  const items = ["Eat", "Code", "Sleep", "Repeat"];
  const [clicked, setClicked] = useState(false);
  return (
    <div id='wrapper'>
      {clicked ? <AddTodoModal setClicked={setClicked} /> : <></>}
      <div id='todo-container'>
        <div id='todo-box'>
          <Counter />
          <h2>Todo</h2>
          <TodoItems name={items} />
          <button
            id='add-todo'
            onClick={() => {
              return setClicked(true);
            }}>
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
