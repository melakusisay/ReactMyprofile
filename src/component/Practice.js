import React from 'react'
//import Tasks from './Tasks'

const Practice = ({tasks, title, handleDelet}) => {
    // const tasks=task.tasks
    // const title=task.title
    // const handdel=handdel.handleDelet
    return (
        <div className="practice">
           <h1>{title}</h1>
         {tasks.map((task) => (
             <div className="blog-preview" key={task.id}>
              <h2>{task.title}</h2>
              <p>written by {task.author}</p>
              <button onClick={()=>handleDelet(task.id)}>deletlist</button>
             </div>
         ))}
       </div>
    )
}

export default Practice
