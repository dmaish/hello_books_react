import React, { Component } from "react";
import swal from "sweetalert"
import history from "../utils/history";
import {Link} from "react-router-dom"

class deletePage extends Component{
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
        console.log("props to delete page", this.props)
        this.setState({
            "id": this.props.location.book.id,
            "title": this.props.location.book.title,
            "author": this.props.location.book.author,
            "category": this.props.location.book.category,
            "url": this.props.location.book.url
        })
    }

        // METHOD TO DELETE BOOK
        deleteBook = () => {
            const {id} = this.state
            const jwt_token = localStorage.getItem("access_token")
            fetch(`http://127.0.0.1:5000/api/books/${id}`, {
                method: "DELETE",
                headers: {"Content-Type": "application/json",
                            "Authorization": `Bearer ${jwt_token}`}
            }).then(
                response => response.json())
            .then(response => {
                console.log(response)
                swal(response.message)
            }).then(() => (history.push("/adminDashboard")))
        }
    render(){
        const {title} = this.state
        const {author} = this.state
        const {category} = this.state
        return(
            <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-3"></div>
            <div className="col-md-6 col-sm-6">
            <div class="card delete-card">
            <div class="card-body">
                <h5 class="card-title">delete book ?</h5>
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">title</th>
                        <th scope="col">author</th>
                        <th scope="col">category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{title}</td>
                        <td>{author}</td>
                        <td>{category} </td>
                        </tr>
                    </tbody>
                    </table>
            </div>
            </div>
            <div className="col-md-3 col-sm-3"></div>
            </div>
            </div>
            <div className="row">

            <div className="col-md-3 col-sm-3"></div>

            <div className="col-md-2 col-sm-2">   
            <Link to="/adminDashboard" class="btn btn-outline-dark btn-block delete-button">cancel</Link>
            </div>
            <div className="col-md-2 col-sm-2"> </div>
            <div className="col-md-2 col-sm-2"> 
            <button type="button" onClick={this.deleteBook} className="btn btn-outline-danger btn-block delete-button">delete</button>
            </div>

            <div className="col-md-3 col-sm-3"></div>
            </div>

            </div>
        )
    }
}
export default deletePage;