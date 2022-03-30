import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Profile extends React.Component {
    state = {

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
                            <h5 className="m-0">Master</h5>
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
                            <div className="row gy-2">
                                {/* <!-- each car 1 --> */}
                                <div className="col-12 p-0">
                                    <div className="row">
                                        {/* <!-- <div className="col-4 d-flex justify-content-center align-items-start flex-column">
                                            <img src="https://i.i-sgcm.com/cars_used/202112/1053408_1b.jpg" alt=""
                                                className="img-fluid" />
                                            <p className="text-danger road-tax-warning">road tax : 30/2/2022</p>
                                        </div> --> */}
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
                                                        <a className="nav-link active text-muted" aria-current="page" href="#"><i
                                                            className="fa-brands fa-adversal"></i></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-muted" aria-current="page" href="#"><i
                                                            className="fa-solid fa-pen-to-square"></i></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-muted" aria-current="page" href="#"><i
                                                            className="fa-solid fa-wrench"></i></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-muted" aria-current="page" href="#"><i
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
                                                        <a className="nav-link active text-danger" aria-current="page" href="#"><i
                                                            className="fa-brands fa-adversal"></i></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-muted" aria-current="page" href="#"><i
                                                            className="fa-solid fa-pen-to-square"></i></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-muted" aria-current="page" href="#"><i
                                                            className="fa-solid fa-wrench"></i></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-muted" aria-current="page" href="#"><i
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
                                                        <a className="nav-link active text-muted" aria-current="page" href="#"><i
                                                            className="fa-brands fa-adversal"></i></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-muted" aria-current="page" href="#"><i
                                                            className="fa-solid fa-pen-to-square"></i></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-muted" aria-current="page" href="#"><i
                                                            className="fa-solid fa-wrench"></i></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-muted" aria-current="page" href="#"><i
                                                            className="fa-solid fa-trash-can"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <ul className="nav nav-tabs d-flex justify-content-center mt-4">
                            <li className="nav-item">
                                <a className="nav-link active text-danger" aria-current="page" href="#">
                                    <i className="fa-solid fa-car active text-danger"></i> Inventory</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" aria-current="page" href="#">
                                    <i className="fa-solid fa-circle-user"></i> Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted" aria-current="page" href="#">
                                    <i className="fa-solid fa-star"></i> Favourite</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </React.Fragment>
        )
    }

}