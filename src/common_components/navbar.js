import React, {Component} from 'react';
import {Switch, Link, Route} from "react-router-dom"

class Navbar extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className="container">
                <header>
                    <div class="container">
                        <nav class="navbar navbar-light navbar-toggleable-sm">
                            <a href="landing_page" class="navbar-brand mb-0">
                                <img src="assets/library.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
                                hello_books </a>

                            <div  class=" justify-content-end">
                                <ul class="nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="templates/library.html">Library</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="templates/admin_page.html">Admin</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="templates/login.html">Login</a>
                                    </li>
                                    <li class="nav-item">
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
            </BrowserRouter>
        )
    }
}

export default Navbar;