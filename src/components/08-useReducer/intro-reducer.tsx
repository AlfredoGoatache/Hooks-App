interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

interface Action {
  type: string;
  payload: Todo;
}

const initialState: Array<Todo> = [
  {
    id: 1,
    todo: "Comprar pan",
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
  todo: 'Comprar queso', 
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