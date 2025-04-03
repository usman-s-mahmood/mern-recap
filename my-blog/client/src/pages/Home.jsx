import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'

const Home = () => {
  return (
    <div>
      <p className="text-xl text-green-400">This is Home Page</p>
      <Link 
        to='/about'
        className='text-red-500'
      >About</Link><br />
      <Link 
        to='/dashboard'
        className='text-red-500'
      >Dashboard</Link><br />
      <Link 
        to='/sign-up'
        className='text-red-500'
      >Sign Up</Link><br />
      <Link 
        to='/sign-in'
        className='text-red-500'
      >Sign In</Link><br />
      <Link 
        to='/projects'
        className='text-red-500'
      >Projects</Link><br />
    </div>
  )
}

export default Home
