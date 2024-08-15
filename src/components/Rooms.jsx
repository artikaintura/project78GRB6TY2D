import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { RiPaintFill, RiShieldStarLine } from "react-icons/ri";
function Rooms() {

  return (
    <>
      <div className='flex flex-col justify-between max-w-6xl px-4 mx-auto '>
        <p className='text-xl'>OUR LIVING ROOM<span className='text-3xl text-pink-700'> - </span></p>
        <h1 className='text-4xl font-bold md:text-4xl'>The Most Memorable Rest<br />Time Starts Here.</h1>
        <div className='flex flex-row mt-14 gap-x-5 md:mr-52'>
          <div className='bg-white rounded-lg shadow-lg'>
            <div className='relative inline-block'>
              <img className='rounded-lg'
                src='/assests/small.jpg'
                alt='' />
              <div className='absolute bottom-0 left-0 right-0 flex flex-row justify-end p-2 space-x-2 text-white bg-opacity-50 '>
                <span className="inline-flex items-center justify-center bg-white rounded-full w-9 h-9">
               <i className='transition-all duration-300 cursor-pointer hover:scale-105'><FaHeart style = {{color: 'pink',fontSize: '1.6rem'}}/> </i></span>
                <span className="inline-flex items-center justify-center bg-white rounded-full w-9 h-9">
                <i className='transition-all duration-300 cursor-pointer hover:scale-105'><RiPaintFill style = {{color: 'purple',fontSize: '1.6rem'}} />  </i></span>
                <span className="inline-flex items-center justify-center bg-white rounded-full w-9 h-9">
                <i className='transition-all duration-300 cursor-pointer hover:scale-105'><RiShieldStarLine style = {{color: 'blue',fontSize: '1.6rem'}}/></i>  </span>
              </div>
            </div>

            <div className='h-56 mt-2 ml-2'>
              <h1 className='text-xl font-bold'>Cozy Haven Room</h1>
              <p className='text-2xs'>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
              <p className='mt-2'>Starting from <span className='font-bold'>Rs. 1000/night</span></p>
              <a href='https://wa.link/at5ion' className='block mb-6'>
              <button className="px-4 py-2 mt-2 font-bold text-white bg-pink-600 rounded hover:bg-pink-700">
                BOOK NOW
              </button>
              </a>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg'>
            <div className='relative inline-block'>
              <img className='rounded-lg'
                src='/assests/large.jpg'
                alt=''
              />
              <div className='absolute bottom-0 left-0 right-0 flex flex-row justify-end p-2 space-x-2 text-white bg-opacity-50'>
                <span className="inline-flex items-center justify-center bg-white rounded-full w-9 h-9">
               <i className='transition-all duration-300 cursor-pointer hover:scale-105'><FaHeart style = {{color: 'pink',fontSize: '1.6rem'}}/> </i></span>
                <span className="inline-flex items-center justify-center bg-white rounded-full w-9 h-9">
                <i className='transition-all duration-300 cursor-pointer hover:scale-105'><RiPaintFill style = {{color: 'purple',fontSize: '1.6rem'}} />  </i></span>
                <span className="inline-flex items-center justify-center bg-white rounded-full w-9 h-9">
                <i className='transition-all duration-300 cursor-pointer hover:scale-105'><RiShieldStarLine style = {{color: 'blue',fontSize: '1.6rem'}}/></i>  </span>
              </div>
            </div>
            <div className='mt-2 ml-2'>
              <h1 className='text-xl font-bold'>Spacious Serenity Suite</h1>
              <p className='text-2xs'>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</p>
              <p className='mt-2'>Starting from <span className='font-bold'>Rs. 1500/night </span></p>
              <a href='https://wa.link/at5ion'>
              <button className="px-4 py-2 mt-2 font-bold text-white bg-pink-600 rounded hover:bg-pink-700">
                BOOK NOW
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}

export default Rooms;