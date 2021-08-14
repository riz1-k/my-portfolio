import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 80px;
  background-color: #000;
  width: 100%;
`;

export const FooterContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 2000px;
`;
export const FooterText = styled.p`
  color: #fff;
  font-family: 'Baloo Tamma 2', cursive;
  font-size: 1.3rem;
  align-items: center;
`;

export const SocialMedia = styled.div`
  color: #0ea5e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const SocialMediaIcon = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;
