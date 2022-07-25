import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [newTask, setNewTask]= useState(TASKS)
  const [category, setCategory]=useState('All')

  function handleSubmit(newData){
    setNewTask(...newTask, newData)
    console.log(setNewTask)


  }
   function handleDelete(newList){
    
    setNewTask(newTask.filter((newtasks)=>{
      return newtasks.text !== newList
    }))

   }
   
   const list = newTask.filter((task) => 
    category ==="All" || task.category === category
   )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}  selectedCategory={category} onSelectedCategory={setCategory}/>
      <NewTaskForm onTaskFormSubmit={handleSubmit} />
      <TaskList  tasks={list}  onHandleDeleteTask={handleDelete}/>
    </div>
  );
}

export default App;
