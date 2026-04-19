import {Fragment, useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {ButtonMD} from '../Buttons/Buttons';
import {MenuIcon, PlusCircleIcon, XIcon} from 'lucide-react';
import {LanguageContext} from '../../context/Language';

const menuItems = [
  {name: 'home', path: '/'},
  {name: 'composer', path: '/composer'},
  {name: 'logs', path: '/logs'},
];

const Navbar = () => {
  const [active, setActive] = useState ('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false);
  const {language, toggleLanguage} = useContext (LanguageContext);

  return (
    <Fragment>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 overflow-hidden backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-lg">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">

          {/* LOGO */}
          <h1 className="shrink-0 font-extrabold text-lg sm:text-xl tracking-tight bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Mail Craft
          </h1>

          {/* DESKTOP MENU */}
          <ol className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map (item => (
              <li
                key={item.name}
                onClick={() => setActive (item.name)}
                className="relative group cursor-pointer text-sm font-medium capitalize transition-colors duration-300"
              >
                <Link
                  to={item.path}
                  className={`${active === item.name ? 'text-blue-600' : 'text-gray-600 group-hover:text-gray-900'}`}
                >
                  {item.name}
                </Link>

                {/* underline */}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 bg-linear-to-r from-blue-500 to-indigo-500 
                  transform transition-transform duration-300 origin-left
                  ${active === item.name ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`}
                />
              </li>
            ))}
          </ol>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">

            {/* LANGUAGE */}
            <select
              className="text-sm bg-white/70 backdrop-blur border border-gray-200 rounded-lg px-2.5 sm:px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 hover:border-blue-400 transition-all"
              onChange={toggleLanguage}
              value={language}
            >
              <option value="en">EN</option>
              <option value="jp">JP</option>
            </select>

            {/* CTA BUTTON */}
            <Link
              to={'/composer'}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-sm font-medium text-white 
              bg-linear-to-r from-blue-600 to-indigo-500 
              hover:from-blue-700 hover:to-indigo-600 
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
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU (SLIDE-IN) */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-40 
        transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="navigation"
        aria-label="Mobile menu"
      >
        <div className="flex flex-col pt-20 px-4 sm:px-6 gap-6">

          {menuItems.map (item => (
            <button
              key={item.name}
              onClick={() => {
                setActive (item.name);
                setIsMobileMenuOpen (false);
              }}
              className={`text-base sm:text-lg font-medium capitalize cursor-pointer transition-colors text-left
                ${active === item.name ? 'text-blue-600' : 'text-gray-700 hover:text-black'}`}
            >
              {item.name}
            </button>
          ))}

          <div className="h-px bg-gray-200 my-2" />

          <select
            className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            onChange={toggleLanguage}
            value={language}
          >
            <option value="en">EN</option>
            <option value="jp">JP</option>
          </select>

          <Link
            to={'/composer'}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-white 
            bg-linear-to-r from-blue-600 to-indigo-500 
            hover:from-blue-700 hover:to-indigo-600
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <PlusCircleIcon size={18} />
            Compose
          </Link>
        </div>
      </div>

      {/* OVERLAY */}
      {isMobileMenuOpen &&
        <div
          onClick={() => setIsMobileMenuOpen (false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-30"
          aria-hidden="true"
        />}
    </Fragment>
  );
};

export default Navbar;
