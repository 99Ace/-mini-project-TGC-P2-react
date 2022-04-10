import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class CarListing extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="card border-0 car-listing">
                    {
                        this.props.dataCar.map(car => {
                            return (
                                <div className="card-body p-0" onClick={ ()=> {  alert("click") } }>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12 eachCar-title mt-2 ">
                                                <b>{car.carDetails.carMake} {car.carDetails.carModel}</b>
                                            </div>
                                            <div className="col-12 eachCar-body">
                                                <div className="row">
                                                    <div className="col-4 p-2">
                                                        <img src="https://i.i-sgcm.com/cars_used/202202/1069590_1.jpg" className="img-fluid" />
                                                    </div>
                                                    <div className="col-8 p-2">
                                                        <b className="text-danger eachCar-title border">${car.carDetails.carPrice.toLocaleString()}</b><br />
                                                        <small className="text-muted">(70% loan @ $1,599/mth)</small><br />
                                                        <i className="fa-solid fa-calendar-days"></i>
                                                        <span>{car.carDetails.carRegDate.slice(0, 10)}</span>
                                                        <small className="text-muted">(7yrs 8mths COE left)</small>
                                                        <br />
                                                        <i className="fa-solid fa-gauge"></i>
                                                        <span>24,008 km</span><br />
                                                        <i className="fa-solid fa-money-check-dollar"></i>
                                                        <span>$20,500 / yr</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </React.Fragment>
        )
    }
}