import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/auth.css"

export default class Register extends React.Component {
    state = {
        ownCar: false,
    }
    setOwnCar = (status) => {
        this.setState({
            ownCar: status
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="card p-5 bg-light">
                    <div className="img-circle-reg">
                        <img src={require("../../images/default-user.jpeg")} alt="" />
                    </div>
                    <hr />
                    <div className="card-body">
                        {/* Username register */}
                        <div className="mb-1">
                            <label for="usernameReg" className="form-label">
                                <b>Username</b> <span className="text-danger">*</span><br />
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="usernameReg"
                                id="usernameReg"
                                value={this.props.usernameReg}
                                onChange={this.props.updateFormField}
                            />
                        </div>
                        <div className="mb-1">
                            <label for="email" className="form-label">
                                <b>Email Address</b> <span className="text-danger">*</span>
                            </label>

                            <input type="text" className="form-control" name="email" id="email" />
                        </div>
                        <div className="mb-1">
                            <label for="password" className="form-label">
                                <b>Password</b> <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" name="password" id="password" />
                        </div>
                        <div className="mb-3">
                            <label for="password-confirm" className="form-label">
                                <b>Confirm Password</b> <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" name="password-confirm" id="password-confirm" />
                        </div>
                        <div className="mb-3">
                            {/* Check if user have a vehicle */}
                            <label for="own-car" className="form-label">
                                <b>Do you own a car ?</b>
                            </label>
                            <div className="mb-3">
                                {/* Own a car : true */}
                                <button
                                    className="btn-form btn-primary"
                                    onClick={() => {
                                        this.setOwnCar(true)
                                    }}
                                >Yes</button>
                                {/* Own a car : false */}
                                <button
                                    className="btn-form btn-secondary"
                                    onClick={() => {
                                        this.setOwnCar(false)
                                    }}
                                >No</button>
                            </div>
                            {this.state.ownCar ?
                                <React.Fragment>
                                    {/* Vehicle info */}
                                    <div className="mb-3">
                                        <div className="mb-1">
                                            <label for="car-plate" className="form-label">
                                                <b>Vehicle Plate Number</b> <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" maxlength="8" className="form-control" name="car-plate" id="car-plate" />
                                        </div>
                                        <div className="mb-1">
                                            <label for="owner-id-type" className="form-label">
                                                <b>Owner ID Type</b> <span className="text-danger">*</span>
                                            </label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>- Select Owner ID Type -</option>
                                                <option value="0">Singapore NRIC</option>
                                                <option value="1">Company</option>
                                                <option value="2">Business</option>
                                                <option value="3">Foreign Company</option>
                                                <option value="4">Club/Association/Organization</option>
                                                <option value="5">Government</option>
                                                <option value="6">Limited Liability Partnership</option>
                                                <option value="7">Limited Partnership</option>
                                                <option value="8">Professional</option>
                                                <option value="9">Statutory Board</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label for="owner-id" className="form-label">
                                                <b>Owner ID (last 4 char)</b> <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" maxlength="4" className="form-control" name="owner-id" id="owner-id" />
                                        </div>
                                    </div>
                                </React.Fragment> : null

                            }

                        </div>

                        <div className="mb-3">
                            <input type="submit" value="Create my acount" className="back-submit" />
                        </div>

                    </div>
                </div>

            </React.Fragment>
        )
    }

}