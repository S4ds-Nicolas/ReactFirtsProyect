import { useState } from "react";

const Counter = () => {
    const[count , setcount ] = useState<number>(0);

    const increment = () => setcount(prev => prev + 1)

    return (
        <button onClick={increment}> Increment {count}</button>
    )
}

export default Counter;