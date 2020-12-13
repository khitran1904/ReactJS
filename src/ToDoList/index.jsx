import React, { Component } from 'react'
import List from './List'
import Search from './Search'

export default class ToDoList extends Component {
    render() {
        return (
            <div className="container text-success" >
                <div className="row" >
                    <div className=" col-sm-6 mx-auto" >
                        <h1>Todo List</h1>
                        <Search/>
                        <List/>
                    </div>
                </div>
            </div>
        )
    }
}
