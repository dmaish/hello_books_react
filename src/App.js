import React, { Component } from "react";
import {Router, Route, Redirect} from "react-router-dom";
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
import AddPage from "./adminComponents/addPage"
import DeletePage from "./adminComponents/deletePage"
import PrivateRoute from "./utils/privateRoute"

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
          <PrivateRoute path="/profilePage" component={ProfilePage}/>
          <PrivateRoute path="/resetPassword" component={ResetPassword}/>
          <PrivateRoute path="/adminDashboard" component={adminDashboard}/>
          <PrivateRoute path="/editPage" component={editPage}/>
          <PrivateRoute path="/returnBooks" component={ReturnBook}/>
          <PrivateRoute path="/borrowPage" component={BorrowPage}/>
          <PrivateRoute path="/addPage" component={AddPage}/>
          <PrivateRoute path="/deletePage" component={DeletePage}/>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
