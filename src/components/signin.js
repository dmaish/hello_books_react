import React, {Component} from "react";
import swal from 'sweetalert';
import history from '../utils/history'

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange (e){
        // preventDefault avoids the default behavior of item calling the event if it has already been utilized
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit (e){
        /** method to handl submission of form */
        e.preventDefault()
        fetch("http://127.0.0.1:5000/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        })
            .then(
            response => response.json()
            )
            .then(
                response => {
                swal(response.message)
                if (response.message === 'You logged in successfully' && response.is_admin){
                    localStorage.setItem('access_token', response.access_token)
                    history.push('./adminDashboard')
                }
                else if(response.message){
                    localStorage.setItem('access_token', response.access_token)
                    history.push('./profilePage')
                }
                })
    }

    render(){
        const {email, password} = this.state;
        return(
            <div className = "container container-signin">
                <div className='card'>
                    <div className='card-header'>
                        <h5>signin</h5>
                        </div>
                    <div className='card-body'>
                    <form className='signInForm' onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <div className="col-sm-2"></div>
                                <label className="col-sm-2 col-form-label ">email</label>
                                <div className="col-sm-6 ">
                                <input 
                                name= "email"
                                name='loginEmail'
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
                                <label className="col-sm-2 col-form-label ">password</label>
                                <div className="col-sm-6 ">
                                <input 
                                    name="password"
                                    id='loginPassword'
                                    value={password}
                                    onChange= {this.handleChange}
                                    type="password" 
                                    className="form-control " 
                                    placeholder="password"
                                    data-minlength="8"
                                    required
                                    />
                                </div>
                                <div className="col-sm-2"></div>
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
        )
    }
}

export default  SignIn;