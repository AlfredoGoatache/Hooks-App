import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";
import { useState } from 'react';


const Memorize = ()=>{

    const {counter, setCounter, increment}:any = useCounter(0);

    const random = new Promise((resolve, reject) => {
        resolve(Math.random() * 10);
    });

    random.then((data: any) => {
        console.log("Data random", data);
        setCounter(data);
    });
    
    const [show, setShow]=useState(true);
    
    return(
        <div>
            <h1>Memorize</h1>
            <hr />
            <h2>Counter: <Small value={counter}/></h2>

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
    Memorize
}