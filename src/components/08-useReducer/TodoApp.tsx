import { useReducer, useEffect } from 'react';
import { useForm } from "../../hooks/useForm";
import { todoReducer } from "./todoReducer"

interface Todos {
    id: number;
    desc: string;
    done: boolean;
}


const init = () => {

    let todos: any = localStorage.getItem('todos');

    return JSON.parse( todos ) || [];
}

const TodoApp =()=> {

    const [ todos, dispatch ] = useReducer(todoReducer, [] , init);

    const [ {description}, handleInputChange, reset]: any = useForm({
        description:''
    });

    useEffect( ()=>{
        localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [todos]);


    const handleSubmit = (e:any) => {
        e.preventDefault();

        if( description.trim().length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );
        reset();

    }


    return(
        <div>
            <h1 className='text-center'>Todo App({ todos.length })</h1>
            <hr />

            <div className='row'>

                <div className='col-7'>

                    <ul className='list-gruop list-group-flush'>
                    {
                        todos.map( (todo:Todos, i:any) => (
                            <li
                            key={todo.id}
                            >
                                <p className='text-left'>{i + 1}.{todo.desc}</p>
                                <button className='btn btn-danger'>Borrar</button>
                                <hr />
                            </li>
                        ))
                    }
                    </ul>

                </div>

                <div className='col-5'>

                    <h4>Agregar TODOS</h4>
                    <hr />
                    <form onSubmit= { handleSubmit } >
                        <input 
                            type='text' 
                            name='description'
                            className='form-control'
                            placeholder='Agregar tareas ...'
                            autoComplete='off'
                            value={description} 
                            onChange={handleInputChange}
                        />
                        <button
                            type='submit'
                            className='btn btn-outline-primary btn-block mt-1'
                        >
                            Agregar
                        </button>
                    </form>

                </div>

            </div>

        </div>
    )
}

export{
    TodoApp
}