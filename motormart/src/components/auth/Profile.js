import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/auth.css";

export default class Profile extends React.Component {
    state = {
        profileTab: "inventory",
        tabs: [],
        tabsReady: false,
        // edit state
        carToBeEdited : ""
    }
    componentDidMount = () => {
        let tabs = []
        this.props.userData.cars.map((car, index) => {
            tabs.push({
                tab: "info"
            })
            // console.log(car, index)
        })
        this.setState({
            tabs: tabs,
            tabsReady: true
        })

    }
    activeTab = (tab, index) => {
        console.log(index);
        index==undefined? index="":null;
        this.setState({
            profileTab: tab,
            carToBeEdited:index
        })
    }
    updateTabs = (tab, index) => {
        let clone = this.state.tabs.map(t => { return { tab: "info" } })

        clone[index].tab = tab

        this.setState({
            tabs: clone
        })
    }
    
    showEachCar = (car, index) => {
        return this.state.tabsReady ?
            <React.Fragment>
                <div className="col-12 p-1">
                    <div className="row">
                        <div className="col-4 d-flex justify-content-center align-items-center flex-column">
                            <img src="https://i.i-sgcm.com/cars_used/202112/1053408_1b.jpg" alt="" className="img-fluid" />
                            <div className="road-tax-warning">Road tax due</div>
                        </div>
                        <div className="col-8">
                            <div>
                                {/* mini tabs */}
                                <ul className="nav nav-tabs d-flex justify-content-between">
                                    {/* check if tab = info  */}
                                    <li key={"list" + index} className="nav-item">
                                        <a
                                            className={this.state.tabs[index].tab === "info" ?
                                                "nav-link active text-danger" :
                                                "nav-link text-muted"}
                                            ariacurrent="page"
                                            href="#"
                                            onClick={() => {
                                                this.updateTabs("info", index)
                                            }}
                                        ><i
                                            className="fa-brands fa-adversal"></i></a>
                                    </li>
                                    {/* check if tab = edit */}
                                    <li key={"edit" + index} className="nav-item">
                                        <a className={this.state.tabs[index].tab === "edit" ?
                                            "nav-link active text-danger" :
                                            "nav-link text-muted"}
                                            ariacurrent="page"
                                            href="#"
                                            onClick={() => {
                                                console.log(car._id)
                                                this.activeTab("editCar", car._id)
                                            }}
                                        ><i
                                            className="fa-solid fa-pen-to-square"></i></a>
                                    </li>
                                    {/* check if tab = delete */}
                                    <li key={"delete" + index} className="nav-item">
                                        <a className={this.state.tabs[index].tab === "delete" ?
                                            "nav-link active text-danger" :
                                            "nav-link text-muted"}
                                            ariacurrent="page"
                                            href="#"
                                            onClick={() => {
                                                this.updateTabs("delete", index)
                                            }}
                                        ><i
                                            className="fa-solid fa-trash-can"></i></a>
                                    </li>
                                    {/* check if tab = view */}
                                    <li key={"view" + index} className="nav-item">
                                        <a className={this.state.tabs[index].tab === "open" ?
                                            "nav-link active text-danger" :
                                            "nav-link text-muted"}
                                            ariacurrent="page"
                                            href="#"
                                            onClick={() => {
                                                this.updateTabs("view", index)
                                            }}
                                        >
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </li>
                                </ul>
                                <div className="mini-content">
                                    {/* car info */}
                                    {this.state.tabs[index].tab === "info" ?
                                        <div>
                                            <span className="fw-bold clip-text">
                                                {car.carDetails.carMake} {car.carDetails.carModel}
                                            </span>

                                            <br />
                                            <b>Status:</b> {car.availability}
                                            {
                                                car.availability ?
                                                    <a href='#' className='text-danger fw-bold text-decoration-none'>Advertised</a> :
                                                    <a href='#' className='text-muted fw-bold text-decoration-none'>Owned</a>
                                            }
                                            <br />
                                            <b>Price:</b> ${(car.carDetails.carPrice).toLocaleString()}
                                        </div> : null}
                                    {this.state.tabs[index].tab === "delete" ?
                                        <div>
                                            <span className="fw-bold clip-text">
                                                {car.carDetails.carMake} {car.carDetails.carModel}
                                            </span>
                                            <br />
                                            <i className='text-muted'>I no longer own the car</i> <br />
                                            <a href='' className='badge bg-danger'>remove</a>

                                        </div> : null}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            : null
    }
    renderInventory = () => {
        return <React.Fragment>
            <div className="row">
                {/* EACH CAR */}
                {this.props.userData.cars.map((car, index) => this.showEachCar(car, index))}


            </div>
        </React.Fragment>
    }
    renderProfile = () => {
        return <React.Fragment>
            <div className="row gy-2">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 d-flex align-items-baseline justify-content-between">
                            <h5>Username : {this.props.userData.username}</h5>
                            <i className="fa-solid fa-pen-to-square ms-3 text-muted"></i>
                        </div>
                        <div className="col-12 d-flex align-items-baseline justify-content-between mt-2">
                            <h6>Email : {this.props.userData.username} </h6>
                            <i className="fa-solid fa-pen-to-square ms-1 text-muted"></i>
                        </div>
                        <div className="col-12 d-flex align-items-baseline justify-content-between mt-2">
                            <h6>Contact : {this.props.userData.contact} </h6>
                            <i className="fa-solid fa-pen-to-square ms-1 text-muted"></i>
                        </div>
                        <div className="col-12 d-flex align-items-baseline justify-content-between mt-2">
                            <h6>Password : ********* </h6>
                            <i className="fa-solid fa-pen-to-square ms-1 text-muted"></i>
                        </div>
                        <div className="col-12 d-flex align-items-baseline justify-content-between mt-2">
                            <h6>Date joined since {this.props.userData.dateJoin} </h6>
                        </div>
                    </div>
                </div>

                {/* <!-- Message box --> */}
                <div className="col-12">
                    <div className="row">
                        {/* <!-- header --> */}
                        <div className="col-12 py-2 bg-secondary text-light">
                            <div className="row  fw-bold">
                                <div className="col">Things to note...</div>
                                <div className="col-3 text-center">Date</div>
                            </div>
                        </div>
                        {/* <!-- messages --> */}
                        <div className="col-12 ">
                            <div className="row">
                                <div className="col">Road tax and insurance due by 22 Apr 2022</div>
                                <div className="col-3 text-center">22/4/2022</div>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="row">
                                <div className="col">
                                    <span className="text-danger">@carLover</span> listed
                                    <a href="">Honda Civic today</a> today
                                </div>
                                <div className="col-3 text-center">today</div>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="row">
                                <div className="col">Road tax and insurance due by 22 Apr 2022</div>
                                <div className="col-3 text-center">22/4/2022</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
    renderFavorite = () => {
        return <React.Fragment>
            <div className="row gy-2">
                {/* <!-- one car listing --> */}
                <div className="col-12 p-0">
                    <div className="row">
                        <div className="col-4 d-flex align-items-center">
                            <img src="https://i.i-sgcm.com/cars_used/202112/1052999_1b.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-8">
                            <div>
                                <h6 className="fw-bold clip-text">Porsche 911 Carrera Coupe 3.0A PDK</h6>
                                <div className="d-flex align-items-center">
                                    <small className="ms-2 text-danger fst-italic ">Price : $393,800</small>
                                    <button className="btn-open ms-auto"><i
                                        className="fa-solid fa-arrow-up-right-from-square"></i></button>
                                </div>

                                <ul className="nav nav-tabs d-flex justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link active text-danger" ariacurrent="page" href="/#">
                                            <i className="fa-solid fa-hand-holding-dollar"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" ariacurrent="page" href="/#">
                                            <i className="fa-solid fa-tags"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" ariacurrent="page" href="/#">
                                            <i className="fa-solid fa-user"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" ariacurrent="page" href="/#">
                                            <i className="fa-solid fa-gauge"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" ariacurrent="page" href="/#">
                                            <i className="fa-solid fa-trash-can"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
    renderEditCar = () => {
        return <React.Fragment>
            <div className="row gy-2">
                {/* <!-- one car listing --> */}
                <div className="col-12 p-0">
                    <h4>Add Car info</h4>
                </div>
            </div>
        </React.Fragment>
    }

    render() {
        return (
            <React.Fragment>
                <div id="profile-card" className="card bg-light">
                    {/* <!-- header --> */}
                    <div className="d-flex px-3 py-4 bg-dark text-light">
                        <div className="img-circle-profile">
                            <img src="https://i.i-sgcm.com/cars_used/202109/1031766_1b.jpg" alt="default user image" />
                        </div>
                        <div className="ms-4 mt-3">
                            <h5 className="m-0">{this.props.userData.username}</h5>
                            <p className="text-muted">{this.props.userData.email}</p>
                        </div>
                        <div className="ms-auto pe-3 pt-3">
                            <div className="chat-icon">
                                <i className="fa-solid fa-comment-dots">
                                </i>
                                <span className="badge rounded-pill bg-danger">
                                    2+
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* <div className="card-body"> */}
                    <div className="content-box container-fluid">
                        {this.state.profileTab === "inventory" ?
                            this.renderInventory()
                            : null}
                        {this.state.profileTab === "editCar" ?
                            this.renderEditCar()
                            : null}
                        {this.state.profileTab === "profile" ?
                            this.renderProfile()
                            : null}
                        {this.state.profileTab === "favorite" ?
                            this.renderFavorite()
                            : null}
                    </div>
                    {/* Tab nav at the bottom */}
                    <ul className="nav nav-tabs d-flex justify-content-center mt-4">
                        <li className="nav-item">
                            <a ariacurrent="page"
                                className={this.state.profileTab === "inventory" || this.state.profileTab === "editCar"  ? "nav-link active" : "nav-link"}
                                onClick={() => { this.activeTab("inventory") }}>
                                <i className={this.state.profileTab === "inventory" ? "fa-solid fa-car text-danger" : "fa-solid fa-car text-muted"}></i> Inventory</a>
                        </li>
                        <li className="nav-item">
                            <a ariacurrent="page"
                                className={this.state.profileTab === "profile" ? "nav-link active" : "nav-link"}
                                onClick={() => { this.activeTab("profile") }}>
                                <i className={this.state.profileTab === "profile" ? "fa-solid fa-circle-user text-danger" : "fa-solid fa-circle-user text-muted"}></i> Profile</a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={this.state.profileTab === "favorite" ? "nav-link active" : "nav-link"}
                                ariacurrent="page"
                                onClick={() => { this.activeTab("favorite") }}>
                                <i className={this.state.profileTab === "favorite" ? "fa-solid fa-star text-danger" : "fa-solid fa-star text-muted"}></i> Favourite</a>
                        </li>
                    </ul>
                    {/* </div> */}

                </div>
            </React.Fragment>
        )
    }

}