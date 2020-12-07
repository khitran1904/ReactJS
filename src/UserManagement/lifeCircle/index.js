import React, { Component } from 'react'
import Child from './Child';
import Child2 from './Child2';

export default class LifeCircle extends Component {
    constructor (props){
        super(props);
        console.log("Constructor")
        this.state={
            count:0,
            count1:0,
        }
    }

    // GỌi API 
    // tương tác vs DOM
    // setTimeOut, setInterval
    // Chỉ chạy duy nhất 1 lần sau khi render xong
    componentDidMount(){
        console.log("componentDidMount");
    }

    // từ lần render thứ 2, sẽ chạy sau khi render
    // Gọi API
    // Set State
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    render() {
        console.log("Render");
        return (
            <div>
                {this.state.count < 5 ? <Child count={this.state.count}/> : null}

                <Child2 count={this.state.count} />
                <button className="btn btn-success" onClick={()=>this.setState((state)=> {
                    return {count:state.count+1}
                })} >Count</button>
                <button className="btn btn-primary" onClick={()=>this.setState((state)=> {
                    return {count1:state.count1+1}
                })} >Count1</button>
            </div>
        )
    }
}
