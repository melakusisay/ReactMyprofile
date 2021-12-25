import {useState} from 'react'
import Tasks from './Tasks';
import Practice from './Practice';
import { FaTruckLoading } from 'react-icons/fa';
const Home=()=>{
    const[tasks, setTasks] = useState([
        {
         title:'Farmer',
         body:'short', 
         author:'Miss Tigist', 
         id:1,
        },
        {
        title:'Engineer',
        body:'Tall', 
        author:'Melaku', 
        id:2,
        },
        {
        title:'Dr', 
        body:' Midiem',
        author:'Dr Nahom', 
        id:3,
       },
      ])
    const[name, setName] =useState("Befor");
    const[like, setLike] =useState(0);
    const[dislike, setDislike] =useState(0);
    const[add, setAdd] =useState(0);
    const likes=()=>{
        setName(name + 'no ');
        setLike(like + 1);
        
    }
    const dlike=()=>{
        
        setDislike(dislike + 1)
    }
    const adds=()=>{
        
        setAdd(dislike + like)
    }
    const deleteTask=(id)=>{
        setTasks(tasks.filter((task)=>task.id !==id))

      }
   const handleDelet=(id)=>
   {
       const newtask=tasks.filter(task=>task.id !==id);
       setTasks(newtask);
   }   
const link='https://www.youtube.com/watch?v=j-h2TpYllwM'
    return(
        <div className='home'>
            <h1> Welcome To My Website</h1>
            <h2> እንኩዋን በደህና መጡ</h2>
            <p> {like}................{dislike}....={add}</p>
            <button onClick={likes}> Like </button> 
            <button onClick={dlike}>Dislike </button> 
            <button onClick={adds}>add </button>
           <p> < a href={link}>My Youtube link</a> </p>
           <Practice tasks={tasks} title="AwokeList" handleDelet={handleDelet} />
           <Practice tasks={tasks.filter((task)=>task.title=="Dr")}  title="This is Awoke's filiter"/>
           {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/>:"No task available"}          
        
        </div>
       
    );       
  }

export default Home;




 






