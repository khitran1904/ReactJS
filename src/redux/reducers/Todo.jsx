
const initialState = {
    todoList:[
        {id:1,description:"Do Homework",isComplete:false},
        {id:2,description:"Play game",isComplete:false},
        {id:3,description:"Go To Sleep",isComplete:true}
    ],
    filter:"ALL",
}

const todoReducer = (state = initialState,action) => {
    switch (action.type){
        case "CHANGE_STATUS":
            const todoList = state.todoList.map(todo =>{
                if(todo.id === action.value){
                    return {...todo,isComplete:!todo.isComplete}
                }
                return todo;
            })
            return {...state,todoList};

        case "FILTER":
            return{...state,filter:action.value}
        default:
            return state;
    }
}

export default todoReducer;