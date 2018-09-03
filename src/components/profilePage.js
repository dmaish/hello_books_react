import React, {Component} from 'react';
import avatar from '../assets/avatar.png'
import {Link} from 'react-router-dom'
import Library from './libraryComponent'
import UserHistory from './userHistory'
import ReturnBook from './returnBook'
import swal from 'sweetalert';
import history from '../utils/history'


class ProfilePage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.logoutAlert = this.logoutAlert.bind(this);
        this.actualLogout = this.actualLogout.bind(this);
    }

    //function to handle user logging out
    logoutAlert(){
        swal({
            title: "Are you sure...",
            text: "you want to log out?",
            icon: "warning",
            buttons: {
                    cancel: "Cancel",
                    okay: true,
            }
          })
          .then((value) => {
            switch (value) {
                case "cancel":
                  swal("cancelled");
                  break;
                case "okay":
                    this.actualLogout()
                    swal("logout", "was a success!", "success");
                    break;
                default:
                  break;
              }
          });
    }

    // actual logout call to api
    actualLogout(){
        const jwt_token = localStorage.getItem('access_token')
        fetch("http://127.0.0.1:5000/api/auth/logout",{
            method: "POST",
            headers: {"Content-Type": "application/json",
                        'Authorization': `Bearer ${jwt_token}`},
            body: JSON.stringify(this.state)
        }).then(response => response.json())
        .then(response => {
            swal(response.message)
            history.push('/')
        })
    }


    render(){
        return(
        <div className="container">
            <div className="row">
                    {/* column containing the profile details */}
                    <div className="col-md-3 col-sm-6">
                        <img className="avatar" src={avatar} alt=''/>
                        <h6><Link to='/resetPassword' className="btn btn-secondary"> reset password </Link></h6>
                        <button type="button" class="btn btn-secondary" onClick={this.logoutAlert}> logout </button>
                    </div>
                {/* column containing books to be returned and the table showing history */}
                {/* THIS IS A BOOTSTRAP TABLIST (NAVBAR) */}
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
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><ReturnBook/></div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><UserHistory/></div>
                        </div>
                
                </div>
            </div>
        </div>
        )
    }
}

export default ProfilePage;