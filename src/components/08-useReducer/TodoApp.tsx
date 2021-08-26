import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

interface Todos {
    id: number;
    desc: string;
    done: boolean;
}

const initialState:Array<Todos>  = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

const TodoApp =()=> {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    console.log(todos);

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: 'Nueva tarea',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );

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