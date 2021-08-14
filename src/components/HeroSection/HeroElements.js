import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 962px;
  position: relative;
  z-index: 1;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 80px;
  margin: 0 18rem 10px 0;
  text-align: center;
  font-family: 'Handlee', cursive;

  @media screen and (max-width: 768px) {
    font-size: 80px;
    margin: auto;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    margin: 0;
  }
`;

export const HeroH2 = styled.h2`
  color: #fff;
  font-size: 70px;
  text-align: center;
  font-family: 'Handlee', cursive;
  margin: 0 0 0 10rem;

  @media screen and (max-width: 768px) {
    font-size: 60px;
    margin: auto;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 4rem;
  word-spacing: 3px;
  letter-spacing: 2px;
  color: #fff;
  font-size: 35px;
  text-align: center;
  max-width: 600px;
  font-family: 'Oleo Script', cursive;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtn = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ArrowDown = styled.div`
  margin-top: 0.4rem;
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
`;

export const Button = styled(LinkS)`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  /* box-shadow: 2px 2px #fff; */
  background: #256ce1;
  padding: 15px 30px;
  color: #fff;
  font-size: 1.3rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: 'Baloo Tamma 2', cursive;
  margin-top: 2rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(37, 108, 225);
    color: #fff;
    /* padding-bottom: 1px;
    padding-right: 1px; */
    transform: translateY(4px);
    /* transform: translate3d() */
  }
  &:active {
  }
`;

export const ButtonContainer = styled(LinkS)``;

export const BtnText = styled.p``;
