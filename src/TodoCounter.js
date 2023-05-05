import React from "react";
import { todos } from "./TodoList";
function TodoCounter (){
     
   const todoCompleted = todos.filter(todo => todo.complited).length
    return(<h2>
        has hecho {todoCompleted}, de {todos.length}
    </h2>)
        
    
}


export { TodoCounter }