import React, { Component } from "react";
import history from "../utils/history";
import {Link} from "react-router-dom"

class editBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            "title": "",
            "author": "",
            "category": "",
            "url": "",
        }
    }

    componentDidMount(){
        this.setState({
            "id": this.props.location.book.id,
            "title": this.props.location.book.title,
            "author": this.props.location.book.author,
            "category": this.props.location.book.category,
            "url": this.props.location.book.url
        })
       
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
         const {id} = this.state
         const jwt_token = localStorage.getItem("access_token")
         e.preventDefault()
         fetch(`http://127.0.0.1:5000/api/books/${id}`, {
          method: "PUT",
          headers: {"Content-Type": "application/json",
                          "Authorization": `Bearer ${jwt_token}`},
          body: JSON.stringify(this.state)
      }).then(response => response.json())
      .then(response => console.log(response.message))
      .then((() =>  history.push("./adminDashboard")))
      }
    
    render(){
        const {title} = this.state
        const {author} = this.state
        const {category} = this.state
        const {url} = this.state
        return(
            <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-3"></div>
            <div className="col-md-6 col-sm-6">
            <div class="card delete-card">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
                          <button type="button" type="submit" onClick={this.handleSubmit} className="btn btn-outline-success btn-block delete-button">save</button>
                          </div>

                          <div className="col-md-2 col-sm-2"></div>
                          </div>
                        </form>
            </div>
            </div>
            </div>
            </div>
            <div className="col-md-3 col-sm-3"></div>
            </div>
            
        )
    }

}
export default editBook;