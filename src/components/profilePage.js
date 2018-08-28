import React, {Component} from 'react';
import avatar from '../assets/avatar.png'
import {Link} from 'react-router-dom'

class ProfilePage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
        <div className="container">
            <div className="row">
                    {/* column containing the profile details */}
                    <div className="col-md-3 col-sm-6">
                        <img className="avatar" src={avatar} alt=''/>
                        <h6><Link to='/resetPassword' className="btn btn-primary btn-sm">reset password</Link></h6>
                    </div>
                {/* column containing books to be returned and the table showing history */}
                <div className="col-md-9 col-sm-6">
                    <h5>Borrowed Books</h5>

                    {/* book pics row2 --> */}
                    <div className="row book-row">

          </div>      
        </div>
        </div>
        </div>
        )
    }
}

export default ProfilePage;