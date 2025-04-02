import useCounter from "../../hooks/useCounter";

const counterWhitCustomHook = () => {
    const{        increment,
        decrement,
        reset,
        count} = useCounter(10);

        return(
            <>
            <p>Contador : {count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            </>

        )
}

export default counterWhitCustomHook;