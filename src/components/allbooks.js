import React, {Component} from 'react';
import BookRow from './bookRow'

// class based component representing the table containing books
// which rows as single child components.
class Books extends Component{
    constructor(props){
        super(props);
        this.state = {
            "allbooks": this.props.allbooks,
            "loggedIn": this.props.loggedIn

        }
    }
     
    componentDidMount(){
        this.setState({"allbooks": this.props.bookProp, "loggedIn": this.props.loggedIn})
        console.log("fucking props", this.props.bookProp)
    }

    render(){
        // console.log("fucking state", this.state.allbooks)
        const allBooks = this.state.allbooks
        const loggedIn = this.state.loggedIn
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
}

export default Books;