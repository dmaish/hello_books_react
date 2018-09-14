import React, {Component} from "react";
import {Link} from "react-router-dom"
import history from "../utils/history"

class add extends Component{
    constructor(props){
        super(props);
        this.state = {
          title: "",
          author: "",
          category: "",
          url: ""
        }
    }

    // STATE CHANGE BASED ON THE MODAL RECEIVING DATA
    handleChange = (e) => {
      // preventDefault avoids the default behavior of item calling the event if it has already been utilized
      e.preventDefault()
      this.setState({
      [e.target.name]: e.target.value
    })
    }

    // API CALL AFTER MODAL FORM IS SUBMITTED
    handleSubmit = (e) => {
       // preventDefault avoids the default behavior of item calling the event if it has already been utilized
       e.preventDefault()
        const jwt_token = localStorage.getItem("access_token")
        fetch("http://localhost:5000/api/books", {
         method: "POST",
         headers: {"Content-Type": "application/json",
                         "Authorization": `Bearer ${jwt_token}`},
         body: JSON.stringify(this.state)
     }).then(response => response.json())
     .then(() => history.push("/adminDashboard"))
     }

    render(){
      const {title, author, category, url} = this.state
        // const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
             <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-3"></div>
            <div className="col-md-6 col-sm-6">
            <div class="card delete-card">
            <div class="card-body">
                <h5 class="card-title">add book</h5>
           <form onSubmit={this.handleSubmit}>
                          <div class="form-group">
                            <label for="title">title</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            name="title" 
                            value={title}
                            onChange={this.handleChange}
                            id="title"  
                            placeholder="Enter title"/>
                          </div>

                          <div class="form-group">
                            <label for="author">author</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            name="author" 
                            value={author}
                            onChange={this.handleChange}
                            id="author" 
                            placeholder="enter author"/>
                          </div>

                          <div class="form-group">
                            <label for="author">category</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            name="category" 
                            value={category}
                            onChange={this.handleChange}
                            id="category" 
                            placeholder="category"/>
                          </div>

                          <div class="form-group">
                            <label for="author">url</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            name="url" 
                            value={url}
                            onChange={this.handleChange}
                            id="url" 
                            placeholder="enter bookcover photo url"/>
                          </div>
                          <div className="row">
                          <div className="col-md-2 col-sm-2"></div>

                          <div className="col-md-3 col-sm-3">   
                          <Link to="/adminDashboard" class="btn btn-outline-dark btn-block delete-button">cancel</Link>
                          </div>
                          <div className="col-md-2 col-sm-2"> </div>
                          <div className="col-md-3 col-sm-3"> 
                          <button type="button" type="submit" className="btn btn-outline-success btn-block delete-button">add</button>
                          </div>

                          <div className="col-md-2 col-sm-2"></div>
                          </div>
                        </form>
                        </div>
            </div>
            <div className="col-md-3 col-sm-3"></div>
            </div>
            </div>
            </div>
  
          )
    }
}
export default add;
   