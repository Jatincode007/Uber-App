import React from 'react'
import {Link} from'react-router-dom'
import Login from '../Components/Login'
import logo from '../assets/uber-black.png'

const UberHome = () => {
  return (
    <>
     <img className='w-[200px] my-14' src={logo} alt="" />
     <Login User="User" Name="What's your email or Username?" Link="/createuser"  />
    <Link to="/captainlogin" className='flex justify-center py-5 m-3 mt-10 bg-black text-white text-2xl rounded-md' >Login as Rider</Link>
    
      
    </>
  )
}

export default UberHome
