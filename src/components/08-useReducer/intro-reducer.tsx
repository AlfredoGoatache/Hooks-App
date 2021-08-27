import { Action } from "../../interfaces/Action";
import { Todo } from "../../interfaces/Todo";


const initialState: Array<Todo> = [
  {
    id: 1,
    desc: "Comprar pan",
    done: false,
  },
];

const todoReducer = ( state: Array<Todo> = initialState , action?: Action ): Array<Todo> => {

  if ( action && action.type === 'agregar' ) {
    return [ ...state, action.payload ];
  } 
  return state;
}; 
 
let todos: Array<Todo> = todoReducer();

const newTodo: Todo = { 
  id: 2,
  desc: 'Comprar queso', 
  done: false
};

const agregarTodoAction: Action = {
  type: 'agregar',
  payload: newTodo,
} 
todos = todoReducer ( todos, agregarTodoAction);
todos = todoReducer ( todos, agregarTodoAction);
todos = todoReducer ( todos, agregarTodoAction);
todos = todoReducer ( todos, agregarTodoAction);
todos = todoReducer ( todos, agregarTodoAction);
todos = todoReducer ( todos, agregarTodoAction);
todos = todoReducer ( todos, agregarTodoAction);
todos = todoReducer ( todos, agregarTodoAction);
todos = todoReducer ( todos, agregarTodoAction);
console.log( todos );

export{

} 