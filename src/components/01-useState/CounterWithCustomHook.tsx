import  React  from "react";
import { useCounter } from "../../hooks/useCounter";

const CounterWithCustomHook = ()=>{

    const {counter, increment, decrement, reset} = useCounter()

    return(
        <>
        <h1>Counter With Hook: { counter }</h1>
        <hr/>

        <button onClick={ ()=> increment() } className="btn btn-primary"> + </button>
        <button onClick={ reset } className="btn btn-primary"> Reset </button>
        <button onClick={ ()=> decrement() } className="btn btn-primary"> - </button>
        </>
    );
}
export{
    CounterWithCustomHook
}