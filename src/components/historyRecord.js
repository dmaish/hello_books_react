import React, {Component} from "react";

class HistoryRecord extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        this.setState({"singleBook":this.props.singleBook})
    }
render(){
    const singleBook = this.state.singleBook
      if(singleBook)return(
        <tr>
        <td>{singleBook.title}</td>
        <td>{singleBook.author}</td>
        <td>{singleBook.category}</td>
        <td>{singleBook.time_borrowed}</td>
         {singleBook.return_flag ? <td>{singleBook.return_flag}</td>
        : <td><p>not returned</p></td>}
        </tr>
        
    )
    return(<tr><td>connection</td>
        </tr>)
}
}
export default HistoryRecord;
