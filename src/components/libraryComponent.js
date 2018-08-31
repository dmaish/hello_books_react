import React, {Component} from 'react';
import Books from './allbooks'

class Library extends Component{
    constructor(props){
        super(props);
        this.state = {
            'loggedIn': false
        }
    }
// propA = {True}
// propB ={False}
// fetch all books in the library
   
    componentDidMount(){
        fetch("http://127.0.0.1:5000/api/books?page=1&per_page=15", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }).then(
            response => response.json()  
        ).then(books => {
            this.setState({'books': books.books, 'loggedIn': this.props.loggedIn})
        })
        
    }

// render the component
    render(){
        // TODO THIS IS WHERE YOU PASS YOUR PROPS TO CHECK IF USER IS LOGGED IN

        // if(this.props.loggedIn){
        //     this.setState({'loggedIn': this.props.loggedIn})
        // }
        console.log("state being sent as props", this.state.books)
        return(
           <div>
               <p>Books in the library.</p>
               <Books bookProp = {this.state.books} loggedIn = {this.state.loggedIn}/>
           </div>
        )   
    }
}

export default Library;