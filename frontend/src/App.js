import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./component/screen/Landing";
import Register from "./pages/SignUp";
import Login from "./pages/SignIn";
import Footer from "./component/screen/Footer";
import Admin from "./component/admin/AdminDashboard";
import User from "./component/user/userDashboard";
import cart from "./component/screen/cart";
import Page404 from "./component/screen/Page404";
import contact from "./component/screen/contact";
import about from "./component/screen/about"
import Protected from "./component/private/Protected";
import "./App.css"


const App = () => {

  return (
    <div className="App">
      <Router>
        <Protected />
        <Switch>
          <Route exact = {true} path= {"/"} component={Landing} />
          <Route exact = {true} path= {"/register"} component={Register} />
          <Route exact = {true} path= {"/login"} component={Login} />
          <Route exact = {true} path= {"/admin"} component={Admin}  />
          <Route exact = {true} path= {"/user"} component={User}  />
          <Route exact = {true} path= {"/cart"} component={cart} />
          <Route exact = {true} path= {"/contact"} component={contact} />
          <Route exact = {true} path= {"/about"} component={about} />
          <Route exact= {true} path={"*"} component={Page404}/>
      </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
