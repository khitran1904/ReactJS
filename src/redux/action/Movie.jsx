import axios from 'axios';
// import { connect } from "react-redux";

export const getMovieList = () =>{

    // redux chỉ cho phép return về 1 object , object bắt buộc phải có 1 key là type
    // khi sử dụng redux thunk  trong action ta có thể return về 1 function
    // trong function sẽ có 2 tham số dispatch và getState
    // dispatch : dùng để gọi 1 action khác vào trong reducer
    // getState : dùng để lấy state từ store
    
    return (dispatch,getState)=>{ //  call back function
        // Gọi API => có kết quả từ API => dispatch(action)
        axios.get("https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01").then((result)=>{
        console.log(result.data);
        const action= {
            type:"GET_MOVIE_LIST",
            value:result.data
        };
        dispatch(action);
    })
    }
}