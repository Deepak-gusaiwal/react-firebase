import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

const EditTodo = ({ setEditModal }) => {
  const [Utitle, setUTitle] = useState("");
  const [Udescription, setUDescription] = useState("");
  const [Uerr, setUErr] = useState(false);

  const { singleTodo } = useTodoContext;
  console.log('in editTodo.jsx',singleTodo)

  const updateHanddler = () => {
    if (!Utitle || !Udescription) {
      setUErr(true);
      return;
    }
    setUTitle("");
    setUDescription("");
    setEditModal(false);
  };
  return (
    <div className="fixed w-full h-full left-0 top-0 flex justify-center items-center bg-opacity-50 bg-slate-500">
      <div className=" w-[max(50vw,300px)]  p-4 my-2  mx-auto bg-green-600 flex flex-col justify-center items-center gap-2">
        <h2 className="text-center text-3xl font-bold">Update your TODO</h2>
        <input
          className="rounded-sm px-2 py-1 w-[max(80%,150px)]"
          type="text"
          value={Utitle}
          placeholder="Enter Title"
          onChange={(e) => {
            setUTitle(e.target.value);
          }}
        />
        {Uerr && !Utitle && (
          <p className="bg-red-600 text-white p-1">Please Add A Title</p>
        )}
        <input
          value={Udescription}
          className="rounded-sm px-2 py-1 w-[max(80%,150px)]"
          type="text"
          placeholder="Enter Description"
          onChange={(e) => {
            setUDescription(e.target.value);
          }}
        />
        {Uerr && !Udescription && (
          <p className="bg-red-600 text-white p-1">Please Add A Description</p>
        )}

        <div className="flex gap-2 justify-center">
          <button
            onClick={updateHanddler}
            className="p-2 bg-orange-500 font-bold text-white rounded"
          >
            Update
          </button>
          <button
            onClick={() => {
              setEditModal(false);
            }}
            className="p-2 bg-red-500 font-bold text-white rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
