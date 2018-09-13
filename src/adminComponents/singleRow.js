import React, { Component } from "react";
import {Link} from "react-router-dom";

class singleBookRow extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
        this.setState({"book": this.props.book})
    }

    render(){
        const {book} = this.state
        if(book)return(
            <tr id='bookRow'>
            <td>{book.author}</td>
            <td>{book.title}</td>
            <td>{book.category}</td>
            <td>   
            <Link to={{
                pathname: "/editPage",
                book: {"id": book.id, "author": book.author, "title": book.title, "category": book.category, "url": book.url}
                }}>  
                <button type="button" className="btn" onClick={this.EditPage}><i class="fas fa-edit"></i></button>
                </Link>

            <Link to={{
                pathname: "/deletePage",
                book: {"id": book.id, "author": book.author, "title": book.title, "category": book.category, "url": book.url}
                }}>  
                <button type="button" className="btn"><i class="fas fa-trash"></i></button> 
                </Link>

            </td>
            </tr>
        )
        return(
            <div>check you connections</div>
        )
    }
}
export default singleBookRow;