import React, { useState } from "react";

export const EditingTask = ({ editTask, task }) => {
  const [title, setTitle] = useState(task.title);
  const [editTaskForm, setTask] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(title, editTaskForm, task.id);
    setTitle("");
    setTask("");
  };

  return (
    <>
      <div className="task-input-edit">
        <form onSubmit={handleSubmit}>
          <input
            className=""
            placeholder="  update your task title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            className=""
            placeholder="  update your task content"
            onChange={(e) => setTask(e.target.value)}
            value={editTaskForm}
          />
          <button type="submit" className="btn btn-primary add-button">
            update
          </button>
        </form>
      </div>
    </>
  );
};
