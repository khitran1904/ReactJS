import React, { Component } from 'react'
import { connect } from 'react-redux';

class FormUser extends Component {
    constructor(props) {
        super(props)

        // Quản lí input ko cần đưa lên redux store
        // VÌ những state này ko cần chia sẻ cho các component khác
        this.state = {
            userName: "",
            fullName: "",
            birth: "",
            email: "",
            position: "",
        }
    }


    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit = () => {
        this.props.onSubmit(this.state);
    }
    componentDidUpdate(prevProps,prevState){
        // debugger;
        // khi state selectedUser trên userReducer thay đổi => this.props.selectedUser thay đổi
        // => re-render => chạy componentDidUpdate
        if(prevProps.selectedUser.id !== this.props.selectedUser.id){ // so sánh id của 2 user
            this.setState({
                id: this.props.selectedUser.id ,
                userName: this.props.selectedUser.userName || "",
                birth: this.props.selectedUser.birth || "",
                email: this.props.selectedUser.email || "",
                position: this.props.selectedUser.position || "",
                fullName: this.props.selectedUser.fullName || "",
            })
        }
    }

    render() {
        // console.log(this.props.selectedUser)
        return (
            <div>
                {/* Button trigger modal */}
                {/* Modal */}
                <div className="modal fade" id="formUser" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Thông tin user</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group" >
                                    <label htmlFor="userName">UserName</label>
                                    <input type="text" id="userName" value={this.state.userName}
                                        name="userName"
                                        //    onChange={(evt)=> this.setState({userName:evt.target.value})}
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                    <label htmlFor="fullName" >fullName</label>
                                    <input type="text" id="fullName" className="form-control" value={this.state.fullName} name="fullName" onChange={this.handleChange} />
                                    <label htmlFor="email">email</label>
                                    <input type="text" id="email" className="form-control" value={this.state.email} name="email" onChange={this.handleChange} />
                                    <label htmlFor="birth">birth</label>
                                    <input type="text" id="birth" className="form-control" value={this.state.birth} name="birth" onChange={this.handleChange} />
                                    <label htmlFor="position">position</label>
                                    <select name="" id="position" className="form-control" value={this.state.position} name="position" onChange={this.handleChange}>
                                        <option value="">----</option>
                                        <option value="Employee">Employee</option>
                                        <option value="Director">Director</option>
                                        <option value="Dev">Dev</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.handleSubmit} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (user) => {   // onSubmit là key : có giá trị là 1 function
            const action = {
                type: "SUBMIT_USER",
                value: user,
            };
            dispatch(action);
        },
    };
}

const mapStateToProps = (state) => {
    return {
        selectedUser:state.userReducer.selectedUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormUser);