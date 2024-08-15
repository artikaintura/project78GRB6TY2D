import React from 'react'
import { IoMdRestaurant } from "react-icons/io";
import { RiShieldStarLine, Ri24HoursFill  } from "react-icons/ri";
import { CiMap } from "react-icons/ci";
function Services() {
  return (
    <>

      <div className='flex flex-row items-center justify-center mx-auto mt-0 md:gap-96'>
        <div className='hidden bg-pink-500 md:order-1 md:block'>
          
        </div>

        <div className='bg-white md:order-2'>
          <div className='mt-2 ml-10 mr-60 md:mr-9'>
            <p className='text-xl '>SERVICES<span className='text-3xl text-pink-700'> - </span></p>
            <h1 className='mt-1 text-3xl font-bold md:text-4xl'>Strive Only For The Best.</h1>
            <div className='flex flex-col ml-0'>
              <div className='flex items-center'>
                <span className="inline-flex items-center justify-center ml-12 bg-blue-100 rounded-full mt-7 w-9 h-9">
                  <RiShieldStarLine style={{ color: 'skyblue', fontSize: '1.6rem' }} /></span><p className='ml-4 text-xl font-semibold mt-7'> High Class Security</p>
              </div>
              <div className='flex items-center'>
                <span className="inline-flex items-center justify-center ml-12 bg-pink-100 rounded-full mt-7 w-9 h-9">
                  <Ri24HoursFill  style={{ color: 'pink', fontSize: '1.6rem' }} /> </span><p className='ml-4 text-xl font-semibold mt-7'> 24 Hours Room Service</p>
              </div>
              <div className='flex items-center'>
                <span className="inline-flex items-center justify-center ml-12 bg-purple-100 rounded-full mt-7 w-9 h-9">
                  <IoMdRestaurant style={{ color: '#D5B0FF', fontSize: '1.6rem' }} />  </span><p className='ml-4 text-xl font-semibold mt-7'> Restaurant</p>
              </div>
              <div className='flex items-center'>
                <span className="inline-flex items-center justify-center ml-12 bg-red-100 rounded-full mt-7 w-9 h-9">
                  <CiMap style={{ color: 'red', fontSize: '1.6rem' }} />  </span><p className='ml-4 text-xl font-semibold mt-7'>Tourist Guide Support</p>
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Services;