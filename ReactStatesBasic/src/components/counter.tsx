import { useState } from "react";

interface CountertProps{

}


const Counter = () =>{
    const [count,setCount] = useState(0);

    return(
        <div>
            <p>El contador esta en : {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <br></br>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
    )
}


export default Counter;