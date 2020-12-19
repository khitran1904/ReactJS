import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        // KHi component đk gắn vào trong route sẽ tự động có 3 props : history ,location,match
        // History : điều hướng bên trong component
        // History.push("path") : chuyển trang và lưu lại lịch sử
        // history.replace("path") : chuyển trang và thay thế lịch sử
        console.log(this.props);
        const {history}=this.props;
        return (
            <div>
                <button onClick={()=>history.push("/Movie")} >Go to Movie</button>
                <button onClick={()=>history.replace("/TodoList")} >Go to TodoList</button>
                <button onClick={()=>history.goBack()} >Go Back</button>
                <button onClick={()=>history.goForward()} >Go Next</button>
                <button onClick={()=>history.push("/News",123)} >Go to News kèm state</button>
            </div>
        )
    }
}
