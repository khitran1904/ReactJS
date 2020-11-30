import React, { Component } from 'react'

export default class RenderingElements extends Component {
    userName = "Jack";
    lop = 'FE53';

    renderInfo = () => {
        return (
            <div> userName = {this.userName} -  Lop = {this.lop}</div>
        )
    }
    render() {
        return (
            <div>
                <h3>Rendering Elements</h3>
                {this.renderInfo()}
            </div>
            
        )
    }
}
