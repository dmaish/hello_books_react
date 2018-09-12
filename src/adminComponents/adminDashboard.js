import React, { Component } from "react";
import SingleBookRow from "./singleRow";
import {CardBody, CardTitle} from "reactstrap";
import Modal from "./addModal";
import swal from "sweetalert";
import history from "../utils/history"

class dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            "allbooks": []
        }
    }

    // method to display addbook modal
    showModal = () => {
        this.setState({ show: true });
      };
    // method to hide addbook modal
    hideModal = () => {
    this.setState({ show: false });
    };

    // fetch all books in the library
    componentDidMount(){
        this.getAllBooks();
    }
   
    // getting all books from the API
    getAllBooks = () => {
        fetch("http://127.0.0.1:5000/api/books?page=1&per_page=100", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }).then(
            response => response.json()  
        ).then(books => {
            this.setState(() => ({"allbooks": books.books}))
        })

    }

    // change state not to include deleted book


     //function to handle user logging out
     logoutAlert = () => {
        swal({
            title: "Are you sure...",
            text: "you want to log out?",
            icon: "warning",
            buttons: {
                    cancel: "Cancel",
                    okay: true,
            }
          })
          .then((value) => {
            switch (value) {
                case "cancel":
                  swal("cancelled");
                  break;
                case "okay":
                    this.actualLogout()
                    swal("logout", "was a success!", "success");
                    break;
                default:
                  break;
              }
          });
    }
    // actual logout call to api
    actualLogout = () => {
        const jwt_token = localStorage.getItem("access_token")
        fetch("http://127.0.0.1:5000/api/auth/logout",{
            method: "POST",
            headers: {"Content-Type": "application/json",
                        "Authorization": `Bearer ${jwt_token}`},
            body: JSON.stringify(this.state)
        }).then(response => response.json())
        .then(response => {
            swal(response.message)
            history.push("/")
        })
    }

    //add book to the admin dashboard
    updateBooks = (newBook) => {
        const {allbooks} = this.state
        const newAllbooks = [...allbooks, newBook]
        console.log(newAllbooks)
        this.setState(() => ({"allbooks": newAllbooks}))
    }

    // remove deleted book from dashboard
    removeBook = (id) => {
        let allbooks = this.state.allbooks.filter(book => book.id !== id);
        console.log(allbooks)
        this.setState(() => ({"allbooks": allbooks}))
        }
        

    // render the component
    render(){
        const {allbooks} = this.state
        if(allbooks)return(
            <div className='container'>
                {/* NOTE: JUST NOT PASS THE 'GETBOOKS' METHOD TO SEE IF THIS COMPONENT WILL FETCH ALL BOOKS BASES ON THE STATE CHENGE CAUSED BY THE MODAL METHODS  */}
                <Modal show={this.state.show} handleClose={this.hideModal} getAllBooks={this.getAllBooks} updateBooks={this.updateBooks}/>
                <div className="row">
                <div class="col col-lg-2"><button className="btn btn-info" onClick={this.logoutAlert}>logout</button></div>
                <div class="col col-lg-5"></div>
                <div class="col col-lg-5"></div>
                
                </div>
                <CardBody id='card'>
                <CardTitle >the admin dashboard</CardTitle>
                <span className="card-subtitle"></span>
                <button className="btn btn-outline-info bt-sm" onClick={this.showModal}>add new book <i class="fas fa-plus"></i></button>
                                    <table className="table  table-bordered table-sm">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">author</th>
                                                    <th scope="col">title</th>
                                                    <th scope="col">category</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {allbooks.map((book) => 
                                                    <SingleBookRow book={book} getAllBooks={this.getAllBooks} removeBook={this.removeBook}/>
                                                )}
                                                </tbody>
                                            </table>
                        </CardBody>
            </div>
        )
        return(<div>check your connections </div>)
    }
}
export default dashboard;