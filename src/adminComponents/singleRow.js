import React, { Component } from 'react';
import swal from 'sweetalert';

class singleBookRow extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
        this.setState({"book": this.props.book})
    }

    bookDeleteAlert = () => {
        const {book} = this.state
        swal({
            title: "Are you sure...",
            text: `you want to delete "${book.title}""`,
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
                    this.deleteBook()
                    break;
                default:
                  break;
              }
          });
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
            response => response.json()  
        ).then(response => {
            swal("", response.message, "info")
        })
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
            <button type="button" className="btn" onClick={this.bookDeleteAlert}><i class="fas fa-trash"></i></button>
            
            </td>
            </tr>
        )
        return(
            <div>check you connections</div>
        )
    }
}
export default singleBookRow;