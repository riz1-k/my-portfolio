import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavLink,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

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
          <NavLink to='about' activeStyle>
            About
          </NavLink>
          <NavLink to='services' activeStyle>
            Services
          </NavLink>
          <NavLink to='contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='sign-up' activeStyle>
            Sign Up
          </NavLink>
          <NavBtnLink to='sign-in'>Sign In</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
