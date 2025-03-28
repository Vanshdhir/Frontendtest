import React from 'react'
import Bgpage from '../Components/Bgpage'

const Login1 = () => {
  return (
    <div className="relative ">
      <Bgpage />
      <div className="absolute top-[35%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-transparent">
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-4 md:px-8">

          <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-4 md:px-8">
            <div className="w-full md:w-1/3 justify-center mb-4 md:mb-0"></div>
            <h1 className="mb-2 mt-4 font-bold text-lg text-center md:text-left">
              Congratulations! Enjoy your new NFT.
            </h1>
          </div>

          <img src="./asuka.png" alt="" className="md:w-64 md:h-64 w-32 h-32 md:mt-32 mt-96" />

          <div className="w-full mr-64 mt-32 md:w-1/3 flex justify-center md:justify-end">
            <img src="./asukatext.png" alt="" className="md:w-64 md:h-64 w-12 h-full" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login1