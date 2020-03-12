import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid px-lg-4">
                    <a className="navbar-brand d-none d-lg-block" href="/">
                        <img src="https://st.chungta.vn/v306/chungta/images/graphics/logofpt.fw.png" alt="logo" />

                    </a>
                    <button className="navbar-toggler" type="button"
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand d-lg-none" href="/">
                        <img src="https://st.chungta.vn/v306/chungta/images/graphics/logofpt.fw.png" alt="logo" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/"
                                    id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Language
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/">Vietnamese</a>
                                    <a className="dropdown-item" href="/">English</a>
                                </div>
                            </li>
                        </ul>
                        <div className="dropdown-divider"></div>
                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-success mr-2 my-2 my-sm-0" type="submit">Login</button>
                            {/* <span>/</span> */}
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign up</button>
                        </form>
                        {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" 
                        placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                    </div>
                </div>
            </nav>
        )
    }
}
