import React, {Component} from 'react';
import BookRow from './bookRow';

// class based component representing the table containing books
// which rows as single child components.
class Books extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
     
    componentDidMount(){
        this.setState({"allbooks": this.props.booksProp, "loggedIn": this.props.loggedIn})    
    }

    render(){
        console.log("fucking props in all books", this.props)
        
        const {allbooks} = this.state
        const {loggedIn} = this.state
        if (allbooks)return (
            <div id="booksCard" class="card">
                <div class="card-body">
                <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">author</th>
                            <th scope="col">title</th>
                            <th scope="col">category</th>
                            </tr>
                        </thead>
                        <tbody>
                        {allbooks.map((book) => 
                            <BookRow book = {book} key = {book.id} loggedIn = {loggedIn} reGetBooks={this.props.reGetBooks}/>
                        )}
                        </tbody>
                    </table>
                </div>
                </div>
                    )
                    return(
                        <p>No prop</p>
                    )
             }
}

export default Books;