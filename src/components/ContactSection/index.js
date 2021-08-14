import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Description,
  BtnWrap,
  Button,
  BtnIcon,
  Column2,
  Img,
  ImgWrap,
} from './ContactElements';
import { FaCaretDown } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';

function Contact() {
  return (
    <>
      <InfoContainer id='contact'>
        <InfoWrapper>
          <InfoRow imgStart='false'>
            <Column1>
              <TextWrapper>
                <Heading>Contact Me</Heading>
                <Description>
                  If you’d like to chat about a project or want to hire me.
                </Description>
                <LinkS
                  to='send_email'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                >
                  <BtnWrap>
                    <Button>
                      Send me an Email
                      <BtnIcon>
                        <FaCaretDown />
                      </BtnIcon>
                    </Button>
                  </BtnWrap>
                </LinkS>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={
                    require('../images/undraw_Personal_text_re_vqj3.svg')
                      .default
                  }
                  alt='contact'
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default Contact;
