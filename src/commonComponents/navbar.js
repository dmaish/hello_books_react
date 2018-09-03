import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/library.png"

class Navbar extends Component{
    render(){
        return(
                    <div className="navBar">
                        <nav className="navbar navbar-light navbar-toggleable-sm">
                            <Link to="/" className="navbar-brand mb-0">
                                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                                hello_books </Link>

                            <div  className=" justify-content-end">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link to="/library" className="nav-link" >library</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/borrow" className="nav-link" >borrow</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/signin" className="nav-link" ><button type="button" className="btn btn-outline-primary btn-sm">sign in</button></Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
        )
    }
}

export default Navbar;