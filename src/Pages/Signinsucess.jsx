import React from 'react'
import Bgpage from '../Components/Bgpage'
import { useNavigate } from 'react-router-dom'

const Signinsucess = () => {
    const navigate = useNavigate();
  return (
    <div className="relative">
      <Bgpage />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-3 mt-64">
        <div className='flex justify-center'>
          <img src="./friendsnft.png" alt="" srcset="" className='w-3xs h-3xs'/>

        </div>
      </div>
      
      <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mt-[95px]'>
        <button className="rounded-lg transition transform hover:scale-110">
          <img src="./getnftbutton.png" alt="Enter Button" className='cursor-pointer' />
        </button>

      </div>
    </div>
  )
}

export default Signinsucess