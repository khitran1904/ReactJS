import React, { Component } from 'react'
import Content from'./Content';
import Header from'./Header';
import Footer from './Footer';
import Sidebar from './Sidebar';


export default class BaiTap1 extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="d-flex"> 
                {/* d-flex dàn thẻ con lên 1 hàng */}
                    <Sidebar/>
                    <Content/>
                </div>
                <Footer/>
            </div>
        )
    }
}
