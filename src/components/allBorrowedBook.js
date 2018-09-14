import React, {Component} from "react";
import SingleBorrowedBook from "./singleBorrowedBook"

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
            <div class="card" >
                        <div class="card-body">
                            <h6 class="card-title">books to return</h6>
            <table className="table table-striped table-bordered">
            <thead>
                            <tr>
                            <th scope="col">author</th>
                            <th scope="col">title</th>
                            <th scope="col">category</th>
                            <th scope="col">time borrowed</th>
                            </tr>
                        </thead>
                        <tbody>
                        {allBooks.map((book) => 
                            <SingleBorrowedBook book = {book} changeState={this.changeState} getBorrowedBooks={this.props.getBorrowedBooks}/>
                            
                        )}
                        </tbody>
                    </table> 
                    </div>
                    </div>
        )
        return(<p>no props</p>)
}
} 
export default singleBook;
