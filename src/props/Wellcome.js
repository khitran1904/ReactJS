import React, { Component } from 'react'

export default class Wellcome extends Component {

    // mặc định trong tất cả các class component của reactjs đều có 1 thuộc tính là this.props

    render() {

        let {name1,age} = this.props
        return (
            <div>
                <h3> {this.props.name1}  - {this.props.age} </h3>
                <h4> {name1}  - {age} </h4>
            </div>
        )
    }
}
