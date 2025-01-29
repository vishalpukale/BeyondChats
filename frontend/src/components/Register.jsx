
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:50000/register', { name, email, password });
    alert('Registration successful');
  };


  return (

    <div>
      <Navbar />
      <h1 className='flex justify-center text-3xl mt-10 font-bold'>Register</h1>

      <div className='flex justify-center mt-1'>
        
        <form className='text-center container flex flex-col justify-center w-[40%] p-3' onSubmit={handleSubmit}>
          <input className='m-4 border rounded-lg p-3' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          <input className='m-4 border rounded-lg p-3' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
          <input className='m-4 border rounded-lg p-3' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
          <button className='m-4 bg-sky-500 hover:bg-sky-700 border-none rounded-lg p-3' type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;