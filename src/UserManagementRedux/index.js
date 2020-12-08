import React, { Component } from 'react'
import FormUser from './FormUser';
import Search from "./Search";
import UserList from './UserList';

// handleSearch =(evt)=>{
//     // phải gọi 1 action trên store để thay đôi userList khi search
// }

export default class UserManagementRedux extends Component {
    render() {
        return (
            <div className="container" >
                <h1 className="text-center" >UserManagement</h1>
                <div className="d-flex justify-content-between" >
                    <Search/>
                    <button className="btn btn-success" data-toggle="modal" data-target="#formUser" 
                            onClick={()=>this.setState({selectedUser:{}})}>Thêm User</button>
                </div>

                <UserList/>
                {/* Thêm vào 1 cái key, khi key thay đổi thì react  sẽ khởi tạo lại component -> constructor đk gọi lại */}
                {/* <FormUser/> */}
            </div>
        )
    }
}
