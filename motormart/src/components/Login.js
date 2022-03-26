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
                                <label for="username" className="form-label">Username</label>
                                <input type="text" className="form-control" name="username" id="username" placeholder="alphaowner" />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" id="password" placeholder="********" />
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