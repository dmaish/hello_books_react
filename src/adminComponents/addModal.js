import React, { Component}  from 'react';

class Modal extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
      let showHideClassname = "modal display-none"
      const {show} = this.props

      if(show){
        showHideClassname = "modal display-block"
      }
        // const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div className="container">
              {console.log('we gettin')}
              <div class={showHideClassname} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">add new book</h5>
                        <button type="button" class="close" onClick={this.props.handleClose} data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" onClick={this.props.handleClose} data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">add book</button>
                      </div>
                    </div>
                  </div>
                </div>
              <section className="modal-main">
                {this.props.children}
              </section>
            </div>
          )
    }
}

export default Modal;
  