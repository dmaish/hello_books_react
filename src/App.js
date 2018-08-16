import React, { Component } from 'react';
import {Router, Route} from "react-router-dom";
import SignUp from "./components/signup";
import './App.css';
import history from "./utils/history";
import LandingPage from './components/landing_page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/signup" component={SignUp}></Route>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
