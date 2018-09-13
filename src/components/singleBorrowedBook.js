import React, {Component} from 'react';
import swal from 'sweetalert';

class singleBook extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.returnBook = this.returnBook.bind(this)
    }
    // const singleBook = props
    // setting the state
    componentDidMount(){
        this.setState({"singleBook": this.props.book})
    }
        

    // handle borrowing logic when borrow button is clicked
    returnBook(){
        const jwt_token = localStorage.getItem('access_token')
        const book = this.state.singleBook

        fetch(`http://127.0.0.1:5000/api/users/books/${book.id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json",
                        'Authorization': `Bearer ${jwt_token}`}
        }).then(response => response.json())
        .then(response =>{
            swal(book.title, response.message, "info");
        }
        ).then(() => this.props.getBorrowedBooks())
    }

    render(){
        const singleBook = this.state.singleBook
        if(singleBook)return(
            <tr>
                <td>{singleBook.author}</td>
                <td>{singleBook.title}</td>
                <td>{singleBook.category}</td>
                <td><button type="button" onClick= {this.returnBook} className="btn btn-info">return</button></td> 
            </tr>
        )
        return (<p> no prop </p>)

    }
}

export default singleBook;