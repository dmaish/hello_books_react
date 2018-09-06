import React, {Component} from 'react';
import AllBorrowedBooks from './allBorrowedBook'

class returnBorrowed extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    
// fetch all the books
    componentDidMount(){
        console.log("Mounting")
        this.getBorrowedBooks()
    }

    getBorrowedBooks = ()=> {
        const jwt_token = localStorage.getItem('access_token')
        fetch("http://127.0.0.1:5000/api/users/books?returned=false", {
            method: "GET",
            headers: {"Content-Type": "application/json",
            'Authorization': `Bearer ${jwt_token}`}
        }).then(
            response => response.json()  
            
        ).then(books => {
            this.setState({'books': books.unreturned_books})
        })
    }
    

    render() {
        const allBooks = this.state.books
        return (
             <AllBorrowedBooks allBooks={allBooks} getBorrowedBooks={this.getBorrowedBooks}/>
        );
    }

}
export default returnBorrowed;