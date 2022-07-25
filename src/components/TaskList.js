import React from "react";
import Task from './Task'


function TaskList({tasks, onHandleDeleteTask}) {



  return (
    <div className="tasks">
      
       {tasks.map((task) =>
  
  ( <Task key={task.text} text={task.text} category={task.category} onHandleDeleteTask={onHandleDeleteTask}/>
  ))}
        
    </div>
  );
}

export default TaskList;
