import { useState } from "react";

interface Toggleprops{
    isActive:Boolean
    setIsActive:Boolean
}


const toggleButton = () =>{
    const [isActive,setIsActive] = useState(false);

    return(
        <button onClick={() => setIsActive(!isActive)}>
            {isActive ? "Activo" : "incativo"}
        </button>

    )
}


export default toggleButton;