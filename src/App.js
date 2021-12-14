
import './App.css';
import {useState} from 'react';
import Home from './component/Home';
import Tasks from './component/Tasks';
import Header from './component/Header';

//import AddTask from './component/AddTask';
import Practice from './component/Practice';
import Containner from './component/Containner';

import 'bootstrap/dist/css/bootstrap.min.css';
 import Forminput from './component/Forminput';
import Myform from './component/Myform';

function App() {
  
  return (
    <div className="App">
     <Header />              
      <Containner /> 
      <Myform />
      {/* <Forminput/> */}
      
    </div>
  )
}

export default App;
