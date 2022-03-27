import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function ShowNav(props) {
  return (
    <React.Fragment>

      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* logo */}
          <button className="navbar-brand" onClick={() => { props.setActive("home") }}>
            <img src={require("../../images/logo.png")} alt="Mikar *9 Logo" />
          </button>

          <div>
            {/* search button */}
            <button
              className="btn p-0 text-danger ms-2 ms-md-3"
              type="submit">
              <i className="fas fa-search nav-icon"></i>
            </button>

            {
              // when use is logged in: show Logout and Profile button
              props.activeUser !== "" ?
                <React.Fragment>
                  {/* logout button */}
                  <button
                    onClick={() => { props.setActive("logout") }}
                    className="btn p-0 text-danger ms-2 ms-md-3"
                    type="button"
                    databstoggle="tooltip"
                    databsplacement="bottom"
                    title="Logout">
                    <i className="fa-solid fa-key nav-icon"></i>
                  </button>

                  {/* Profile button */}
                  <button
                    onClick={() => { props.setActive("profile") }}
                    className="btn p-0 text-danger ms-2 ms-md-3"
                    type="button"
                    databstoggle="tooltip"
                    databsplacement="bottom"
                    title="Profile">
                    <i className="fa-solid fa-user nav-icon"></i>
                  </button>
                </React.Fragment>
                :
                <React.Fragment>
                  {/* login button */}
                  <button
                    onClick={() => { props.setActive("login") }}
                    className="btn p-0 text-muted ms-2 ms-md-3"
                    type="button"
                    databstoggle="tooltip"
                    databsplacement="bottom"
                    title="Login">
                    <i className="fa-solid fa-key nav-icon"></i>
                    {/* <i class="fa-solid fa-lock-keyhole nav-icon"></i> */}
                  </button>

                  {/* register button */}
                  <button
                    onClick={() => { props.setActive("register") }}
                    className="btn p-0 text-muted ms-2 ms-md-3"
                    type="button"
                    databstoggle="tooltip"
                    databsplacement="bottom"
                    title="Register">
                    <i className="fa-solid fa-address-card nav-icon"></i>
                  </button>
                </React.Fragment>

            }

          </div>

          {/* <button className="navbar-toggler ms-2 ms-md-2 p-0 border-0" type="button" dataBsToggle="collapse"
              dataBsTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false"
              ariaLabel="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <div className="btn btn-outline-quote">Quote Car</div>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <div className="btn btn-outline-consign">Consignment</div> 
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-user text-danger"></i>
                  </a>
                </li>
              </ul>
            </div> */}
        </div>
      </nav>

    </React.Fragment>
  )
}