import React from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
};

export default Home;
