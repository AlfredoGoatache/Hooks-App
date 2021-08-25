import { useCallback } from 'react';
import { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


const CallbackHook = () => {
    
    const [counter, setCounter] = useState(10)

    const increment = useCallback( (num)=>{
        setCounter( c => c + num);
    }, [setCounter])

    return( 
        <div>
            <h1>useCallback Hook</h1>
            <hr />
            <h3>{counter}</h3>
            <ShowIncrement increment={ increment } />
        </div>
    );
}

export{
    CallbackHook
}