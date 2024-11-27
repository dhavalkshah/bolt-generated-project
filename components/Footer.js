import React from 'react';

    const Footer = () => {
      return (
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <p>&copy; {new Date().getFullYear()} My Next.js Website</p>
            <a href="#" className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700">Home</a>
            <a href="#" className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700">About</a>
          </div>
        </footer>
      );
    };

    export default Footer;
