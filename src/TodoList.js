import React from "react";

const todos = [ 
    {text:"hacer trabajos", complited: false},
    {text:"hacer trabajos", complited: false},
    {text:"hacer trabajos", complited: false}
    ];
function TodoList (props){
    
    return(
        
          <section>
                {props.children}
          </section>  
        )
    
}

export {TodoList};
export {todos};