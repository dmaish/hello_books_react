import React, {Component} from "react";
import AllBooks from "./allbooks"

class Library extends Component{
    constructor(props){
        super(props);
        this.state = {
            "loggedIn": false
        }
    }
// fetch all books in the library
    componentDidMount(){
        this.getBooks();
    }
   
    getBooks=()=>{
        fetch("http://127.0.0.1:5000/api/books?page=1&per_page=60", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }).then(
            response => response.json()  
        ).then(books => {
            this.setState({"books": books.books, "loggedIn": this.props.loggedIn})
        })

    }
    
// render the component
    render(){
        const {books} = this.state
        if(books)return(
           <div>
               <p>Books in the library.</p>
               <AllBooks booksProp = {books} loggedIn = {this.state.loggedIn} reGetBooks={this.getBooks}/>
           </div>
        )
        return(<div>check you connections </div>)
    }
}

export default Library;