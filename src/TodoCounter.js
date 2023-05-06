import React from "react";

function TodoCounter ({complited,total}){
     return(<h2>
        {complited} completados de {total}
     </h2>)
 
        
    
}


export { TodoCounter }