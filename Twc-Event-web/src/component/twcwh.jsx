import React from 'react';

const Whatsapp = () => {
  return (
    <div className='fixed bottom-4 sm:bottom-10 md:bottom-16 right-4 sm:right-8 md:right-10 p-4 sm:p-6 z-50 flex flex-col gap-4'>
      <a
        href="https://wa.me/+2349123991109"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-cyan-200 to-orange-500 text-white p-4 sm:p-6 rounded-full shadow-lg hover:bg-white hover:scale-110 transition duration-300 ease-in-out transform"
      >
        <div className="flex items-center justify-center bg-white p-2 sm:p-4 rounded-full shadow-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-10 h-10 sm:w-12 sm:h-12 transform transition duration-300 hover:scale-125"
          />
        </div>
      </a>
    </div>
  );
};

export default Whatsapp;
