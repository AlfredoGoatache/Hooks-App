import React from 'react';

const ShowIncrement = React.memo(( {increment}:any ) => {

    console.log('Activación no autorizada!');

    return (
        <button
        className='btn btn-primary'
        onClick={ () => {increment(5)}}
        >
            Incrementar
        </button>
    )
}
)
export {
ShowIncrement
}