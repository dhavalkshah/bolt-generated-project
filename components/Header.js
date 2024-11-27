import React from 'react';

    const Header = () => {
      return (
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Next.js Website</h1>
            <nav className="flex space-x-4">
              <a href="#" className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700">Home</a>
              <a href="#" className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-700">About</a>
            </nav>
          </div>
        </header>
      );
    };

    export default Header;
