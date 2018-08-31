import React from 'react';
import swal from 'sweetalert';

const singleBook = (props) => {
    const singleBook = props

    // handle borrowing logic when borrow button is clicked
    function returnBook(){
        const jwt_token = localStorage.getItem('access_token')
        fetch(`http://127.0.0.1:5000/api/users/books/${singleBook.book.id}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json",
                        'Authorization': `Bearer ${jwt_token}`}
        }).then(response => response.json())
        .then(response =>{
            console.log(response.message)
            swal(response.message)
        }
        )
    }

    
    if(singleBook)return(
        <tr>
            <td>{singleBook.book.author}</td>
            <td>{singleBook.book.title}</td>
            <td>{singleBook.book.category}</td>
            <td><button type="button" onClick= {returnBook} className="btn btn-info">return</button></td> 
        </tr>
    )
    return (<p> no prop </p>)

}

export default singleBook;