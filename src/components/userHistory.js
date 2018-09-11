import React, {Component} from 'react';
import HistoryRecord from './historyRecord';

export const fetchData = () => {
    const jwt_token = localStorage.getItem('access_token')
    return fetch("http://127.0.0.1:5000/api/users/books", {
        method: "GET",
        headers: {"Content-Type": "application/json",
                    'Authorization': `Bearer ${jwt_token}`}
    })
}

class BorrowHistory extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    // get user's borrowing history
    componentDidMount(){
        fetchData()
       .then(response => response.json())
        .then(response =>{
            this.setState({"historyRecords":response.borrowing_history})
        })
    }

    render(){
        const historyRecords = this.state.historyRecords
        if(historyRecords)return(
            <table id='recordTable' className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">author</th>
                            <th scope="col">title</th>
                            <th scope="col">category</th>
                            <th scope="col">time borrowed</th>
                            <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyRecords.map((book, key) =>
                            <HistoryRecord singleBook={book}/>
                            )}
                        </tbody>
            </table>
        )
        return(<p> check your connection </p>)
}


}
export default BorrowHistory;