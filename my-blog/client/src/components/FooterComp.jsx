import React, { useState } from 'react';
import { Button, Footer } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const FooterComp = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      toast.error('Email is required for newsletter!');
      return ;
    }
    setLoading(true);
    // try {
    //   let res = await fetch('/api/utils/newsletter', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({email})
    //   });
    //   let data;
    //   if (res.ok) {
    //     data = await res.json();
    //     toast.success(data.message || 'Subscribed successfully!');
    //   } else {
    //     const errorData = await res.json();
    //     toast.error(errorData.message || 'Something went wrong!');
    //   }
    // } catch(error) {
    //   console.error(error);
    //   toast.error(error);
    // } finally {
    //   setLoading(false);
    // } // incomplete code, debug it and then use it
    setTimeout(() => {
      setLoading(false)
    }, 5000)
    console.log(location)
    nav(location.pathname)
  }
  return (
    <Footer className='border-t-8 border-teal-500 p-10 bg-white dark:bg-gray-900'>
      <div className='w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8'>
        {/* Section 1: Logo */}
        <div>
          <Link to='/' className='self-center whitespace-nowrap text-2xl font-bold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>MY</span> Blog
          </Link>
          <p className='mt-4 text-sm text-gray-600 dark:text-gray-400'>
            Sharing thoughts, stories, and ideas.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className='text-lg font-semibold text-gray-700 dark:text-white mb-4'>Quick Links</h2>
          <ul className='space-y-2'>
            <li><Link to='/about' className='text-teal-500 hover:underline'>About</Link></li>
            <li><Link to='/projects' className='text-teal-500 hover:underline'>Projects</Link></li>
            <li><Link to='/sign-up' className='text-teal-500 hover:underline'>Sign Up</Link></li>
            <li><Link to='/sign-in' className='text-teal-500 hover:underline'>Sign In</Link></li>
          </ul>
        </div>

        {/* Section 3: Newsletter Form */}
        <div>
          <h2 className='text-lg font-semibold text-gray-700 dark:text-white mb-4'>Newsletter</h2>
          <p className='text-sm text-gray-600 dark:text-gray-400 mb-3'>Stay up to date with our latest posts</p>
          <form className='flex flex-col space-y-2'>
            <input
              type='email'
              placeholder='Enter your email'
              className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type='submit'
              className='bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition'
              onClick={handleSubmit}
              disabled={loading}
            >
              {(loading)? 'Please Wait!' :'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
