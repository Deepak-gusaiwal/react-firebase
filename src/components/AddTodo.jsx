import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
const AddTodo = () => {
  const { addTodo } = useTodoContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState(false);

  const handdleAddTodo = () => {
    if (!title || !description) {
      setErr(true);
      return;
    } else {
      setErr(false);
      addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div className=" w-[max(80vw,200px)]  p-4 my-2  mx-auto bg-orange-300 flex flex-col justify-center items-center gap-2">
      <h2 className="text-center text-3xl font-bold">Add your TODO</h2>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="rounded-sm px-2 py-1 w-[max(80%,150px)]"
        type="text"
        placeholder="Enter Title"
      />

      {err && !title && <p className="bg-red-600 text-white p-1">Please Add A Title</p>}
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className="rounded-sm px-2 py-1 w-[max(80%,150px)]"
        type="text"
        placeholder="Enter Description"
      />
      {err && !description && <p className="bg-red-600 text-white p-1">Please Add A Description</p>}
      <button
        onClick={handdleAddTodo}
        className="p-2 bg-orange-500 font-bold text-white rounded"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
