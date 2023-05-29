import React, {useState} from "react";

function NewTaskForm({CATEGORIES, onTaskFormSubmit}) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Code')
  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit({text, category})
    setCategory('Code')
    setText('')
  }
  function handleTextChange(e) {
    setText(() => e.target.value)
  }
  function handleCategoryChange(e) {
    setCategory(() => e.target.value)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} value={text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={category}>
          {CATEGORIES.map((category) => {
            return <option key={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
