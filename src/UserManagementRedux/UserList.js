import React, { Component } from 'react'
import UserItem from './UserItem';
import {connect} from 'react-redux';

 class UserList extends Component {
    
    render() {
        const {userList,search} = this.props;
        const userListFilter = userList.filter(user =>{
            return user.userName.toLowerCase().indexOf(search.toLowerCase().trim()) !== -1;
        });
        console.log(this.props);
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
                    {userListFilter.map(user=>{
                        return(
                            <UserItem key={user.id} user={user} />
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

// kết nối tới userReducer để lấy state userList về sử dụng

// viết hàm mapStateToProps để lấy state về từ userReducer
const mapStateToProps = (state) =>  {
    return{
        // state :  store tổng
        // Lưu ý phải chấm đúng tên khai báo trong rootReducer
        // chuyển state từ redux store thành props trong component
        userList : state.userReducer.userList,
        search : state.userReducer.search,
    };
};



// bỏ export default ở trên cùng lúc tạo đi
export default connect(mapStateToProps)(UserList);