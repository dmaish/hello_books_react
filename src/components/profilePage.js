import React, {Component} from "react";
import avatar from "../assets/avatar.png"
import {Link} from "react-router-dom"
import Library from "./libraryComponent"
import UserHistory from "./userHistory"
import ReturnBook from "./returnBook"
import swal from "sweetalert";
import history from "../utils/history"
import logo from "../assets/library.png"


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
        const jwt_token = localStorage.getItem("access_token")
        fetch("http://127.0.0.1:5000/api/auth/logout",{
            method: "POST",
            headers: {"Content-Type": "application/json",
                        "Authorization": `Bearer ${jwt_token}`},
            body: JSON.stringify(this.state)
        }).then(response => response.json())
        .then(response => {
            swal(response.message)
            history.push("/")
        })
    }


    render(){
        return(
        <div className="container">
        <div>
                        <nav className="navbar navbar-light navbar-toggleable-sm">
                            <Link to="/" className="navbar-brand mb-0">
                                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                                hello<span className="logoName">books</span></Link>

                            <div  className=" justify-content-end">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link to="/returnBooks" className="nav-link" >return book</Link>
                                    </li>
                                    <li className="nav-item">
                                         <Link to="/returnBooks" className="nav-link" >profile</Link>
                                    </li>
                                    <li className="nav-item">
                                         <Link to="/borrowPage" className="nav-link" >borrowing</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
            <div className="row">
                    {/* column containing the profile details */}
                    <div className="col-md-3 col-sm-6">
                        <img className="avatar" src={avatar} alt=''/>
                        <h6><Link to='/resetPassword' className="btn btn-secondary"> reset password </Link></h6>
                        <button type="button" class="btn btn-secondary" onClick={this.logoutAlert}> logout </button>
                    </div>
                {/* column containing books to be returned and the table showing history */}
                {/* THIS IS A BOOTSTRAP TABLIST (NAVBAR) */}
                <div className="col-md-8 col-sm-5">
                <UserHistory/>
                </div>
                <div className="col-md-1 col-sm-1"></div>
            </div>
        </div>
        )
    }
}

export default ProfilePage;