import React, { Component } from "react";
import {Router, Route} from "react-router-dom";
import SignUp from "./components/signup";
import "./App.css";
import history from "./utils/history";
import LandingPage from "./components/landingPage";
import Signin from "./components/signin"
import library from "./components/libraryComponent"
import ProfilePage from "./components/profilePage";
import ResetPassword from "./components/resetPassword";
import adminDashboard from "./adminComponents/adminDashboard";
import editPage from "./adminComponents/editPage";
import ReturnBook from "./components/returnBook";
import BorrowPage from "./components/borrowPage"

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
          <Route path="/adminDashboard" component={adminDashboard}></Route>
          <Route path="/editPage" component={editPage}></Route>
          <Route path="/returnBooks" component={ReturnBook}></Route>
          <Route path="/borrowPage" component={BorrowPage}></Route>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
