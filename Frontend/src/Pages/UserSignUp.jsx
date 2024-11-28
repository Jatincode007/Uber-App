import React from 'react'
import logo from '../assets/uber-black.png'
import SignUp from '../Components/SignUp'


const UserSignUp = () => {
  return (
    <div>
       <img className='w-[200px] my-14' src={logo} alt="" />
       <SignUp Name='Welcome to Safe Ride !'  User="user" Link="/home" />

   
      
    </div>
  )
}

export default UserSignUp
