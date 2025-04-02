import { useState } from "react";

function useCounter(initialVaue = 0){
    const [count, setCount] = useState(initialVaue);

    const increment = () => setCount(prev => prev +1)
    const decrement = () => setCount(prev => prev -1)
    const reset = () => setCount(initialVaue)

    return {
        increment,
        decrement,
        reset,
        count
    }

}


export default useCounter;