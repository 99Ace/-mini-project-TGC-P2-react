import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class ShowCars extends React.Component {
    state = {
        // Search Options
        carMake: "",
        carType: "",
        // tagSelected: false,
        sortDirection: false
    }
    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="card border-0 car-listing">
                    {/* Search bar */}
                    <div className="row">
                        <div className="col-12">
                            <div className="search-bar">
                                <i class="fa-solid fa-retweet search-icon text-secondary"
                                    onClick={() => { this.setState({ sortDirection: !this.state.sortDirection }) }}></i>

                                <input type="text" className="form-control form-control-sm"
                                    name="carMake" placeholder="e.g Audi A4"
                                    value={this.state.searchText}
                                    onChange={this.updateFormField} />

                                <select name="carType"
                                    className="form-select form-select-sm"
                                    value={this.state.carType}
                                    onChange={this.updateFormField}>
                                    <option value="">Type</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Luxury Sedan">Luxury Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="MPV">MPV</option>
                                    <option value="Hatchback">Hatchback</option>
                                    <option value="Sports">Sports</option>
                                </select>
                                <button className="search-btn"
                                    onClick={() => {
                                        let query = {
                                            carMake: this.state.carMake,
                                            carType: this.state.carType
                                        }
                                        this.props.sendSearch(query)
                                    }}
                                >Search</button>
                                <i className="fa-solid fa-rotate-right search-icon search-icon-blue"
                                    onClick={() => {
                                        let query = {
                                            carMake: "",
                                            carType: ""
                                        }
                                        this.props.sendSearch(query)
                                    }}></i>
                            </div>
                        </div>

                    </div>

                    {
                        // Rendering each car listing
                        this.props.dataCar.map(car => {
                            return (
                                <div key={car._id} className="card-body p-0" onClick={() => { this.props.showEachCar(car) }}>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12 mt-2 ">
                                                <div className='d-flex justify-content-between'>
                                                    <b className='eachCar-title '>{car.carDetails.carMake} {car.carDetails.carModel}</b>
                                                    {/* <i class="fa-solid fa-heart text-muted "></i> */}
                                                </div>
                                            </div>
                                            <div className="col-12 eachCar-body">
                                                <div className="row">
                                                    <div className="col-4 p-2">
                                                        <img src={
                                                            car.carDetails.carImages.length > 0 ?
                                                                car.carDetails.carImages[0] : "https://i.i-sgcm.com/cars_used/202112/1053408_1b.jpg"
                                                        } alt="" className="img-fluid" />
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
            </React.Fragment >
        )
    }
}