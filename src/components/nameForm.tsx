import { useState } from 'react';

interface nameForm{
    nombre:String;
    setName:String;
}


const nameForm = () => {

    const [nombre, setName] = useState("");

    return(
        <div>
            <input 
                type="text"
                placeholder = "Ingresa tu nombre"
                value = {nombre}
                onChange = {(event) =>setName(event.target.value) } 
            />
            <p> hola , {nombre||"Visitante"} </p>
        </div>
    )

}


export default nameForm;