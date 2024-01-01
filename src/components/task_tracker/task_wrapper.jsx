import { React, useState } from "react";
import "./task_wrapper_styles.css";
import { TaskForm } from "./task_form";
import { Task } from "./task";
import { v4 as uuidv4 } from "uuid";
import { EditingTask } from "./edit_task_form";

const TaskWrapper = () => {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   let arr = localStorage.getItem("taskList");

  //   if (arr) {
  //     let obj = arr;
  //     setTasks(obj);
  //   }
  // }, []);

  const addTask = (todoTitle, todo) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: todoTitle,
        task: todo,
        isDone: false,
        isProgressing: false,
        isTodo: true,
        isEditing: false,
      },
    ]);
    // localStorage.setItem("taskList", tasks);
  };

  const doneFunc = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, isDone: true, isTodo: false, isProgressing: false }
          : task
      )
    );
  };

  const todoFunc = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, isDone: false, isTodo: true, isProgressing: false }
          : task
      )
    );
  };

  const inProgressFunc = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, isProgressing: true, isTodo: false, isDone: false }
          : task
      )
    );
  };

  const deleteFunc = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editFunc = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: true } : task
      )
    );
  };

  const editTask = (title, editTaskForm, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title, editTaskForm, isEditing: false }
          : task
      )
    );
    console.log(tasks);
  };

  return (
    <>
      <div className="task-input d-flex align-items-center justify-content-center">
        <TaskForm addTask={addTask} />
      </div>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <div className="column-title d-flex align-items-center justify-content-center">
              Todo list
            </div>
            <div>
              {tasks.map((task, index) =>
                task.isTodo ? (
                  task.isEditing ? (
                    <EditingTask key={index} editTask={editTask} task={task} />
                  ) : (
                    <Task
                      task={task}
                      key={index}
                      doneFunc={doneFunc}
                      todoFunc={todoFunc}
                      inProgressFunc={inProgressFunc}
                      deleteFunc={deleteFunc}
                      editFunc={editFunc}
                    />
                  )
                ) : null
              )}
            </div>
          </div>
          <div className="col">
            <div className="column-title in-progress-color d-flex align-items-center justify-content-center">
              In progress
            </div>
            <div>
              {tasks.map((task, index) =>
                task.isProgressing ? (
                  task.isEditing ? (
                    <EditingTask key={index} editTask={editTask} task={task} />
                  ) : (
                    <Task
                      task={task}
                      key={index}
                      doneFunc={doneFunc}
                      todoFunc={todoFunc}
                      inProgressFunc={inProgressFunc}
                      deleteFunc={deleteFunc}
                      editFunc={editFunc}
                    />
                  )
                ) : null
              )}
            </div>
          </div>
          <div className="col">
            <div className="column-title done-color d-flex align-items-center justify-content-center">
              Done
            </div>
            <div>
              {tasks.map((task, index) =>
                task.isDone ? (
                  task.isEditing ? (
                    <EditingTask key={index} editTask={editTask} task={task} />
                  ) : (
                    <Task
                      task={task}
                      key={index}
                      doneFunc={doneFunc}
                      todoFunc={todoFunc}
                      inProgressFunc={inProgressFunc}
                      deleteFunc={deleteFunc}
                      editFunc={editFunc}
                    />
                  )
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskWrapper;
