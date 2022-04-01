import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Profile extends React.Component {
    state = {
        profileTab: "inventory",
    }
    activeTab = (tab) => {
        this.setState({
            profileTab: tab
        })
    }
    renderInventory = () => {
        return <React.Fragment>
            <div className="row gy-2">
                {/* <!-- each car 1 --> */}
                <div className="col-12 p-0">
                    <div className="row">
                        <div className="col-4 d-flex justify-content-center align-items-start flex-column">
                            <img src="https://i.i-sgcm.com/cars_used/202112/1053408_1b.jpg" alt=""
                                className="img-fluid" />
                            <div className="text-danger road-tax-warning">Road tax : 30-Apr-2022</div>
                        </div>
                        <div className="col-8">
                            <div>
                                <h6 className="fw-bold clip-text">McLaren 12C Spider</h6>
                                <div>
                                    <b>SLK1A</b>
                                    <small className="ms-2 text-danger fst-italic "> $288,800</small>
                                </div>

                                <ul className="nav nav-tabs d-flex justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link active text-danger" ariacurrent="page" href="#"><i
                                            className="fa-brands fa-adversal"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" ariacurrent="page" href="#"><i
                                            className="fa-solid fa-pen-to-square"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" ariacurrent="page" href="#"><i
                                            className="fa-solid fa-wrench"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" ariacurrent="page" href="#"><i
                                            className="fa-solid fa-trash-can"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" ariacurrent="page" href="#">
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- each car 2 --> */}
                <div className="col-12 p-0">
                    <div className="row">
                        <div className="col-4 
                                            d-flex justify-content-center align-items-start flex-column">
                            <img src="https://i.i-sgcm.com/cars_used/202109/1031766_1b.jpg" alt=""
                                className="img-fluid" />
                            <div className="text-danger road-tax-warning">Road tax : 30-Apr-2022</div>
                        </div>
                        <div className="col-7 bg-light">
                            <div>
                                <h6 className="fw-bold clip-text">Ferrari 328 GTS</h6>
                                <button className="badge bg-dark">EC1D</button>

                                <ul className="nav nav-tabs d-flex justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link active text-muted" aria-current="page" href="/#"><i
                                            className="fa-brands fa-adversal"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" aria-current="page" href="/#"><i
                                            className="fa-solid fa-pen-to-square"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" aria-current="page" href="/#"><i
                                            className="fa-solid fa-wrench"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" aria-current="page" href="/#"><i
                                            className="fa-solid fa-trash-can"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- each car 3 --> */}
                <div className="col-12 p-0">
                    <div className="row">
                        <div className="col-4 
                                            d-flex justify-content-start align-items-start flex-column">
                            <img src="https://i.i-sgcm.com/cars_used/202112/1057116_1b.jpg" alt=""
                                className="img-fluid" />
                            <div className="text-success road-tax-warning">Road tax : 15-Jul-2022</div>
                        </div>
                        <div className="col-7 bg-light">
                            <div>
                                <h6 className="fw-bold clip-text">Bentley Continental GT 6.0A</h6>
                                <button className="badge bg-dark">SLA1K</button>
                                <ul className="nav nav-tabs d-flex justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link active text-danger" aria-current="page" href="/#"><i
                                            className="fa-brands fa-adversal"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" aria-current="page" href="/#"><i
                                            className="fa-solid fa-pen-to-square"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" aria-current="page" href="/#"><i
                                            className="fa-solid fa-wrench"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" aria-current="page" href="/#"><i
                                            className="fa-solid fa-trash-can"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- each car 4 --> */}
                <div className="col-12 p-0">
                    <div className="row">
                        <div className="col-4 
                                            d-flex justify-content-center align-items-start flex-column">
                            <img src="https://i.i-sgcm.com/cars_used/202203/1084184_1b.jpg" alt=""
                                className="img-fluid" />
                            <div className="text-danger road-tax-warning">Road tax : 30-Apr-2022</div>
                        </div>
                        <div className="col-7 bg-light">
                            <div>
                                <h6 className="fw-bold clip-text">BMW M Series M5 Competition</h6>
                                <button className="badge bg-dark">EC1D</button>
                                <ul className="nav nav-tabs d-flex justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link active text-muted" aria-current="page" href="/#"><i
                                            className="fa-brands fa-adversal"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" aria-current="page" href="/#"><i
                                            className="fa-solid fa-pen-to-square"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" aria-current="page" href="/#"><i
                                            className="fa-solid fa-wrench"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-muted" aria-current="page" href="/#"><i
                                            className="fa-solid fa-trash-can"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
    renderProfile = () => {
        return <React.Fragment>
            <div className="row gy-2">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 d-flex align-items-baseline justify-content-between">
                            <h5>Username : { this.props.userData.username }</h5>
                            <i className="fa-solid fa-pen-to-square ms-3 text-muted"></i>
                        </div>
                        <div className="col-12 d-flex align-items-baseline justify-content-between mt-2">
                            <h6>Email : { this.props.userData.username } </h6>
                            <i className="fa-solid fa-pen-to-square ms-1 text-muted"></i>
                        </div>
                        <div className="col-12 d-flex align-items-baseline justify-content-between mt-2">
                            <h6>Contact : { this.props.userData.contact } </h6>
                            <i className="fa-solid fa-pen-to-square ms-1 text-muted"></i>
                        </div>
                        <div className="col-12 d-flex align-items-baseline justify-content-between mt-2">
                            <h6>Password : ********* </h6>
                            <i className="fa-solid fa-pen-to-square ms-1 text-muted"></i>
                        </div>
                        <div className="col-12 d-flex align-items-baseline justify-content-between mt-2">
                            <h6>Date joined since { this.props.userData.dateJoin } </h6>
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
                            <h5 className="m-0">{ this.props.userData.username}</h5>
                            <p className="text-muted">xyz@gmail.com</p>
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

                    <div className="card-body">
                        <div className="content-box">
                            {this.state.profileTab === "inventory" ?
                                this.renderInventory()
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
                                    className={this.state.profileTab === "inventory" ? "nav-link active" : "nav-link"}
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
                    </div>

                </div>
            </React.Fragment>
        )
    }

}