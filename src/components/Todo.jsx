import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useTodoContext } from "../context/TodoContext";

const Todo = ({ data, setEditModal }) => {
  const { title, description, id } = data;
  const { deleteTodo, fetechSingleTodo } = useTodoContext();

  const handelEditClick = () => {
    setEditModal(true);
    fetechSingleTodo(id);
  };

  return (
    <div className="todoBox bg-orange-200 p-2 ">
      <h4 className="font-bold text-2xl capitalize">{title} </h4>
      <p>{description}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => {
            deleteTodo(id);
          }}
          className="bg-red-500 p-2 text-2xl rounded text-white"
        >
          <AiFillDelete />
        </button>
        <button
          onClick={handelEditClick}
          className="bg-yellow-500 p-2 text-2xl rounded text-white"
        >
          <AiFillEdit />
        </button>
      </div>
    </div>
  );
};

export default Todo;
