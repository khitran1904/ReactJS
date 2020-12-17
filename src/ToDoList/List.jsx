import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { selectorTodoList } from "../redux/selector/todo";

class List extends Component {
    render() {

        return (
            <ul>
                {this.props.todoList.map((item) => {
                    return <Item key={item.id} todo={item} />
                })}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    // let todoList = state.todoReducer.todoList;
    // if (state.todoReducer.filter === "complete") {
    //     todoList = state.todoReducer.todoList.filter((todo) => {
    //         return todo.isComplete === true;
    //     });
    // }
    // if (state.todoReducer.filter === "uncomplete") {
    //     todoList = state.todoReducer.todoList.filter((todo) => {
    //         return todo.isComplete === false;
    //     });
    // }
    // selectorTodoList(state)
    // return {
    //     todoList: todoList,
    //     // filter:state.todoReducer.filter
    // }

    
    return {
        todoList: selectorTodoList(state),
    }
}

export default connect( mapStateToProps,null)(List);