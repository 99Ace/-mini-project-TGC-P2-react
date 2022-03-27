import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
// import component
import Landing from './components/Landing';
import CarListing from './components/CarListing';
import CarAdd from './components/CarAdd';
import CarUpdate from './components/CarUpdate';
// Auth Components
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';
import Profile from './components/auth/Profile';

import ShowCar from './components/ShowCar';
import CarConsign from './components/CarConsign';

// Load axios
import axios from 'axios';
// import and set up sessions
import { ReactSession } from 'react-client-session';
import ShowNav from './components/navbar/ShowNav';
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
    activeUser: "",
    loginUser: "",
    // Login
    usernameLogin: "",
    passwordLogin: "",
    // Register
    usernameReg:"",
    
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

    console.log("USER : " + ReactSession.get("activeUser"));
    if (ReactSession.get("activeUser") !== undefined) {
      this.setState({
        activeUser: ReactSession.get("activeUser")
      })
    }
  }
  // COMPONENT DID MOUNT
  async componentDidMount() {
    this.fetchData();
    this.fetchUser();
  };

  // JSX functions
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
    let response = await axios.get("https://tgc-p2-99ace.herokuapp.com/user/" + this.state.usernameLogin + "/" + this.state.passwordLogin + "/login")
    console.log(response.data)
    // save to session
    ReactSession.set(
      "activeUser", response.data.data.activeUser
    )
    // save to state
    this.setState({
      activeUser: response.data.data.username
    })
    this.setActive("profile", true)
  }
  // Logout - execute logout
  submitLogout = () => {
    // Remove the user from session
    ReactSession.remove("activeUser")
    // console.log(ReactSession.get("user"))
    this.setState({
      activeUser: ""
    })
    // Return user to home page
    this.setActive("home")
  }

  render() {
    return (
      <React.Fragment>
        <div className='container p-0'>
          <ShowNav
            setActive={this.setActive}
            activeUser={this.state.activeUser}
          />

          {this.state.nav ? this.showMiniNavbar() : null}

          {this.state.dataLoaded ?
            // Load in data when data is loaded
            <div>

              {this.state.page === "home" ?
                <Landing
                /> : null}
              {/* =========================================== */}
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
                  activeUser={this.state.activeUser}
                  submitLogout={this.submitLogout}
                  setActive={this.setActive}
                /> : null}
              {/* Register */}
              {this.state.page === "register" ?
                <Register
                  usernameReg={this.state.usernameReg}
                  updateFormField={this.updateFormField}
                /> : null}
              {/* =========================================== */}



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


              {this.state.page === "profile" ?
                <Profile
                  activeUser={this.state.activeUser}
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