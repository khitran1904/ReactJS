import React, { Component } from 'react'
// Import thư viện axios
import axios from "axios";
import { connect } from "react-redux";
import { getMovieList } from "../redux/action/Movie";

class Movie extends Component {

    componentDidMount(){
    this.props.getMovieList();
    }

    render() {
        return (
            <div className="container" >
                <div className="row" >
                    {this.props.movieList.map(movie => {
                        return (
                            <div className="card col-sm-3 my-3" >
                                <img className="card-img-top" width="200px" height="300px" src={movie.hinhAnh} alt="movie"/>
                                <div className="card-body" >
                                    <h4 className="card-title" >{movie.tenPhim}</h4>
                                    <p className="card-text" >{movie.moTa}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        getMovieList: (data)=>dispatch(getMovieList())
        };
}

const mapStateToProps= state =>{
    return{
        movieList:state.movieReducer.movieList,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);