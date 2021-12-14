import React from 'react'
//import Tasks from './Tasks'

const Practice = (task) => {
    const tasks=task.tasks
    return (
        <div className="practice">
           
         {tasks.map((task) => (
             <div className="blog-preview" key={task.id}>
              <h2>{task.title}</h2>
              <p>written by {task.author}</p>
             </div>
         ))}
       </div>
    )
}

export default Practice
