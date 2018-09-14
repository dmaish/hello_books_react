import React, {Component} from "react";
import AllBorrowedBooks from "./allBorrowedBook"
import history from "../utils/history"
import logo from "../assets/library.png"
import {Link} from "react-router-dom"

class returnBorrowed extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
// fetch all the books
    componentDidMount(){
        this.getBorrowedBooks()
    }

    getBorrowedBooks = ()=> {
        const jwt_token = localStorage.getItem("access_token")
        fetch("http://127.0.0.1:5000/api/users/books?returned=false", {
            method: "GET",
            headers: {"Content-Type": "application/json",
            "Authorization": `Bearer ${jwt_token}`}
        }).then(
            response => response.json()  
            
        ).then(books => {
            this.setState({"books": books.unreturned_books})
        })
    }
    
    render() {
        console.log("render state", this.state)
        const allBooks = this.state.books
        return (
        <div className="container">
        <div>
                        <nav className="navbar navbar-light navbar-toggleable-sm">
                            <Link to="/" className="navbar-brand mb-0">
                                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                                hello<span className="logoName">books</span></Link>

                            <div  className=" justify-content-end">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link to="/profilePage" className="nav-link" >profile</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/borrowPage" className="nav-link" >borrowing</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
            <div className="row">
                    {/* column containing the profile details */}
                    <div className="col-md-3 col-sm-6">
                    </div>
                {/* column containing books to be returned and the table showing history */}
                {/* THIS IS A BOOTSTRAP TABLIST (NAVBAR) */}
                <div className="col-md-8 col-sm-5">
                <AllBorrowedBooks allBooks={allBooks} getBorrowedBooks={this.getBorrowedBooks}/>
                </div>
                <div className="col-md-1 col-sm-1"></div>
            </div>
        </div>
        );
    }

}
export default returnBorrowed;