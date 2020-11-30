import React, { Component } from 'react'

import ProductItem from './ProductItem';



export default class ProductList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            producDetail: null
        }
    }

    selectProduct = (product) => {
        this.setState({
            producDetail: product,
        });
    };

    addToCart= (product) => {
        console.log(product)
    }

    render() {
        const { productList } = this.props;
        return (
            <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark" >
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>

                {/* danh sách sản phẩm */}
                <div className="row">
                    {
                        productList.map((product) => {
                            return (
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                                    <div className="container">
                                        {/* để truyền dữ liệu từ component con lên conponent cha, ở component cha ta sẽ truyền cho component
                                        con 1 props là 1 callback function , trong component con khi gọi tới props đó
                                        thì component cha sẽ chạy hàm callback */}
                                        {/* Khi ProductItem gọi detailProduct() thì productList chạy hàm selectProduct */}
                                        <ProductItem 
                                            product={product}
                                            onAddToCart={this.addToCart}
                                            onSelect={(product) => this.selectProduct(product)} 
                                            //onSelect={this.selectProduct}/>
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                {/* chi tiết sản phẩm  */}
                {this.state.producDetail && (
                    <div className="row" >
                    <div className="col-sm-6">
                    <img src={this.state.producDetail.image} alt="đá" width="300" height="300" />
                    </div>
                    <div className="col-sm-6">
                        <h3 > {this.state.producDetail.name}</h3>
                        <p>{this.state.producDetail.price} </p>
                    </div>
                </div>
                )}

            </section>

        )
    }
}
