import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <p className="text-xl text-red-400">This is Register Page</p>
      <Link 
        to='/'
        className='text-green-500'
      >Home</Link>
    </div>
  )
}

export default SignUp
