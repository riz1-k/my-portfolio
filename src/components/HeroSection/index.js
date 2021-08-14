import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtn,
  ArrowDown,
  ButtonContainer,
  Button,
} from './HeroElements';
import { FaCaretDown } from 'react-icons/fa';
function Hero() {
  return (
    <>
      <HeroContainer id='home'>
        <HeroContent>
          <HeroH1>Hi,</HeroH1>
          <HeroH2>I'm Rizwan</HeroH2>
          <HeroP> Web Designer & Developer</HeroP>
          <HeroBtn>
            <ButtonContainer>
              <Button
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
              >
                More about me
                <ArrowDown>
                  <FaCaretDown />
                </ArrowDown>
              </Button>
            </ButtonContainer>
          </HeroBtn>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default Hero;
