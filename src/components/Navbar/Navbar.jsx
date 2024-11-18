import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <Link to="" className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/service" className="nav-item nav-link">Services</Link>
                            <Link to="/package" className="nav-item nav-link">Packages</Link>
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu m-0">
                                    <Link to="/destination" className="dropdown-item">Destination</Link>
                                    <Link to="/booking" className="dropdown-item">Booking</Link>
                                    <Link to="/team" className="dropdown-item">Travel Guides</Link>
                                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>

                                </div>
                            </div>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <Link to="/register" className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
                    </div>
                </nav>

                <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                    <div className="container py-5">
                        <div className="row justify-content-center py-5">
                            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                                <p className="fs-4 text-white mb-4 animated slideInDown">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                                <div className="position-relative w-75 mx-auto animated slideInDown">
                                    <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
                                    <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{ marginTop: '7px' }}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="/" ></Route>
                    <Route path="/about" ></Route>
                    <Route path="/service" ></Route>
                    <Route path="/package" ></Route>
                    <Route path='/destination'></Route>
                    <Route path='/booking'></Route>
                    <Route path='/team'></Route>
                    <Route path='/testimonial'></Route>
                    <Route path='/contact'></Route>
                    <Route path='/register'></Route>

                </Routes>
            </div>
        </>

    )
}

export default Navbar
