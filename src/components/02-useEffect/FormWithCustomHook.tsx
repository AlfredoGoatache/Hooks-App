import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';


const FormWithCustomHook = ()=>{

    const [formValues, handleInputChange]: Array<any> = useForm({
        name: "",
        email: "",
        password: ""
    });
    
    const {name, email, password}:any = formValues;

    useEffect(()=>{
        console.log('Modificación del email')
    }, [ email ]);

    const handleSumit = (e:any)=>{
        e.preventDefault();
        console.log(formValues);
    }

 
    return(
        <form onSubmit={ handleSumit }>
            <h1>Form With Custom Hook</h1>
            <hr/>

            <div className='from-group'>
                <input
                    type='text'
                    name='name'
                    className='from-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
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

            <div className='from-group'>
                <input
                    type='password'
                    name='password'
                    className='from-control'
                    placeholder='*****'
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>
            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>
        </form>
    );
};
export{
    FormWithCustomHook
};