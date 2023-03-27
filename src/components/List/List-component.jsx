import React, { memo } from "react";
import "../List/List-component.style.scss";
import Button from "../Button/Button-component";
import { useTodo } from "../../context/Todolist-context";

const List = ({ lists }) => {
  const { DeleteTodo, CompleteTodo } = useTodo();
  const handleDelete = id => {
    DeleteTodo(id);
  };
  const handleComplete = id => {
    CompleteTodo(id);
  };
  return (
    <>
      <ul>
        {lists.map(data => (
          <li key={data.id}>
            <span
              className={data.complete ? "strike" : ""}
              onClick={() => handleComplete(data.id)}
            >
              {data.task}
            </span>{" "}
            <Button type="delete" onClick={() => handleDelete(data.id)}>
              delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(List);
