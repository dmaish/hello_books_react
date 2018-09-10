import React, { Component}  from 'react';

class Modal extends Component{
    constructor(props){
        super(props);
        this.state = {
          title: "",
          author: "",
          category: "",
          url: ""
        }
    }

    // STATE CHANGE BASED ON THE MODAL RECEIVING DATA
    handleChange = (e) => {
      // preventDefault avoids the default behavior of item calling the event if it has already been utilized
      e.preventDefault()
      this.setState({
      [e.target.name]: e.target.value
    })
    }

    // API CALL AFTER MODAL FORM IS SUBMITTED
    handleSubmit = (e) => {
       // preventDefault avoids the default behavior of item calling the event if it has already been utilized
       const jwt_token = localStorage.getItem('access_token')
       e.preventDefault()
       fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: {"Content-Type": "application/json",
                        'Authorization': `Bearer ${jwt_token}`},
        body: JSON.stringify(this.state)
    }).then(response => response.json())
    .then(response => console.log(response.message))
    .then(() => {
            this.closeModal()
          })
          .then(() => this.props.updateBooks(this.state) )
    }


    // update state on the parent(adminDashboard) component to rerender and show added book
    closeModal = ()=> {
      this.props.handleClose()
    }

    render(){
      let showHideClassname = "modal display-none"
      const {show} = this.props
      const {title, author, category, url} = this.state

      if(show){
        showHideClassname = "modal display-block"
      }
        // const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div className="container">
              {/* bootstrap modal */}
              <div className={showHideClassname} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">add new book</h5>
                        <button type="button" className="close" onClick={this.closeModal} data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {/* adding book form */}
                      <form onSubmit={this.handleSubmit}>
                          <div class="form-group">
                            <label for="title">title</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            name="title" 
                            value={title}
                            onChange={this.handleChange}
                            id="title"  
                            placeholder="Enter title"/>
                          </div>

                          <div class="form-group">
                            <label for="author">author</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            name="author" 
                            value={author}
                            onChange={this.handleChange}
                            id="author" 
                            placeholder="enter author"/>
                          </div>

                          <div class="form-group">
                            <label for="author">category</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            name="category" 
                            value={category}
                            onChange={this.handleChange}
                            id="category" 
                            placeholder="category"/>
                          </div>

                          <div class="form-group">
                            <label for="author">url</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            name="url" 
                            value={url}
                            onChange={this.handleChange}
                            id="url" 
                            placeholder="enter bookcover photo url"/>
                          </div>

                        </form>
                        {/* adding book form */}
                      </div>
                      <div className="modal-footer">
            
                        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-sm">add book</button>

                      </div>
                    </div>
                  </div>
                </div>
              <section className="modal-main">
              </section>
            </div>
          )
    }
}

export default Modal;
  