import React from "react";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
const App = () => {
 
  return (
    <>
        <Navbar />
        <div className="container mx-auto">
          <AddTodo />
          <Todos />
        </div>
    </>
  );
};

export default App;
