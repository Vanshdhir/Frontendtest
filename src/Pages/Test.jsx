import React from 'react'
import Bgpage from '../Components/Bgpage'

const Login1 = () => {
  return (
    <div className="relative w-full h-screen">
      <Bgpage />

      
      <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] h-auto bg-transparent flex flex-col items-center justify-center">

       
        <div className="relative w-full h-full bg-white/80 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">

          
          <div className="text-black md:text-lg text-sm text-center md:text-left w-full md:w-1/3">
            <h1 className="mb-2 mt-4 font-bold text-xl md:text-2xl">Congratulations</h1>
            <p className="text-sm md:text-base">Enjoy your new NFT.</p>
          </div>

          
          <div className="flex justify-center md:w-1/3">
            <img src="./asuka.png" alt="NFT" className="md:w-64 md:h-64 w-32 h-32" />
          </div>

         
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
            <img src="./asukatext.png" alt="NFT Description" className="md:w-48 md:h-auto w-24" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Login1
