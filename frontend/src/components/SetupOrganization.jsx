// src/components/SetupOrganization.js
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const SetupOrganization = () => {
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [description, setDescription] = useState('');
  const [webpages, setWebpages] = useState([
    { url: 'http://example.com/page2', status: 'pending' },
  ]);

  const fetchMetaDescription = async () => {
    try {
      const response = await axios.get(`http://localhost:50000/fetch-meta?url=${websiteUrl}`);
      setDescription(response.data.description);
    } catch (error) {
      console.error('Error fetching meta description:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit organization data
    console.log({ companyName, websiteUrl, description });
    const newPage = {
      name: companyName,
      url: websiteUrl,
      description: description,
      status: 'pending' // initial status
    };

    setWebpages([...webpages, newPage]); 
    setWebsiteUrl('');
    setDescription('');
  };

  return (
    <div>
      <Navbar />

      <h1 className='flex justify-center text-3xl mt-10 font-bold'>Organization</h1>

      <div className='flex justify-center mt-1'>
        <form className='text-center container flex flex-col justify-center w-[40%] p-3' onSubmit={handleSubmit}>
          <input className='m-4 border rounded-lg p-3' type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
          <input className='m-4 border rounded-lg p-3' type="url" placeholder="Website URL" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} onBlur={fetchMetaDescription}/>
          <textarea className='m-4 border rounded-lg p-3' placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
          <button className='m-4 bg-sky-500 hover:bg-sky-700 border-none rounded-lg p-3' type="submit">Submit</button>
        </form>
      </div>

      <div className='flex justify-center mt-5'>
        <div className='container w-[60%]'>
          <h3 className='text-xl font-semibold mb-3'>Webpages</h3>
          <ul className='list-none'>
            {webpages.map((page, index) => (
              <li key={index} className='m-4 border rounded-lg p-3 bg-gray-100'>
                <strong>{page.name}</strong> <br />
                <a href={page.url} target="_blank" rel="noopener noreferrer" className='text-blue-500 underline'>{page.url}</a> <br />
                <span>{page.description}</span> <br />
                <span className='text-sm text-gray-600'>Status: {page.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SetupOrganization;