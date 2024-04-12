import React from "react";
import { Trash2, Check } from "lucide-react";

import "./Todo.css";

const Todo = ({ task, handleDelete, handleDone }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <span className={task.done ? "done" : "unDone"}>
            {task.description}
          </span>
        </div>
        <div
          className="col-md-1 justify-content-center"
          style={{ cursor: "pointer" }}
        >
          <div onClick={() => handleDelete(task.id)}>
            <Trash2 color="red" />
          </div>
        </div>
        <div className="col-md-1 justify-content-center">
          <div onClick={() => handleDone(task.id)}>
            <Check color="green" />
          </div>
        </div>
      </div>
      <div
        style={{
          height: "1px",
          width: "100%",
          background: "black",
          marginTop: "2px",
          marginBottom: "1px",
        }}
      />
    </>
  );
};

export default Todo;
