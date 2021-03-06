import React, {useState,useEffect, Fragment} from 'react';
import PropTypes from "prop-types";
import "../../auth/assets/css/sb-admin-2.css";
//Redux 
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../../../actions/auth';

const TopBar = ({ message ,burger,logOut,userName,profilePicture,isLock,userId}) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      
      {burger ? (      <button
        className="btn btn-link d-md-none dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fa fa-bars"></i>
      </button>) :(null)}
        
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link className="dropdown-item" to="/dashboard">
          Dashboard
        </Link>
        <Link className="dropdown-item" to="/visitor">
          Visitor Number
        </Link>
        <Link className="dropdown-item" to="/livestream">
          Livestream
        </Link>        
        <Link className="dropdown-item" to="/regulation">
          Set Rules
        </Link>
        <Link className="dropdown-item" to="/schedules">
          Schedules
        </Link>        

      </div>
      <h1 className="h3 mb-0 text-gray-800 mx-1">{message}</h1>
      <div  style={{width:'150px',height:"50px"}} className="mr-auto border-0 bg-white d-flex justify-content-center"  onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        {isShown &&
          (<Fragment><i className="btn mx-auto fas fa-eye fa-2x d-lg-inline d-none text-secondary ml-4" style={{fontSize:"2.5rem"}} data-toggle="collapse" href="#sidebarcollapse" ></i>
          </Fragment>)
        }       
         {isShown && isLock &&
          (<Fragment>
          <i className="btn mx-auto fas fa-user-lock fa-2x d-lg-inline d-none text-secondary ml-4" style={{fontSize:"2.5rem"}} data-toggle="collapse" href="#lockWard" ></i> </Fragment>)
        }

      </div>
      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto" >
        {/* <!-- Nav Item - User Information --> */}

        <li className="nav-item dropdown no-arrow">
          <Link
            className="nav-link dropdown-toggle"
            to={`/user/${userId}`}
            id="userDropdown"
            // role="button"
            // data-toggle="dropdown"
            // aria-haspopup="true"
            // aria-expanded="false"
          >
{!userName?<div className="spinner-border mr-2 mb-1" role="status" style={{fontSize:"1rem",height:"15px",width:"15px"}}>
  <span className="sr-only">Loading...</span>
</div>:(          <Fragment>
            <img
              className="img-profile rounded-circle mx-1 center"
              src={profilePicture}
              style={{width:"32px",height:"32px"}}
              
            />
            <span className="mx-1 d-lg-inline d-none text-gray-600 small">
              {userName}
            </span>
            </Fragment>)}
          </Link>
        </li>
        <div className="topbar-divider  d-sm-block mr-1"></div>
        <li className="nav-item dropdown no-arrow">
          <Link
            className="nav-link"
            onClick={logOut}
            to="/"
          >
            <i className="fas fa-sign-out-alt fa-sm"></i>
            <span className="mr-0 d-none d-lg-inline text-gray-600 small">
              Logout
            </span>
          </Link>
        </li>
        <li className="nav-item dropdown no-arrow">
          <Link
            className="nav-link"
            to="/"
          >
            <i className="fas fa-home fa-sm"></i>
            <span className="mr-0 d-none d-lg-inline text-gray-600 small">
              Home
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

TopBar.propTypes = {
  logOut :PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  userName: state.auth.attributes.name,
  profilePicture:state.auth.attributes.profile,
  userId:state.auth.attributes.userId
});

export default connect(mapStateToProps,{logOut})(TopBar);
