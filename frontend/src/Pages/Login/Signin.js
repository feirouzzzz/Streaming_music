import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
      <div className='bg-slate-900 py-32 text-white h-screen'>
          <h1 className=' text-center font-bold text-4xl mb-20'>J'ai un compte</h1> 

          <form className='w-1/3  mx-auto px-10'>
                <div className='flex flex-col mb-6'>
                    <label className='font-bold mb-2  rounded-md '> Adresse email ou nom d'utilisateur</label>
                    <input className='bg-transparent px-2 py-2 border-2 rounded-md p -4' placeholder="Entrer Adress email ou nom d'utilisateur" ></input>
              </div>     
              <div className='flex flex-col mb-6'>
                    <label className='font-bold mb-2  rounded-md '> Mot de passe</label>
                    <input className='bg-transparent px-2 py-2 border-2 rounded-md p -4' placeholder="Entrer  Mot de passe " ></input>
              </div>   
              <button className='bg-violet-700 w-full rounded-full py-3 mb-12 '> Login</button>
              
          </form>
          <div className='flex justify-center space-x-4 p'>
                <h1 className='text-center'>Vous n'avez pas de compte?</h1>
                <Link to="/signup" className='text-white underline transition-all bg-opacity-50 hover:bg-opacity-80 hover:text-violet-500 '>s'inscrire a spotify</Link>
            </div>
      </div>
  )
}

export default Signin