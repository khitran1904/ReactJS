import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';



 class List extends Component {
    render() {
        return (
            <ul>
                {this.props.todoList.map((item)=>{
                    return <Item key={item.id} todo={item}/>
                })}
            </ul>
        )
    }
}

const mapStateToProps= (state) => {
    return{
        todoList:state.todoReducer.todoList
    }
}

export default connect(mapStateToProps)(List);