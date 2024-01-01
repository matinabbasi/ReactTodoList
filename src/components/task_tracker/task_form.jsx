import React, { useState } from "react";
import "./task_wrapper_styles.css";

export const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title,todo);
    setTitle("");
    setTodo("");
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title of your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          placeholder="write your task here"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit" className="btn btn-primary add-button">
          Add Task
        </button>
      </form>
    </div>
  );
};
