import React, { createContext, useState, useContext } from "react";

const TodoContext = createContext({
  todos: [],
  setTodos: () => null,
  DeleteTodo: () => null,
});

const TodolistProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const DeleteTodo = id => {
    const todo = todos.filter(data => data.id !== id);
    setTodos(todo);
  };
  const CompleteTodo = id => {
    todos.map(data => {
      if (data.id == id) {
        setTodos({ ...data, complete: !data.complete });
      }
    });
  };
  const value = { todos, setTodos, DeleteTodo, CompleteTodo };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodolistProvider;

export const useTodo = () => {
  const todos = useContext(TodoContext);
  return todos;
};
