import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen h-20 flex items-center justify-around text-white'>
      <div className='mx-5 text-2xl hover:text-red-400'>
        Linkly13
      </div>
      <div className='text-2xl '>
         <a  href="htt" className='mx-5 hover:text-red-400'>Home</a>
         <a  href="h" className='mx-5 hover:text-red-400'>Contact Us</a>
         <a  href="h" className='mx-5 hover:text-red-400'>About us</a>
         <button className='mx-5 hover:text-red-400'>Login</button>
      </div>
    </div>
  )
}

export default Navbar