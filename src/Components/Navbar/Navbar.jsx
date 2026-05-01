import {Fragment, useContext, useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {MenuIcon, PlusCircleIcon, XIcon} from 'lucide-react';
import {LanguageContext} from '../../context/Language';

const menuItems = [
  {name: 'home', path: '/'},
  {name: 'logs', path: '/logs'},
  {name: 'Emails', path: '/emails'},
];

const Navbar = () => {
  const [active, setActive] = useState ('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false);
  const {language, toggleLanguage} = useContext (LanguageContext);
  const path = useLocation ().pathname.split ('/')[1] || 'home';

  useEffect (
    () => {
      const currentItem = menuItems.find (item => item.path === `/${path}`);
      () => setActive (currentItem ? currentItem.name : 'home');
    },
    [path, setActive]
  );

  return (
    <Fragment>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 overflow-hidden backdrop-blur-xl bg-white/80 border-b border-blue-200/30 shadow-sm-lg">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">

          {/* LOGO */}
          <Link
            to={'/'}
            className="shrink-0 font-extrabold text-lg sm:text-2xl tracking-tight text-gradient font-google-sans-bold hover:opacity-80 transition-opacity"
          >
            ♨️Mail Craft
          </Link>

          {/* DESKTOP MENU */}
          <ol className="hidden md:flex items-center gap-8">
            {menuItems.map (item => (
              <li
                key={item.name}
                onClick={() => setActive (item.name)}
                className="relative group cursor-pointer text-sm font-semibold capitalize transition-colors duration-300"
              >
                <Link
                  to={item.path}
                  className={`${active === item.name ? 'text-blue-600' : 'text-gray-600 group-hover:text-gray-900'} transition-colors`}
                >
                  {item.name}
                </Link>

                {/* underline animation */}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-1 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full
                  transform transition-transform duration-300 origin-left
                  ${active === item.name ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`}
                />
              </li>
            ))}
          </ol>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4 shrink-0">

            {/* LANGUAGE */}
            <select
              className="text-sm bg-white border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-all font-semibold text-gray-700"
              onChange={toggleLanguage}
              value={language}
            >
              <option value="en">🇬🇧 EN</option>
              <option value="jp">🇯🇵 JP</option>
            </select>

            {/* CTA BUTTON */}
            <Link
              to={'/composer'}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white 
              bg-linear-to-r from-blue-600 to-indigo-600 
              hover:from-blue-700 hover:to-indigo-700 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
              aria-label="Compose new message"
            >
              <PlusCircleIcon size={18} />
              <span className="hidden sm:inline">Compose</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU (SLIDE-IN) */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-80 bg-white/95 backdrop-blur-xl shadow-lg-lg z-40 
        transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="navigation"
        aria-label="Mobile menu"
      >
        <div className="flex flex-col pt-24 px-6 gap-6">

          {menuItems.map (item => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => {
                setActive (item.name);
                setIsMobileMenuOpen (false);
              }}
              className={`text-lg font-semibold capitalize transition-colors
                ${active === item.name ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              {item.name}
            </Link>
          ))}

          <div className="h-px bg-gray-200 my-4" />

          <select
            className="text-sm border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-gray-700"
            onChange={toggleLanguage}
            value={language}
          >
            <option value="en">🇬🇧 English</option>
            <option value="jp">🇯🇵 日本語</option>
          </select>

          <Link
            to={'/composer'}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold text-white 
            bg-linear-to-r from-blue-600 to-indigo-600 
            hover:from-blue-700 hover:to-indigo-700
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <PlusCircleIcon size={20} />
            Compose
          </Link>
        </div>
      </div>

      {/* OVERLAY */}
      {isMobileMenuOpen &&
        <div
          onClick={() => setIsMobileMenuOpen (false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity"
        />}
    </Fragment>
  );
};

export default Navbar;
