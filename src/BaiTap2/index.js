import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Carousel from './Carousel';
import ProductList from './ProductList';
import Cart from './Cart';



export default class BaiTap2 extends Component {

    constructor(props){
        super(props);

        this.state = {
            productList:[
                {id:1, name:"iphone", image: "./img/sp_iphoneX.png", price: "1000" },
                {id:2, name:"oppo", image: "./img/sp_blackberry.png", price: "2000" },
                {id:3, name:"nokia", image: "./img/sp_vivo850.png", price: "3000" },
                {id:4, name:"nokia", image: "./img/sp_vivo850.png", price: "4000" }
            ]
        }
    }

    addToCart = (product) =>{

    }

    render() {
        return (
            
            <div >
                <Header/>
                <Carousel/>
                <button className=" btn btn-success" data-toggle="modal" data-target="#cart" >Giỏ Hàng</button>
                <ProductList productList={this.state.productList} onAddToCart={this.addToCart} />
                <Footer/>
                <Cart/>

            </div>
        )
    }
}
