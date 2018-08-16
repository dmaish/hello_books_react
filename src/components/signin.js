import React, {Component} from "react";

class SignIn extends Component{
    render(){
        return(
            <div className = "container">
                    <form >
                            <div class="form-group row">
                                <div class="col-sm-2"></div>
                                <label class="col-sm-2 col-form-label ">email</label>
                                <div class="col-sm-6 ">
                                <input type="email" class="form-control " placeholder="email"/>
                            </div>
                                <div class="col-sm-2"></div>
                           </div>
                           <div class="form-group row">
                                <div class="col-sm-2"></div>
                                <label class="col-sm-2 col-form-label ">password</label>
                                <div class="col-sm-6 ">
                                    <input type="password" class="form-control " placeholder="confirm password"/>
                                </div>
                                <div class="col-sm-2"></div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-4"></div>
                                <div class="col-sm-4">
                                <a href="login.html" type="submit" class="btn btn-primary">submit</a>
                                </div>
                                <div class="col-sm-4"></div>
                            </div>
                    </form>
            </div>
        )
    }
}

export default  SignIn;