import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div className = "text-center"
            style={{
                width:'30%',
                height: '400px',
                backgroundColor: 'grey'
            }}>
                <span> SlideBar</span>
            </div>
        )
    }
}
