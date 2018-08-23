import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/library.png"

class Navbar extends Component{
    render(){
        return(
            <div className="container">
                <header>
                    <div class="container">
                        <nav class="navbar navbar-light navbar-toggleable-sm">
                            <Link to="/" className="navbar-brand mb-0">
                                <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
                                hello_books </Link>

                            <div  class=" justify-content-end">
                                <ul class="nav">
                                    <li className="nav-item">
                                        <Link to="/library" className="nav-link" >library</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/borrow" className="nav-link" >borrow</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/signin" className="nav-link" ><button type="button" class="btn btn-outline-primary btn-sm">sign in</button></Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navbar;