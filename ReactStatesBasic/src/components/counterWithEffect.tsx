import { useEffect, useState } from "react";


interface CounterWithEffectProps {

}


const CounterWithEffect = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log("El contador esta en : ", count);
    },[count]);


    return(
        <div>
            <p>El contador esta en : {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )

}


export default CounterWithEffect;