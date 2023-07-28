import React, { createContext, useContext, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../services/firebaseConfig";

// here we created a context
const TodoContext = createContext();
// here create a provider
const TodoProvider = ({ children }) => {
  // create a collection referense
  const CollectionName = "todo";
  const collectionRef = collection(db, CollectionName);

  const [todos, setTodos] = useState([]);

  const [singleTodo, setSingleTodo] = useState({});

  // To get Todo Data
  const getTodos = async () => {
    const querrySnapshot = await getDocs(collectionRef);
    try {
      const data = querrySnapshot.docs.map((item) => {
        return {
          id: item.id,
          ...item.data(),
        };
      });
      setTodos(data);
    } catch (error) {
      alert("there has a error while fetching data from the server");
      console.log(error);
    }
  };

  // To Add Data To The Todo App
  const addTodo = async (title, description) => {
    try {
      await addDoc(collectionRef, {
        title,
        description,
        timeStamp: serverTimestamp(),
      });
    } catch (error) {
      alert("something goes wrong");
      console.log(error);
    }
    getTodos();
  };

  // To Delete Todo Data
  const deleteTodo = (id) => {
    try {
      let confirm = window.confirm("Are You Really Want To Delete it");
      if (!confirm) {
        return;
      }
      //get the single todo data
      const documentRef = doc(db, CollectionName, id);
      //delete todo
      deleteDoc(documentRef);
    } catch (error) {
      alert("error While deleteing Todo");
      console.log(error);
    }
    getTodos();
  };

  //fetch single Todo Data
  const fetechSingleTodo = async (id) => {
    try {
      const singleTodoRef = doc(db, CollectionName, id);
      const singleTodoSnapshot = await getDoc(singleTodoRef);
      if (singleTodoSnapshot.exists) {
        const requiredData = singleTodoSnapshot.data();
        setSingleTodo({...requiredData});
        console.log('inside',singleTodo)
      } else {
        alert("data is not exists");
        setSingleTodo({});
      }
    } catch (error) {
      alert("error while fetching single Todo data");
      console.log(error);
    }

  };
  console.log('outside',singleTodo)
  // To Edit Todo Data
  const editTodo = () => {
    console.log("edit Todo");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        getTodos,
        addTodo,
        deleteTodo,
        editTodo,
        fetechSingleTodo,
        singleTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

//here create useTodoContext to get data easily
const useTodoContext = () => {
  return useContext(TodoContext);
};
export { TodoProvider, useTodoContext };
