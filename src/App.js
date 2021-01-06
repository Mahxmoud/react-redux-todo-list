import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="app">
      <div className='header'>
      <h1 className='mt-5'>Todo List</h1>
      <AddTodo />
      <VisibilityFilters />
      </div>
      <TodoList />
    </div>
  );
}