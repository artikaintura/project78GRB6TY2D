import React from 'react'

function About() {
  return (
    <>
      <div className='flex flex-col items-center justify-between max-w-6xl px-4 mx-auto md:flex-row'>
        <div className='flex-1 order-1 ml-1'>
          <img
            src="/assests/out.jpg"
            className='max-h-screen w-96'
            alt=''
          />
        </div>
        <div className='flex-1 order-2 mt-4 ml-1 space-y-4'>
          <h1 className='text-xl'> ABOUT US<span className='text-3xl text-pink-700'> - </span></h1>
          <h2 className='text-2xl font-bold'>The Best Holidays Start Here!</h2>
          <p className='text-2xs md:text-md'>
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
          </p>
          <p className='font-bold text-purple-900'>
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </p>
          <p className='font-bold text-blue-600'>  Contact us: +91 9007062180</p>
          <a href='https://wa.link/at5ion'>
          <button className="px-4 py-2 font-bold text-white bg-pink-600 rounded hover:bg-pink-700">
            BOOK NOW
          </button>
          </a>
        </div>
      </div>

    </>
  )
}

export default About;