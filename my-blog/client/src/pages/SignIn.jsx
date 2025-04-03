import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
      <p className="text-xl text-red-400">This is Login Page</p>
      <Link 
        to='/'
        className='text-green-500'
      >Home</Link>
    </div>
  )
}

export default Signin
