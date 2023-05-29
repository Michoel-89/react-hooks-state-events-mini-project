import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
   const [selectedCategory, setSelectedCategory] = useState('All')
  function deleteTask(text) {
    setTasks(tasks.filter(task => task.text !== text))
  }
  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }
  const revealedTasks = tasks.filter(
    (task) => selectedCategory === 'All' || selectedCategory === task.category
  )
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm CATEGORIES={CATEGORIES.filter((cat) => cat !== 'All')} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={revealedTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
