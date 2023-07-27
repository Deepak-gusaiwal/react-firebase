import React, { useEffect } from "react";
import Todo from "./Todo";
import { useTodoContext } from "../context/TodoContext";

const Todos = () => {
  const { todos, getTodos } = useTodoContext();

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <hr />
      <h4 className="text-2xl text-center font-semibold">Your Todos</h4>
      {!todos.length ? (
        <h4 className="text-center font-bold text-3xl py-2 bg-red-600 text-white">No Todos has been added yet!</h4>
      ) : (
        <div className="grid  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 p-2">
          {
            todos.map((item,index)=>{
              return <Todo data={item} key={index} />
            })
          }
        </div>
      )}
    </div>
  );
};

export default Todos;
