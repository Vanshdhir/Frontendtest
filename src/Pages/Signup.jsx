import React from 'react'
import Bgpage from '../Components/Bgpage'
import { useNavigate } from 'react-router-dom'
import { FaApple, FaAndroid } from 'react-icons/fa';
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate();

  const [uname, setUname ] = React.useState('');
  const [email, setEmail ] = React.useState('');
  const [password, setPassword ] = React.useState('');

  const signUp = async() => {
    try {
      // const response = await fetch('http://localhost:3000/auth/signup', {
      //   method: 'POST',
      //   body: JSON.stringify({uname,email,password})
      // });
      // const data = await response.json()
      // console.log(data)


      const {response} = await axios.post('http://localhost:3000/auth/signup',{uname, email,password})
      console.log(response);
    } catch (error) {
      console.error(error);
      
    }
  }
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <Bgpage />
      <div className="absolute bg-yellow-400 bg-opacity-80 p-2 rounded-lg shadow-lg md:w-[450px] md:h-[235px] w-[35%] max-w-sm h-[50%] text-center rounded-3xl border-white border-4 mb-[80px]">
        <h1 className="text-sm md:font-bold text-white">Register </h1>
       
        <div className='absolute text-left'>
          <h2 className="text-sm text-black text-left">Username</h2>
          <input
            type="text"
            className="w-full p-1 border rounded-lg text-black bg-white rounded-3xl border-white border-3 mb-1"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
          <h2 className="text-sm text-black text-left">Email Address</h2>
          <input
            type="text"
            className="w-full p-1 border rounded-lg text-black bg-white rounded-3xl border-white border-3 mb-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="justify-between items-center w-full">
            <h2 className="text-sm text-black ">Password</h2>
          </div>
          <input
            type="text"
            className="w-full p-1 border rounded-lg text-black bg-white  rounded-3xl border-white border-3 mb-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md md:w-[100px] md:h-[100px] w-[20%] h-[20%] absolute right-0 mr-8 top-[61%] md:top-[10%] ">
          <h2>C</h2>
        </div>
        


        <div className="w-full md:mt-[120px] mt-[255px] flex justify-end space-x-4 ">
          <h1 className="text-sm ">Download PEN Wallet</h1>
          <FaApple className="w-6 h-6 cursor-pointer" />
          <FaAndroid className="w-6 h-6 cursor-pointer" />
        </div>

        
        <div onClick={() => { navigate('/signupverify') }} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:mt-[130px] mt-[155px]'>
          <button onClick={signUp} className="rounded-lg transition transform hover:scale-110">
            <img src="./enterbutton.png" alt="Enter Button" className='cursor-pointer' />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Signup