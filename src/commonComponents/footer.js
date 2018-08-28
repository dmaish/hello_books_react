import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
                    <footer class="footer">
                        <div class="container">
                            <ul class="list-inline mb-0 text-center">
                                <li class="list-inline-item"><span class="fa fa-twitter"></span></li>
                                <li class="list-inline-item"><span class="fa fa-google-plus"></span></li>
                                <li class="list-inline-item"><span class="fa fa-instagram"></span></li>
                                <li class="list-inline-item"><span class="fa fa-envelope-o"></span></li>
                             </ul>
                         </div>
                    </footer>
        )
    }
}

export default Footer;