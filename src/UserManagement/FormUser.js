import React, { Component } from 'react'

export default class FormUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName:"",
            fullName:"",
            email:"",
            position:"",
            birth:""
        }
    }

    handleChange = (evt) =>{
        console.log(evt.target.name , evt.target.value)

        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
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
                                        name = "userName"
                                        //    onChange={(evt)=> this.setState({userName:evt.target.value})}
                                        onChange = {this.handleChange}
                                           className="form-control"
                                            />
                                    <label htmlFor="fullName">fullName</label>
                                    <input type="text" id="fullName" className="form-control" />
                                    <label htmlFor="email">email</label>
                                    <input type="text" id="email" className="form-control" />
                                    <label htmlFor="birth">birth</label>
                                    <input type="text" id="birth" className="form-control" />
                                    <label htmlFor="position">position</label>
                                    <select name="" id="position" className="form-control" >
                                        <option value="">----</option>
                                        <option value="">Employee</option>
                                        <option value="">Director</option>
                                        <option value="">Dev</option>
                                    </select>
                                </div>
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
