import React from 'react'
import Bgpage from '../Components/Bgpage'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="relative ">
      <Bgpage />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-3 md:mt-64 mt-[210px] md:w-[500px]">
        <div className='flex justify-center'>
          <img src="./friendsnft.png" alt="" srcset="" className='md:w-3xs md:h-3xs w-xs h-xs'/>
        </div>
      </div>
      <div className="absolute top-1/2 bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-2 py-1 text-lg font-bold md:mt-[55px] mt-8">
        Welcome to the pentagon games family & friends free NFT event.
      </div>
      <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:mt-[95px] mt-32'>
        <button onClick={()=> navigate('/intro1')} className="rounded-lg transition transform hover:scale-110">
          <img src="./clickherebutton.png" alt="Enter Button" className='cursor-pointer' />
        </button>

      </div>
    </div>
  )
}

export default Welcome