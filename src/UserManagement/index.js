import React, { Component } from 'react'
import FormUser from './FormUser'
import Search from './Search'
import UserList from './UserList'
import data from './data.json'

export default class User extends Component {

    constructor(props){
        super(props);

        this.state ={
            userList:data,
            search:""
        }
    }

    handleDelete = (userId) =>{
        // Cách 1
        // const userList = [...this.state.userList];
        // const index = userList.findIndex(user => user.id === userId);
        // userList.splice(index,1);

        const userList = this.state.userList.filter((user) => {
            return user.id !== userId;
        })

        this.setState({
            userList,
        });
    }
    handleSearch = (value) =>{
        console.log(value);
        // Sử dụng cách này mất data
        // const userList = this.state.userList.filter(user => {
        //     return user.userName.indexOf(value.trim()) != -1 
        // })

        // this.setState({
        //     userList,
        // })
        this.setState({
            search:value,
        });
    };

    render() {
        const userList = this.state.userList.filter(user => {
            return user.userName.indexOf(this.state.search) !== -1;
        });
        return (
            <div className="container" >
                <h1 className="text-center" >UserManagement</h1>
                <div className="d-flex justify-content-between" >
                    <Search  onSearch={this.handleSearch} />
                    <button className="btn btn-success" data-toggle="modal" data-target="#formUser" >Thêm User</button>
                </div>

                <UserList 
                         userList={userList} 
                         onDelete={this.handleDelete}
                />
                <FormUser />
            </div>
        )
    }
}
