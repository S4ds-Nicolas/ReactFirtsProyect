import { useReducer } from "react";

const reducer = (state,action) => {

    switch(action.type){
        case "increment":
            return {count : state.count + 1};
        case "decrement":
            return {count : state.count - 1 };
        default:
        return state;
    }
}

const Counter = () => {

    const [state,dispatch] = useReducer(reducer,{count : 0});

    return(
        <div>
            <p> contador: {state.count}</p>
            <button onClick={() => dispatch({type: "increment"})}>increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
        </div>
    )

}

export default Counter;