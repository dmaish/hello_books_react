import React, {Component} from 'react';
import swal from 'sweetalert';

class ResetPassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // update state as the user types in the password field
    handleChange (e){
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // function executed when the form is submitted
    handleSubmit(e){
        e.preventDefault()
        const jwt_token = localStorage.getItem('access_token')
        fetch("http://127.0.0.1:5000/api/auth/reset-password",{
            method: "POST",
            headers: {"Content-Type": "application/json",
                        'Authorization': `Bearer ${jwt_token}`},
            body: JSON.stringify(this.state)
        }).then(response => response.json())
          .then(response =>{
            swal(response.message)
        }
        )
    }

    render(){
        const {password} = this.state
        return(
            <div className='container'>
            <div id='resetcard' className='card'>
            <div className='card-header'><h5>reset password</h5></div>
            <div  className='card-body'>
            <form onSubmit={this.handleSubmit}>
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
                                <div className="col-sm-2"></div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4">
                                <button id="submitButton" type="submit" className="btn btn-primary">submit</button>
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

export default ResetPassword;