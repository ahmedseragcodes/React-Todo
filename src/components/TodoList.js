import React from "react";
import Todo from "./Todo";

const TodoList=(props)=>{
    return (
        <div>
            {props.toDos.map(function(item){
                return <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            })}
            <button className="clear-btn">Clear Done</button>
        </div>
    )
}

export default TodoList;