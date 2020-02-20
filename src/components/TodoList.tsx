import React from "react";
type TodoListProps ={
    todos:any[];
}
export const TodoList :React.FC<TodoListProps> = ({todos})=>{
    
    return(
        <ul className="todosbox">
            {todos.map((item)=>{
            return(
            <li className="todos-item">
                <label htmlFor="">
                    <input type="checkbox"/>
                    <span></span>
                    <i className="material-icons red-text"></i>
                </label>
            </li>
            );
            })
        }
        </ul>
    );
}