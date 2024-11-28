import React from 'react'
import logo from '../assets/uber-black.png'
import SignUp from '../Components/SignUp'




const CaptainSignUp = () => {
  return (
    <div>
       <img className='w-[200px] my-14' src={logo} alt="" />
       <SignUp Name='Thank you for Serving Us !'  User="Captain" Link="/captainlogin" />

   
      
    </div>
  )
}

export default CaptainSignUp
