import React, { useEffect, useState } from "react";
import { isAuth, signup } from "../../action/authAction";
import {Link, withRouter} from "react-router-dom";


const SignUpComponent = ({ history }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, address, contact, password,  error, loading, message, showForm } = values;
  useEffect(() => {
    isAuth() && history.push("/");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, address, contact, password,  error, loading, message, showForm });

    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password, address, contact};

    try {
      signup(user).then((data) => {
        try {
          if (data.error) {
            setValues({ ...values, error: data.error, loading: false });
            console.log("server error");
          } else {
            setValues({
              ...values,
              name: "",
              email: "",
              address: "",
              contact: "",
              password: "",
              error: "",
              loading: false,
              message: data.message,
              showForm: false,
            });
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("Error something");
    }
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

  const signupForm = () => {
    return (
      <>
        <div className= "flex">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col s12" style={{ paddingLeft: "12px", marginTop: "10%" }}>
              <h4>Register Below</h4>
              <p className="grey-text text-darken-4">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <input
              value={name}
              onChange={handleChange("name")}
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
            <br />

            <input
              value={email}
              onChange={handleChange("email")}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
            <br />

            <input
                value={address}
                onChange={handleChange("address")}
                type="address"
                className="form-control"
                placeholder="Enter address"
            />
            <br />

           <input
                value={contact}
                onChange={handleChange("contact")}
                type="contact"
                className="form-control"
                placeholder="Contact Number"
            />
            <br />

            <input
              value={password}
              onChange={handleChange("password")}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />

            <br />

          </div>
          <br />

          <button style={{width: "100%", fontSize: "15px"}} className="btn btn-primary">SIGN UP</button>

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
      {showForm && signupForm()}
    </div>
  );
};

export default withRouter(SignUpComponent);
