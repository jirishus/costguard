import React from 'react';

function Header() {
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
    </ul>
    </nav>
  );
}

export default Header;