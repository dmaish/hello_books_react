import React, {Component} from 'react';
import SingleBorrowedBook from './singleBorrowedBook'

class singleBook extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    // loading the props into the state
    componentDidMount(){
        this.setState({"allBooks":this.props.allBooks})
    }

    render(){
        const allBooks = this.props.allBooks
        console.log("lslsl", this.props.allBooks)
        if (allBooks)return (
            <table className="table table-striped table-bordered">
                        <thead>
                        </thead>
                        <tbody>
                            { console.log('allBorrowedBook', allBooks)}
                        {allBooks.map((book) => 
                            <SingleBorrowedBook book = {book} />
                            
                        )}
                        </tbody>
                    </table> 
        )
        return(<p>no props</p>)

}
}
 
export default singleBook;
