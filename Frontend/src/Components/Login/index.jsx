import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';


const Login = (props) => {


    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [data, setData] = useState({});




    const handleSubmit = (e) => {

        e.preventDefault();
        setData({
            email: name,
            password: pass
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
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <label id="email" className='text-2xl flex mt-10 mb-2 ml-3'>Username</label>
                        <input required name='email' value={name} onChange={(e) => { setName(e.target.value) }} type="email" className='bg-[#EEEEEE] shadow-md w-[320px] p-3 border-2 rounded-md ml-3' placeholder='Enter your Username' />
                        <label id="password" className='text-2xl flex mt-10 mb-2 ml-3'>Password</label>
                        <input required value={pass} onChange={(e) => { setPass(e.target.value) }} type="password" className='bg-[#EEEEEE] shadow-md w-[320px] p-3 border-2 rounded-md ml-3' placeholder='Enter your Passowrd' />
                        <button className='flex py-4 px-16 m-3 mt-10 ml-20 bg-green-600 text-white text-2xl rounded-md active:bg-green-500' >Login</button>
                    </form>

                </div>

                <p className='mb-6 ml-14'>New {props.User} ? <Link to={props.Link} className='text-blue-600'>Create New Account</Link></p>
                <p className='mx-6 text-[#B1B1B1]'>By proceeding, you consent to receiving calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided</p>







            </div>

        </>



    )
}

export default Login
