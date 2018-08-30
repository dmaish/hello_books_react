import React from 'react';
import SingleBorrowedBook from './singleBorrowedBook'

const singleBook = (props) => {
    const allBooks = props.allBooks
    if (allBooks)return (
        <table className="table table-striped table-bordered">
                    <thead>
                    </thead>
                    <tbody>
                        { console.log('allBorrowedBook', typeof allBooks)}
                    {allBooks.map((book) => 
                        <SingleBorrowedBook book = {book} />
                    )}
                    </tbody>
                </table>
    )
    return(<p>no props</p>)

}
 
export default singleBook;
