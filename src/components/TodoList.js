import React from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todoSlice";
import Input from "./Input";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector(selectTodoList);
  return (
    <>
      <div className="app">
        <div className="app__container">
          <div className="app__todoContainer">
            {todoList?.map(({ item, done, id }) => (
              <TodoItem key={id} name={item} done={done} id={id} />
            ))}
          </div>
          <Input />
        </div>
      </div>
    </>
  );
};

export default TodoList;
