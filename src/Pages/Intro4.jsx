import React,{use} from 'react'
import Bgpage from '../Components/Bgpage'
import { useNavigate } from 'react-router-dom';

const Intro4 = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
    <Bgpage />
    <div className="absolute md:top-[50%] top-[42%] bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black px-6 py-10 text-xl font-bold">
    No crypto experience needed
    </div>
    <div className="absolute md:top-[50%] top-[48%] bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black md: px-12 px-2 text-sm text-justify">
    You don’t have to be a blockchain expert to get started. We’re making it simple—claim your free NFT, enjoy the perks.All you have to do is sign up for a free pentagon games account and you’re set. 
    <div className='absolute md:top-[60%] top-[95%] bottom-1/4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
          <button onClick={() =>navigate('/signup')} className='transition transform hover:scale-110'>
            <img src='./signupbutton.png' alt="back" className="cursor-pointer" />

          </button> 
          <button onClick={() =>navigate('/signin')} className='transition transform hover:scale-110'>
            <img src='./signinbutton.png' alt="back" className="cursor-pointer" />

          </button>
        </div>
    </div>
  </div>
  )
}

export default Intro4