import {combineReducers} from 'redux'
import userReducer from './User';

//rootReducer : reducer tổng quản lí các reducer con
const rootReducer = combineReducers({
     // Nơi chứa các reducer con
    // Tên reducer : hàm reducer
    userReducer: userReducer,
})

export default rootReducer;