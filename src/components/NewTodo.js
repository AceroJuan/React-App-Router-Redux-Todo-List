import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveTodo } from "../features/todoSlice";
import "./styles.css";

const NewTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    console.log(`adding ${input}`);
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    alert("todo added, check todo list!");
  };

  const handleInputValue = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="app">
        <div className="input">
          <input type="text" value={input} onChange={handleInputValue} />
          <button onClick={handleAddTodo}>add</button>
        </div>
        <Link to="/">back to todo list</Link>
      </div>
    </>
  );
};

export default NewTodo;
