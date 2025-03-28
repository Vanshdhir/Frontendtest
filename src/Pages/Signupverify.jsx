import React from 'react'
import Bgpage from '../Components/Bgpage'

const Signupverify = () => {
  return (
    <div className="relative">
    <Bgpage />
    <div className="absolute top-1/2 bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black px-6 py-3 text-xl font-bold">
    Thanks for registering
    </div>
    <div className="absolute top-1/2 bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black px-6 py-3 text-lg font-bold ">
    Please verify your email
    </div>
  </div>
  )
}

export default Signupverify