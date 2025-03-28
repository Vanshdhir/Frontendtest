import React from 'react';
import Bgpage from '../Components/Bgpage';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex items-center justify-center bg-black">
      <Bgpage />
      <div className="absolute bg-yellow-400 bg-opacity-80 p-6 rounded-lg shadow-lg lg:w-[500px] md:w-[300px] text-center rounded-3xl border-white border-4 mb-24 ">
        <h1 className="text-2xl font-bold text-black mb-2">Enter referal code</h1>
        <h2 className="text-sm font-bold text-black mb-2 text-left">Referal code</h2>
        <input
          type="text"
          className="w-full p-2 border rounded-lg text-black bg-white  rounded-3xl border-white border-3"
        />
        <div onClick={() =>{navigate('/welcome')}}className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[95px]'>
          <button className="rounded-lg transition transform hover:scale-110">
            <img src="./enterbutton.png" alt="Enter Button" className='cursor-pointer'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
