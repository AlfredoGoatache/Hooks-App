import { Action } from "../../interfaces/Action";
import { Todo } from "../../interfaces/Todo";

const todoReducer = ( state: Array<Todo>, action: Action ) => {

    switch ( action.type ) {
        case 'add':
            return [...state, action.payload];
        case 'delete':    
            return state.filter(todo => todo.id !== action.payload.id );
        case 'toggle':
            return state.map( todo => {
                if ( todo.id === action.payload.id ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo;
                }
            })

        default:
            return state;
    }

};

export{
    todoReducer
}