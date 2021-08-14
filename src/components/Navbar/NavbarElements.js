import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#0c66ab' : 'transparent')};
  position: fixed;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((60vw - 1000px) / 2); /* make changes 60vw to change */
  z-index: 10;
  width: 100%;
  transition: all 0.1s ease;
  @media screen and (max-width: 980px) {
    height: 60px;
  }
`;

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Sora', sans-serif;
  font-size: 1.4rem;
  &.active {
    border-bottom: 2px solid white;
  }
  &:hover {
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.7rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Sora', sans-serif;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
