import React, {Component} from 'react';
import Navbar from "../common_components"

class LandingPage extends Component{
    render(){
        return(
                <div class="jumbotron jumbotron-fluid mb-0">
                    <div class="container main-container">
                        <div class="row justify-content-center text-center">
                            <div class="col-md-10 col-lg-6">
                                <h1 class="display-5">The Coolest Online Library</h1>
                                <p class="lead">Where we take you on the best tour of the literal pleasures of the century</p>
                                <p class="lead">
                                    <a class="btn btn-primary btn-sm" href="templates/registration.html">Register</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default LandingPage;