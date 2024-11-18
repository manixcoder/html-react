import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    const options = {
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                    <h1 className="mb-5">Our Clients Say!!!</h1>
                </div>
                <OwlCarousel className="owl-theme testimonial-carousel" {...options}>
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="testimonial-item bg-white text-center border p-4">
                            <img
                                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                                src={`assets/img/testimonial-${item}.jpg`}
                                alt={`Client ${item}`}
                                style={{ width: '80px', height: '80px' }}
                            />
                            <h5 className="mb-0">John Doe</h5>
                            <p>New York, USA</p>
                            <p className="mt-2 mb-0">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita
                                erat ipsum et lorem et sit.
                            </p>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Testimonial;