import React, { Component } from 'react'

export default class Search extends Component {

    handleChange= (evt) =>{
        // Lấy đk giá trị cần đẩy,
        console.log(evt.target.value);
        // đẩy value nầy lên management
        this.props.onSearch(evt.target.value);
    }
    render() {
        return (
            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2"
                          type="search" placeholder="Search" 
                          onChange={(evt)=> this.handleChange(evt)} />
                    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>

            </div>
        )
    }
}
