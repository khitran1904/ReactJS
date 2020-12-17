import React, { Component } from 'react'
import {connect} from 'react-redux';

class Item extends Component {
    render() {
        const {todo} = this.props;
        return (
            <li style={{ textDecoration:todo.isComplete ? "line-through":"none" }} 
            className={todo.isComplete?"active":""} onClick={()=>this.props.changeStatus(todo.id)} >
                <span> {todo.description} </span>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeStatus:(todoID)=>{
            const action={
                type:"CHANGE_STATUS",
                value:todoID,
            };
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(Item);