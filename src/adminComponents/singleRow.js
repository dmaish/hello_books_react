import React, { Component } from 'react';

class singleBookRow extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        this.setState({"book": this.props.book})
    }
    // method to delete book
    deleteBook = () => {
        const {book} = this.state
        const jwt_token = localStorage.getItem('access_token')
        fetch(`http://127.0.0.1:5000/api/books/${book.id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json",
                        'Authorization': `Bearer ${jwt_token}`}
        }).then(
            response => {response.json()
            console.log('message', response.message)}  
        ).then(this.props.getAllBooks())
    }

    render(){
        const {book} = this.state
        if(book)return(
            <tr>
            <td>{book.id}</td>
            <td>{book.author}</td>
            <td>{book.title}</td>
            <td>{book.category}</td>
            <td>
            <button type="button" className="btn"><i class="fas fa-edit"></i></button>
            <button type="button" className="btn" onClick={this.deleteBook}><i class="fas fa-trash"></i></button>
            
            </td>
            </tr>
        )
        return(
            <div>check you connections</div>
        )
    }
}
export default singleBookRow;