import React from 'react';
import BookRow from './bookRow'

// function based component representing the table containing books
// which rows as single child components.
const books = (props) => {
        
    const allBooks = props.bookProp
    if (props.bookProp)return (
            <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">author</th>
                        <th scope="col">title</th>
                        <th scope="col">category</th>
                        </tr>
                    </thead>
                    <tbody>
                    {allBooks.map((book, index) => 
                        <BookRow book = {book} index = {index}/>
                    )}
                    </tbody>
                </table>
        )
        return(
            <p>No prop</p>
        )
}

export default books;