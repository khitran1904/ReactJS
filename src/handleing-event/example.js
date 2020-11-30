import React, { Component } from 'react'

export default class Example extends Component {


    isLogin=false;  // false là chưa login
    userName = "jack";

    // renderHTML = () => {
    //     if(this.isLogin)
    //     {
    //         return (
    //             <div>Hello {this.userName}</div>
    //         )
    //     }else{
    //         return(
    //             <button className="btn btn-success" > Login </button>
    //         )
    //     }
    
    // }

    dangNhap=()=>{
        console.log(this.isLogin);
        this.isLogin = true;
        console.log(this.isLogin);
    }
    renderHTML = () => {
        return (
            this.isLogin ? <div>Hello {this.userName}</div> : <button className="btn btn-success" onClick={this.dangNhap}> Login </button>
        )
    }

    render() {
        return (
            <div>
                <h3>Example Handling Events</h3>
                <br />
                {this.renderHTML()}
            </div>
        )
    }
}
