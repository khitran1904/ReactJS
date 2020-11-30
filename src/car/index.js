import React, { Component } from 'react'

export default class Car extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "red"
        }
    }

    doiMau=(color)=>{
        this.setState({
            color // key và value bị trùng tên nên viết đk thế này  color:color
        })
    }
    
    renderHTML = () => {
        if (this.state.color == 'red') {
            return(
                <img className="img-fluid" src="./img/imgRedCar.jpg" alt="" />
            )
        }
        if (this.state.color == 'black') {
            return(
                <img className="img-fluid" src="./img/imgBlackCar.jpg" alt="" />
            )
        }
        if (this.state.color == 'sliver') {
            return(
                <img className="img-fluid" src="./img/imgSilverCar.jpg" alt="" />
            )
        }
    }
    render() {
        return (
            <div className="container">
                <h3>Car</h3>
                <div className="row">
                    <div className="col-6">
                        {this.renderHTML()}
                    </div>
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={()=>{this.doiMau("red")}}>màu đỏ</button>
                        <button className="btn btn-secondary mx-2" onClick={()=>{this.doiMau("sliver")}}> màu bạc</button>
                        <button className="btn btn-dark" onClick={()=>{this.doiMau("black")}}>màu đen </button>
                    </div>
                </div>
            </div>
        )
    }
}
