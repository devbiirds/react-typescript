import React from "react";
import { IToDo } from "../interfaces";
type TodoListProps ={
    todos:IToDo[];
}
export const TodoList :React.FC<TodoListProps> = ({todos})=>{
    
    return(
        <ul className="todosbox">
            {todos.map((item)=>{

            return(
            <li className="todos-item" key={item.id}>
                <label className="todos-item-area" htmlFor="check">
                    <input id="check" type="checkbox" checked={item.completed}/>
                    <span>{item.title}</span>
                    <i className="material-icons red-text"></i>
                </label>
            </li>
            );
            })
        }
        </ul>
    );
}