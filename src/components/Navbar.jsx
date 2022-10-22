import { Avatar, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/hero.png'

export default function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isDesktop, setIsDesktop] = useState(false)

  const handleClick = () => {
    onOpen()
  }

  let location = useLocation()
  let navigate = useNavigate()
  let username = localStorage.getItem("username")

  function logIn() {
    navigate('/login')
  }

  function logOut() {
    localStorage.clear()
    navigate('/login')
    window.location.reload(false)
  }


  if (location.pathname === '/login' || location.pathname === '/') return null
  
  return (
    <React.Fragment>
    <nav className='stickTop bg-white glass-white relative w-[100%] h-[50px] flex justify-between items-center px-4 lg:px-12'>
        <Link to='/'>
          <div className='w-8 h-8'>
            <img src={logo} alt="logo" className='w-full h-full object-contain' />
          </div>
        </Link>
        <div className='hidden uppercase md:flex text-xs items-center gap-4 font-base absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
          <Link to='/'>
            <p>Home</p>
          </Link>
          <Link to='/about'>
            <p>About</p>
          </Link>
          <Link to='/courses'>
            <p>Courses</p>
          </Link>
          <Link to='/pricing'>
            <p>Pricing</p>
          </Link>
          <Link to='/stats'>
            <p>Stats</p>
          </Link>
          <Link to={`/blog/${username}`}>
            <p>Blog</p>
          </Link>
        </div>

        <div className='items-center gap-4 hidden md:flex font-[500] text-xs'>
            <div className='px-4 py-1 rounded-full flex items-center justify-between gap-4 glass-white text-center text-gray-900'>
              <Avatar name={username} size='xs' src='https://bit.ly/broken-link' />
              <p>{username}</p>
            </div>
            <button onClick={(localStorage.getItem("username") == null) ? logIn : logOut} type="button" className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 rounded-full px-4 py-2">{location.pathname !== '/login' ? 'Log Out' : 'Log In'}</button>
        </div> 
          <button onClick={handleClick} className='w-[35px] h-[20px] md:hidden flex flex-col items-center justify-between'>
            <span className={`block bg-black w-[34px] h-[4px] transition-all duration-300 rounded-full ${isOpen ? '-rotate-[45deg] translate-y-[8px]' : ''}`}></span>
            <span className={`block bg-black w-[34px] h-[4px] transition-all duration-300 rounded-full ${isOpen ? 'rotate-[45deg] -translate-y-[8px]' : ''}`}></span>
          </button>
 
    </nav>
    <Drawer placement='right' onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>HACKPOINT</DrawerHeader>
          <DrawerBody className='flex flex-col justify-between gap-4'>
          <div className='flex flex-col items-start gap-4 font-medium'>
              <Link to='/'>
                <p>Home</p>
              </Link>
              <Link to='/about'>
                <p>About</p>
              </Link>
              <Link to='/courses'>
                <p>Courses</p>
              </Link>
              <Link to='/pricing'>
                <p>Pricing</p>
              </Link>
              <Link to={`/blog/${username}`}>
                <p>Blog</p>
              </Link>
            </div>

            <div className='flex-col items-start gap-4 flex'>
                <div className='px-4 py-2 w-full rounded-full flex items-center justify-between gap-4 bg-white border-2 border-gray-900 text-center text-gray-600'>
                  <Avatar name={username} size='xs' src='https://bit.ly/broken-link' />
                  <p>{username}</p>
                </div>
                <button onClick={(localStorage.getItem("username") == null) ? logIn : logOut} type="button" className="w-full text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5">{location.pathname !== '/login' ? 'Log Out' : 'Log In'}</button>
            </div> 
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  )
}
