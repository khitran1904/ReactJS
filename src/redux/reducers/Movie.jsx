import {GET_MOVIE_LIST_REQUEST,GET_MOVIE_LIST_SUCCESS,GET_MOVIE_LIST_FAIL } from '../constants/Movie'
const initialState ={
    movieList:[],
    loading:false,
    error:""
}

const movieReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_MOVIE_LIST_REQUEST:
            return {...state, loading:true}
        case GET_MOVIE_LIST_SUCCESS:
            return {...state, loading : false, movieList : action.value}
        case GET_MOVIE_LIST_FAIL:
            return {...state, loading:false,error:action.value}
        default: 
            return state;
    }
};


export default movieReducer;