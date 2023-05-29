import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return <Task key={task.text} text={task.text} catogory={task.catogory} deleteTask={deleteTask}/>
      })}
    </div>
  );
}

export default TaskList;
