import React, {Component} from 'react';
import swal from 'sweetalert';

// should the user be loggenIn, the borrow button will be displayed, and functionality executed when clicked
class BookRow extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        // bind the function
        this.borrowFunction = this.borrowFunction.bind(this)
    }
    // update the state using props received
    componentDidMount(){
        this.setState({"book": this.props.book})
        this.setState({"loggedIn": this.props.loggedIn})
    }
    

    // handle borrowing logic when borrow button is clicked
    borrowFunction(){
        const {book} = this.state
        const jwt_token = localStorage.getItem('access_token')
        fetch(`http://127.0.0.1:5000/api/users/books/${book.id}`,{
            method: "POST",
            headers: {"Content-Type": "application/json",
                        'Authorization': `Bearer ${jwt_token}`}
        }).then(response => response.json())
        .then(response =>{
            swal(response.message)
        }
        )
    }

    render(){
        const {book} = this.state
        const {loggedIn} = this.state
        if(book)return(
        <tr>
            <td>{book.author}</td>
            <td>{book.title}</td>
            <td>{book.category}</td>
            {loggedIn === true 
            ? 
            book.borrowed_flag === true ? "unavailable" :
            <td><button type="button" onClick= { this.borrowFunction } className="btn btn-info">borrow</button></td> : null }
        </tr>
        )
        return(
            <p>check your connections</p>
        )
    }
}

export default BookRow;