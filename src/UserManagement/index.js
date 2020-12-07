import React, { Component } from 'react'
import FormUser from './FormUser'
import Search from './Search'
import UserList from './UserList'
import data from './data.json'

export default class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userList: data,
            search: "",
            selectedUser:{}
        }
    }

    handleDelete = (userId) => {
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
    handleSearch = (value) => {
        console.log(value);
        // Sử dụng cách này mất data
        // const userList = this.state.userList.filter(user => {
        //     return user.userName.indexOf(value.trim()) != -1 
        // })

        // this.setState({
        //     userList,
        // })
        this.setState({
            search: value,
        });
    };

    handleSave = (user) => {
        console.log("thông tin user : ", user);
        const id = Math.floor(Math.random() * 100);
        const userList1 = [...this.state.userList, { ...user, id }];
        this.setState({
            userList: userList1,
        })

    }
    handleSelect = (user) => {
        this.setState({
            selectedUser:user,
        });
    };
    handelUpdateUser =(user)=>{
        // Cách 1 : 
        // const userList = [...this.state.userList];
        // const index = userList.findIndex((item)=>item.id === user.id);
        // if(index !== -1){
        //     userList[index]=user;
        //     this.setState({
        //         userList,
        //     })
        // }

        //Cách 2:
        const userList = this.state.userList.map((item)=>{
            if(item.id === user.id){
                return user;
            }
            return item;
        });
        this.setState({
            userList
        })
    }


    render() {
        const userList = this.state.userList.filter(user => {
            return user.userName.indexOf(this.state.search) !== -1;
        });
        return (
            <div className="container" >
                <h1 className="text-center" >UserManagement</h1>
                <div className="d-flex justify-content-between" >
                    <Search onSearch={this.handleSearch} />
                    <button className="btn btn-success" data-toggle="modal" data-target="#formUser" 
                            onClick={()=>this.setState({selectedUser:{}})}>Thêm User</button>
                </div>

                <UserList
                    userList={userList}
                    onDelete={this.handleDelete}
                    onSelect={this.handleSelect}
                />
                {/* Thêm vào 1 cái key, khi key thay đổi thì react  sẽ khởi tạo lại component -> constructor đk gọi lại */}
                <FormUser key={this.state.selectedUser.id} userAdd={this.handleSave}
                          selectedUser={this.state.selectedUser}
                          onUpdateUser={this.handelUpdateUser} />
            </div>
        )
    }
}
