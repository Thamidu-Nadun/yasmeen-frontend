import React, {Fragment, useState} from 'react';
import {ButtonMD, ButtonSM} from '../Buttons/Buttons';
import {HamburgerIcon, MenuIcon, PlusCircleIcon} from 'lucide-react';

const menuItems = [
  {name: 'home', path: '/'},
  {name: 'about', path: '/about'},
  {name: 'services', path: '/services'},
];

const Navbar = () => {
  const [active, setActive] = useState ('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false);
  const handleClick = item => {
    setActive (item);
  };
  return (
    <Fragment>
      <nav className="absolute sticky-top w-full h-14 flex items-center justify-between px-6 py-2 bg-gray-50 shadow-md">
        <h1 className="font-bold text-xl">Navbar</h1>
        <ol className="hidden md:flex items-center gap-8 justify-center text-gray-600/80">
          {menuItems.map ((item, idx) => (
            <li
              key={idx}
              className={`cursor-pointer capitalize border-b-2 transition-colors duration-300 ease-in-out
            ${active === item.name ? 'text-blue-500 border-blue-500' : 'border-transparent hover:text-gray-900/80'}`}
              onClick={() => handleClick (item.name)}
            >
              {item.name}
            </li>
          ))}
        </ol>
        <div className="hidden md:flex">
          <ButtonMD name="Compose" Icon={PlusCircleIcon} />
        </div>
        <div className="md:hidden">
          <MenuIcon
            onClick={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
            className="md:hidden cursor-pointer"
            size={24}
          />
        </div>
      </nav>
      {/* Mobile Links */}
      {isMobileMenuOpen &&
        <div className="md:hidden bg-gray-50 shadow-md">
          <ol className="flex flex-col items-center gap-4 p-4">
            {menuItems.map ((item, idx) => (
              <li
                key={idx}
                className={`cursor-pointer capitalize border-b-2 transition-colors duration-300 ease-in-out
            ${active === item.name ? 'text-blue-500 border-blue-500' : 'border-transparent hover:text-gray-900/80'}`}
                onClick={() => {
                  handleClick (item.name);
                  setIsMobileMenuOpen (false);
                }}
              >
                {item.name}
              </li>
            ))}
            <ButtonMD name="Compose" Icon={PlusCircleIcon} className="w-full" />
          </ol>
        </div>}
    </Fragment>
  );
};

export default Navbar;
