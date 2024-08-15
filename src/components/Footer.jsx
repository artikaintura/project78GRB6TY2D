import React from 'react'

function Footer() {
  return (
    <>
      <div className='grid grid-cols-2 grid-rows-2 text-gray-600 bg-black md:gap-x-20 gap-x-10 gap-y-24 md:grid-cols-4 md:grid-rows-1 p-14'>

        <div>
          <div className='mb-6'>
            <a href='#Home' className="hover:text-white"><h4 className='text-xl font-bold text-white'>Kingsukh <br/> Guest <br/>House</h4></a>
          </div>
          <p className='mb-6'>
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <a href='https://wa.link/at5ion' className='block mb-6'>
            <button className="px-6 py-4 font-bold text-white bg-pink-600 rounded-lg hover:bg-pink-700">
              BOOK NOW
            </button></a>
        </div>



        <div>
          <h4 className='text-xl font-bold text-white'>QUICK LINKS</h4>
          <ul className='mt-6 space-y-5'>
            <li><a href='#' className="hover:text-white">Browse Destinations</a></li>
            <li><a href='#' className="hover:text-white">Special Offers & Packages</a></li>
            <li><a href='#' className="hover:text-white">Room Types & Amenities</a></li>
            <li><a href='#' className="hover:text-white">Customer Reviews & Ratings</a></li>
            <li><a href='#' className="hover:text-white">Travel Tips & Guides</a></li>
          </ul>
        </div>


        <div>
          <h4 className='text-xl font-bold text-white'>OUR SERVICES</h4>
          <ul className='mt-6 space-y-5'>
            <li><a href='#' className="hover:text-white">Concierge Assistance</a></li>
            <li><a href='#' className="hover:text-white">Flexible Booking Options</a></li>
            <li><a href='#' className="hover:text-white">Airport Transfers</a></li>
            <li><a href='#' className="hover:text-white">Wellness & Recreation</a></li>
          </ul>

        </div>


        <div>
          <h4 className='text-xl font-bold text-white'>CONTACT US</h4>
          <ul className='mt-6 space-y-5'>
            <li><a href='https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA' className="hover:text-white">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></li>
            <li><a href='mailto:kkghosh0099@gmail.com' className="hover:text-white">kkghosh0099@gmail.com</a></li>
            <li><a href='tel:+919007062180' className="hover:text-white">+91 9007062180 </a></li>
          </ul>
          <div className='flex flex-row mt-5 space-x-6'>
            <a href='#' className="hover:opacity-80"><img src='assests/facebook.png' className='w-6 h-6' alt=''/></a>
            <a href='https://www.intagram.com/kingsukhguesthouse/' className="hover:opacity-80"><img src='assests/instagram.png' className='w-6 h-6' alt=''/></a>
            <a href='#' className="hover:opacity-80"><img src='assests/youtube.png' className='w-6 h-6' alt=''/></a>
            <a href='#' className="hover:opacity-80"><img src='assests/twitter.png' className='w-6 h-6' alt=''/></a>
          </div>

        </div>


      </div>

    </>
  )
}

export default Footer