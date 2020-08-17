import React, {useState,useEffect, Fragment} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from 'react-helmet';
// Import CSS
import './assets/css/sb-admin-2.css';
import "./assets/vendor/fontawesome-free/css/all.min.css";

//Redux 
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import {loadUser} from '../../actions/auth';


const ForgotPassword= ({})=>{
    useEffect(()=>{
        loadUser();
    },[]);
  //State
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit= (e)=>{
    e.preventDefault();
  }
  return (
    <Fragment >
                <Helmet>
                <style>{'body { background-color: #4E73DF }'}</style>
            </Helmet>

        <div className="container">

<div className="row justify-content-center">

  <div className="col-xl-10 col-lg-12 col-md-9">

    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
          
          <div className="col-lg-6">
            <div className="p-5">
            <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                    <p className="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                  </div>
                  <form className="user">
                    <div className="form-group">
                      <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                    </div>
                    <a href="login.html" className="btn btn-primary btn-user btn-block">
                      Reset Password
                    </a>
                  </form>
                  <hr />
                  <div className="text-center my-4">
                <small>Don't Have an Account ? </small>
                <Link className="small" to="/register">Create an Account!</Link>
              </div>
              <div className="text-center my-3">
                <Link className="small" to="/forgot-password">Forgot Password?</Link>
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
}
ForgotPassword.propTypes = {

  }
  
  const mapStateToProps = state => ({
  });
  
export default connect(mapStateToProps,{})(ForgotPassword);

