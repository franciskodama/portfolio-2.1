'use client';

import React, { useState, useEffect } from 'react';
import { AboutContext } from '../contexts/AboutContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../App.css';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import Palette from '../components/Palette';
import Reason from '../sections/Reason';
import About from '../sections/About';
import WhyMe from '../sections/WhyMe';
import Ai from '../sections/Ai';
import Projects from '../sections/Projects';
import AboveApi from '../sections/AboveApi';
import Api from '../sections/Api';
import CleanCode from '../sections/CleanCode';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const ClientApp = () => {
  const [location, setLocation] = useState({ data: '' });
  const [isActive, setIsActive] = useState({
    first: true,
    second: false,
    third: false,
  });

  // Handle CSS variables on client side
  useEffect(() => {
    const root = document.querySelector(':root');
    if (!root) return;

    if (isActive.first) {
      root.style.setProperty('--dark-color', '#1c1c1c');
      root.style.setProperty('--bright-color', '#ffffff');
      root.style.setProperty('--third-color', '#ed1c24');
    } else if (isActive.second) {
      root.style.setProperty('--dark-color', '#29335C');
      root.style.setProperty('--bright-color', '#669BBC');
      root.style.setProperty('--third-color', '#F3A712');
    } else if (isActive.third) {
      root.style.setProperty('--dark-color', '#757575');
      root.style.setProperty('--bright-color', '#ffffff');
      root.style.setProperty('--third-color', '#03A9F4');
    }
  }, [isActive]);

  const firstColors = () => {
    setIsActive({ first: true, second: false, third: false });
  };

  const secondColors = () => {
    setIsActive({ first: false, second: true, third: false });
  };

  const thirdColors = () => {
    setIsActive({ first: false, second: false, third: true });
  };

  return (
    <div className='App'>
      <ParallaxProvider>
        <Navbar />
        <Hero />
        <Palette
          firstColors={firstColors}
          secondColors={secondColors}
          thirdColors={thirdColors}
          isActive={isActive}
        />
        <Reason />
        <AboutContext.Provider value={{ location, setLocation }}>
          <About />
          <WhyMe />
          <Ai color={isActive} />
          <Projects />
          <AboveApi />
          <Api />
          <CleanCode />
          <Contact />
        </AboutContext.Provider>
        <Footer />
      </ParallaxProvider>
    </div>
  );
};

export default ClientApp;
