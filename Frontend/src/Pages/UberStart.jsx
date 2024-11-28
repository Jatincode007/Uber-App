import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/uber-black.png'
import StartImgage from '../assets/startimage.webp'



const UberStart = () => {
  
  return (
    <>
     
      <img className='w-[200px] my-16' src={logo} alt="" />
      <img className='flex w-screen justify-center' src={StartImgage} alt="" />
      <p className='text-2xl flex justify-center mt-10 mb-5'>Get Your First Ride !</p>
      <Link to="/home" className='flex justify-center py-5 m-4 bg-black text-white text-2xl rounded-md' >Continue</Link>
     
    </>
  )
}

export default UberStart
