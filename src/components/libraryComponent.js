import React, {Component} from 'react';
import Books from './allbooks'

class Library extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

// fetch all books in the library
    componentDidMount(){
        fetch("http://127.0.0.1:5000/api/books?page=1&per_page=10", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }).then(
            response => response.json()  
        ).then(books => {
            this.setState({'books': books.books})
        })
        
    }

// render the component
    render(){
        return(
           <div>
               <p>Books in the library.</p>
               <Books bookProp = {this.state.books}/>
           </div>
        )   
    }
}

export default Library;