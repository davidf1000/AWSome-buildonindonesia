import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../auth/assets/css/sb-admin-2.css";

const SidePanel = ({msg}) => {
  return (
    <Fragment >
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled collapse show"
        id="sidebarcollapse"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-3">
            <i className="fas fa-first-aid"></i>
            <span>Obscura</span>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </Link>
        <br />

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        <br />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i style={{fontSize:'2rem'}} className="fas fa-fw fa-tachometer-alt"></i>
            <br />

            {msg==='dashboard'?<u style={{fontSize:'0.8rem'}}>Dashboard</u> : <span style={{fontSize:'0.8rem'}}>Dashboard</span> }
           
          </Link>
        </li>
        <br />
        <li className="nav-item active">
          <Link className="nav-link" to="/visitor">
            <i style={{fontSize:'2rem'}} className="fas fa-fw fa-user-friends"></i>
            <br />

            {msg==='visitor'?<u style={{fontSize:'0.8rem'}}>Visitor Number</u> : <span style={{fontSize:'0.8rem'}}>Visitor Number</span> }

          </Link>
        </li>
        <br />
        <li className="nav-item active">
          <Link className="nav-link" to="/livestream">
            <i style={{fontSize:'2rem'}} className="fas fa-fw fa-bed"></i>
            <br />

            {msg==='livestream'?<u style={{fontSize:'0.8rem'}}>Livestream</u> : <span style={{fontSize:'0.8rem'}}>Livestream</span> }

          </Link>
        </li>

        <br />
        <li className="nav-item active">
          <Link className="nav-link" to="/regulation">
            <i style={{fontSize:'2rem'}} className="fas fa-fw fa-sliders-h "></i>
            <br />
            {msg==='regulation'?<u style={{fontSize:'0.8rem'}}>Set Rules</u> : <span style={{fontSize:'0.8rem'}}>Set Rules</span> }
          </Link>
        </li>

        <br />


        <li className="nav-item active">
          <Link className="nav-link" to="/schedules">
            <i style={{fontSize:'2rem'}} className="fas fa-fw fa-calendar-alt"></i>
            <br />

            {msg==='schedules'?<u style={{fontSize:'0.8rem'}}>Schedules</u> : <span style={{fontSize:'0.8rem'}}>Schedules</span> }
          </Link>
        </li>
      </ul>
      {/* </div> */}
    </Fragment>
  );
};

export default SidePanel;
