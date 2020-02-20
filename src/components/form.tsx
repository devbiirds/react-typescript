import React,{useState} from "react";
interface TodoFormProps{
    onAdd(title:string):void;
}
export const Form : React.FC<TodoFormProps> = (props) =>{
    const [title,setTitle] = useState<string>('');
    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value);
    }
    const KeyDown = (event: React.KeyboardEvent) => {
        if(event.key === "Enter" ){
            props.onAdd(title);
        }
    }
    return(
        <div className="inputbox">
            <input
            onChange = {changeTitle}
            value={title}
            onKeyDown = {KeyDown}
            type="text" id="title" placeholder="Text"/>
        </div>
    );
}