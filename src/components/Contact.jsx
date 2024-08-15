import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div className='flex flex-col items-center justify-center md:flex-row'>

          <div className='flex order-2 p-4 mb-10 text-white bg-pink-600 shadow-2xl md:mr-7 md:rounded-xl gap-x-32 md:flex-col md:order-1 md:p-6'>
            <div className='mb-6 ml-4 space-y-10'>
              <h1 className='mt-3 text-2xl font-bold md:mt-3'>Contact Info</h1>
              <ul className='flex flex-col cursor-pointer space-y-7'>
                <li className='flex flex-row items-start space-x-2'>
                  <span><IoLocationOutline className='block w-6 h-6 inline-' /></span>
                  <span>Beside Barshal Water Tank, <br /> Manpur, Barhanti, <br /> West Bengal 723156</span>
                </li>
                <li className='flex flex-row items-start space-x-2'>
                  <span><HiOutlineMailOpen className='inline-block w-6 h-6' /></span>
                  <span>kkghosh0099@gmail.com</span>
                </li>
                <li className='flex flex-row items-start space-x-2'>
                  <span><MdOutlinePhone className='inline-block w-6 h-6' /></span>
                  <span>+91 9007062180</span>
                </li>
              </ul>
            </div>

            <ul className='flex flex-row items-center justify-center mt-4 space-x-5 cursor-pointer mr-7'>
              <li><FaFacebookF className='text-2xl text-white' /></li>
              <li><FaInstagram className='text-2xl text-white' /></li>
              <li> <FaTwitter className='text-2xl text-white' /></li>
              <li> <FaLinkedinIn className='text-2xl text-white' /></li>
            </ul>
          </div>

        


          <div className='order-1 p-4 bg-white md:ml-8 md:mt-0 md:order-2 md:p-6'>
            <h1 className='mt-4 mb-4 text-xl font-semibold text-pink-600 md:mt-4'>Send a Message</h1>
            <div className='flex flex-col mt-9 space-y-9'>
              <div className='flex flex-row gap-x-14'>
                <div className='relative'>
                  <input type='text'
                    placeholder='First Name'
                    className='py-4 pl-1 pr-16 border-b-2 border-gray-400 placeholder-gray-950 focus:placeholder-transparent focus:outline-none focus:border-pink-700 peer'
                  />
                  <span className='absolute left-0 text-pink-500 transition-all duration-300 transform -translate-y-1/2 opacity-0 top-5 peer-focus:opacity-100 peer-focus:-translate-y-8'>
                    First Name</span>
                </div>
                <div className='relative'>
                  <input type='text'
                    placeholder='Last Name'
                    className='py-4 pl-1 border-b-2 border-gray-400 pr-14 placeholder-gray-950 focus:placeholder-transparent focus:outline-none focus:border-pink-700 peer'
                  />
                  <span className='absolute left-0 text-pink-500 transition-all duration-300 transform -translate-y-1/2 opacity-0 top-5 peer-focus:opacity-100 peer-focus:-translate-y-8'>
                    Last Name</span>
                </div>
              </div>

              <div className='flex flex-row gap-x-14'>
                <div className='relative'>
                  <input type='text'
                    placeholder='Email Address'
                    className='py-4 pl-1 pr-16 border-b-2 border-gray-400 placeholder-gray-950 focus:placeholder-transparent focus:outline-none focus:border-pink-700 peer'

                  />
                  <span className='absolute left-0 text-pink-500 transition-all duration-300 transform -translate-y-1/2 opacity-0 top-5 peer-focus:opacity-100 peer-focus:-translate-y-8'>
                    Email Address</span>
                </div>
                <div className='relative'>
                  <input type='text'
                    placeholder='Mobile Number'
                    className='py-4 pl-1 border-b-2 border-gray-400 pr-14 placeholder-gray-950 focus:placeholder-transparent focus:outline-none focus:border-pink-700 peer'
                  />
                  <span className='absolute left-0 text-pink-500 transition-all duration-300 transform -translate-y-1/2 opacity-0 top-5 peer-focus:opacity-100 peer-focus:-translate-y-8'>
                    Mobile Number</span>
                </div>
              </div>

              <div className='relative'>
                <input type='text'
                  placeholder=' Write your message here...'
                  className='py-4 pl-1 border-b-2 border-gray-400 pr-80 top-4 placeholder-gray-950 focus:placeholder-transparent focus:outline-none focus:border-pink-700 peer'
                />
                <span className='absolute left-0 text-pink-500 transition-all duration-300 transform -translate-y-1/2 opacity-0 top-5 peer-focus:opacity-100 peer-focus:-translate-y-8'>
                  Write your message here... </span>
              </div>
              <div className='mt-4'>
                <button className="px-6 py-4 font-bold text-white bg-pink-600 rounded-lg hover:bg-pink-700">
                  Send
                </button>
              </div>
            </div>
          </div>






      </div>




    </>
  )
}






export default Contact;
