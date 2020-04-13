import React from 'react';
import Navlink from "./NavLink";

const Navbar = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/color", text: "Colors" },
    { href: "/test", text: "test" },
  ];
  const LinkItems = links.map(link => <Navlink key={link.text} href={link.href} text={link.text} /> );
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-8 shadow border-gray-500">
      <div className="flex items-center flex-shrink-0 text-purple-900 mr-6">
        <img src="./logo.png" alt="logo" className="w-6 mr-3" />
        <span className="font-semibold text-2xl tracking-tight">Converto</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-3 border rounded text-purple-700 border-purple-700 hover:text-purple-900 hover:border-purple-900" type="button">
          <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow flex justify-end">
           { LinkItems }
        </div>
      </div>
    </nav>
  );
};
export default Navbar;