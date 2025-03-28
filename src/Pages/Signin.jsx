import React from 'react'
import Bgpage from '../Components/Bgpage'
import { useNavigate } from 'react-router-dom'
import { FaApple, FaAndroid } from 'react-icons/fa';

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = async () => {

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error(error);

    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <Bgpage />
      <div className="absolute bg-yellow-400 bg-opacity-80 p-2 rounded-lg shadow-lg w-[250px] h-[220px] text-center rounded-3xl border-white border-4 mb-32">
        <h1 className="text-sm font-bold text-white mt-1">Sign in to pentagon games</h1>
        <h2 className="text-sm text-black text-left">Email or username</h2>
        <h2 className="text-sm font-bold text-black mb-2 text-left"></h2>
        <input
          type="text"
          className="w-full p-1 border rounded-lg text-black bg-white rounded-3xl border-white border-3 mb-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-between items-center w-full mb-1">
          <h2 className="text-sm text-black ">Password</h2>
          <h2 className="text-sm text-white cursor-pointer underline">Forget password</h2>
        </div>
        <input
          type="text"
          className="w-full p-1 border rounded-lg text-black bg-white  rounded-3xl border-white border-3 mb-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col items-center w-full mb-1">
          <h2 className="text-sm">Download PEN Wallet</h2>
          <div className="flex gap-4">
            <FaApple className="w-6 h-6 text-black cursor-pointer" />
            <FaAndroid className="w-6 h-6 text-black cursor-pointer" />
          </div>
        </div>


        <div onClick={() => { navigate('/signinsuccess') }} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[125px]'>
          <button className="rounded-lg transition transform hover:scale-110">
            <img src="./enterbutton.png" alt="Enter Button" className='cursor-pointer' />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Signin