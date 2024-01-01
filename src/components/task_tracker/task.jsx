import "./task_wrapper_styles.css";

export const Task = ({
  task,
  doneFunc,
  todoFunc,
  inProgressFunc,
  deleteFunc,
  editFunc,
}) => {
  return (
    <div className="Task">
      <h5 className="d-block">{task.title}</h5>
      <p className="d-block">{task.task}</p>
      <div>
        <button
          className="btn btn-sm btn-info edit-button"
          onClick={() => {
            editFunc(task.id);
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger edit-button"
          onClick={() => {
            deleteFunc(task.id);
          }}
        >
          Delete
        </button>
        <button
          className="btn btn-sm btn-success edit-button"
          onClick={() => {
            doneFunc(task.id);
          }}
        >
          Done
        </button>
        <button
          className="btn btn-sm btn-success edit-button"
          onClick={() => {
            inProgressFunc(task.id);
          }}
        >
          InProgress
        </button>
        <button
          className="btn btn-sm btn-success edit-button"
          onClick={() => {
            todoFunc(task.id);
          }}
        >
          Todo
        </button>
      </div>
    </div>
  );
};
