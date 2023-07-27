import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EditTodo from "./components/EditTodo";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update" element={<EditTodo />} />
      </Routes>
    </>
  );
};

export default App;
