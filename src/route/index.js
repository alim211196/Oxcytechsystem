import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import SignIn from "../component/SignIn";
import UserDetailsForm from "../component/UserDetailsForm";
 const App = () =>{
    return (
      <Router >
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>       
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route exact path="/CreateForm">
              <UserDetailsForm />
            </Route>
          </Switch>
        
      </Router>
    );
  }
  export default App