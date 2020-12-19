import axios from 'axios';
import {GET_MOVIE_LIST_REQUEST,GET_MOVIE_LIST_SUCCESS,GET_MOVIE_LIST_FAIL } from '../constants/Movie'
// import { connect } from "react-redux";

export const getMovieList = () =>{

    // redux chỉ cho phép return về 1 object , object bắt buộc phải có 1 key là type
    // khi sử dụng redux thunk  trong action ta có thể return về 1 function
    // trong function sẽ có 2 tham số dispatch và getState
    // dispatch : dùng để gọi 1 action khác vào trong reducer
    // getState : dùng để lấy state từ store
    
    return (dispatch,getState)=>{ //  call back function
        // KHI gọi API thì chia thành 3 giai đoạn
        //giai đoạn 1: Gửi request  GET_MOVIE_LIST_REQUEST lên server để set biến loading trong reducer thành true
        // giai đoạn 2.1: gửi request thành công, GET_MOVIE_LIST_SUCCESS để sêt data trong reducer và set loading thành false
        // giai đoạn 2.2 : gửi request thất bại, GET_MOVIE_LIST_Fail để set loading thành false và có thể set 1 biến ERROR

        // DISPATCH action GET_MOVIE_LIST_REQUEST
        dispatch(
            {
                type: GET_MOVIE_LIST_REQUEST,
            }
        )
        // Gọi API => có kết quả từ API => dispatch(action)
        axios.get("https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
        .then((result)=>{
            // gọi API thành công
        console.log(result.data);
        const action= {
            type:GET_MOVIE_LIST_SUCCESS,
            value:result.data
        };
        dispatch(action);
    }). catch(error => {
        // gọi API thất bại
        dispatch({
            type:GET_MOVIE_LIST_FAIL,
            value: error.data.message, 
        })
    })
    }
}