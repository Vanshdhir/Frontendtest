import React from 'react'
import Bgpage from '../Components/Bgpage'
import { useNavigate } from 'react-router-dom';

const Intro3 = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
    <Bgpage />
    <div className="absolute md:top-[50%] top-[42%] bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black px- py-10 text-xl font-bold">
    What is the Family & Friends NFT?
    </div>
    <div className="absolute md:top-[50%] top-[50%] bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black md:px-12 px-[1px] text-sm text-justify ">
    To make it easy for newcomers, we’re giving away a Family & Friends NFT—a free, blockchain-verified pass that can unlock rewards, and other perks.
    <div className='absolute md:top-[60%] top-[95%] bottom-1/4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
          <button onClick={() =>navigate('/intro2')} className='transition transform hover:scale-110'>
            <img src='./backbutton.png' alt="back" className="cursor-pointer" />

          </button>
          <button onClick={() =>navigate('/intro4')} className='transition transform hover:scale-110'>
            <img src='./nextbutton.png' alt="back" className="cursor-pointer" />

          </button>
        </div>
    </div>
  </div>
  )
}

export default Intro3