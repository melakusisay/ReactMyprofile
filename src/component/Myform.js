
import React from 'react'
import {useState} from 'react';
const Myform = () => {
    const [state, setState] = useState({
        fname: "",
        lname: "",
        message: "",
        gender: "",
        price: 0,
      })
    
      const handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value  
        setState({
          ...state,
          [e.target.name]: e.target.value,
          [e.target.name]: value,
        })
      }
    
      return (
        <div style= {{  
          border: '2px solid black', 
          width:900, 
          height:400, 
          marginLeft: "14rem",
          marginTop:"8rem"
          }}>
          <h1>React Form Handling</h1>
          <form>
            <label>
              First Name:{" "}
              <input
                type="text"
                name="fname"
                value={state.fname}
                onChange={handleChange}
              />
            </label>{" "}          
            <br></br>
            <label>
              Last Name:{" "}
              <input
                type="text"
                name="lname"
                value={state.lname}
                onChange={handleChange}
              />
            </label>
            <br></br>
            <label>
        Pick your favorite car brand:
        <select
          name="carBrand"
          value={state.carBrand}
          onChange={handleChange}
        >
          <option value="mercedes">Mercedes</option>
          <option value="bmw">BMW</option>
          <option value="maserati">Maserati</option>
          <option value="infinity">Infinity</option>
          <option value="audi">Audi</option>
        </select>
      </label>
      <br></br>
        <label>
        Your Message:{" "}
        <textarea
          name="message"
          value={state.message}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label>
        <input
          type="checkbox"
          name="isChecked"
          checked={state.isChecked}
          onChange={handleChange}
        />
{" "}
        Is Checked?
      </label>
      <br></br>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={state.gender === "male"}
          onChange={handleChange}
        />
{" "}
    Male sex
      </label>
      
      <br></br>
      
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={state.gender === "female"}
          onChange={handleChange}
        />
{" "}  
       Female
      </label>
      <label>
        Price (between 0 and 100):
        <input
          type="range"
          name="price"
          min="0"
          max="100"
          value={state.price}
          onChange={handleChange}
        />
      </label>
 </form> 
 <br></br> 
 <h3>The output of the form</h3>       
          <h5> FName: {state.fname} </h5>  
          <h5>LName:{state.lname} </h5>
          <h5>My favorite car brand: {state.carBrand}</h5>
          <h5>Message: {state.message}</h5>
          <h5>Is it checked? : {state.isChecked ? "Yes" : "No"}</h5>
          <h5>Gender Selected : {state.gender}</h5>
          <h5>Price : ${state.price}</h5>
        </div>
      )
  }
  
  export default Myform
