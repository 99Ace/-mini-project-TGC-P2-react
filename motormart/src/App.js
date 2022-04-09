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

import ShowNav from './components/navbar/ShowNav';

// Load axios
import axios from 'axios';

// import and set up sessions
import { ReactSession } from 'react-client-session';
ReactSession.setStoreType("localStorage");

export default class App extends React.Component {
  state = {
    // data : load in data; tracker for data loaded
    dataCar: [],
    dataLoaded: false,
    // navbar : page tracker
    page: "home",
    nav: true,

    // ===AUTH===
    userData: [], // tracker for login
    message: [],
    auth: false,
    activeUser: ""
  };

  // base URL for testing with heroku deployed API
  // baseURL = "https://tgc-p2-99ace.herokuapp.com";

  // Route for testing with express in development API 
  baseURL = "https://3001-99ace-miniprojecttgcp-leqq5j6lxcz.ws-us39.gitpod.io";

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  setActive = (page, nav) => {
    console.log("nav passed to setActive:", nav, page)
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    // console.log("View width:",vw)
    if (vw < 992 && page !== "home") {
      nav = false
    } else { nav = true }
    this.setState({
      page: page,
      nav: nav,
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

    let result = await axios.get(this.baseURL + '/car/search');
    // console.log(result.data)
    this.setState({
      dataCar: result.data,
      dataLoaded: true,
    });
  };
  fetchUser = async () => {
    let userId = ReactSession.get("userId")
    console.log("FetchUser=>", userId)
    if (userId !== undefined) {
      console.log(this.baseURL + `/user/${userId}/profile`);
      let result = await axios.get(this.baseURL + `/user/${userId}/profile`);
      console.log("Retrieve profile=>", result.data)
      if (result.data.auth) {
        this.setState({
          userData: result.data.userData,
          auth: result.data.auth,
          message: result.data.message,
          activeUser: result.data.userData.username
        })
      }
      else {
        ReactSession.remove("userId")
      }
    }
    else {

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
  submitLogin = async (data) => {
    let username = data.username;
    let password = data.password;
    console.log(data)
    // GET : LOGIN RESPONSE
    let result = await axios.get(this.baseURL + `/user/${username}/${password}/login`);
    console.log(result.data)
    let userData = result.data.userData;
    let auth = result.data.auth;
    let message = result.data.message;
    console.log(auth)
    if (auth) {
      // # save to session
      ReactSession.set(
        "userId", userData._id
      )
      // save to state: userData and message[]
      this.setState({
        userData,
        message,
        auth,
        activeUser: userData.username
      });
      // redirect to profile page
      this.setActive("profile", false);
    }
    else {
      this.setState({
        message,
        auth,
        activeUser: ""
      })
      this.setActive("login", true)
    }
  }
  // Logout - execute logout
  submitLogout = async () => {
    let userId = ReactSession.get("userId")
    console.log("Logout=>", userId)
    // call to logout from server
    let result = await axios.put(this.baseURL + `/user/${userId}/logout`)
    console.log(result.data)
    // let message = result.data.message
    let message = []
    // // Remove the user from session
    ReactSession.remove("userId")

    this.setState({
      userData: [], // tracker for login
      message,
      auth: false,
      activeUser: ""
    })
    // Return user to home page
    this.setActive("home", true)
  }
  // REGISTER - Register New User (TEST: * )
  submitRegister = async (newData) => {
    let newUser = {
      username: newData.username,
      email: newData.email,
      contact: newData.contact,
      password: newData.password,
      passwordConfirm: newData.passwordConfirm,
      ownCar: newData.ownCar,
      carPlate: newData.carPlate,
      ownerIdType: newData.ownerIdType,
      ownerId: newData.ownerId
    }
    // REGISTER TO SERVER
    console.log(this.baseURL + "/user/register")
    let result = await axios.post(this.baseURL + "/user/register", newUser)
    let userData = result.data.userData;
    let auth = result.data.auth;
    let message = result.data.message;
    console.log(result.data)

    // IF RESPONSE IS true; USER IS LOGIN
    if (auth) {
      console.log("Register =>", userData._id)
      // # save to session
      ReactSession.set(
        "userId", userData._id
      )

      // save to state: userData and message[]
      this.setState({
        userData,
        message,
        auth,
        activeUser: userData.username
      });
      // redirect to profile page
      this.setActive("profile", false);

    }
    else {
      this.setState({
        message,
        auth,
        activeUser: null
      })
      this.setActive("register", true)
    }
  }
  oneCarListing = async (car) => {

  }
  updateCar = async (data) => {
    console.log(data)
    // redirect to profile page
    this.setActive("profile", false);
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
                  message={this.state.message}
                  auth={this.state.auth}
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
                  submitRegister={this.submitRegister}
                  setActive={this.setActive}
                  auth={this.state.auth}
                  message={this.state.message}
                /> : null}
              {/* Profile */}
              {this.state.page === "profile" ?
                <Profile
                  userData={this.state.userData}
                  message={this.state.message}
                  auth={this.state.auth}
                  page="inventory"
                  updateCar={this.updateCar}
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