import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/auth.css"

export default class Register extends React.Component {
    state = {
        ownCar: false,
        //form
        username:"",
        // Validation
        noSpecialCharactersChecker:true,
        min6charChecker : true,
        formReady: false,
    }
    setOwnCar = (status) => {
        this.setState({
            ownCar: status
        })
    }
    checkFormReady=()=>{
        console.log("check if form ready")
        console.log(
            this.state.noSpecialCharactersChecker &&
            this.state.min6charChecker
        )
    }
    updateFormField=(e)=>{
        // check username entry
        let check1 = !this.hasSpecialCharacters( e.target.value )
        let check2 = !(e.target.value.length<6)

        let formReady = check1 && check2
        this.setState({
            [e.target.name]:e.target.value,
            noSpecialCharactersChecker: check1,
            min6charChecker: check2,

            formReady: formReady
        })
    }
    // ===================== VERIFICATION =====================
    // check for specialChars
    hasSpecialCharacters=(username)=> {
        console.log(username)
        let specialChars = `/[!@#$%^&*()_+-=[]{};':"\\|,.<>/?]+/;`
        let userCheck = specialChars.split('').some(char => username.includes(char));
        
        return (userCheck) // will return true/false
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
                                onChange={this.updateFormField}
                            />
                            <p>
                                { !this.state.noSpecialCharactersChecker ? <React.Fragment><span className='text-danger'>special characters not allowed </span><br/></React.Fragment>: null } 
                                { !this.state.min6charChecker? <span className='text-danger'>minimum 6 characters</span>:null }
                            </p>
                            
                        </div>

                         {/* Old code    */}
                        {/* <div className="mb-1">
                            <label className="form-label">
                                <b>Username</b> <span className="text-danger">*</span><br />
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                id="username"
                                value={this.props.username}
                                onChange={this.props.updateFormField}
                            />
                            <p>
                                { !this.state.noSpecialCharacters ? <React.Fragment><span className='text-danger'>special characters not allowed </span><br/></React.Fragment>: null } 
                                { this.props.username.length<6? <span className='text-danger'>minimum 6 characters</span>:null }
                            </p>
                            
                        </div> */}

                        <div className="mb-1">
                            <label className="form-label">
                                <b>Email Address</b> <span className="text-danger">*</span>
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                id="email"
                                value={this.props.email}
                                onChange={this.props.updateFormField}
                            />
                        </div>
                        <div className="mb-1">
                            <label className="form-label">
                                <b>Password</b> <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="password"
                                id="password"
                                value={this.props.password}
                                onChange={this.props.updateFormField}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                <b>Confirm Password</b> <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="passwordConfirm"
                                id="passwordConfirm"
                                value={this.props.passwordConfirm}
                                onChange={this.props.updateFormField}
                            />
                        </div>
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
                            {this.state.ownCar ?
                                <React.Fragment>
                                    {/* Vehicle info */}
                                    <div className="mb-3">
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
                                                value={this.props.carPlate}
                                                onChange={this.props.updateFormField}
                                            />
                                        </div>
                                        <div className="mb-1">
                                            <label className="form-label">
                                                <b>Owner ID Type</b> <span className="text-danger">*</span>
                                            </label>
                                            <select 
                                                name="ownerIdType" 
                                                id="ownerIdType" 
                                                className="form-select" 
                                                aria-label="Default select example"
                                                onChange={this.props.updateFormField}
                                            >
                                                <option>- Select Owner ID Type -</option>
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
                                            <label className="form-label">
                                                <b>Owner ID (last 4 char)</b> <span className="text-danger">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                maxLength="4" 
                                                className="form-control" 
                                                name="ownerId" 
                                                id="ownerId" 
                                                value={this.props.ownerId}
                                                onChange={this.props.updateFormField}
                                            />
                                        </div>
                                    </div>
                                </React.Fragment> : null

                            }

                        </div>

                        <div className="mb-3">
                            <input 
                                type="submit" 
                                value="Create my acount" 
                                onClick={ ()=> {this.props.submitRegister()}}
                                className="back-submit" 
                                disabled={ !this.state.formReady }
                                />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="submit" 
                                value="Already have an account" 
                                onClick={ ()=> {this.props.setActive("profile")}}
                                className="back-submit" />
                        </div>

                    </div>
                </div>

            </React.Fragment>
        )
    }

}