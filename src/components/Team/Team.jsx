import React from 'react';
import {  Link } from 'react-router-dom'

const Team = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
                    <h1 className="mb-5">Meet Our Guide</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="assets/img/team-1.jpg" alt="team-1" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="assets/img/team-2.jpg" alt="team-2" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="assets/img/team-3.jpg" alt="team-3" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="assets/img/team-4.jpg" alt="team-4" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square mx-1" to=""><i className="fab fa-instagram"></i></Link>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
