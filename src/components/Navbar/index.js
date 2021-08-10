import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavLink, MobileIcon, NavMenu } from './NavbarElements';

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Logo</h1>
        </NavLink>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavLink to='about'>About</NavLink>
          <NavLink to='services'>Services</NavLink>
          <NavLink to='contact-us'>Contact Us</NavLink>
          <NavLink to='sign-up'>Sign Up</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
