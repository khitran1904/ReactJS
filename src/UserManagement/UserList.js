import React, { Component } from 'react'
import UserItem from './UserItem';

export default class UserList extends Component {

    
    handelDelete = (userID) => {
        const {onDelete} = this.props;
        onDelete(userID);
    }
    
    render() {
        const {userList} = this.props;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Full Name</th>
                        <th>Birth</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user) => {
                        return (
                            <UserItem key={user.id} user={user} onDelete={this.handelDelete} />
                        );
                    })}
                </tbody>
            </table>
        )
    }
}
