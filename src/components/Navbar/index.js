import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavLink, MobileIcon, NavMenu } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

function Navbar({ toggle }) {
  const [scrollNav, setSetScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 20) {
      setSetScrollNav(true);
    } else {
      setSetScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavLink to='/' onClick={toggleHome}>
          <h1 style={{ fontFamily: ' Antic Slab, serif', fontSize: '2.8rem' }}>
            R
          </h1>
        </NavLink>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavLink
            to='home'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
          >
            Home
          </NavLink>
          <NavLink
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
          >
            About
          </NavLink>
          <NavLink
            to='projects'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
          >
            Projects
          </NavLink>
          <NavLink
            to='contact'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            activeClass='active'
          >
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
