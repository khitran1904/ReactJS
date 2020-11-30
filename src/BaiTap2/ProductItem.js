import React, { Component } from 'react'



export default class ProductItem extends Component {

    detailProduct = (product) =>{
        // cần truyền sp vừa click vào lên component cha ProducList để hiển thị ra 
        // onSelect là 1 function
        // để truyền dữ liệu lên component cha thì ta sẽ gọi props onSelect và truyền param product vào
        const {onSelect} = this.props;
        onSelect(product);
    }

    
    render() {
        const {product} = this.props;
        return (
            <div className="card bg-light" style={{ width: 300 }}>
                <img className="card-img-top" src={product.image} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                <div className="card-body text-center">
                    <h4 className="card-title text-center">{product.name}</h4>
                    <p className="card-text"> {product.price} </p>
                    <button  className="btn btn-primary" onClick={() => this.detailProduct(product)} >Detail</button>
                    <button href="#" className="btn btn-danger" onClick={()=>this.props.onAddToCart(product)} >Cart</button>
                </div>
            </div>

        )
    }
}
