import {useState} from 'react'

let nextId = 0;
export default function App(){
     const [tasks,setTasks]=useState([])

     function handleAddTask(text){
        setTasks([...tasks,
            {
                id:nextId++,
                text:text,
                done:false
            }
        ])
     }

     function handleDeleteTask(taskId){
        setTasks(tasks.filter((t)=>t.id!==taskId
        ))
     }

    return (
        <>
         <h1>Task Manager</h1>
         <AddTask  onAddTask={handleAddTask} />
         <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}/>
        </>
    );
}
function AddTask({onAddTask}){
    const [text,setText]=useState('')
    return (
        <>
          <input value={text} placeholder='Add Task' onChange={(e)=>{setText(e.target.value)}} />
          <button onClick={()=>{setText(''); onAddTask(text)}}>Add</button>
        </>
    );
}

function TaskList({tasks,onDeleteTask}){
   return (
    <ul>
      {
        tasks.map((task)=>(
            <li key={task.id}>
                <List task={task} onDelete={onDeleteTask}/>
            </li>
        ))
      }
    </ul>
   );
}

function List({task,onDelete}){
    return (
        <>
        {task.text} {' '}
        <button onClick={()=>onDelete(task.id)}>Delete</button>
        </>
    )
}


