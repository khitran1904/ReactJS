import React, { Component } from 'react'

export default class State extends Component {

    constructor(props){
        super(props);
        this.state={
            isLogin:false,
            userName:"jack",
            count:0
        }
    }

    dangNhap = () => {
        this.setState({
            isLogin:true
        },()=>{
            console.log(this.state.isLogin);
        })
        
    }

    handleIncrease = () =>{

        // Cách 1
        // let count = this.state.count;
        // this.setState({
        //     count: count+1
        // })

        // Cách 2  : nên dùng setState khi cần lấy giá trị cũ để tính toán
        this.setState((state) => {
            return{
                count:state.count+1
            }
        })

    }

    renderHTML() {
        return (
            this.state.isLogin ? <div>Hello {this.state.userName}</div> : <button className="btn btn-success" onClick={this.dangNhap}> Login </button>
        )
    }
    render() {
        return (
            <div>
                <h3>State</h3>
                {this.renderHTML()}
                <p>{this.state.count}</p>
                {/* <button onClick={this.handleIncrease} > Tăng  </button> */}
                <button onClick={()=>this.handleIncrease()} > Tăng  </button>
            </div>
        )
    }
}


// hàm Setstate là hàm bất đồng bộ thì câu lệnh console chạy trước