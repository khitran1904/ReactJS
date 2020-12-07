import React, { Component } from 'react'

export default class FormUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.selectedUser.id,
            userName: this.props.selectedUser.userName,
            fullName: this.props.selectedUser.fullName,
            email: this.props.selectedUser.email,
            position: this.props.selectedUser.position,
            birth: this.props.selectedUser.birth
        }
    }

    handleChange = (evt) => {
        console.log(evt.target.name, evt.target.value)

        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSave = () => {
        if (this.state.id) {
            this.props.onUpdateUser(this.state)
        }
        else {
            console.log(this.state)
            this.props.userAdd(this.state);
        }
    }

    render() {
        console.log(this.props.selectedUser)
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
                                <button type="button" className="btn btn-primary" onClick={this.handleSave} >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
