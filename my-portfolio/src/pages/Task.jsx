import { useState } from "react"


export const Task = ()=>{
  const [newTask, setNewTask] = useState("")
  const [tasks, setTask] = useState([])



  function handleTaskChange(event){
    setNewTask(event.target.value)

  }

  function addTask(){
    setTask(t =>[...t, newTask])
    setNewTask("")
  }

  function removeTask(index){
    const updatedTask = tasks.filter((_, i)=>i !== index)
    setTask(updatedTask)
  }
  console.log(tasks)
  console.log(newTask)
  


     return(
      <div className="task-container">
          <div className="task-body">
            <h1>Task Application</h1>



               <div className="task">
                  <input type="text" placeholder="Add a new task" onChange={handleTaskChange} value={newTask}/>
                 
                 <ol>
                    {tasks.map((task, index)=>
                      <li key={index} >
                      <span className="tasks-span">{task} <button onClick={()=>removeTask(index)} className="trash-btn">⤫</button> </span>
                      </li>
                    )}
                 </ol>

                 

                  <button onClick={()=>addTask()}  className="add-task">Add task</button>
               </div>
          </div>
      </div>
     )
}