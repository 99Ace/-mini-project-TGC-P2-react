import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/auth.css"

export default function Login(props) {

    return (
        <React.Fragment>
            <div className='row'>
                <div className="col-md-2 col-lg-3 bg-light"></div>
                <div className='col-12 col-md-8 col-lg-6'>
                    <div className="card p-5 mx-auto">
                        <div className="img-circle">
                            <img src={require("../images/default-user.jpeg")} alt="default user icon" className="mx-auto" />
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label for="usernameLogin" className="form-label">Username</label>
                                {/* UsernameLogin input */}
                                <input type="text" className="form-control" name="usernameLogin" id="usernameLogin" value={props.usernameLogin} onChange={props.updateFormField} placeholder="alphaowner" />
                            </div>
                            <div className="mb-3">
                                <label for="passwordLogin" className="form-label">Password</label>
                                <input type="passwordLogin" className="form-control" name="passwordLogin" id="passwordLogin" value={props.passwordLogin} onChange={props.updateFormField} placeholder="********" />
                            </div>
                            <div className="mb-3">
                                <input type="submit" className="login-submit" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-lg-3 bg-light"></div>
            </div>

        </React.Fragment>
    )
}