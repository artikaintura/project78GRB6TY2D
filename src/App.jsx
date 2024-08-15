import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Rooms from "./components/Rooms";
import Gallary from "./components/Gallary";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>


      {/* Navbar */}
      <header className='relative w-full min-h-screen bg-center bg-cover ' style={{ backgroundImage: "url('/assests/ayodhya.webp')" }}>
        <Navbar />

        {/* Home Section */}
        <header id="Home">
          <Home />
        </header>
        <div className='flex items-center justify-center py-8 mx-5 my-0 mt-40 bg-white border border-gray-200 rounded-lg shadow-lg'>
          <a href='https://wa.link/at5ion'>
            <button className="px-4 py-2 font-bold text-white bg-pink-600 rounded hover:bg-pink-700">
              BOOK NOW
            </button>
          </a>
        </div>
      </header>
      <br /><br /><br />
      {/* About Section */}
      <section id="About" className="items-center justify-center w-full p-5 bg-white">
        <About />
      </section>

      <br /><br /><br />
      {/* Rooms Section */}
      <section id="Rooms" className="items-center justify-center w-full p-5 bg-white">
        <Rooms />
      </section>
      <br /><br /><br />
      {/* Services Section */}
      <section id="Services" className='w-full bg-center bg-cover md:mb-16 ' style={{ backgroundImage: "url('/assests/palash.webp')" }}>
        <Services />
      </section>
      <div className='flex flex-row items-center justify-center h-32 m-5 mt-0 bg-white border border-gray-200 shadow-xl md:mt-0 space-x-60 md:m-3 md:p-4 md:space-x-96'>
        <div className="text-center md:space-x-9 space-x-7 ">
          <h1 className="text-3xl font-bold">100 +</h1>
          <p className="text-2xl text-gray-400">Bookings Completed</p>
        </div>
        <div className="text-center ">
          <h1 className="text-3xl font-bold">150 +</h1>
          <p className="text-2xl text-gray-400">Happy Customers</p>
        </div>
      </div>
      <br /><br /><br />
      {/* Gallery Section */}
      <section id="Gallary" className="w-full h-full bg-white ">
        <Gallary />
      </section>

      <br /><br /><br />

      {/* Contact Section */}
      <section id="Contact" className="w-full h-full bg-pink-600 md:bg-white">
        <Contact />
      </section>

      {/* Map section*/}
      <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14636.621420368926!2d86.852035!3d23.583665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1698054141550!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        title="Map"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" />
      
      </section>


      <section id="Footer" className="items-center justify-center w-full h-full bg-black">
        <Footer />

        <div className="text-center text-gray-600">Copyright © 2024 Kingsukh Guest House. All rights reserved.
        </div>
      </section>

    </>
  );
}

export default App;
