import react ,{ useCallback, useMemo, useState } from "react"

const Child = react.memo(({counter}) => {
    <p>Contador : {counter}</p>
    console.log("Renderizando child")
})

function ExpensiveCalculation({num}){
    const result = useMemo(()=> {
        console.log("Calculando")
        return num * 2;
    }, [num])

    return <p> Rsultado : {result}</p>

}

function CounterWhitReactMemo(){
    const[counter, setcounter ] = useState(0);

    const increment = useCallback(() => {
        setcounter(prev => prev +1)
    })

    return (
        <div>
            <button onClick={() => setcounter(prev => prev +1)}>
                increment
            </button>
            <Child counter={counter}></Child>
        </div>
    )
}

export default CounterWhitReactMemo;