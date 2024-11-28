import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = (props) => {

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [data, setData] = useState({});





  const handleSubmit = (e) => {

    e.preventDefault();
    setData({
      email: name,
      password: pass,
      fullname:{
      firstname: first,
      lastname: last
      }
    })
    console.log(data)




    setName("");
    setPass("");


  }

  return (


    <>
      <div className='m-10'>


        <h2 className='text-2xl'>{props.Name}</h2>

        <div className='flex-col justify-center'>
          <form onSubmit={(e) => { handleSubmit(e) }} >

          <label id="name" className='text-2xl flex mt-10 mb-2 ml-3'>Name</label>
          <div className='flex gap-2'>
            <input value={first} onChange={(e) => { setFirst(e.target.value) }}  className='bg-[#EEEEEE] shadow-md w-[160px] p-3 border-2 rounded-md ml-3' placeholder='First Name'  type="text" />
            <input value={last} onChange={(e) => { setLast(e.target.value) }} className='bg-[#EEEEEE] shadow-md w-[160px] p-3 border-2 rounded-md ml-3' placeholder='Last Name' type="text" />
          </div>

            <label id="email" className='text-2xl flex mt-5 mb-2 ml-3'>What's your email?</label>
            <input required name="email" value={name} onChange={(e) => { setName(e.target.value) }} type="email" className='bg-[#EEEEEE] shadow-md w-[320px] p-3 border-2 rounded-md ml-3' placeholder='Enter your Userame' />
            <label id="password" className='text-2xl flex mt-10 mb-2 ml-3'>Create Password</label>
            <input required value={pass} name='password' onChange={(e) => { setPass(e.target.value) }} type="password" className='bg-[#EEEEEE] shadow-md w-[320px] p-3 border-2 rounded-md ml-3' placeholder='Enter your Password' />
            <button className='flex justify-center py-5 px-8 ml-14 m-3 mt-10 bg-green-600 text-white text-2xl rounded-md active:bg-green-500' >Create Account</button>
          </form>

        </div>

        <p className='mb-6 ml-16'>Already a {props.User}? <Link to={props.Link} className='text-blue-600' >Login here</Link></p>
        <p className='mx-6 text-[#B1B1B1]'>By proceeding, you consent to receiving calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided</p>

      </div>

    </>

  )
}

export default SignUp
