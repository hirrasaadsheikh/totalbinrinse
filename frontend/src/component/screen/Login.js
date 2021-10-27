import { signin, autheticate, isAuth } from "../../action/authAction";
import React, { useState, useEffect } from "react";
import {Link, withRouter} from "react-router-dom";


const Login = ({ history }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && history.push("/");
  });

  const handleSubmit = (e) => {
    e.preventDefault();


    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then((data) => {
      try {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          //save user token to cookie
          //save user info to localStorage
          //authenticate user
          autheticate(data, () => {
            if (isAuth() && isAuth().isAdmin === true) {
              history.push("/admin");
            } else {
              history.push("/user");
            }
          });
        }
      } catch (err) {
        console.log(err);
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const signinForm = () => {
    return (
      <>
        <div className= "flex">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col s12" style={{ paddingLeft: "12px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="black-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <input
              value={email}
              onChange={handleChange("email")}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
            <br />

            <input
              value={password}
              onChange={handleChange("password")}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <br />
          <button style={{width: "100%", fontSize: "15px"}} className="btn btn-primary">LOGIN</button>

        </form>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      {showLoading()}
      {showError()}
      {showMessage()}
      {showForm && signinForm()}
    </div>
  );
};

export default withRouter(Login);
