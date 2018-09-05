import React, {Component} from 'react';
import SingleBorrowedBook from './singleBorrowedBook'

class singleBook extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    // loading the props into the state
    componentDidMount(){
        this.setState({"allBooks":this.props.allBooks})
    }

     // function to update allBorrowedBooks state
     changeState = (someBook) => {
        if(someBook)
        this.setState(currentState => (
            {
          "allBooks": currentState.allBooks.filter(book => book.id !== someBook.id)
        })
        )
    }

    render(){
        const allBooks = this.props.allBooks
        if (allBooks)return (
            <table className="table table-striped table-bordered">
                        <thead>
                        </thead>
                        <tbody>
                        {allBooks.map((book) => 
                            <SingleBorrowedBook book = {book} changeState={this.changeState} getBorrowedBooks={this.props.getBorrowedBooks}/>
                            
                        )}
                        </tbody>
                    </table> 
        )
        return(<p>no props</p>)

}
}
 
export default singleBook;
