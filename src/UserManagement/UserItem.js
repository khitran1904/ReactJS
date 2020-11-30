import React, { Component } from 'react'

export default class UserItem extends Component {
    


    render() {
        const {user,onDelete} =this.props;
        return (
            <tr >
                <td> {user.userName} </td>
                <td> {user.fullName} </td>
                <td> {user.birth} </td>
                <td> {user.email} </td>
                <td> {user.position} </td>
                <td>
                    <button className="btn btn-danger" onClick={() => onDelete(user.id)} > Delete</button>
                    <button className="btn btn-primary" >Upgrade</button>
                </td>
            </tr>
        )
    }
}
