import React from 'react';
import Navbar from './Navbar';

const ChatbotIntegration = () => {
  const handleTestChatbot = () => {
    
    window.open('http://example.com', '_blank');
  };

  const handleIntegrationInstructions = () => {
    alert('Copy the following code into the <head> of your website: <script src="chatbot.js"></script>');
  };

  const handleTestIntegration = () => {
    
    alert('Integration successful!');
  };

  return (
    <div>
      <Navbar />
      <h1 className='flex justify-center text-3xl mt-10 font-bold'>Chatbot Integration</h1>

      <div className='flex justify-center mt-5'>
        <div className='container w-[40%] text-center'>
          <button
            className='m-4 bg-sky-500 hover:bg-sky-700 text-white border-none rounded-lg p-3 w-full'
            onClick={handleTestChatbot}
          >
            Test Chatbot
          </button>
          <button
            className='m-4 bg-sky-500 hover:bg-sky-700 text-white border-none rounded-lg p-3 w-full'
            onClick={handleIntegrationInstructions}
          >
            Integrate on your website
          </button>
          <button
            className='m-4 bg-sky-500 hover:bg-sky-700 text-white border-none rounded-lg p-3 w-full'
            onClick={handleTestIntegration}
          >
            Test Integration
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotIntegration;