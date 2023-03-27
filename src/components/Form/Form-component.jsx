import React, { Fragment, useState } from "react";
import "../Form/Form-component.scss";
import Button from "../Button/Button-component";
import Input from "../Input/Input-component";
import { useTodo } from "../../context/Todolist-context";

const Form = ({}) => {
  const [value, setValue] = useState("");
  const { todos, setTodos } = useTodo();
  console.log(todos);
  const handleValue = e => {
    setValue(e.target.value);
  };

  const AddnewTodo = e => {
    e.preventDefault();
    if (value.length == 0) {
      return alert("write something");
    }
    const newtodos = {
      id: Math.random() * 10,
      task: value,
      complete: false,
    };
    setTodos([...todos, newtodos]);
    setValue("");
  };

  return (
    <Fragment>
      <form action="" className="form">
        <Input type="text" onChange={handleValue} value={value} />
        <Button onClick={AddnewTodo}>Add</Button>
      </form>
    </Fragment>
  );
};

export default Form;
