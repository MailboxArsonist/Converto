import React, { useState } from 'react';
import Navlink from "./NavLink";

const Navbar = () => {

  // Define menu open boolean
  const [open, setOpen] = useState(false);

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
        <button onClick={() => setOpen(!open)} className="flex items-center px-2 py-2 border rounded text-purple-700 border-purple-700 hover:text-purple-900 hover:border-purple-900" type="button">
          {
            open === true ? 
              <svg className="fill-current h-5 w-5" viewBox="0 0 20 20"><path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" /></svg>
            : <svg className="fill-current h-5 w-5" viewBox="0 0 20 20"><path d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314 c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743 s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314 c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z" /></svg>
          }
        </button>
      </div>
      <div className={`w-full flex-grow flex-col lg:flex-row lg:items-center lg:justify-end lg:w-auto ${open === true ? "flex" : "hidden lg:flex"}`}>
        { LinkItems }
      </div>
    </nav>
  );
};
export default Navbar;