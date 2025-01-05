import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../../Components/Elements/Spinner'

function Signin() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = { email, name:"Test", password }
    


    const [spinner, setSpinner] = useState(false)


    const LoginFun = (event) => {
        event.preventDefault()
        setSpinner(true)

        localStorage.setItem("userData", JSON.stringify(user))
        
        setTimeout(() => {
            navigate("/")
        }, 3000);

        console.log("Login: ", user);
    }

  return (
      <div className='bg-black py-32 text-white h-screen'>
            <h1 className=' text-center font-bold text-4xl mb-20'>J'ai un compte</h1> 

            <form className='w-2/6  mx-auto px-10'>
                <div className='flex flex-col mb-6'>
                    <label className='font-bold mb-2  rounded-md '> Adresse email ou nom d'utilisateur</label>
                    <input type='email' onChange={(e)=> setEmail(e.target.value)} className='bg-transparent px-2 py-2 border-2 rounded-md p -4' placeholder="Entrer Adress email ou nom d'utilisateur" ></input>
                </div>     
                <div className='flex flex-col mb-6'>
                    <label className='font-bold mb-2  rounded-md '> Mot de passe</label>
                    <input type='password' onChange={(e)=> setPassword(e.target.value)} className='bg-transparent px-2 py-2 border-2 rounded-md p -4' placeholder="Entrer  Mot de passe " ></input>
                </div>   
                <button onClick={LoginFun} className='bg-violet-700 flex items-center justify-center w-full rounded-full py-3 mb-12 '> 
                    {spinner 
                        ?   <Spinner />
                        :   "Login"
                    }
                </button>
            </form>

            <div className='flex justify-center space-x-4 p'>
                <h1 className='text-center'>Vous n'avez pas de compte?</h1>
                <Link to="/signup" className='text-white underline transition-all bg-opacity-50 hover:bg-opacity-80 hover:text-violet-500 '>s'inscrire a spotify</Link>
            </div> 
      </div>
  )
}

export default Signin