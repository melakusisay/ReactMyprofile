import { useState } from 'react';

const Forminput = () => {
    const COLORS = ['Pink', 'Green','white', 'red', 'blue', 'black', 'cream', 'yellow'];
       
        const [name, setName] = useState('');
        const [color, setColor] = useState('');
        const [age, setAge] = useState('');
        const [habit, setHabit] = useState(''); 
        const handlesubmit=(e)=>{
        e.preventDefault();
        const mymember={name, color, age, habit};
        console.log(mymember)
        }  
    return (
        <div style= {{  
             border: '2px solid black', 
             width:900, 
             height:440, 
             marginLeft: "14rem",
             marginTop:"8rem"
             }}>
    <form onSubmit={handlesubmit}>
      <h2>Register Your name</h2>
      <label>Name*:</label>
      <input 
        type="text"
        value={name}
        required
        onChange={(e)=>setName(e.target.value)}
      /><br></br>
      <label>Color*:</label>
      <select 
       value={color}
       onChange={(e)=>setColor(e.target.value)}
      >
        <option value="">Select color</option><br></br>
        {COLORS.map(c => <option key={c}>{c}</option>)}
      </select><br></br>
      <label>Age*:</label>
      <input 
      type="Number"
      value={age}
      required
      onChange={(e)=>setAge(e.target.value)}
      /><br></br>
      <label>Habits:</label>
      <textarea 
      value={habit}
      required
      onChange={(e)=>setHabit(e.target.value)}
      /><br></br>
      <button type="submit">Submit</button>
        <p>{name}</p>
        <p>{color}</p>
        <p>{age}</p>
        <p>{habit}</p>
    </form>    
        </div>
        
    )
}

export default Forminput

