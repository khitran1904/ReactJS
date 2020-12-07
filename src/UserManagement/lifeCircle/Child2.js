import React, { Component, PureComponent } from 'react'



// PureComponent : Reactjs sẽ tự xử lí  shouldComponentUpdate , nó sẽ tự động so sánh Props , state cũ và mới để
// quyết định có render hay ko

// Chỉ kiểm tra shallow compare chỉ kiếm tra đk number,string,bollean,null,undefined
// ->đối props là array , object ,dunction thì tự mk phải kiểm tra

export default class Child2 extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    // Tối ưu component
    // Chạy trước hàm render khi props, state thay đổi, hoặc component cha render lại
    // shouldComponentUpdate(nextProps,nextState){
    //     // return về true cho phép render
    //     // return về false thì ko cho render

    //     // chỉ render khi component thay đổi
    //     if(this.props.count !== nextProps.count){
    //         return true;
    //     }
    //     return false;
    // }

    render() {
        console.log("render child2")
        return (
            <div>
                Child 2 count:{this.props.count}
            </div>
        )
    }
}
