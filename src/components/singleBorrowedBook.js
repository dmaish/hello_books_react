import React from 'react';

const singleBook = (props) => {
    const singleBook = props
    if(singleBook)return(
        <tr>
            <td>{singleBook.book.author}</td>
            <td>{singleBook.book.title}</td>
            <td>{singleBook.book.category}</td>
            <td><button type="button" onClick= '' className="btn btn-info">return</button></td> 
        </tr>
    )
    return (<p> no prop </p>)

}

export default singleBook;