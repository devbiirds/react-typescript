import React, {useState} from 'react';
import { Navbar } from "./components/Navbar";
import{ Form} from "./components/form";
function App() {
  const [todos,setTodos] = useState([]);
  const addHandler = (title:string) =>{
    
  }
  return (
    <div className="wrapper">
    <Navbar/>
    <Form onAdd = {addHandler}/>
    </div>
  ) 
}

export default App;
