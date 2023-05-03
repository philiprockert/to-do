import React from "react";

const h1 = <h1></h1>;
function Todotem(props){
    return(
        <li>
            <p>{props.text}</p>
        </li>
    )
}


export { Todotem };