import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
// import component
import Landing from './components/Landing';
import CarListing from './components/CarListing';
import CarAdd from './components/CarAdd';
import CarUpdate from './components/CarUpdate';
// Auth Components
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Profile from './components/Profile';

import ShowCar from './components/ShowCar';
import CarConsign from './components/CarConsign';

// Load axios
import axios from 'axios';
// import and set up sessions
import { ReactSession } from 'react-client-session';
ReactSession.setStoreType("localStorage");
// import encrypt


export default class App extends React.Component {
  state = {
    // data : load in data; tracker for data loaded
    dataUser: [],
    dataCar: [],
    dataLoaded: false,
    // navbar : page tracker
    page: "home",
    nav: true,

    // ===AUTH=== 
    user:"",
    loginUser: "",
    // Login
    usernameLogin: "",
    passwordLogin: "",
  };

  // base URL
  baseURL = "https://tgc-p2-99ace.herokuapp.com";

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  setActive = (page, nav) => {
    if (window.screen.width < 992 && page !== "home") {
      nav = false
    } else { nav = true }
    this.setState({
      page: page,
      nav: nav
    })
  };
  loadingPage = () => {
    return (
      <React.Fragment>
        <h3> loading.. </h3>
      </React.Fragment>
    )
  };

  fetchData = async () => {
    let res1 = await axios.get('https://tgc-p2-99ace.herokuapp.com/admin/owners');
    let res2 = await axios.get('https://tgc-p2-99ace.herokuapp.com/car/listing');

    console.log(res1, res2);

    this.setState({
      dataUser: res1.data,
      dataCar: res2.data,
      dataLoaded: true,
    });
  };
  fetchUser = () => {
    let user =  ReactSession.get("username")
    console.log("USER : " + user);
  }
  // COMPONENT DID MOUNT
  async componentDidMount() {
    this.fetchData();
    this.fetchUser();
  };

  // JSX functions
  showNavbar = () => {
    return (
      <React.Fragment>

        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* logo */}
            <button className="navbar-brand" onClick={() => { this.setActive("home", true) }}>
              <img src={require("./images/logo.png")} alt="Mikar *9 Logo" />
            </button>
            {/* search */}
            <div>
              {/* search button */}
              <button 
                className="btn p-0 text-danger ms-2 ms-md-3" 
                type="submit">
                <i className="fas fa-search nav-icon"></i>
              </button>

              {/* login button */}
              <button
                onClick={() => { this.setActive("login", true) }}
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
                onClick={() => { this.setActive("profile", true) }}
                className="btn p-0 text-muted ms-2 ms-md-3"
                type="button"
                databstoggle="tooltip"
                databsplacement="bottom"
                title="Register">
                <i className="fa-solid fa-address-card nav-icon"></i>
              </button>

              {/* logout button */}
              <button
                onClick={() => { this.setActive("logout", true) }}
                className="btn p-0 text-danger ms-2 ms-md-3"
                type="button"
                databstoggle="tooltip"
                databsplacement="bottom"
                title="Logout">
                <i className="fa-solid fa-key nav-icon"></i>
              </button>

              {/* Profile button */}
              <button
                onClick={() => { this.setActive("profile", true) }}
                className="btn p-0 text-danger ms-2 ms-md-3"
                type="button"
                databstoggle="tooltip"
                databsplacement="bottom"
                title="Profile">
                <i className="fa-solid fa-user nav-icon"></i>
              </button>
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
  showMiniNavbar = () => {
    return (
      <React.Fragment>

        {/* <!-- mini navbar --> */}
        <nav id="mini-nav" className="container-fluid p-2 px-lg-0 pb-0">
          <div className="row px-lg-0 mx-auto">
            {/* <!-- Home --> */}
            <button onClick={() => { this.setActive("home", true) }} id="nav-home" ><i className="fas fa-car"></i></button>
            {/* <!-- Quote --> */}
            <button onClick={() => { this.setActive("quote", true) }} className="col-6 col-md-3 col-lg border mini-nav" id={this.state.page === "quote" ? "active" : null}>
              <img src={require("./images/bmw.png")} className="mini-nav-img" alt="" />
              Get Quote
            </button>
            {/* <!-- Consign --> */}
            <button onClick={() => { this.setActive("consign", true) }} className="col-6 col-md-3 col-lg border mini-nav" id={this.state.page === "consign" ? "active" : null}>
              <img src={require("./images/bmw.png")} className="mini-nav-img" alt="" />
              Consign
            </button>
            {/* <!-- New Cars  --> */}
            <button onClick={() => { this.setActive("new_car", true) }} className="col-6 col-md-3 col-lg border mini-nav" id={this.state.page === "new_car" ? "active" : null}>
              <img src={require("./images/bmw-m2.png")} className="mini-nav-img" alt="" />
              New Car
            </button>
            {/* <!-- Used Car --> */}
            <button onClick={() => { this.setActive("listing", true) }} className="col-6 col-md-3 col-lg border mini-nav" id={this.state.page === "listing" ? "active" : null}>
              <img src={require("./images/bmw-m2.png")} className="mini-nav-img" alt="" />
              Used Cars
            </button>
            {/* <!-- Insurance --> */}
            <button onClick={() => { this.setActive("insurance", true) }} className="col-6 col-md-3 col-lg border mini-nav" id={this.state.page === "insurance" ? "active" : null}>
              <img src={require("./images/bmw.png")} className="mini-nav-img" alt="" />
              Insurance
            </button>
            {/* <!-- Workshop --> */}
            <button onClick={() => { this.setActive("workshop", true) }} className="col-6 col-md-3 col-lg border mini-nav" id={this.state.page === "workshop" ? "active" : null}>
              <img src={require("./images/bmw.png")} className="mini-nav-img" alt="" />
              Workshop
            </button>
            {/* <!-- Loan --> */}
            <button onClick={() => { this.setActive("loan", true) }} className="col-6 col-md-3 col-lg border mini-nav" id={this.state.page === "loan" ? "active" : null}>
              <img src={require("./images/bmw-m2.png")} className="mini-nav-img" alt="" />
              Car Loan
            </button>
            {/* <!-- Forms --> */}
            <button onClick={() => { this.setActive("resources", true) }} className="col-6 col-md-3 col-lg border mini-nav" id={this.state.page === "resources" ? "active" : null}>
              <img src={require("./images/bmw-m2.png")} className="mini-nav-img" alt="" />
              Resources
            </button>
          </div>
        </nav>

      </React.Fragment>
    )
  }
  showFooter = () => {
    return (
      <React.Fragment>
        <footer className="container-fluid mt-4 bg-dark text-light px-2 py-4">
          <div className="row">
            <div className="col-12">
              <h6>Mikar <span className="text-danger">*</span>9 Pte Ltd</h6>
            </div>
            <div className="col-12">
              Contact: <a className="text-light" href="tel:+6593632020">+65 9363 2020</a><br />
              Email: <a className="text-light" href="mailto:admin@mikar9.com">admin@mikar9.com</a>
            </div>

            <div className="col">
              <h6 className="text-center text-secondary mt-3">Design and build especially for drivers</h6>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }

  // Auth Functions
  // Login - execute login 
  submitLogin = async () => {
    console.log(this.state.usernameLogin, this.state.passwordLogin)
    // check if user can login
    let response = await axios.get("https://tgc-p2-99ace.herokuapp.com/user/"+this.state.usernameLogin+"/"+this.state.passwordLogin+"/login")
    console.log(response.data)
    // save to session
    ReactSession.set(
      "user", response.data.data.username
    )
    // save to state
    this.setState({
      user: response.data.data
    })
    this.setActive("profile", true)
  }
  // Logout - execute logout
  submitLogout= () => {
    // Remove the user from session
    ReactSession.remove("user")
    // console.log(ReactSession.get("user"))

    // Return user to home page
    this.setActive("home")
  }

  render() {
    return (
      <React.Fragment>
        <div className='container p-0'>
          {this.showNavbar()}

          {this.state.nav ? this.showMiniNavbar() : null}

          {this.state.dataLoaded ?
            // Load in data when data is loaded
            <div>

              {this.state.page === "home" ?
                <Landing
                /> : null}

              {/* AUTH ROUTES */}
              {/* Login */}
              {this.state.page === "login" ?
                <Login
                  usernameLogin={this.state.usernameLogin}
                  passwordLogin={this.state.passwordLogin}
                  updateFormField={this.updateFormField}
                  submitLogin={this.submitLogin}
                  setActive={this.setActive}
                /> : null}
                {/* Logout */}
                {this.state.page === "logout" ?
                <Logout
                  submitLogout={this.submitLogout}
                  setActive={this.setActive}
                /> : null}

              {this.state.page === "carlisting" ?
                <CarListing
                  setActive={this.setActive}
                /> : null}
              {this.state.page === "carAdd" ?
                <CarAdd
                /> : null}
              {this.state.page === "carUpdate" ?
                <CarUpdate
                /> : null}
              {this.state.page === "consign" ?
                <CarConsign
                /> : null}

              {this.state.page === "register" ?
                <Register
                /> : null}
              {this.state.page === "profile" ?
                <Profile
                /> : null}
              {this.state.page === "showcar" ?
                <ShowCar
                /> : null}

            </div>
            :
            this.loadingPage()}
          {this.showFooter()}
        </div>
      </React.Fragment>
    )
  };
};