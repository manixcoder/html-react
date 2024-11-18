import React from 'react'
import ToppBar from './ToppBar/ToppBar'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Service from './Service/Service'
import Destination from './Destination/Destination'
import Package from './Package/Package'
import Booking from './Booking/Booking'
import Process from './Process/Process'
import Team from './Team/Team'
import Testimonial from './Testimonial/Testimonial'
import Footer from './Footer/Footer'


const Home = () => {
    return (
        <>
            <ToppBar />
            <Navbar />
            <About />
            <Service />
            <Destination />
            <Package />
            <Booking />
            <Process />
            <Team />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Home
