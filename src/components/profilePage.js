import React, {Component} from 'react';
import avatar from '../assets/avatar.png'
import {Link} from 'react-router-dom'
import Library from './libraryComponent'

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
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Borrow</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">borrowed books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">borrow history</a>
                    </li>
                </ul>

                        <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><Library loggedIn = {true}/></div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                        </div>
                
                </div>
            </div>
        </div>
        )
    }
}

export default ProfilePage;