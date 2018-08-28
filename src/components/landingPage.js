import React, {Component} from 'react';
import Navbar from "../commonComponents/navbar"
import {Link} from "react-router-dom"
import "../stylesheets.css"


class LandingPage extends Component{
    render(){
        return(
            <div className="landingPage">  
                <Navbar/>  
                <div className="jumbotron jumbotron-fluid mb-0">
                    <div className="container main-container">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-10 col-lg-6">
                                <h1 className="display-5">The Coolest Online Library</h1>
                                <p className="lead">Where we take you on the best tour of the literal pleasures of the century</p>
                                <p className="lead">
                                    <Link to="./signup" className="btn btn-primary btn-sm">Register</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;