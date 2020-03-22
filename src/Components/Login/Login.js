import React, { Component } from 'react'
// eslint-disable-next-line
import axios from '../../Axios and config/axios'
import './style.css'
export default class Login extends Component {
    render() {
        return (
            <div className="bg-corlor">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">

                                    <h5 className="card-title text-center">
                                        <img className="mr-2" src="https://st.chungta.vn/v306/chungta/images/graphics/logofpt.fw.png" alt="logo" />
                                    Sign In
                                </h5>
                                    <form className="form-signin" id="loginForm">
                                        <div className="form-label-group">
                                            <input type="" id="inputEmail" className="form-control" placeholder="username" required autoFocus />
                                            <label htmlFor="inputEmail">Email address</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="password" required />
                                            <label htmlFor="inputPassword">Password</label>
                                        </div>

                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                        </div>
                                        <button id="login2" className="btn btn-lg btn-primary btn-block text-uppercase">Sign in</button>
                                        <p id="message"></p>
                                        <hr className="my-4" />
                                        <button className="btn btn-lg btn-google btn-block text-uppercase"><i
                                            className="fab fa-google mr-2"></i> Sign in with Google</button>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase"><i
                                            className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
