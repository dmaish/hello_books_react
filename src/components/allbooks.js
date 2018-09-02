import React, {Component} from 'react';
import BookRow from './bookRow'

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
        // console.log("fucking state", this.state.allbooks)
        
        const {allbooks} = this.state
        const {loggedIn} = this.state
        console.log('the prop is received as:', allbooks)
        if (allbooks)return (
                <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">author</th>
                            <th scope="col">title</th>
                            <th scope="col">category</th>
                            </tr>
                        </thead>
                        <tbody>
                        {allbooks.map((book, key) => 
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