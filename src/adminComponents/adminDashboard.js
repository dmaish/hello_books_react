import React, { Component } from 'react';
import SingleBookRow from './singleRow';
import {CardBody, CardTitle} from 'reactstrap';
import Modal from './addModal';

class dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
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
   
    getAllBooks= () => {
        fetch("http://127.0.0.1:5000/api/books?page=1&per_page=15", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }).then(
            response => response.json()  
        ).then(books => {
            this.setState({'allbooks': books.books})
        })

    }

    // render the component
    render(){
        const {allbooks} = this.state
        if(allbooks)return(
            <div className='container'>
                <Modal show={this.state.show} handleClose={this.hideModal}/>
                <CardBody>
                <CardTitle>the admin dashboard</CardTitle>
                <span className="card-subtitle"></span>
                <button className="btn btn-outline-info bt-sm" onClick={this.showModal}>add new book <i class="fas fa-plus"></i></button>
                                    <table className="table  table-bordered table-sm">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">author</th>
                                                    <th scope="col">title</th>
                                                    <th scope="col">category</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {allbooks.map((book) => 
                                                    <SingleBookRow book={book} getAllBooks={this.getAllBooks}/>
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