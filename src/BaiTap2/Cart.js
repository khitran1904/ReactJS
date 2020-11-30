import React, { Component } from 'react'

export default class Cart extends Component {



    render() {
        const { cartList } = this.props;
        return (
            <div>
                {/* Button trigger modal */}

                {/* Modal */}
                <div className="modal fade" id="cart" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ Hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <th>Mã Sản Phẩm</th>
                                        <th>Tên Sản Phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Giá</th>
                                        <th>Số Lượng</th>
                                        <th>Giá</th>
                                    </thead>

                                    <tbody>
                                        {
                                            cartList.map((item1) => {
                                                return (
                                                    <tr>
                                                        <td> {item1.id}</td>
                                                        <td>{item1.name} </td>
                                                        <td><img src={item1.image} alt="product" width="50" height="50" /> </td>
                                                        <td>{item1.price} </td>
                                                        <td>{item1.quality} </td>
                                                        <td>{(item1.price * item1.quality).toLocaleString()} </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
