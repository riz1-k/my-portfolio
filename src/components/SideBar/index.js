import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SignInBtnWrap,
  SignInBtn,
} from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to='about'>
            Home
          </SidebarLink>
          <SidebarLink onClick={toggle} to='services'>
            Services
          </SidebarLink>
          <SidebarLink onClick={toggle} to='contact-us'>
            Contact Us
          </SidebarLink>
          <SidebarLink onClick={toggle} to='sign-up'>
            Sign Up
          </SidebarLink>
          <SignInBtnWrap>
            <SignInBtn onClick={toggle} to='/sign-in'>
              Sign In
            </SignInBtn>
          </SignInBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
