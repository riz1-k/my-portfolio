import React, { useState } from 'react';
import Sidebar from '../SideBar';
import Navbar from '../Navbar';
import Hero from '../HeroSection';
import About from '../AboutSection';
import Services from '../Services';
import Footer from '../Footer';
import Email from '../Email';
import Contact from '../ContactSection';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Email />
      <Footer />
    </>
  );
}

export default Home;
