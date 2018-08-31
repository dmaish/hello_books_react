import React from 'react';
import swal from 'sweetalert';

// function based child component containing one book record(row)
// should the user be loggenIn, the borrow button will be displayed, and functionality executed when clicked
const row = (props) => {
    const singleBook = props

    // handle borrowing logic when borrow button is clicked
    function borrowFunction(){
        const jwt_token = localStorage.getItem('access_token')
        fetch(`http://127.0.0.1:5000/api/users/books/${singleBook.book.id}`,{
            method: "POST",
            headers: {"Content-Type": "application/json",
                        'Authorization': `Bearer ${jwt_token}`}
        }).then(response => response.json())
        .then(response =>{
            console.log(response.message)
            swal(response.message)
        }
        )
    }

    return(
    <tr>
        <td>{singleBook.book.author}</td>
        <td>{singleBook.book.title}</td>
        <td>{singleBook.book.category}</td>
        {console.log(singleBook.borrowed_flag)}
          { props.loggedIn === true 
          ? 
          singleBook.book.borrowed_flag === true ? "unavailable" :
          <td><button type="button" onClick= { borrowFunction } className="btn btn-info">borrow</button></td> : null }
    </tr>
    )
}

export default row;