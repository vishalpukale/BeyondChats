import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black text-white p-5 flex justify-between'> 
        <Link className='border-none p-2 rounded-lg bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700' to='/register'>Register User</Link>
        <Link className='border-none p-2 rounded-lg bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700' to='/setup-organization'>Organization</Link>
        <Link className='border-none p-2 rounded-lg bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700' to='/chatbot-integration'>Chatbot</Link>
    </div>
  )
}

export default Navbar