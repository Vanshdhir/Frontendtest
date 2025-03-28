import React, { use } from 'react'
import Bgpage from '../Components/Bgpage'
import { useNavigate } from 'react-router-dom';

const Intro1 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex justify-center bg-black ">
      <Bgpage />
      <div className="absolute md:top-[50%] top-[42%] bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black px-6 py-10 text-xl font-bold w-full text-center">
        What is an NFT
      </div>
      <div className="absolute md:top-1/2 top-[45%] bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black md:px-12 text-sm text-center text-justify">
        An NFT (Non-Fungible Token) is a unique digital asset that exists on the blockchain. Think of it like a digital membership card that proves ownership of something online.NFTs can't be copied or faked, making them valuable for things like rewards, and exclusive content.
        <div className='absolute md:top-[60%] top-[230px] bottom-1/4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
          <button onClick={() => navigate('/welcome')} className="transition transform hover:scale-110">
            <img src="/backbutton.png" alt="Back" className="cursor-pointer" />
          </button>
          <button onClick={() => navigate('/intro2')} className='transition transform hover:scale-110'>
            <img src='./nextbutton.png' alt="back" className="cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Intro1