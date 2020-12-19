import {
    GET_COURSE_LIST_FAIL,
    GET_COURSE_LIST_REQUEST,
    GET_COURSE_LIST_SUCCESS,
  } from "../constants/Elearning";
const initialState = {
    coursesList:[],
    loading:false,
    error:""
}

const elearningReducer = (state=initialState,action) =>{
    switch (action.type){
        case GET_COURSE_LIST_REQUEST:
            return {...state,loading:true};
        case GET_COURSE_LIST_SUCCESS:
            return{...state,loading:false,coursesList:action.value};
        case GET_COURSE_LIST_FAIL:
            return{...state,error:action.value}
        default:
            return state;
    }

}

export default elearningReducer;