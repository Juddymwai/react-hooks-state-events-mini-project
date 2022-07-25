import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit}) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('All')

  function addNewTask(e){
    e.preventDefault()
    
    const newObj={
      text:text,
      category: category
    }
   onTaskFormSubmit(newObj)

  }


  return (
    <form className="new-task-form" onSubmit={addNewTask}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=> setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=> setCategory(e.target.value)}>
          <option>Food</option>
          <option>Code</option>
          <option>Money</option>
          <option>Misc</option>
          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
