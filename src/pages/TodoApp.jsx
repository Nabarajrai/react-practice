import React from "react";
import "../pages/TodoApp.scss";
import Form from "../components/Form/Form-component";
import List from "../components/List/List-component";
import { useTodo } from "../context/Todolist-context";

const TodoApp = () => {
  const { todos } = useTodo();
  return (
    <div className="container">
      <div className="wrapper">
        <h2 className="text">Todo App</h2>
        <Form />
        <div className="todo-list">
          <List lists={todos} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
