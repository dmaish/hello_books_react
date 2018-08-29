import React from 'react';

// function based child component containing one book record(row)
const row = (props) => {
    const singleBook = props
    return(
    <tr>
        <td>{singleBook.book.author}</td>
        <td>{singleBook.book.title}</td>
        <td>{singleBook.book.category}</td>
          isLoggedIn ? <td><button type="button" class="btn btn-info">Info</button></td> : 
    </tr>
    )
}

export default row;