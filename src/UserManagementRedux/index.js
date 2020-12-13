import React, { Component } from 'react'
import FormUser from './FormUser';
import Search from "./Search";
import UserList from './UserList';
import {connect} from 'react-redux';
import {seclectUserAction} from '../redux/action/User'

// handleSearch =(evt)=>{
//     // phải gọi 1 action trên store để thay đôi userList khi search
// }

 class UserManagementRedux extends Component {
    render() {
        return (
            <div className="container" >
                <h1 className="text-center" >UserManagement</h1>
                <div className="d-flex justify-content-between" >
                    <Search/>
                    <button className="btn btn-success" data-toggle="modal" data-target="#formUser" 
                            onClick={()=>this.props.selectedUser({})}>Thêm User</button>
                </div>

                <UserList/>
                {/* Thêm vào 1 cái key, khi key thay đổi thì react  sẽ khởi tạo lại component -> constructor đk gọi lại */}
                {/* <FormUser/> */}
                <FormUser/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        selectedUser: (user) =>dispatch(seclectUserAction(user))
        }
    }

export default connect(null,mapDispatchToProps)(UserManagementRedux);