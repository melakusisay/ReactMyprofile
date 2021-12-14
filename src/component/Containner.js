import React from 'react';
import {useState} from 'react';

 const Containner = () => {
    const[todos, setTodos] = useState([
        
        {
            id: 1,
            title: "Setup development environment",
            name:"Melaku",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            name:"Melaku",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            name:"Abebe",
            completed: false
          }      
    ]);
    
    return (
    <div>       
        {/* <MemberList todos={todos} topic="All lists"  />
        <MemberList todos={todos.filter((todo)=>todo.name=="Melaku")} topic="Item lists"/>      
    */}
    </div>
    )
  }
export default Containner;
        