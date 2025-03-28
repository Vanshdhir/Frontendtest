import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Welcome from './Pages/Welcome';
import Intro1 from './Pages/Intro1';
import Intro2 from './Pages/Intro2';
import Intro3 from './Pages/Intro3';
import Intro4 from './Pages/Intro4';
import Auth from './Pages/Auth';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Signupverify from './Pages/Signupverify';
import Signupsuccess from './Pages/Signupsucess';
import Getnft from './Pages/Getnft';
import Signinsucess from './Pages/Signinsucess';
import Login1 from './Pages/Login1';
import Login2 from './Pages/Login2';
import Login3 from './Pages/Login3';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={< Home/>} />
    <Route path="/welcome" element={< Welcome/>} />
    <Route path="/intro1" element={<Intro1/>} />
    <Route path="/intro2" element={<Intro2/>} />
    <Route path="/intro3" element={<Intro3/>} />
    <Route path="/intro4" element={<Intro4/>} />
    <Route path="/auth" element={<Auth/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/signin" element={<Signin/>} />
    <Route path="/singupsuccess" element={<Signupsuccess/>} />
    <Route path="/signupverify" element={<Signupverify/>} />
    <Route path="/getnft" element={<Getnft/>} />
    <Route path='/signinsuccess' element={<Signinsucess/>} />
    <Route path='/login1' element={<Login1/>} />
    <Route path='/login2' element={<Login2/>} />
    <Route path='/login3' element={<Login3/>} />
    




    </Routes>
    
    
    </BrowserRouter>


    

    </>
  );
}

export default App;
