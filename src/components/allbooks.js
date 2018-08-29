import React from 'react';
import BookRow from './bookRow'

// function based component representing the table containing books
// which rows as single child components.
const books = (props) => {
        
    const allBooks = props.bookProp
    const loggedIn = props.loggedIn
    if (allBooks)return (
            <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">author</th>
                        <th scope="col">title</th>
                        <th scope="col">category</th>
                        </tr>
                    </thead>
                    <tbody>
                    {allBooks.map((book, key) => 
                        <BookRow book = {book} index = {key} loggedIn = {loggedIn}/>
                    )}
                    </tbody>
                </table>
        )
        return(
            <p>No prop</p>
        )
}

export default books;