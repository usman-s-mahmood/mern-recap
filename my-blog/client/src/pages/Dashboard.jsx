import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <p className="text-xl text-red-400">This is Dashboard Page</p>
      <Link 
        to='/'
        className='text-green-500'
      >Home</Link>
    </div>
  )
}

export default Dashboard
