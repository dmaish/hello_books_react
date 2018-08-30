import React, {Component} from 'react';

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
    console.log("is this empty?",this.state.singleBook)
    const singleBook = this.state.singleBook
      if(singleBook)return(
        <tr>
        <td>{singleBook.title}</td>
        <td>{singleBook.author}</td>
        <td>{singleBook.category}</td>
        <td>{singleBook.time_borrowed}</td>
        <td>{singleBook.return_flag}</td>
        </tr>
        
    )
    return(<tr><td>no rows</td>
        </tr>)
}
}
export default HistoryRecord;
