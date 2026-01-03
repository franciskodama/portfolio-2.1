import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
// import '../styles/Navbar.css';
// import '../App.css';
import Logo from '../assets/logo-fkodama.svg';
import Menu from '../assets/images/menu-hamburguer.svg';
import Close from '../assets/images/card-icon-close-white.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClickClose = () => {
    setIsOpen(!isOpen);
    setIsActive(false);
  };

  const hangleClickOpen = () => {
    setIsOpen(!isOpen);
    setIsActive(true);
  };

  const handleClickOnLink = () => {
    setIsActive(false);
    setIsOpen(false);
  };

  useEffect(() => {
    // console.log(isOpen, isActive);
  }, [isActive, isOpen]);

  return (
    <header className='fixed w-full z-[100] bg-dark overflow-visible'>
      <div className='relative flex flex-row justify-between items-center w-[90%] mx-auto'>
        <Link to='hero' spy={true} smooth={true} offset={0} duration={500}>
          <img className='py-[0.8em] w-[120px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.03]' alt='logo fkodama' src={Logo} />
        </Link>

        {/* -------- NAVBAR TOGGLE -------- */}

        <div className='relative flex items-center justify-center bg-third md:hidden'>
          <img
            className='w-10 cursor-pointer'
            style={{
              display: isOpen ? 'none' : 'block',
              backgroundColor: 'var(--dark-color)',
            }}
            onClick={hangleClickOpen}
            src={Menu}
            alt='hamburguer icon menu'
          />
          <img
            className='w-10 cursor-pointer'
            style={{
              display: isOpen ? 'block' : 'none',
            }}
            onClick={handleClickClose}
            src={Close}
            alt='close icon menu'
          />
        </div>

        {/* -------- NAVBAR EXTENDED -------- */}

        <nav
          className='absolute top-[4.2em] right-0 flex flex-col items-start w-3/4 p-[2.5em_2em_1em_3em] bg-third md:w-1/2 md:p-[5em_5em_3em_5em] lg:hidden'
          style={{ display: isActive ? 'flex' : 'none' }}
        >
          {[
            { to: 'reason', label: 'this.portfolio', offset: -50, duration: 2000 },
            { to: 'about', label: 'about.me' },
            { to: 'whyme', label: 'why.me', offset: 100 },
            { to: 'ai', label: 'a.i.', offset: 100 },
            { to: 'projects', label: 'projects' },
            { to: 'api', label: 'api', offset: -150 },
            { to: 'code', label: 'my.code' },
            { to: 'contact', label: 'contact' },
          ].map((item) => (
            <Link
              key={item.to}
              className='relative font-main-thin text-[1.3rem] text-bright cursor-pointer block transition-all duration-300 ease-in-out mb-4 mr-4 hover:translate-y-[-3px] first-letter:hover:text-dark'
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.offset || 0}
              duration={item.duration || 500}
              onClick={handleClickOnLink}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* -------- NAVBAR HORIZONTAL -------- */}

        <nav className='hidden lg:relative lg:top-0 lg:grid lg:grid-cols-[8rem_6.6rem_5.5rem_3.3rem_5.8rem_3.6rem_6rem_4.3rem] lg:items-center lg:justify-end lg:w-[40em] lg:p-0 lg:bg-dark'>
          {[
            { to: 'reason', label: 'this.portfolio', offset: -50, duration: 2000 },
            { to: 'about', label: 'about.me' },
            { to: 'whyme', label: 'why.me', offset: 100 },
            { to: 'ai', label: 'a.i.', offset: 100 },
            { to: 'projects', label: 'projects' },
            { to: 'api', label: 'api', offset: -150 },
            { to: 'code', label: 'my.code' },
            { to: 'contact', label: 'contact' },
          ].map((item) => (
            <Link
              key={item.to}
              className='relative font-main-thin text-[1rem] text-bright cursor-pointer block transition-all duration-300 ease-in-out hover:translate-y-[-3px] first-letter:hover:text-third first-letter:hover:font-main-regular'
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.offset || 0}
              duration={item.duration || 500}
              onClick={handleClickOnLink}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
