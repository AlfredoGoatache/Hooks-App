import { useReducer, useEffect } from 'react';
import { useForm } from "../../hooks/useForm";
import { Todo } from '../../interfaces/Todo';
import { todoReducer } from "./todoReducer"




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

    //Para eleminar una tarea del listado de tareas
    const handleDelete = (todoId:Todo) => {
        const action ={
            type:'delete',
            payload: todoId
        };

        dispatch(action);
    }
    //Para tachar las tareas y afinalizadas
    const handleToggle = ( todoId:Todo ) =>{
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }


    //Para agregar una tarea a la lista de tareas
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
                {
                        todos.map( (todo:Todo, i) => (
                            <li
                            key={todo.id}
                            >
                                <p 
                                    className='text-left'
                                    onClick={()=> handleToggle(todo)}
                                >
                                    {i + 1}.{todo.desc}
                                </p>
                                <button 
                                    className='btn btn-danger'
                                    onClick={()=> handleDelete(todo)}
                                >
                                    Borrar
                                </button>
                                <hr />
                            </li>
                        ))
                }

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