import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/auth.css"

export default function Logout(props) {

    return (
        <React.Fragment>
            <div className='row'>
                <div className="col-md-2 col-lg-3 bg-light"></div>
                <div className='col-12 col-md-8 col-lg-6'>
                    <div className="card p-5 mx-auto">
                        <div className="img-circle">
                            <img src={require("../../images/default-user.jpeg")} alt="default user icon" className="mx-auto" />
                        </div>
                        <div className="card-body">
                            <div className="my-3 text-center">
                                <h5>{props.username}</h5>
                                <p>
                                    Sure you are logging out?
                                </p>
                            </div>
                            <div className="mb-1">
                                {/* SubmitLogin button */}
                                <input type="submit" value="Logout" className="auth-submit" onClick={() => { props.submitLogout() }} />
                            </div>
                            <div className="mb-1">
                                {/* Back to Profile button */}
                                <input type="submit" value="return to profile" className="back-submit" onClick={() => { props.setActive("profile") }} />
                            </div>
                            

                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-lg-3 bg-light"></div>
            </div>

        </React.Fragment>
    )
}