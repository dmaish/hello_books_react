import React, {Component} from "react";

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                email: "",
                username: "",
                password: ""
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange (e) {
        e.preventDefault()
        const {name, value} = e.target
        const user = this.state
        this.setState({
            user: {
                ...user,
                [name]:value
            }
        })
    }
    handleSubmit (e) {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }
    render(){
        const user = this.state;
        return(
            <div className = "container main-container">
                    <form onSubmit={this.handleSubmit}>
                            <div class="form-group row">
                                <div class="col-sm-2"></div>
                                <label class="col-sm-2 col-form-label ">email</label>
                                <div class="col-sm-6 ">
                                <input 
                                name= "email"
                                value={user.email}
                                onChange={this.handleChange}
                                type="email" 
                                class="form-control " 
                                placeholder="email"
                                />
                            </div>
                                <div class="col-sm-2"></div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-2"></div>
                                <label class="col-sm-2 col-form-label ">username</label>
                                <div class="col-sm-6 ">
                                    <input 
                                    name="username"
                                    value = {user.username}
                                    onChange={this.handleChange}
                                    type="email" 
                                    class="form-control " 
                                    placeholder="username"
                                    />
                            </div>
                            <div class="col-sm-2"></div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-2"></div>
                                <label class="col-sm-2 col-form-label ">password</label>
                                <div class="col-sm-6 ">
                                    <input 
                                    name="password"
                                    value={user.password}
                                    onChange= {this.handleChange}
                                    type="email" 
                                    class="form-control " 
                                    placeholder="password"
                                    />
                            </div>
                            <div class="col-sm-2"></div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-4"></div>
                                <div class="col-sm-4">
                                <a href="login.html" type="submit" class="btn btn-primary btn-sm">submit</a>
                                </div>
                                <div class="col-sm-4"></div>
                            </div>
                    </form>  
            </div>
        )
    }
}

export default SignUp;