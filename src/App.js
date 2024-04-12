import { useState } from "react";

import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks([...tasks, task]);
  }

  function handleDeleteTask(id) {
    const filteredTask = tasks.filter((tast) => tast.id !== id);

    setTasks(filteredTask);
  }

  function handleDoneTask(id) {
    const transformedTask = tasks.map((elt) => {
      if (elt.id === id) {
        return {
          ...elt,
          done: !elt.done,
        };
      } else {
        return elt;
      }
    });

    setTasks(transformedTask);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <h3>Voici la liste de ce que je dois faire aujourd'hui !</h3>
      </div>
      <TodoList
        todos={tasks}
        handleDelete={handleDeleteTask}
        handleDone={handleDoneTask}
      />
      <AddTodo handleAdd={handleAddTask} />
    </div>
  );
}

export default App;
