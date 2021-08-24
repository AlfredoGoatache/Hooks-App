import React from "react";
import { useState } from "react";

const CounterApp = () => {

    const[state, setState] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0,
        counter4: 0
    });

    const {counter1, counter2} = state;

    return (
        <>
            <h1>Counter1 { counter1 } </h1>
            <h1>Counter2 { counter2 } </h1>
            <hr/>
            <button 
            className="btn btn-primary"
            onClick={ ()=>{
                setState({  ...state,
                            counter1: counter1 + 1});
            }}
            >
                 + 
            </button>
        </>
    );
}

export {
    CounterApp
}