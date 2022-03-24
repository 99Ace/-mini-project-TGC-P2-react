import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
// import component
import Landing from './components/Landing';
import Listing from './components/Listing';
import CarAdd from './components/CarAdd';
import CarUpdate from './components/CarUpdate';
import Login from './components/Login';
import Register from './components/Register';
// Load axios
import axios from 'axios'

export default class App extends React.Component {
  state = {
    // data : load in data; tracker for data loaded
    dataUser: [],
    dataCar: [],
    dataLoaded: false,
    // navbar : page tracker
    page: "landing"
  };

  // base URL
  baseURL = "https://tgc-p2-99ace.herokuapp.com";

  setActive = (page) => {
    this.setState({
      'active': page
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
    let response1 = await axios.get('https://tgc-p2-99ace.herokuapp.com/admin/owners');
    let response2 = await axios.get('https://tgc-p2-99ace.herokuapp.com/admin/owners');


    this.setState({
      dataUser: response1.data,
      dataLoaded: true,
    });
  };
  showNavbar = () => {
    return (
      <React.Fragment>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-md-3 ">
          <div className="container-fluid">
            {/* logo */}
            <a className="navbar-brand" href="#">
              <img src={require("./images/logo.png")} alt="Mikar *9 Logo" />
            </a>
            {/* search */}
            <form className="ms-auto">
              {/* search button */}
              <button className="btn text-dark" type="submit">
                <i className="fas fa-search nav-icon"></i>
              </button>
              {/* login button */}
              <button className="btn text-dark" type="submit">
                <i className="fa fa-user ms-2 text-danger nav-icon"></i>
              </button>
            </form>

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

        {/* <!-- mini navbar --> */}
        <nav id="mini-nav" className="container-fluid p-2 px-lg-0">
          <div className="row px-lg-0 mx-auto">
            {/* <!-- Home --> */}
            <div href="" id="nav-home"><i className="fas fa-car"></i></div>
            {/* <!-- Quote --> */}
            <a href="" className="col-6 col-md-4 col-lg border">
              <img src={require("./images/bmw.png")} className="mini-nav-img" alt="" />
              Get Quote
            </a>
            {/* <!-- Consign --> */}
            <a href="" className="col-6 col-md-4 col-lg border">
              <img src={require("./images/bmw.png")} className="mini-nav-img" alt="" />
              Consign
            </a>
            {/* <!-- New Cars  --> */}
            {/* <!-- <a href="" className="col-6 col-md-3 col-lg border">
              <img src="assets/images/bmw.png" className="mini-nav-img" alt=""/>
                New Cars
            </a> --> */}
            {/* <!-- Used Car --> */}
            <a href="" className="col-6 col-md-4 col-lg border">
              <img src={require("./images/bmw-m2.png")} className="mini-nav-img" alt="" />
              Used Cars
            </a>
            {/* <!-- Insurance --> */}
            <a href="" className="col-6 col-md-4 col-lg border">
              <img src={require("./images/bmw.png")} className="mini-nav-img" alt="" />
              Insurance
            </a>
            {/* <!-- Workshop --> */}
            <a href="" className="col-6 col-md-4 col-lg border">
              <img src={require("./images/bmw.png")} className="mini-nav-img" alt="" />
              Workshop
            </a>
            {/* <!-- Loan --> */}
            <a href="" className="col-6 col-md-4 col-lg border">
              <img src={require("./images/bmw-m2.png")} className="mini-nav-img" alt="" />
              Car Loan
            </a>
            {/* <!-- Forms --> */}
            {/* <!-- <a href="" className="col-6 col-md-3 col-lg border">
              <img src="assets/images/bmw.png" className="mini-nav-img" alt="">
                Resources
            </a> --> */}
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
  async componentDidMount() {
    this.fetchData();
  };
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid p-0'>
          {this.showNavbar()}
          {this.state.dataLoaded ?
            // Load in data when data is loaded
            <div>

              {this.state.page === "landing" ?
                <Landing /> :
                this.state.page === "listing" ?
                  <Listing /> :
                  this.state.page === "carAdd" ?
                  <CarAdd /> :
                  this.state.page === "carUpdate" ?
                  <CarUpdate /> :
                  this.state.page === "login" ?
                  <Login /> :
                  this.state.page === "register" ?
                  <Register/> :
                  null
              }



            </div>
            :
            this.loadingPage()}
          {this.showFooter()}
        </div>
      </React.Fragment>
    )
  };
};