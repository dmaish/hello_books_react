import React, {Component} from "react";
import Library from "./libraryComponent"
import logo from "../assets/library.png"
import {Link} from "react-router-dom"

class BorrowPage extends Component{
    render(){
        return (
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
                                            <Link to="/profilePage" className="nav-link" >profile</Link>
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
                        </div>
                    {/* column containing books to be returned and the table showing history */}
                    {/* THIS IS A BOOTSTRAP TABLIST (NAVBAR) */}
                    <div className="col-md-8 col-sm-5">
                    <Library loggedIn = {true}/>
                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
            </div>
            );
    }
}
export default BorrowPage;


