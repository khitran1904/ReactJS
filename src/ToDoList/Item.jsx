import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const {todo} = this.props;
        return (
            <li style={{ textDecoration:todo.isComplete ? "line-through":"none" }} >
                <span> {todo.description} </span>
            </li>
        )
    }
}
