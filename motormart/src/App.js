import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import Landing from './components/Landing';
import axios from 'axios'

export default class App extends React.Component {
  state = {
    data: [],
    dataLoaded: false
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
    let response = await axios.get('https://tgc-p2-99ace.herokuapp.com/admin/owners');
    console.log(response.data)
    this.setState({
      // data : load in data; tracker for data loaded
      data: response.data,
      dataLoaded: true,
      // navbar : page tracker
      page: 1
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
            <a className="d-md-none" href="#">
              {/* <i className="fa fa-user text-danger"></i> */}
              <i className="fa-regular fa-user nav-icon"></i>
            </a>
            {/* search */}
            <form className="d-none d-md-flex d-lg-none ms-auto">
              <button className="btn text-dark" type="submit">
                <i className="fas fa-search"></i>
                <i className="fa fa-user ms-2 text-danger"></i>
              </button>
            </form>

            <button className="navbar-toggler ms-2 ms-md-2 p-0 border-0" type="button" dataBsToggle="collapse"
              dataBsTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false"
              ariaLabel="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {/* <div className="btn btn-outline-quote"> */}
                    {/* Quote Car */}
                    {/* </div> */}
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {/* <div className="btn btn-outline-consign">Consignment</div>  */}
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-user text-danger"></i>
                  </a>
                </li>
              </ul>
            </div>
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
              <img src={ require ("./images/bmw.png") } className="mini-nav-img" alt=""/>
              Insurance
            </a>
            {/* <!-- Workshop --> */}
            <a href="" className="col-6 col-md-4 col-lg border">
              <img src={ require ("./images/bmw.png") } className="mini-nav-img" alt=""/>
              Workshop
            </a>
            {/* <!-- Loan --> */}
            <a href="" className="col-6 col-md-4 col-lg border">
            <img src={ require ("./images/bmw-m2.png") } className="mini-nav-img" alt=""/>
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
  async componentDidMount() {
    this.fetchData();
  };
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid p-0'>
          {this.state.dataLoaded ?
            // Load in data when data is loaded
            <div>
              {this.showNavbar()}
              <Landing />
            </div>
            :
            this.loadingPage()}

        </div>
      </React.Fragment>
    )
  };
};