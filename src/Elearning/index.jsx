import React, { Component } from "react";
import { connect } from "react-redux";
import { getCourseList } from "../redux/action/Elearning";

class Elearning extends Component {

    componentDidMount(){
        const {getCourseList} =this.props;
        getCourseList();
    }
  render() {
    const{coursesList,loading,error}=this.props;
    if(loading){
        return(
            <div className="text-center text-lg font-weight-bold" > Loading ... </div>
        )
    }
    if(error){
        return(
            <div className="text-center text-lg " > {error} </div>
        )
    }
    return <div className="container" >
        <div className="row">
        {this.props.coursesList.map(course => {
                        return (
                            <div className="card col-sm-3 my-3" >
                                <img className="card-img-top" width="200px" height="300px" src={course.hinhAnh} alt="movie"/>
                                <div className="card-body" >
                                    <h4 className="card-title" >{course.tenKhoaHoc}</h4>
                                    <p className="card-text" >{course.moTa}</p>
                                </div>
                            </div>
                        )
                    })}
        </div>

    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    coursesList: state.elearningReducer.coursesList,
    loading: state.elearningReducer.loading,
    error: state.elearningReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
      getCourseList:(data)=>dispatch(getCourseList())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Elearning);
