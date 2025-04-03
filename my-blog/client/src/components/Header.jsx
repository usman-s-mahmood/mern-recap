import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Navbar, TextInput, Button, NavbarCollapse, NavbarLink, NavbarToggle} from 'flowbite-react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

const Header = () => {
  const path = useLocation().pathname;
  return (
    <div>
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white mx-2'>MY</span>Blog
        </Link>
        <form>
            <TextInput 
                type='text'
                placeholder='Search...' 
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            ></TextInput>
        </form>
        <Button
            className='w-12 h-10 lg:hidden'
            color={'gray'}
            pill
        >
            <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button
                className='w-12 h-10 hidden sm:inline'
                color={'gray'}
                pill
            >
                <FaMoon></FaMoon>
            </Button>
            <Link to='/sign-in'>
                <Button className='hover:bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 mx-2' outline>Sign In</Button>
            </Link>

        </div>
        <NavbarToggle />
        <NavbarCollapse>
					<NavbarLink as={'div'} active={path === '/'} >
            <Link to='/' >Home</Link>
					</NavbarLink>
					<NavbarLink as={'div'} active={path === '/about'}>
						<Link to='/about' >About</Link>
					</NavbarLink>
					<NavbarLink as={'div'} active={path === '/projects'}>
            <Link to='/projects'>Projects</Link>
					</NavbarLink>
            
        </NavbarCollapse>
    </Navbar>
      {/* <p className="text-xl text-blue-300">This is Nav!</p>
      <Link 
        to='/'
        className='text-purple-300'
      >Home</Link><br />
      <Link 
        to='/about'
        className='text-purple-300'
      >About</Link><br />
      <Link 
        to='/sign-in'
        className='text-purple-300'
      >Sign In</Link><br />
      <Link 
        to='/sign-up'
        className='text-purple-300'
      >Sign Up</Link><br />
      <Link 
        to='/dashboard'
        className='text-purple-300'
      >Dashboard</Link><br />
      <Link 
        to='/projects'
        className='text-purple-300'
      >Projects</Link><br /> */}
    </div>
  )
}

export default Header
