
import React, { useState } from "react";

function CreateButton (){
    const [showInput, setShowInput]= useState(false);
    const crearTodo = () => { setShowInput(true)};
return(
    <div>
        <button id="b" onClick={crearTodo}>+</button>
        {showInput && <input placeholder="cebolla" />}

    </div>
        )
    
}





export { CreateButton };