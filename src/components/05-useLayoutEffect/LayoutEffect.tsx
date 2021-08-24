import { useState } from 'react';
import { useLayoutEffect, useRef } from 'react';
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const Layout = ()=> {

    const {counter, increment, decrement} = useCounter(1)
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const post = data && data[0] ? data[0] : {author: 'NO EXISTE', quote: 'NO EXISTE'};
    const {quote}: any = post;

    const nose:any = useRef()
    const [boxSize, setBoxSize] = useState({});
        useLayoutEffect(()=>{setBoxSize( nose.current.getBoundingClientRect() )},[quote])

    return(
        <div>
            <h1>Layout Effect</h1>
            <hr/>

            <blockquote className='blockquote text'>
                <p 
                className='mb-2'
                ref={nose}
                >{quote}</p>
            </blockquote>

            <button 
            className='btn btn-primary margin-left: 10px'
            onClick={decrement}
            >
                Atras 
            </button>

            <button 
            className='btn btn-primary margin: 10px'
            onClick={increment}
            >
                Siguiente 
            </button>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>


        </div>
    );
};

export{
    Layout
}