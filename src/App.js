import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import SignUp from './components/signup';
import './App.css';
import history from './utils/history';
import LandingPage from './components/landingPage';
import Signin from './components/signin'
import library from './components/libraryComponent'
import ProfilePage from './components/profilePage';
import ResetPassword from './components/resetPassword';
import bookAdd from './adminComponents/bookAdd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/signin" component={Signin}></Route>
          <Route path="/library" component={library}></Route>
          <Route path="/profilePage" component={ProfilePage}></Route>
          <Route path="/resetPassword" component={ResetPassword}></Route>
          <Route path="/bookAdd" component={bookAdd}></Route>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
