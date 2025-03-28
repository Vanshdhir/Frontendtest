import React from 'react'
import Bgpage from '../Components/Bgpage'

const Signupsuccess = () => {
  return (
    <div className="relative">
      <Bgpage />
      <div className="absolute top-1/2 bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black px-6 py-3 text-xl font-bold underline underline-offset-2">
      CONGRATULATIONS
      </div>
      <div className="absolute top-1/2 bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm font-bold ">
      YOU ARE PART OF PENTAGON GAMES FAMILY 
      <br />
      GO GET YOUR NFT REWARD 
      </div>
    </div>
  )
}

export default Signupsuccess
