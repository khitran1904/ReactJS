import axios from "axios";
import {
  GET_COURSE_LIST_FAIL,
  GET_COURSE_LIST_REQUEST,
  GET_COURSE_LIST_SUCCESS,
} from "../constants/Elearning";

export const getCourseList = () => {
  return (dispatch, getState) => {
    dispatch({
      type: GET_COURSE_LIST_REQUEST,
    });
    axios
      .get(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
      )
      .then((result) => {
        const action = {
          type: GET_COURSE_LIST_SUCCESS,
          value: result.data,
        };
        dispatch(action)
      })
      .catch((error) => {
        // gọi API thất bại
        dispatch({
          type: GET_COURSE_LIST_FAIL,
          value: error.data.message,
        });
      });
  };
};
