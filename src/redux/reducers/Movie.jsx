const initialState ={
    movieList:[],
}

const movieReducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_MOVIE_LIST":
            return {...state,movieList:action.value}
        default: 
            return state;
    }
};


export default movieReducer;