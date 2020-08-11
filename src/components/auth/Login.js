import React, { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
// Import CSS
import "./assets/css/sb-admin-2.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
//Redux
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TopBarGuest from "../dashboard/TopBarGuest";
// Actions
import { loadUser, loginCognito } from "../../actions/auth";

const Login = ({ loginCognito, isAdmin, isAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pressed,setPressed]=useState(false);
  useEffect(() => {
    setPressed(false);
  }, []);
  //State

  const onSubmit = (e) => {
    e.preventDefault();
    setPressed(true);
    loginCognito(email, password);
  };
  if (isAuthenticated && isAdmin !== null) {
    if (isAdmin) {
      return <Redirect to="/dashboard" />;
    } else {
      return <Redirect to="/book" />;
    }
  }
  return (
    <Fragment>
      <Helmet>
        <style>{"body { background-color: #4E73DF }"}</style>
      </Helmet>
      <div className="wrapper">
        <TopBarGuest message="Obscura" burger={false} />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>

                    <div className="col-lg-6 text-center" style={{height:"650px"}}>
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-5 mt-5">
                            Welcome Back!
                          </h1>
                        </div>
                        <form className="user" onSubmit={onSubmit}>
                          <div className="form-group">
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              className="form-control form-control-user mb-4"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Enter Email Address..."
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              className="form-control form-control-user mb-0"
                              id="exampleInputPassword"
                              placeholder="Password"
                            />
                          </div>
                          <br />

                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block mb-3 mt-0"
                          >
                            Login
                          </button>
                          { pressed ?                          <div className="spinner-border visible mb-3" role="status">
                            <span span className="sr-only">
                              Loading...
                            </span>
                          </div> : null

                }
                        </form>
                        <hr className="mb-3" />
                        <div className="text-center my-4">
                          <small>Don't Have an Account ? </small>
                          <Link className="small" to="/register">
                            Create an Account!
                          </Link>
                        </div>
                        <div className="text-center my-3">
                          <Link className="small" to="/forgot-password">
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
Login.propTypes = {
  loadUser: PropTypes.func.isRequired,
  loginCognito: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isAdmin: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.isAdmin,
});

export default connect(mapStateToProps, { loadUser, loginCognito })(Login);
