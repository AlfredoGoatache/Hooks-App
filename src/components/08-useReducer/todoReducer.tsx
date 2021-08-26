interface Todos {
    id: number;
    desc: {};
    done: boolean;
}

interface Action {
    type: string;
    payload: Todos;
  }


const todoReducer = ( state:any, action:Action ) => {

    switch ( action.type ) {
        case 'add':
            return [...state, action.payload];
            
    
        default:
            return state;
    }




};

export{
    todoReducer
}