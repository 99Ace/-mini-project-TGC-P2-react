import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Profile extends React.Component {
    state = {
        profileTab: "inventory",
        tabs: [],
        tabsReady: false,
        // form state
        carPlate: "",
        ownerId: "",
        ownerIdType: "0",
        //-----------------
        carToBeEdited: "",
        carPrice: "",
        carRegDate: "",
        carMileage: "",
        carMake: "",
        carModel: "",
        carYearOfMake: "",
        carCOE: "",
        carARF: "",
        carNoOfOwner: "",
        carType: "",
        // carImages: [],
        // Images 
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        image6: "",

        availability: false
    }
    componentDidMount = () => {
        let tabs = []
        this.props.userData.cars.map((car, index) => {
            tabs.push({
                tab: "info"
            })
            return
        })
        this.setState({
            tabs: tabs,
            tabsReady: true,
        })

    }
    activeTab = (tab, index) => {

        console.log(index);
        if (index === undefined) {
            index = ""
        }

        this.setState({
            profileTab: tab,
            carToBeEdited: index
        })

    }
    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    updateCarImagesField = (e) => {
        console.log(e)
    }
    setEditCar = (index) => {
        let car = this.props.userData.cars[index]
        let carRegDate = car.carDetails.carRegDate
        carRegDate = carRegDate.slice(0, 10)
        console.log(carRegDate)


        this.setState({
            carPrice: car.carDetails.carPrice,
            carRegDate: carRegDate,
            carMileage: car.carDetails.carMileage,
            carMake: car.carDetails.carMake,
            carModel: car.carDetails.carModel,
            carYearOfMake: car.carDetails.carYearOfMake,
            carCOE: car.carDetails.carCOE,
            carARF: car.carDetails.carARF,
            carNoOfOwner: car.carDetails.carNoOfOwner,
            carType: car.carDetails.carType,
            availability: car.availability
        })
        this.activeTab("editCar", index)
    }
    setEditImages = (index) => {
        let car = this.props.userData.cars[index]
        let carImages = car.carDetails.carImages
        // let carImages = [
        //     "test1", "test2", "test3", "test4"
        // ]
        carImages.filter((i, index) => {
            this.setState({
                ["image" + (index + 1)]: i
            })
        })
        console.log(this.state["image" + "1"])

        this.setState({
            availability: car.availability
        })
        this.activeTab("editImages", index)
    }
    updateTabs = (tab, index) => {
        let clone = this.state.tabs.map(t => { return { tab: "info" } })
        clone[index].tab = tab
        this.setState({
            tabs: clone
        })
    }
    resetState = () => {
        // RESET STATE
        this.setState({
            carPlate: "",
            ownerId: "",
            ownerIdType: "0",
            //-------------
            carToBeEdited: "",
            carPrice: "",
            carRegDate: "",
            carMileage: "",
            carMake: "",
            carModel: "",
            carYearOfMake: "",
            carCOE: "",
            carARF: "",
            carNoOfOwner: "",
            carType: "",
            availability: false,
            // Images 
            image1: "",
            image2: "",
            image3: "",
            image4: "",
            image5: "",
            image6: "",
        })
    }



    showEachCar = (car, index) => {
        return this.state.tabsReady ?
            <React.Fragment>
                <div className="col-12 p-1">
                    <div className="row">
                        <div className="col-4 d-flex justify-content-center align-items-center flex-column">
                            <img src={
                                car.carDetails.carImages.length > 0 ?
                                    car.carDetails.carImages[0] : "https://i.i-sgcm.com/cars_used/202112/1053408_1b.jpg"
                            } alt="" className="img-fluid" />
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
                                                // console.log(car._id)
                                                this.setEditCar(index)
                                            }}
                                        ><i
                                            className="fa-solid fa-pen-to-square"></i></a>
                                    </li>
                                    {/* check if tab = images */}
                                    <li key={"images" + index} className="nav-item">
                                        <a className={this.state.tabs[index].tab === "images" ?
                                            "nav-link active text-danger" :
                                            "nav-link text-muted"}
                                            ariacurrent="page"
                                            href="#"
                                            onClick={() => {
                                                // console.log(car._id)
                                                this.setEditImages(index)
                                            }}
                                        ><i class="fa-solid fa-image"></i></a>
                                    </li>
                                    {/* check if tab = delete */}
                                    <li key={"deleteCar" + index} className="nav-item">
                                        <span className={this.state.tabs[index].tab === "deleteCar" ?
                                            "nav-link active text-danger" :
                                            "nav-link text-muted"}
                                            ariacurrent="page"
                                            onClick={() => {
                                                this.updateTabs("deleteCar", index)
                                            }}
                                        ><i
                                            className="fa-solid fa-trash-can"></i></span>
                                    </li>
                                    {/* check if tab = view */}
                                    <li key={"view" + index} className="nav-item">
                                        <a className={this.state.tabs[index].tab === "open" ?
                                            "nav-link active text-danger" :
                                            "nav-link text-muted"}
                                            ariacurrent="page"
                                            href="#"
                                            onClick={() => {
                                                this.props.showEachCar(car)
                                            }}
                                            disabled={!car.availability}
                                        >
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </li>
                                </ul>
                                <div className="mini-content">
                                    {/* car info */}
                                    {this.state.tabs[index].tab === "info" ?
                                        <div className='row'>
                                            <div className='col-8'>
                                                <span className="fw-bold clip-text">
                                                    {car.carPlate} - {car.carDetails.carMake} {car.carDetails.carModel}
                                                </span>

                                                <br />
                                                <b>Status:</b>
                                                {
                                                    car.availability ?
                                                        <a href='#' className='text-danger fw-bold text-decoration-none'>Advertised</a> :
                                                        <a href='#' className='text-muted fw-bold text-decoration-none'>Owned</a>
                                                }
                                                <br />
                                                <b>Price:</b> ${(car.carDetails.carPrice).toLocaleString()}
                                            </div>
                                            <div className='col-4'>

                                            </div>
                                        </div>

                                        : null}

                                    {this.state.tabs[index].tab === "deleteCar" ?
                                        <div>
                                            <span className="fw-bold clip-text">
                                                {car.carDetails.carMake} {car.carDetails.carModel}
                                            </span>
                                            <br />
                                            <i className='text-muted'>I no longer own the car</i> 
                                            <button className='btn-delete-mini ms-2'
                                                onClick={() => {
                                                    this.props.removeCar(car);
                                                }}>remove</button>

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
                <hr />
                <button className='text-muted bg-light border-muted'
                    onClick={() => {
                        this.resetState();
                        this.renderAddCar();
                        this.activeTab("addCar")
                    }}>
                    <i className="fa-solid fa-plus"></i> <i className="fa-solid fa-car-side"></i>
                </button>
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
            <div className='container-fluid'>
                <div className="row bg-light">
                    {/* <!-- one car listing --> */}
                    <div className="col-12">
                        <div className='row mb-2'>
                            <div className='col-6'>
                                <h6 className='mt-2'><b>[ {this.props.userData.cars[this.state.carToBeEdited].carPlate} ]</b></h6>
                            </div>

                            <div className='col-6 d-flex justify-content-end align-items-center'>
                                {this.state.availability ?
                                    <div className='badge bg-success'>Listed</div> :
                                    <div className='badge bg-secondary'>Not listed</div>}

                                <div class="form-check form-switch ms-2 pt-1">
                                    <input class="form-check-input" type="checkbox"
                                        role="switch" name='availability'
                                        defaultChecked={this.state.availability}
                                        onClick={() => {
                                            this.setState({
                                                availability: !this.state.availability
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Car Make */}
                            <div className="col-6">
                                <label className="form-label">Make:</label>
                                <input type="text" className="form-control"
                                    name="carMake" placeholder='e.g Audi'
                                    value={this.state.carMake}
                                    onChange={this.updateFormField} />
                            </div>
                            {/* Car Model */}
                            <div className="col-6">
                                <label className="form-label">Model:</label>
                                <input type="text" className="form-control"
                                    name="carModel" placeholder='e.g A4'
                                    value={this.state.carModel}
                                    onChange={this.updateFormField} />
                            </div>

                            {/* Registration date */}
                            <div className="mb-2 col-6">
                                <label className="form-label">Registration Date:</label>
                                <input type="date" className="form-control"
                                    name="carRegDate"
                                    value={this.state.carRegDate}
                                    onChange={this.updateFormField}
                                />
                            </div>

                            {/* Pricing */}
                            <div className="mb-2 col-6">
                                <label className="form-label">Price:</label>
                                <input type="text" className="form-control"
                                    name="carPrice" placeholder="car price"
                                    value={this.state.carPrice}
                                    onChange={this.updateFormField} />
                            </div>

                            {/* Mileage */}
                            <div className="mb-2 col-6">
                                <label className="form-label">Mileage:</label>
                                <input type="text" className="form-control"
                                    name="carMileage" placeholder="mileage"
                                    value={this.state.carMileage}
                                    onChange={this.updateFormField} />
                            </div>
                            {/* COE */}
                            <div className="mb-2 col-6">
                                <label className="form-label">COE:</label>
                                <input type="number" className="form-control"
                                    name="carCOE" min="0"
                                    value={this.state.carCOE}
                                    onChange={this.updateFormField} />
                            </div>
                            {/* ARF */}
                            <div className="mb-2 col-6">
                                <label className="form-label">ARF:</label>
                                <input type="text" className="form-control"
                                    name="carARF" min="0"
                                    value={this.state.carARF}
                                    onChange={this.updateFormField} />
                            </div>
                            {/* Year of make */}
                            <div className="mb-2 col-6">
                                <label className="form-label">Year of make:</label>
                                <input type="number" className="form-control"
                                    name="carYearOfMake" min="1960" max="2022"
                                    value={this.state.carYearOfMake}
                                    onChange={this.updateFormField} />
                            </div>
                            {/* Ownership */}
                            <div className="mb-2 col-6">
                                <label className="form-label">No of Owners:</label>
                                <input type="number" className="form-control"
                                    name="carNoOfOwner" min="1"
                                    value={this.state.carNoOfOwner}
                                    onChange={this.updateFormField} />
                            </div>
                            {/* Vehicle Type */}
                            <div className="mb-2 col-6">
                                <label className="form-label">Vehicle Type:</label>
                                <select className="form-select" name="carType"
                                    value={this.state.carType} onChange={this.updateFormField}>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Luxury Sedan">Luxury Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="MPV">MPV</option>
                                    <option value="Hatchback">Hatchback</option>
                                    <option value="Sports">Sports</option>
                                </select>
                            </div>

                            {/* Description - to be upgraded */}
                            <div className="mb-2 col-12">
                                <label className="form-label">Description:</label>
                                <textarea className="form-control" name='description' id="description" rows="5"></textarea>
                            </div>

                            <div className='mb-2 col-12'>
                                <button className='btn auth-submit'
                                    onClick={() => {

                                        this.props.updateCar({
                                            index: this.state.carToBeEdited,
                                            carId: this.props.userData.cars[this.state.carToBeEdited]._id,
                                            carPrice: parseInt(this.state.carPrice),
                                            carRegDate: this.state.carRegDate,
                                            carMileage: parseInt(this.state.carMileage),
                                            carMake: this.state.carMake,
                                            carModel: this.state.carModel,
                                            carYearOfMake: parseInt(this.state.carYearOfMake),
                                            carCOE: parseInt(this.state.carCOE),
                                            carARF: parseInt(this.state.carARF),
                                            carNoOfOwner: parseInt(this.state.carNoOfOwner),
                                            carType: this.state.carType,
                                            availability: this.state.availability
                                        })

                                        this.setState({
                                            profileTab: "inventory"
                                        })
                                        this.resetState();

                                    }}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
    renderEditImages = () => {
        return <React.Fragment>
            <div className='container-fluid'>
                <div className="row bg-light">
                    {/* <!-- one car listing --> */}
                    <div className="col-12">
                        <div className='row mb-2'>
                            <div className='col-6'>
                                <h6 className='mt-2'><b>[ {this.props.userData.cars[this.state.carToBeEdited].carPlate} ]</b></h6>
                            </div>
                            <div className='col-6 d-flex justify-content-end align-items-center'>
                                {this.state.availability ?
                                    <div className='badge bg-success'>Listed</div> :
                                    <div className='badge bg-secondary'>Not listed</div>}

                                <div class="form-check form-switch ms-2 pt-1">
                                    <input class="form-check-input" type="checkbox"
                                        role="switch" name='availability'
                                        defaultChecked={this.state.availability}
                                        onClick={() => {
                                            this.setState({
                                                availability: !this.state.availability
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Image 1 */}
                            <div className="col-6">
                                <label className="form-label">Image 1:</label>
                                <input type="text" className="form-control"
                                    name="image1" placeholder='Image 1'
                                    value={this.state.image1}
                                    onChange={this.updateFormField} />
                            </div>
                            {/* Image 2 */}
                            <div className="col-6">
                                <label className="form-label">Image 2:</label>
                                <input type="text" className="form-control"
                                    name="image2" placeholder='Image 2'
                                    value={this.state.image2}
                                    onChange={this.updateFormField} />
                            </div>
                            {/* Image 3 */}
                            <div className="col-6">
                                <label className="form-label">Image 3:</label>
                                <input type="text" className="form-control"
                                    name="image3" placeholder='Image 3'
                                    value={this.state.image3}
                                    onChange={this.updateFormField} />
                            </div>
                            {/* Image 4 */}
                            <div className="col-6">
                                <label className="form-label">Image 4:</label>
                                <input type="text" className="form-control"
                                    name="image4" placeholder='Image 4'
                                    value={this.state.image4}
                                    onChange={this.updateFormField} />
                            </div>
                            {/* Image 5 */}
                            <div className="col-6">
                                <label className="form-label">Image 5:</label>
                                <input type="text" className="form-control"
                                    name="image5" placeholder='Image 5'
                                    value={this.state.image5}
                                    onChange={this.updateFormField} />
                            </div>
                            {/* Image 6 */}
                            <div className="col-6">
                                <label className="form-label">Image 6:</label>
                                <input type="text" className="form-control"
                                    name="image6" placeholder='Image 6'
                                    value={this.state.image6}
                                    onChange={this.updateFormField} />
                            </div>

                            <div className='mt-4 mb-2 col-12'>
                                <button className='btn auth-submit'
                                    onClick={() => {
                                        let carImages = [
                                            this.state.image1, this.state.image2, this.state.image3,
                                            this.state.image4, this.state.image5, this.state.image6
                                        ]
                                        carImages = carImages.filter(i => {
                                            if (i !== "") {
                                                return i
                                            }
                                        })
                                        // console.log(carImages)
                                        this.props.updateImages({
                                            index: this.state.carToBeEdited,
                                            carId: this.props.userData.cars[this.state.carToBeEdited]._id,
                                            carImages,
                                            availability: this.state.availability
                                        })

                                        this.setState({
                                            profileTab: "inventory"
                                        })
                                        this.resetState();

                                    }}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }

    renderAddCar = () => {
        return <React.Fragment>
            <div className='container-fluid'>
                <div className="row bg-light">
                    <div className="col-12">
                        <div className='row mb-2'>
                            {/* Title */}
                            <div className='col-6'>
                                <h6 className='mt-2'><b> My new car details</b></h6>
                            </div>
                            {/* availability */}
                            <div className='col-6 d-flex justify-content-end align-items-center'>
                                {this.state.availability ?
                                    <div className='badge bg-success'>Listed</div> :
                                    <div className='badge bg-secondary'>Not listed</div>}

                                <div class="form-check form-switch ms-2 pt-1">
                                    <input class="form-check-input" type="checkbox"
                                        role="switch" name='availability'
                                        onClick={() => {
                                            this.setState({
                                                availability: !this.state.availability
                                            })
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Show Vehicle Form */}
                            {/* Vehicle Plate Number */}
                            <div className="mb-1 col-6">
                                <label className="form-label">
                                    <b>Vehicle Plate Number</b> <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    maxLength="8"
                                    className="form-control"
                                    name="carPlate"
                                    value={this.state.carPlate}
                                    onChange={this.updateFormField}
                                />
                            </div>
                            {/* Owner ID */}
                            <div className='mb-1 col-6'>
                                <label className="form-label">
                                    <b>Owner ID (last 4 char)</b> <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    maxLength="4"
                                    className="form-control"
                                    name="ownerId"
                                    id="ownerId"
                                    value={this.state.ownerId}
                                    onChange={this.updateFormField}
                                />
                            </div>
                            {/* Owner ID Type */}
                            <div className="mb-2 col-12">
                                <label className="form-label">
                                    <b>Owner ID Type</b> <span className="text-danger">*</span>
                                </label>
                                <select
                                    name="ownerIdType"
                                    id="ownerIdType"
                                    className="form-select"
                                    onChange={this.updateFormField}
                                >
                                    <option value="0" defaultChecked={this.state.ownerIdType === "0"}>Singapore NRIC</option>
                                    <option value="1" defaultChecked={this.state.ownerIdType === "1"}>Company</option>
                                    <option value="2" defaultChecked={this.state.ownerIdType === "2"}>Business</option>
                                    <option value="3" defaultChecked={this.state.ownerIdType === "3"}>Foreign Company</option>
                                    <option value="4" defaultChecked={this.state.ownerIdType === "4"}>Club/Association/Organization</option>
                                    <option value="5" defaultChecked={this.state.ownerIdType === "5"}>Government</option>
                                    <option value="6" defaultChecked={this.state.ownerIdType === "6"}>Limited Liability Partnership</option>
                                    <option value="7" defaultChecked={this.state.ownerIdType === "7"}>Limited Partnership</option>
                                    <option value="8" defaultChecked={this.state.ownerIdType === "8"}>Professional</option>
                                    <option value="9" defaultChecked={this.state.ownerIdType === "9"}>Statutory Board</option>
                                </select>
                            </div>


                            <hr />
                            {this.state.availability ?
                                <React.Fragment>
                                    {/* Car Make */}
                                    <div className="col-6">
                                        <label className="form-label">Make:</label>
                                        <input type="text" className="form-control"
                                            name="carMake" placeholder='e.g Audi'
                                            value={this.state.carMake}
                                            onChange={this.updateFormField} />
                                    </div>
                                    {/* Car Model */}
                                    <div className="col-6">
                                        <label className="form-label">Model:</label>
                                        <input type="text" className="form-control"
                                            name="carModel" placeholder='e.g A4'
                                            value={this.state.carModel}
                                            onChange={this.updateFormField} />
                                    </div>

                                    {/* Registration date */}
                                    <div className="mb-2 col-6">
                                        <label className="form-label">Registration Date:</label>
                                        <input type="date" className="form-control"
                                            name="carRegDate"
                                            value={this.state.carRegDate}
                                            onChange={this.updateFormField}
                                        />
                                    </div>

                                    {/* Pricing */}
                                    <div className="mb-2 col-6">
                                        <label className="form-label">Price:</label>
                                        <input type="text" className="form-control"
                                            name="carPrice" placeholder="car price"
                                            value={this.state.carPrice}
                                            onChange={this.updateFormField} />
                                    </div>

                                    {/* Mileage */}
                                    <div className="mb-2 col-6">
                                        <label className="form-label">Mileage:</label>
                                        <input type="text" className="form-control"
                                            name="carMileage" placeholder="mileage"
                                            value={this.state.carMileage}
                                            onChange={this.updateFormField} />
                                    </div>
                                    {/* COE */}
                                    <div className="mb-2 col-6">
                                        <label className="form-label">COE:</label>
                                        <input type="number" className="form-control"
                                            name="carCOE" min="0"
                                            value={this.state.carCOE}
                                            onChange={this.updateFormField} />
                                    </div>
                                    {/* ARF */}
                                    <div className="mb-2 col-6">
                                        <label className="form-label">ARF:</label>
                                        <input type="text" className="form-control"
                                            name="carARF" min="0"
                                            value={this.state.carARF}
                                            onChange={this.updateFormField} />
                                    </div>
                                    {/* Year of make */}
                                    <div className="mb-2 col-6">
                                        <label className="form-label">Year of make:</label>
                                        <input type="number" className="form-control"
                                            name="carYearOfMake" min="1960" max="2022"
                                            value={this.state.carYearOfMake}
                                            onChange={this.updateFormField} />
                                    </div>
                                    {/* Ownership */}
                                    <div className="mb-2 col-6">
                                        <label className="form-label">No of Owners:</label>
                                        <input type="number" className="form-control"
                                            name="carNoOfOwner" min="1"
                                            value={this.state.carNoOfOwner}
                                            onChange={this.updateFormField} />
                                    </div>
                                    {/* Vehicle Type */}
                                    <div className="mb-2 col-6">
                                        <label className="form-label">Vehicle Type:</label>
                                        <select className="form-select" name="carType"
                                            value={this.state.carType} onChange={this.updateFormField}>
                                            <option value="Sedan">Sedan</option>
                                            <option value="Luxury Sedan">Luxury Sedan</option>
                                            <option value="SUV">SUV</option>
                                            <option value="MPV">MPV</option>
                                            <option value="Hatchback">Hatchback</option>
                                            <option value="Sports">Sports</option>
                                        </select>
                                    </div>

                                    {/* Description - to be upgraded */}
                                    <div className="mb-2 col-12">
                                        <label className="form-label">Description:</label>
                                        <textarea className="form-control" name='description' id="description" rows="5"></textarea>
                                    </div>
                                </React.Fragment>
                                : null}
                            <div className='mb-2 col-12'>
                                <button className='btn auth-submit'
                                    onClick={() => {

                                        this.props.addCar({
                                            carPlate: this.state.carPlate,
                                            ownerId: this.state.ownerId,
                                            ownerIdType: this.state.ownerIdType,
                                            //-----------------
                                            carPrice: parseInt(this.state.carPrice),
                                            carRegDate: this.state.carRegDate,
                                            carMileage: parseInt(this.state.carMileage),
                                            carMake: this.state.carMake,
                                            carModel: this.state.carModel,
                                            carYearOfMake: parseInt(this.state.carYearOfMake),
                                            carCOE: parseInt(this.state.carCOE),
                                            carARF: parseInt(this.state.carARF),
                                            carNoOfOwner: parseInt(this.state.carNoOfOwner),
                                            carType: this.state.carType,
                                            availability: this.state.availability
                                        })
                                        this.setState({
                                            profileTab: "inventory"
                                        })
                                    }}>Add Car</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
    renderConfirmation = () => {
        return <React.Fragment>
            <div className='container-fluid'>
                <div className="row bg-light">
                    <div className='col-12'>
                        {this.state.carPlate} has been successfully added
                    </div>
                    <div className='col-12'>
                        <button className='auth-submit'
                            onClick={() => {
                                this.setState({
                                    profileTab: "inventory"
                                })
                            }}>View my inventory</button>
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
                    <div className="content-box" style={this.state.profileTab === "editCar" || this.state.profileTab === "addCar" ? { 'height': 'auto' } : null}>
                        {this.state.profileTab === "inventory" ?
                            this.renderInventory()
                            : null}
                        {this.state.profileTab === "editCar" ?
                            this.renderEditCar()
                            : null}
                        {this.state.profileTab === "addCar" ?
                            this.renderAddCar()
                            : null}
                        {this.state.profileTab === "editImages" ?
                            this.renderEditImages()
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
                                className={
                                    this.state.profileTab === "inventory" ||
                                        this.state.profileTab === "editCar" ||
                                        this.state.profileTab === "editImages" ||
                                        this.state.profileTab === "deleteCar"
                                        ? "nav-link active" : "nav-link"}
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