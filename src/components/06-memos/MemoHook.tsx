import { useCounter } from "../../hooks/useCounter";
import { useState } from 'react';
import { useMemo } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";

const MemoHook = ()=>{

    const {counter, increment}:any = useCounter(1500);
    const[ show, setShow ]=useState(true)
    const memoProcesoPesado = useMemo( () => procesoPesado(counter), [counter])

    return(
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{ memoProcesoPesado }</p>

            <button 
            className='btn btn-primary'
            onClick={increment}
            >+</button>

            <button
            className='btn btn-outline-primary ml-5'
            onClick={()=>{
                setShow( !show )
            }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    );
};
export{
    MemoHook
}