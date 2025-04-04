import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [conPass, setConPass] = useState(false);
  const [conErr, setConErr] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});    
  }
  const nav = useNavigate();
  // console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password || !formData.confirm_password)
      return setErrorMessage('All Fields Are Required!');
    if (formData.password != formData.confirm_password) {
      setConPass(true);
      setConErr('Password & Confirm Password mismatch!')
      return;
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false)
        return setErrorMessage(data.message);

      setLoading(false);
      if (res.ok) {
        nav('/sign-in');
        toast.success(data.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
      console.error(`Error Occured!\n${error.message}`);
    }
  }
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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="username">your username</label>
              <TextInput 
                type='text'
                placeholder='Enter your username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="email">your email</label>
              <TextInput 
                type='email'
                placeholder='Enter your email'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="password">your password</label>
              <TextInput 
                type='password'
                placeholder='Enter your password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="confirm_password">confirm password</label>
              <TextInput 
                type='password'
                placeholder='Confirm your password'
                id='confirm_password'
                onChange={handleChange}
              />
            </div>
            {(conPass)? <p className="text-red-500">{conErr}</p>: ''}
            
            <Button  
              className='bg-gradient-to-r from-purple-300 via-pink-500 to-purple-700 hover:cursor-pointer'
              pill
              type='submit'
              disabled={loading}
            >{loading? (<><Spinner /><span className='pl-3'>Loading...</span></>): 'Submit'}</Button>
          </form>
          <div className='flex gap-1 text-sm mt-5'>
            <span>Already Have an account?</span>
            <Link to={'/sign-in'} className='text-blue-500'>Sign In</Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default SignUp
