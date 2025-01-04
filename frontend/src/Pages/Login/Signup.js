import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    console.log({email, name, password});
    

  return (
      <div className='bg-black w-full py-32 h-screen text-white'>
          <h1 className=' text-center font-bold text-4xl mb-20'>J'ai un compte</h1> 
          
          <form className='w-1/3 mx-auto ' >
              <div className=" flex flex-col mb-4 ">
                    <label className=' rounded-md  '>Adresse email</label>
                    <input type='email' onChange={(e)=> setEmail(e.target.value)} className='bg-transparent px-2 py-2 border-2 rounded-md p -4'placeholder='Enter adresse email'></input>
               </div>
                <div className=" flex flex-col mb-4 ">
                    <label className=' rounded-md'>Full name</label>
                    <input type='text' onChange={(e)=>setName(e.target.value)} className='bg-transparent  px-2 py-2 border-2 rounded-md' placeholder='Enter full name'></input>
              </div>
              <div className=" flex flex-col mb-8 ">
                    <label className=' rounded-md  '>Password</label>
                    <input className='bg-transparent px-2 py-2 border-2 rounded-md'placeholder='Enter password'></input>
              </div>
              <button className='bg-violet-700 w-full rounded-full py-3 mb-12 '> Login</button>
          </form>

          <div className='flex justify-center space-x-4 p'>
                <h1 className='text-center'>Already have an account?</h1>
                <Link to="/signin" className='text-white underline transition-all bg-opacity-50 hover:bg-opacity-80 hover:text-violet-500 '>login in</Link>
            </div>

    </div>
  )
}

export default Signup