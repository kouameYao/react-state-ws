import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, handleDelete, handleDone }) => {
  if (todos.length === 0) {
    return (
      <div className="alert alert-secondary" role="alert">
        Pas de tache. Ajouter une !
      </div>
    );
  }
  return (
    <div className="alert alert-light">
      {todos?.map((task) => (
        <Todo
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
      ))}
    </div>
  );
};

export default TodoList;
