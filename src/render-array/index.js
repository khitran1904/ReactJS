import React, { Component } from 'react'

export default class RenderArray extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mangsanpham: [
                { maSP: 1, tenSP: "iphone x", gia: 1000 },
                { maSP: 2, tenSP: "iphone 11", gia: 2000 },
                { maSP: 3, tenSP: "iphone 12", gia: 3000 },
                { maSP: 4, tenSP: "nokia", gia: 4000 }
            ]
        };
    }

    // Cách 2.1
    renderMangSP = () => {
        return this.state.mangsanpham.map((item, index) => {
            return (
                // KHi dùng map để render mảng ra giao diện, bắt buộc phải có property key cho thẻ bao ngoài cùng
                // Hạn chế sử dụng index làm key
                // 
                <p key={item.maSP}>MaSP : {item.maSP}  - TenSP :{item.tenSP} -  Gia: {item.gia} </p>
            );
        })
    }

    // Cách 2.2  // 2 cách viết hàm map có return và ko cần có return
    renderMangSP2 = () => {
        return this.state.mangsanpham.map((item, index) => (

            // KHi dùng map để render mảng ra giao diện, bắt buộc phải có property key cho thẻ bao ngoài cùng
            // Hạn chế sử dụng index làm key
            // 
            <p key={item.maSP}>MaSP : {item.maSP}  - TenSP :{item.tenSP} -  Gia: {item.gia} </p>
        ))
    }

    render() {
        return (
            <div>
                <h3> Render Array</h3>
                {/* <h2>ád</h2> */}
                <div>
                    {/* Cách 1 */}
                    {this.state.mangsanpham.map(item => {
                        return (
                            <p>MaSP : {item.maSP}  - TenSP :{item.tenSP} -  Gia: {item.gia} </p>
                        );
                    })}
                </div>
                {this.renderMangSP()}
            </div>
        )
    }
}
