import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class ShowEachCar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="p-3">
                    <div className="card border-0 car-listing">
                        <div className="row">
                            <div className="col-10"><img src="https://i.i-sgcm.com/cars_used/202203/1084798_1b.jpg" className="card-img-top" alt="..." /></div>
                            <div className="col-2">
                                <div className="row gy-1">
                                    <div className="col-12"><img src="https://i.i-sgcm.com/cars_used/202203/1084798_1b.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="col-12"><img src="https://i.i-sgcm.com/cars_used/202203/1084798_1b.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="col-12"><img src="https://i.i-sgcm.com/cars_used/202203/1084798_1b.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="col-12"><img src="https://i.i-sgcm.com/cars_used/202203/1084798_1b.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="col-12"><img src="https://i.i-sgcm.com/cars_used/202203/1084798_1b.jpg" className="card-img-top" alt="..." /></div>
                                </div>
                            </div>
    
    
                        </div>
    
    
                        <div className="card-body">
                            <div className="row gy-1">
                                {/* <!-- Title --> */}
                                <div className="col-12">
                                    <h5>{ this.props.oneCarData.carDetails.carMake } { this.props.oneCarData.carDetails.carModel }</h5>
                                    {/* <!-- Petrol Hybrid or EV tags --> */}
                                    <a className="badge text-dark badge-outline-dark" href=""><i
                                        className="fa-solid fa-gas-pump text-danger"></i> Petrol</a>
                                    {/* <!-- <a className="badge text-dark badge-outline-dark" href=""><i
                                        className="fa-solid fa-battery-full text-success"></i> Hybrid</a>
                                    <a className="badge text-dark badge-outline-dark" href=""><i
                                        className="fa-solid fa-battery-full text-primary"></i> EV</a> --> */}
                                    {/* <!-- Car type tags:  Sedan/SUV/Hatchback/MPV --> */}
                                    {/* <!-- <a className="badge text-dark badge-outline-dark" href="">Sedan</a> --> */}
                                    <a className="badge text-dark badge-outline-dark" href="">Hatchback</a>
                                    {/* <!-- <a className="badge text-dark badge-outline-dark" href="">SUV</a> --> */}
                                    {/* <!-- <a className="badge text-dark badge-outline-dark" href="">MPV</a> --> */}
                                    {/* <!-- Transmission --> */}
                                    <a className="badge text-dark badge-outline-dark" href=""><i className="fa-solid fa-gear"></i> Auto</a>
                                    <a className="badge text-dark badge-outline-dark" href=""><i className="fa-solid fa-gear text-danger"></i> Manual</a>
                                </div>
                                {/* <!-- Price --> */}
                                <div className="col-12">
                                    <div className="row row-cols-2">
                                        <div className="col fw-bold">Price</div>
                                        <div className="col text-danger fw-bold">${ this.props.oneCarData.carDetails.carPrice.toLocaleString() }</div>
                                    </div>
                                </div>
                                {/* <!-- Depreciation --> */}
                                <div className="col-12">
                                    <div className="row row-cols-2">
                                        <div className="col fw-bold">Depreciation:</div>
                                        <div className="col">$16,130/yr</div>
                                    </div>
                                </div>
                                {/* <!-- Reg Date --> */}
                                <div className="col-12">
                                    <div className="row row-cols-2">
                                        <div className="col fw-bold">Reg Date:</div>
                                        <div className="col">{ this.props.oneCarData.carDetails.carRegDate.slice(0,10) }</div>
                                    </div>
                                </div>
                                {/* <!-- Mileage --> */}
                                <div className="col-12">
                                    <div className="row row-cols-2">
                                        <div className="col fw-bold">Mileage</div>
                                        <div className="col">{ this.props.oneCarData.carDetails.carMileage.toLocaleString() }km (10.4k/yr)</div>
                                    </div>
                                </div>
                                {/* <!-- Manufactured Year --> */}
                                <div className="col-12">
                                    <div className="row row-cols-2">
                                        <div className="col fw-bold">Manufactured</div>
                                        <div className="col">{ this.props.oneCarData.carDetails.carYearOfMake }</div>
                                    </div>
                                </div>
                                {/* <!-- COE --> */}
                                <div className="col-12">
                                    <div className="row row-cols-2">
                                        <div className="col fw-bold">COE</div>
                                        <div className="col">${ this.props.oneCarData.carDetails.carCOE.toLocaleString() }</div>
                                    </div>
                                </div>
                                {/* <!-- OMV -->
                                // <div className="col-12">
                                //     <div className="row row-cols-2">
                                //         <div className="col fw-bold">OMV</div>
                                //         <div className="col">${ this.props.oneCarData.carDetails.carARF.toLocaleString() }</div>
                                //     </div>
                                // </div> */}
                                {/* <!-- ARF --> */}
                                <div className="col-12">
                                    <div className="row row-cols-2">
                                        <div className="col fw-bold">ARF</div>
                                        <div className="col">${ this.props.oneCarData.carDetails.carARF.toLocaleString() }</div>
                                    </div>
                                </div>
                                {/* <!-- No of owners --> */}
                                <div className="col-12">
                                    <div className="row row-cols-2">
                                        <div className="col fw-bold">No. of Owners</div>
                                        <div className="col">{ this.props.oneCarData.carDetails.carNoOfOwner}</div>
                                    </div>
                                </div>
                                {/* <!-- Engine Capacity --> */}
                                <div className="col-12">
                                    <div className="row row-cols-2">
                                        <div className="col fw-bold">Engine Cap</div>
                                        <div className="col">1,984cc</div>
                                    </div>
                                </div>
                                {/* <!-- Reference --> */}
                                <hr className="my-2" />
                                <h6 className="m-0">Reference:</h6>
                                <div className="col-12">
                                    <a className="badge text-dark badge-outline-dark" href="">{ this.props.oneCarData.carDetails.carType}</a>
                                    <a className="badge text-dark badge-outline-dark" href="">70% Loan</a>
                                </div>
                                {/* <!-- Specification --> */}
                                <hr className="my-2" />
                                <h6 className="m-0">Specification:</h6>
                                <div className="col-12">
                                    <a className="badge text-dark badge-outline-dark" href=""> Auto</a>
                                    <a className="badge text-dark badge-outline-dark" href=""><i className="fa-solid fa-gas-pump"></i>
                                        15km/l</a>
                                    <a className="badge text-dark badge-outline-dark" href=""><i className="fa-solid fa-gauge-high"></i>
                                        &lt6s (0-100km/h) </a>
                                </div>
                                {/* <!-- Accessories --> */}
                                <hr className="my-2" />
                                <h6 className="m-0">Accessories:</h6>
                                <div className="col-12">
                                    <a className="badge text-dark badge-outline-dark" href="">Throttle Ctrl</a>
                                    <a className="badge text-dark badge-outline-dark" href="">Brembo Brakes</a>
                                    <a className="badge text-dark badge-outline-dark" href="">Disc Rotor</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    
}