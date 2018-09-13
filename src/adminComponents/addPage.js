import React, {Component} from "react";
import {Link} from "react-router-dom"

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
     .then(response => console.log(response.message))
     }

    render(){
      const {title, author, category, url} = this.state
        // const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
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

                          <button type="submit" class="btn btn-primary">Submit</button>
                          <Link to="/adminDashboard"> dashboard</Link>

                        </form>
          )
    }
}
export default add;
   