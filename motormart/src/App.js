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
      data: response.data,
      dataLoaded: true
    });
  };
  showNavbar = () => {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" dataBsToggle="collapse" dataBsTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" ariaCurrent="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" dataBsToggle="dropdown" ariaExpanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" ariaLabelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" ariaLabel="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
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
        <div className='container-fluid p-5'>

          <h1> Happy World </h1>
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