
import { useEffect, useState } from 'react';
import { Message } from './Message';
const SimpleForm = ()=>{

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    });
    
    const {name, email } = formState

    useEffect( ()=> {
        // console.log('Hey!');
    }, [] );

    useEffect( ()=> {
        // console.log('Hey fromState cambio');
    }, [formState] );

    useEffect( ()=> {
        // console.log('Hey', email);
    }, [email] );
    

    const handleInputChange = ({target}:any) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
       
    } 
 
    return(
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className='from-group'>
                <input
                    type='text'
                    name='name'
                    className='from-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={ handleInputChange }
                />
            </div>
            <div className='from-group'>
                <input
                    type='text'
                    name='email'
                    className='from-control'
                    placeholder='Tu correo'
                    autoComplete='off'
                    value={email}
                    onChange={ handleInputChange }
                />
            </div>
            
            { (name === 'Alfredo' ) && <Message/> }

        </> 
    );
};
export{
    SimpleForm
};