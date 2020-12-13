import {combineReducers} from 'redux'
import userReducer from './User';
import todoReducer from './Todo';


//rootReducer : reducer tổng quản lí các reducer con
const rootReducer = combineReducers({
     // Nơi chứa các reducer con
    // Tên reducer : hàm reducer
    userReducer: userReducer,
    todoReducer:todoReducer,
})

export default rootReducer;