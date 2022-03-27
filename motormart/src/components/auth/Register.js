import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/auth.css"

export default class Register extends React.Component {
    state = {

        //form
        username: "",
        password: "",
        passwordConfirm: "",
        email: "",
        contact:"",
        ownCar: false,
        carPlate: "",
        ownerIdType: "0",
        ownerId: "",
        // Validation
        noSpecialCharactersChecker: false,
        min6charChecker: false,
        emailChecker: false,
        contactChecker: false,
        pass1Checker:false,
        pass2Checker:false,
        passwordChecker: false,
        carPlateChecker: false,
        ownerIdChecker: false,

        formReady: false,
    }
    setOwnCar = (status) => {
        this.setState({
            ownCar: status
        }, ()=> this.checkFormReady() )
    }
    checkFormReady = () => {
        // check basic form completed
        let formReady = (
            this.state.noSpecialCharactersChecker &&
            this.state.min6charChecker &&
            this.state.emailChecker &&
            this.state.contactChecker &&
            this.state.pass1Checker &&
            this.state.pass2Checker &&
            this.state.passwordChecker)
            
        if (this.state.ownCar) {
            formReady = (
                this.state.noSpecialCharactersChecker &&
                this.state.min6charChecker &&
                this.state.emailChecker &&
                this.state.passwordChecker &&
                this.state.carPlateChecker &&
                this.state.ownerIdChecker)       
        }
        console.log("Form Status",formReady)
        // Save formReady status
        this.setState({
            formReady: formReady
        })
    }
    updateUsername = (e) => {
        // check username entry
        let check1 = !this.hasSpecialCharacters(e.target.value)
        let check2 = !(e.target.value.length < 6)

        // let formReady = check1 && check2
        this.setState({
            [e.target.name]: e.target.value,
            noSpecialCharactersChecker: check1,
            min6charChecker: check2,
        }, () => this.checkFormReady()
        )
    }
    updateEmail = (e) => {
        // check username entry
        let checkEmail = this.validateEmail(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
            emailChecker: checkEmail

            //     formReady: formReady
        }, () => this.checkFormReady())
    }
    updateContact = (e) => {
        let contactCheck = this.validateContact(e.target.value)
        console.log(contactCheck)
        this.setState({
            [e.target.name]: e.target.value,
            contactChecker: contactCheck
        }, () => this.checkFormReady())
    }
    updatePassword = (e) => {

        if (e.target.name==="password"){
            e.target.value.length>5 ? 
            this.setState({ pass1Checker : true }) : 
            this.setState({ pass1Checker : false })
        }
        if (e.target.name==="passwordConfirm"){
            e.target.value.length>5 ? 
            this.setState({ pass2Checker : true }) : 
            this.setState({ pass2Checker : false })
        }
        this.setState({
            [e.target.name]: e.target.value,
        }, () => this.validatePassword())

    }
    updateCarPlate = (e) => {
        let check5 = this.validateCarPlate(e.target.value)
        console.log(check5)
        this.setState({
            [e.target.name]: e.target.value.toUpperCase(),
            carPlateChecker: check5
        }, () => this.checkFormReady())
    }
    updateOwnerId = (e) => {
        let check6 = this.validateOwnerId(e.target.value)
        console.log(check6)
        this.setState({
            [e.target.name]: e.target.value.toUpperCase(),
            ownerIdChecker: check6
        }, () => this.checkFormReady())
    }
    updateOwnerIdType = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    // ===================== VERIFICATION =====================
    // check for specialChars
    hasSpecialCharacters = (username) => {
        let specialChars = `/[!@#$%^&*()_+-=[]{};':"\\|,.<>/?]+/;`
        let userCheck = specialChars.split('').some(char => username.includes(char));
        return (userCheck) // will return true/false
    }
    // validate is email
    validateEmail = (elementValue) => {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(elementValue);
    }
    // validate contact
    validateContact = (elementValue) => {
        var contact = /^[0-9]{8}$/;
        return contact.test(elementValue);
    }
    // validate password matches
    validatePassword = () => {
        this.setState({
            passwordChecker: this.state.password === this.state.passwordConfirm
        }, () => this.checkFormReady())
    }
    // validate car detail : car plate
    validateCarPlate = (elementValue) => {
        var carPlate = /^[a-zA-Z]{3}[0-9]+[a-zA-Z]{1}$/;
        return carPlate.test(elementValue);
    }
    // validate car detail : owner id
    validateOwnerId = (elementValue) => {
        var ownerId = /^[0-9]{3}[a-zA-Z]{1}$/;
        return ownerId.test(elementValue);
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
                            <label className="form-label">
                                <b>Username</b> <span className="text-danger">*</span><br />
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                id="username"
                                value={this.state.username}
                                onChange={this.updateUsername}
                            />
                            <p>
                                {!this.state.noSpecialCharactersChecker ? <React.Fragment><span className='text-muted'>no special characters not allowed </span><br /></React.Fragment> : null}
                                {!this.state.min6charChecker ? <span className='text-muted'>minimum 6 characters</span> :
                                    <i className="fa-solid fa-check text-success"></i>}
                            </p>

                        </div>
                        {/* Email */}
                        <div className="mb-1">
                            <label className="form-label">
                                <b>Email Address</b> <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                id="email"
                                value={this.state.email}
                                onChange={this.updateEmail}
                            />
                            <p>
                                {!this.state.emailChecker ? <React.Fragment><span className='text-muted'>e.g xyz@gmail.com  </span><br /></React.Fragment> :
                                    <i className="fa-solid fa-check text-success"></i>}
                            </p>
                        </div>
                        {/* Contact */}
                        <div className="mb-1">
                            <label className="form-label">
                                <b>Contact</b> <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="contact"
                                id="contact"
                                value={this.state.contact}
                                onChange={this.updateContact}
                            />
                            <p>
                                {!this.state.contactChecker ? <React.Fragment><span className='text-muted'>e.g 91234567  </span><br /></React.Fragment> :
                                    <i className="fa-solid fa-check text-success"></i>}
                            </p>
                        </div>
                        {/* Password */}
                        <div className="mb-1">
                            <label className="form-label">
                                <b>Password</b> <span className="text-danger">*</span>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.updatePassword}
                            />
                        </div>
                        {/* Confirm Password */}
                        <div className="mb-3">
                            <label className="form-label">
                                <b>Confirm Password</b> <span className="text-danger">*</span>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                name="passwordConfirm"
                                id="passwordConfirm"
                                value={this.state.passwordConfirm}
                                onChange={this.updatePassword}
                            />
                            <p>
                                {!this.state.passwordChecker ? <React.Fragment><span className='text-muted'> Make sure you match the password </span><br /></React.Fragment> :
                                    <i className="fa-solid fa-check text-success"></i>}
                            </p>
                        </div>
                        {/* Vehicle Detail */}
                        <div className="mb-3">
                            {/* Check if user have a vehicle */}
                            <label className="form-label">
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
                            {/* Show Vehicle Form */}
                            {this.state.ownCar ?
                                <React.Fragment>
                                    <div className="mb-3">
                                        {/* Vehicle Plate Number */}
                                        <div className="mb-1">
                                            <label className="form-label">
                                                <b>Vehicle Plate Number</b> <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                maxLength="8"
                                                className="form-control"
                                                name="carPlate"
                                                id="carPlate"
                                                value={this.state.carPlate}
                                                onChange={this.updateCarPlate}
                                            />
                                            <p>
                                                {!this.state.carPlateChecker ? <React.Fragment><span className='text-muted'> e.g SCN3430M </span><br /></React.Fragment> :
                                                    <i className="fa-solid fa-check text-success"></i>}
                                            </p>
                                        </div>
                                        {/* Owner ID Type */}
                                        <div className="mb-1">
                                            <label className="form-label">
                                                <b>Owner ID Type</b> <span className="text-danger">*</span>
                                            </label>
                                            <select
                                                name="ownerIdType"
                                                id="ownerIdType"
                                                className="form-select"
                                                aria-label="Default select example"
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
                                        {/* Owner ID */}
                                        <div>
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
                                                onChange={this.updateOwnerId}
                                            />
                                            <p>
                                                {!this.state.ownerIdChecker ? <React.Fragment><span className='text-muted'> e.g SCN3430M </span><br /></React.Fragment> :
                                                    <i className="fa-solid fa-check text-success"></i>}
                                            </p>
                                        </div>
                                    </div>
                                </React.Fragment> : null

                            }

                        </div>
                        {/* Register Account */}
                        <div className="mb-3">  
                            <input
                                type="submit"
                                value="Create my account"
                                onClick={() => {
                                    this.props.submitRegister(
                                        {
                                            username: this.state.username,
                                            email: this.state.email,
                                            contact: this.state.contact,
                                            password: this.state.password,
                                            passwordConfirm: this.state.passwordConfirm,
                                            ownCar: this.state.ownCar,
                                            carPlate: this.state.carPlate,
                                            ownerIdType: this.state.ownerIdType,
                                            ownerId: this.state.ownerId
                                        }
                                    )
                                }}
                                className={!this.state.formReady ? "back-submit" : "auth-submit"}
                                disabled={!this.state.formReady}
                            />
                        </div>
                        {/* Go to Login  */}
                        <div className="mb-3">
                            <input
                                type="submit"
                                value="Already have an account"
                                onClick={() => { this.props.setActive("profile") }}
                                className="back-submit" />
                        </div>

                    </div>
                </div>

            </React.Fragment>
        )
    }

}