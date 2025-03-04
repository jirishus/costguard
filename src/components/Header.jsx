import React from 'react';
import { useState, useEffect } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <nav className="px-14 py-5 bg-blue-500">
    <ul className="flex">
      <li className="mr-6">
        <a className="font-bold
        text-white hover:text-blue-800 cursor-pointer">Features</a>
      </li>
      <li className="mr-6">
        <a className="font-bold
        text-white hover:text-blue-800 cursor-pointer">Pricing</a>
      </li>
      <li className="mr-6">
        <a className="font-bold
        text-white hover:text-blue-800 cursor-pointer">Blog</a>
      </li>
      <li className="mr-6">
        <button onClick={toggleDarkMode} className="
        bg-blue-400 absolute p-3 top-2 right-2 hover:bg-blue-600 text-white rounded">Dark Mode</button>
      </li>
    </ul>
    </nav>
  );
}

export default Header;