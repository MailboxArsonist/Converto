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
    <nav className="flex items-center justify-between flex-wrap bg-white p-8 border-b-2 shadow-xs border-gray-500">
      <div className="flex items-center flex-shrink-0 text-purple-700 mr-6">
        <span className="font-semibold text-xl tracking-tight">Converto</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
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