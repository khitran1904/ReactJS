import React, { Component } from 'react'
import {connect} from "react-redux";
import {seclectUserAction} from '../redux/action/User'

class UserItem extends Component {
    
    render() {
        const {user,deleteUser} =this.props;
        return (
            <tr >
                <td> {user.userName} </td>
                <td> {user.fullName} </td>
                <td> {user.birth} </td>
                <td> {user.email} </td>
                <td> {user.position} </td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.props.deleteUser(user.id)}  > Delete</button>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#formUser" 
                            onClick={() => this.props.selectUser(user)} >Upgrade</button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // hàm deleteUser trở thành props của UserItem
        deleteUser: (userId) => {
            const action ={
                type : "DELETE_USER",
                value:userId,
            }
            dispatch(action); // action là 1 object nên ko cần ngoặc
        },
        // selectUser:(user) => {
        //     const action ={
        //         type : "SELECT_USER",
        //         value:user,
        //     }
        //     dispatch(action);
        // }
        selectUser: (user) => dispatch(seclectUserAction(user)),
    };
}


export default connect(null,mapDispatchToProps)(UserItem);