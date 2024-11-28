import React from 'react'
import Login from '../Components/Login'
import {Link} from 'react-router-dom'
import logo from '../assets/uber-black.png'


const LoginCaptain = () => {
  return (
    <div>
      <img className='w-[200px] my-14' src={logo} alt="" />
        <Login User="Captain" Name="What's our Captain Name !" Link="/captainsignup" />
        <Link to="/home" className='flex justify-center py-5 m-3 mt-10 bg-black text-white text-2xl rounded-md' >Login as User</Link>
      
    </div>
  )
}

export default LoginCaptain
