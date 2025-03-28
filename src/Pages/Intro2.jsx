import React from 'react'
import Bgpage from '../Components/Bgpage'
import { useNavigate } from 'react-router-dom';

const Intro2 = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
    <Bgpage />
    <div className="absolute md:top-[50%] top-[42%] bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black px-6 py-10 text-xl font-bold">
    Why collect them
    </div>
    <div className="absolute md:top-1/2 top-[45%] bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black md:px-12 px-[1px] text-sm text-justify ">
    WH COLLECT THEM?
    Owning an NFT isn’t just about collecting—it’s about access. An NFT can be your digital key to special benefits, and experiences that are exclusive to holders. Since NFTs are verified by blockchain technology.
    <div className='absolute md:top-[60%] top-[95%] bottom-1/4 left-1/2 transform -translate-x-1/2 flex space-x-4'>
          <button onClick={() =>navigate('/intro1')} className='transition transform hover:scale-110'>
            <img src='./backbutton.png' alt="back" className="cursor-pointer" />

          </button>
          <button onClick={() =>navigate('/intro3')} className='transition transform hover:scale-110'>
            <img src='./nextbutton.png' alt="back" className="cursor-pointer" />

          </button>
        </div>
    </div>
  </div>
    
  )
}

export default Intro2