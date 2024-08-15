import React from 'react'

function Gallary() {


  return (
    <>
      <div>
        <p className='text-xl text-center'>Gallary <span className='text-3xl text-pink-700'> - </span></p>
      </div>
      <br />
      <div class="grid grid-cols-4 grid-rows-3 w-full h-full">

        <div class=" overflow-hidden  shadow-lg">
          <img src="/assests/out.jpg" alt="" className="object-cover w-full h-full " />
        </div>

        <div class=" relative   overflow-hidden shadow-lg">
          <img src="/assests/ayodhya.webp" alt="" className="object-cover w-full h-full" />
        </div>

        <div class=" relative overflow-hidden shadow-lg">
          <img src="/assests/large.jpg" alt="" className="object-cover w-full h-full" />
        </div>

        <div class="relative overflow-hidden shadow-lg">
          <img src="/assests/palash.webp" alt="" className="object-cover w-full h-full" />
        </div>

        <div class="relative overflow-hidden shadow-lg">
        <img src='/assests/small.jpg' alt=''  className='object-cover w-full h-full' />
        </div>

        <div class="relative overflow-hidden  shadow-lg">
          <img src="/assests/baranti.webp" alt="" className="object-cover w-full h-full" />
        </div>

        <div class="relative overflow-hidden  shadow-lg">
          <img src="/assests/recep.jpg" alt="" className="object-cover w-full h-full " />
        </div>

        <div class="relative overflow-hidden shadow-lg">
          <img src="/assests/flower.jpg" alt="" className="object-cover w-full h-full" />
        </div>

        <div class="relative overflow-hidden  shadow-lg">
          <img src="/assests/room1.jpg" alt="" className="object-cover w-full h-full" />
        </div>

        <div class="relative overflow-hidden  shadow-lg">
          <img src="/assests/mithonDam.webp" alt="" className="object-cover w-full h-full" />
        </div>
      </div>





    </>

  )
}

export default Gallary;