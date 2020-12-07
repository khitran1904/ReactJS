import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            total2: 0,
        }
    }

    // Khi setstate trong  nhớ phải có điều kiện dừng
    // Điều kiện chạy setstate khi this.props.count thay đổi
    // khi this.state.count thay đổi thì total thay đổi
    //Cung cấp giá trị trước đó của props và State
    componentDidUpdate(prevProps, prevState) {
        if (this.props.count !== prevProps.count) {
            this.setState({
                total: this.props.count * 10,
            })
        }
        if (prevState.total2 !== this.state.total2) {
            // Call API
            console.log("Call API");
        }
    }


    componentDidMount() {
        setTimeout(() => {
            // false khi component chưa bị Unmount
            // Kiểm tra component bị unmount rồi thì sẽ không set state
            if (!this.isComponentUnmounted) {
                this.setState({
                    total2: 50,
                })
            }
        }, 1000)
    }

    // removeEventListener
    //clearTimeout,clearInterval
    // DỌn dẹp vùng nhớ dư thừa -- memory leak
    componentWillUnmount() {
        console.log("componentWillUnmount");
        this.isComponentUnmounted=true;
    }


    render() {
        return (
            <div>
                halo
            </div>
        )
    }
}
