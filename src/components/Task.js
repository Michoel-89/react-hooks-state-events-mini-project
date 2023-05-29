import React from "react";

function Task({text, catogory, deleteTask}) {
  function handleClick() {
    deleteTask(text)
  }
  return (
    <div className="task">
      <div className="label">{catogory}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
