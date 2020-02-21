import React, {useState} from 'react';
import { Navbar } from "./components/Navbar";
import{ Form} from "./components/form";
import {TodoList} from './components/TodoList';
import {IToDo} from './interfaces';
function App() {
  const [todos,setTodos] = useState<Array<IToDo>>([]);
  const addHandler = (title:string) =>{
    const newTodo : IToDo = {
      title: title,
      id: Date.now(),
      completed:false
    }
    setTodos(prev =>[newTodo,...todos])
  }
  return (
    <div className="wrapper">
    <Navbar/>
    <div className="workbox">
    <Form onAdd = {addHandler}/>
    <TodoList todos={todos}/>
    </div>
    </div>
  ) 
}

export default App;
