import { useState } from "react"
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks"

const RealExampleRef = () => {

    const [show, setShow] = useState(false);




return(
    <div>
        <h1>Uso del Ref</h1>
        <hr />

        { show && <MultipleCustomHooks/>}

        <button
        className='btn btn-primary mt-2'
        onClick={()=>{
            setShow( !show );
        }}
        >
            Show/Hide
        </button>

    </div>
)
}
export{
    RealExampleRef
}