import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-3 flex-center">
        <div className="flex-1"> 
          <Link to='/' className='text-lg font-bold dark:text-white'>
            <span className='px-1 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white mx-2'>MY</span>Blog
          </Link>
          <p>A demo blog project based on MERN stack!</p>
        </div>
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div className="">
              <label htmlFor="username">your username</label>
              <TextInput 
                type='text'
                placeholder='Enter your username'
                id='username'
              />
            </div>
            <div className="">
              <label htmlFor="email">your email</label>
              <TextInput 
                type='email'
                placeholder='Enter your email'
                id='email'
              />
            </div>
            <div className="">
              <label htmlFor="password">your password</label>
              <TextInput 
                type='password'
                placeholder='Enter your password'
                id='password'
              />
            </div>
            <div className="">
              <label htmlFor="confirm_password">confirm password</label>
              <TextInput 
                type='password'
                placeholder='Confirm your password'
                id='confirm_password'
              />
            </div>
            <Button  
              className='bg-gradient-to-r from-purple-300 via-pink-500 to-purple-700 hover:cursor-pointer'
              pill
              type='submit'
            >Submit</Button>
          </form>
          <div className='flex gap-1 text-sm mt-5'>
            <span>Already Have an account?</span>
            <Link to={'/sign-in'} className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUp
