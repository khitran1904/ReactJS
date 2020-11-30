import React, { Component } from 'react'
import Example from './example';

export default class HandlingEvents extends Component {
    
    userName = "jack";
    handleClick = () => {
        console.log("123");
    }
    handleClickParams = (userName,lop) =>{
        console.log(userName,lop);
    }
    render() {
        return (
            <div>
                
                <h3>Handling events</h3>
                <button className="btn btn-success" onClick={this.handleClick}> Click</button>
                <button className="btn btn-danger" onClick={()=>{this.handleClickParams(this.userName,"fe53")}}> Click Params</button>
                <hr/>
                <Example/>
            </div>
        )
    }
}
