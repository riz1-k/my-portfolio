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
  ButtonText,
  Button,
  BtnIcon,
  Column2,
  Img,
  ImgWrap,
} from './InfoElements';
import { saveAs } from 'file-saver';
import { FaGoogleDrive } from 'react-icons/fa';

function About() {
  const buttonHandler = () => {
    saveAs(
      'https://drive.google.com/file/d/1Uy33EX8iK11xcK0RjOuT9QemA4h-HSaW/view?usp=sharing',
      'example.pdf'
    );
  };

  return (
    <>
      <InfoContainer id='about'>
        <InfoWrapper>
          <InfoRow imgStart='true'>
            <Column1>
              <TextWrapper>
                <Heading>About Me</Heading>
                <Description>
                  I'm a 3rd year BCA student who's passionate about Web
                  designing and development.
                </Description>
                <BtnWrap>
                  <Button onClick={buttonHandler}>
                    <ButtonText>My Resume</ButtonText>
                    <BtnIcon>
                      <FaGoogleDrive />
                    </BtnIcon>
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={
                    require('../images/undraw_personal_info_0okl.svg').default
                  }
                  alt='about'
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default About;
