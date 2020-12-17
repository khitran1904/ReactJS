import React, { Component } from 'react'
import {connect} from 'react-redux';

class Search extends Component {
    render() {
        return (
            <div className="d=flex" >
                <button className="btn btn-primary mr-4 px-4" onClick={()=>this.props.fillterTodo("ALL") } >ALL</button>
                <button className="btn btn-success mr-4" onClick={()=>this.props.fillterTodo("complete")} >Completed</button>
                <button className="btn btn-danger mr-4" onClick={()=>this.props.fillterTodo("uncomplete")} >Uncompleted</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fillterTodo: (status)=>{
            const action ={
                type:"FILTER",
                value:status
            }
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(Search);