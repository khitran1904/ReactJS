import React, { Component } from 'react'
import { connect } from 'react-redux';

class Search extends Component {

    handleChange= (evt) =>{
        // const action = {
        //     type:"SEARCH-USER",
        // };
        // this.props.dispatch(()=>action);

        // Cách 1
        const action =()=>{
            return{
                // type là bắt buộc phải trả về
                type:"SEARCH-USER",
                value:evt.target.value,
            };
        };   
        this.props.dispatch(action());


        // Cách 2
        // this.props.searchUser(evt.target.value);
    }
    render() {
        console.log(this.props);
        return (
            <div className="w-25" >
                <form className="form-inline my-2">
                    <input className="form-control mr-sm-2"
                          type="search" placeholder="Search" 
                          onChange={(evt)=> this.handleChange(evt)} />
                    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>

            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         searchUser : (searchValue)=> dispatch(()=>{
//             return {
//                 type:"SEARCH_USER",
//                 value: searchValue
//             }
//         }
        
//     }
// }

// Cách 2
// mapDispatchToProps là params thứ 2 của hàm connect
// export default connect(null,mapDispatchToProps)(Search);

export default connect()(Search);