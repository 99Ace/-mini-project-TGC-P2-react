import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/auth.css"

export default class Login extends React.Component {
    state = {
        username : "",
        password : "",
    }

    updateFormField=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
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
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    {/* UsernameLogin input */}
                                    <input type="text" className="form-control" name="username" id="username" value={this.state.username} onChange={this.updateFormField} placeholder="alphaowner" />
                                </div>
                                <div className="mb-3">
                                    {/* PasswordLogin input */}
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" id="password" value={this.state.password} onChange={this.updateFormField} placeholder="********" />
                                </div>
                                
                                   
                                <div className="mb-1">
                                    {/* SubmitLogin button */}
                                    <input type="submit" value="Login" className="auth-submit" onClick={() => { this.props.submitLogin( {
                                        username : this.state.username,
                                        password : this.state.password
                                    }) }} />
                                </div>
                                <div className="mb-3">
                                    {/* Go Register page button */}
                                    <a className="back-submit" onClick={() => { this.props.setActive("register") }} >Register</a>
                                </div>
                                {!this.props.auth? <div className='text-danger'>{this.props.message[0]}</div>:null }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-3 bg-light"></div>
                </div>

            </React.Fragment>
        )
    }

}