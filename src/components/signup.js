import React, {Component} from "react";
import history from "../utils/history"
import swal from "sweetalert";
import logo from "../assets/library.png"
import {Link} from "react-router-dom"


class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
                email: "",
                username: "",
                password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange (e) {
        // preventDefault avoids the default behavior of item calling the event if it has already been utilized
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value 
        })
    }


    handleSubmit (e) {
        /** method to handle submission of form */ 
        e.preventDefault()
        fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        }).then(response => response.json())
        .then(response =>{
            swal(response.message)
            if(response.message === "you registered successfully"){
                history.push("./signin")
            }
        })
        
    }

    // method to reveal user password
    revealPassword = () => {
        const passwordField = document.getElementById("passwordField");
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    }
    

    render(){
        const {email, username, password} = this.state;
        return(
            <div>
            <div>
                        <nav className="navbar navbar-light navbar-toggleable-sm">
                            <Link to="/" className="navbar-brand mb-0">
                                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                                hello<span className="logoName">books</span></Link>

                            <div  className=" justify-content-end">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link to="/signin" className="nav-link" >login</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
            <div className = "container main-container" data-toggle="validator">
                <div class="card">
                    <div class="card-header">
                    <h5>signup</h5>
                    </div>
                    <div className='card-body'>
                    <form className='signUpForm' onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <div className="col-sm-2"></div>
                                <label className="col-sm-2 col-form-label ">email</label>
                                <div className="col-sm-6 ">
                                <input 
                                name= "email"
                                id='emailField'
                                value={email}
                                onChange={this.handleChange}
                                type="email" 
                                className="form-control " 
                                placeholder="email"
                                required
                                />
                            </div>
                                <div className="col-sm-2"></div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-2"></div>
                                <label className="col-sm-2 col-form-label ">username</label>
                                <div className="col-sm-6 ">
                                    <input 
                                    name="username"
                                    id='usernameField'
                                    value = {username}
                                    onChange={this.handleChange}
                                    type="text" 
                                    className="form-control " 
                                    placeholder="username"
                                    required
                                    />
                            </div>
                            <div className="col-sm-2"></div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-2"></div>
                                <label className="col-sm-2 col-form-label ">password</label>
                                <div className="col-sm-6 ">
                                    <input 
                                    name="password"
                                    id="passwordField"
                                    value={password}
                                    onChange= {this.handleChange}
                                    type="password" 
                                    className="form-control " 
                                    placeholder="password"
                                    data-minlength="8"
                                    required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4"><input type="checkbox" onClick={this.revealPassword}/> show password</div>
                                <div className="col-sm-4"></div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4">
                                <button type="submit" className="btn btn-primary">submit</button>
                                </div>
                                <div className="col-sm-4"></div>
                            </div>
                    </form> 
                    </div>
                    </div> 
            </div>
            </div>
        )
    }
}

export default SignUp;