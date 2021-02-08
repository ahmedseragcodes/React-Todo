import React from "react";
import "./Todo.css";

const Todo=(props)=>{
    return (
        <div>
            <p onClick={()=>props.toggleItem(props.item.id)} className={`item${props.item.completed ? " completed" : ""}`}>{props.item.task}</p>
        </div>
    )
}

export default Todo;