import { useRef } from "react";

const FocusScreen =()=>{

    const inputRef: any = useRef();

    const handleClick = ()=>{
        inputRef.current?.select();
    }

    return(
        <div>
            <h1>Focus Screen</h1>
            <hr />
             <input
             ref={inputRef} 
             className='from-control'
             placeholder='Que fué???' 
             />
             <br />
            <button 
            className='btn btn-outline-primary mt-2'
            onClick={ handleClick }
            >
                Mandeee!!
            </button>
        </div>
    )
}
export{
    FocusScreen
}