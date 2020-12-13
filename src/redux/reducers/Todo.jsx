
const initialState = {
    todoList:[
        {id:1,description:"Do Homework",isComplete:false},
        {id:1,description:"Play game",isComplete:false},
        {id:1,description:"Go To Sleep",isComplete:true}
    ],
}

const todoReducer = (state = initialState,action) => {
    switch (action.type){
        

        default:
            return state;
    }
}

export default todoReducer;