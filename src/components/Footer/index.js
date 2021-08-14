import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  FooterContainer,
  FooterContent,
  FooterText,
  SocialMedia,
  SocialMediaIcon,
} from './FooterElements';

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterText>© Rizwan K {new Date().getFullYear()}</FooterText>
          <SocialMedia>
            <a
              href='https://www.linkedin.com/in/rizwan-k-235638218/'
              target='_blank'
              rel='noreferrer'
            >
              <SocialMediaIcon style={{ color: '#0077b5' }}>
                <FaLinkedin />
              </SocialMediaIcon>
            </a>
            <a
              href='https://twitter.com/riz1_k9'
              target='_blank'
              rel='noreferrer'
            >
              <SocialMediaIcon style={{ color: '#1DA1F2' }}>
                <FaTwitter />
              </SocialMediaIcon>
            </a>
            <a
              href='https://www.instagram.com/_riz1._/'
              target='_blank'
              rel='noreferrer'
            >
              <SocialMediaIcon>
                <FaInstagram style={{ color: '#8a3ab9' }} />
              </SocialMediaIcon>
            </a>
          </SocialMedia>
        </FooterContent>
      </FooterContainer>
    </>
  );
}

export default Footer;
